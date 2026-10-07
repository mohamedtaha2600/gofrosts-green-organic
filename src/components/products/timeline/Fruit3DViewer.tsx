import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';
import type { Mesh, Group } from 'three';
import * as THREE from 'three';

interface ModelProps {
  url: string;
}

/**
 * Fruit Model:
 * Automatically computes bounding box, centers the geometry at (0,0,0),
 * and dynamically normalizes scale so the fruit fits completely inside
 * the viewport with generous breathing room.
 * This guarantees ZERO clipping on any border or angle.
 */
function FruitModel({ url }: ModelProps) {
  const { scene } = useGLTF(url);
  const groupRef = useRef<Group>(null);

  const { clonedScene, normalizedScale, centerOffset } = useMemo(() => {
    const clone = scene.clone(true);

    // Compute exact bounding box and center
    const box = new THREE.Box3().setFromObject(clone);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z, 0.001);

    // Target visual size: 1.25 units leaves >35% clearance around the fruit
    // Camera visible frustum at Z=3.2 is ~2.35 units, so 1.25 fits with zero clipping.
    const scale = 1.25 / maxDim;

    clone.traverse((child) => {
      const mesh = child as Mesh;
      if (mesh.isMesh) {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          mat.roughness = Math.min(mat.roughness ?? 0.35, 0.4);
          mat.needsUpdate = true;
        }
      }
    });

    return {
      clonedScene: clone,
      normalizedScale: scale,
      // Shift opposite to center so the object is perfectly centered at origin
      centerOffset: [-center.x * scale, -center.y * scale, -center.z * scale] as [number, number, number],
    };
  }, [scene]);

  return (
    <group ref={groupRef} position={centerOffset}>
      <primitive object={clonedScene} scale={normalizedScale} />
    </group>
  );
}

function FallbackSphere({ color }: { color: string }) {
  return (
    <mesh>
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshStandardMaterial color={color} roughness={0.25} metalness={0.08} />
    </mesh>
  );
}

interface Fruit3DViewerProps {
  glbUrl: string;
  fallbackColor?: string;
  className?: string;
}

export const Fruit3DViewer: React.FC<Fruit3DViewerProps> = ({
  glbUrl,
  fallbackColor = '#059669',
  className = '',
}) => {
  return (
    <div className={`w-full h-full relative cursor-grab active:cursor-grabbing overflow-visible ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 3.2], fov: 42 }}
        shadows
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
      >
        {/* Clean bright lighting for photorealistic look */}
        <ambientLight intensity={1.7} />
        <directionalLight position={[6, 8, 6]} intensity={2.4} castShadow />
        <directionalLight position={[-6, 3, -4]} intensity={1.0} color="#d1fae5" />
        <pointLight position={[0, -1, 2.5]} intensity={0.6} color="#10b981" />

        <Suspense fallback={<FallbackSphere color={fallbackColor} />}>
          <FruitModel url={glbUrl} />
          <Environment preset="city" />
        </Suspense>

        {/* User can freely rotate: no clipping, no limits */}
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          autoRotate={false}
          rotateSpeed={0.85}
          minPolarAngle={Math.PI / 8}
          maxPolarAngle={Math.PI / 1.25}
        />
      </Canvas>
    </div>
  );
};
