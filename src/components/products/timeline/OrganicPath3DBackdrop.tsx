import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import type { Group } from 'three';
import * as THREE from 'three';

interface OrganicPathModelProps {
  totalStations: number;
}

/**
 * Renders the Blender organic_path.glb.
 * Note on coordinates:
 * In Blender, the curve extends along -Y from Y=6 down to Y=-62 (length ~68).
 * GLTF exporter maps Blender -Y to +Z.
 * In Three.js, rotating by [+Math.PI/2, 0, 0] maps GLTF +Z to Three.js -Y,
 * so the path flows down vertically from top (+6) to bottom (-62).
 * Centering offset: +28 in Y puts the center at Y=0.
 */
function OrganicPathModel({ totalStations }: OrganicPathModelProps) {
  const { scene } = useGLTF('/models/organic_path.glb');
  const groupRef = useRef<Group>(null);

  const clonedScene = React.useMemo(() => scene.clone(true), [scene]);

  React.useEffect(() => {
    clonedScene.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (mesh.isMesh && mesh.material) {
        const mat = new THREE.MeshStandardMaterial({
          color: new THREE.Color('#15803d'), // Vibrant rich organic emerald green
          roughness: 0.32,
          metalness: 0.2,
          emissive: new THREE.Color('#064e3b'),
          emissiveIntensity: 0.25,
        });
        mesh.material = mat;
      }
    });
  }, [clonedScene]);

  // Gentle subtle sway
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, 28, 0]}>
      {/* 
        Rotate +90 deg on X so the Blender curve aligns vertically down the screen.
        Scale down in X/Z to make the vine slender, not overwhelming.
      */}
      <primitive
        object={clonedScene}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.7, 0.7, 1.0]}
      />
    </group>
  );
}

interface OrganicPath3DBackdropProps {
  totalStations: number;
  height: number;
  className?: string;
}

/**
 * 3D Organic Vine Spine rendered via Orthographic camera.
 * Spans the entire height of the timeline seamlessly without perspective distortion,
 * creating an elegant, slender, winding 3D green vine between stations.
 */
export const OrganicPath3DBackdrop: React.FC<OrganicPath3DBackdropProps> = ({
  totalStations,
  height,
  className = '',
}) => {
  // Orthographic zoom: maps 68 Three.js units across the entire containerHeight
  const zoom = Math.max(15, (height || 2400) / 72);

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      style={{ width: '100%', height }}
    >
      <Canvas
        orthographic
        camera={{
          position: [0, 0, 40],
          zoom,
          near: 0.1,
          far: 200,
        }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
        shadows={false}
        frameloop="always"
      >
        <ambientLight intensity={1.8} color="#ffffff" />
        <directionalLight position={[10, 20, 25]} intensity={2.8} color="#d1fae5" />
        <directionalLight position={[-10, -10, 15]} intensity={1.5} color="#34d399" />
        <pointLight position={[0, 0, 15]} intensity={1.2} color="#10b981" />

        <Suspense fallback={null}>
          <OrganicPathModel totalStations={totalStations} />
          <Environment preset="forest" />
        </Suspense>
      </Canvas>
    </div>
  );
};
