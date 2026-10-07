export interface ChromaRemovalOptions {
  keyColor?: [number, number, number]; // [r, g, b]
  tolerance?: number; // 10 to 120 (default 45)
  feather?: number; // 0 to 40 (smooth alpha transition)
  autoDetectCorners?: boolean; // sample corners if keyColor not specified
}

/**
 * Parses hex color "#RRGGBB" to [r, g, b]
 */
export function hexToRgb(hex: string): [number, number, number] {
  const cleanHex = hex.replace('#', '');
  const bigint = parseInt(cleanHex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return [r, g, b];
}

/**
 * Removes solid chroma background from an image file or base64 dataUrl
 * Returns a transparent PNG base64 string
 */
export async function removeChromaBackground(
  imageSource: string | File,
  options: ChromaRemovalOptions = {}
): Promise<string> {
  const {
    tolerance = 45,
    feather = 15,
    autoDetectCorners = false,
  } = options;

  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });

        if (!ctx) {
          reject(new Error('Canvas context not available'));
          return;
        }

        ctx.drawImage(img, 0, 0);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        // Determine key color
        let [kr, kg, kb] = options.keyColor || [0, 68, 255]; // default blue

        if (autoDetectCorners && !options.keyColor) {
          // Average the 4 corner pixels
          const corners = [
            0, // top-left
            (canvas.width - 1) * 4, // top-right
            ((canvas.height - 1) * canvas.width) * 4, // bottom-left
            ((canvas.height - 1) * canvas.width + (canvas.width - 1)) * 4, // bottom-right
          ];
          let rSum = 0;
          let gSum = 0;
          let bSum = 0;
          corners.forEach((idx) => {
            rSum += data[idx];
            gSum += data[idx + 1];
            bSum += data[idx + 2];
          });
          kr = Math.round(rSum / corners.length);
          kg = Math.round(gSum / corners.length);
          kb = Math.round(bSum / corners.length);
        }

        const tolSq = tolerance * tolerance;
        const featherTolSq = (tolerance + feather) * (tolerance + feather);

        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          // Euclidean color distance in RGB space
          const dr = r - kr;
          const dg = g - kg;
          const db = b - kb;
          const distSq = dr * dr + dg * dg + db * db;

          if (distSq <= tolSq) {
            // Completely transparent
            data[i + 3] = 0;
          } else if (distSq < featherTolSq && feather > 0) {
            // Smooth alpha falloff edge
            const dist = Math.sqrt(distSq);
            const factor = (dist - tolerance) / feather;
            data[i + 3] = Math.round(Math.min(255, Math.max(0, 255 * factor)));
          }
        }

        ctx.putImageData(imageData, 0, 0);
        resolve(canvas.toDataURL('image/png'));
      } catch (err) {
        reject(err);
      }
    };

    img.onerror = (e) => reject(new Error('Failed to load image for chroma removal'));

    if (typeof imageSource === 'string') {
      img.src = imageSource;
    } else {
      const reader = new FileReader();
      reader.onload = (ev) => {
        img.src = ev.target?.result as string;
      };
      reader.onerror = (e) => reject(e);
      reader.readAsDataURL(imageSource);
    }
  });
}
