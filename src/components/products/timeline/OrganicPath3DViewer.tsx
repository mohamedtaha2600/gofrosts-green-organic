import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import type { Group } from 'three';

interface OrganicPath3DViewerProps {
  className?: string;
  height?: number;
}

/**
 * Renders the actual Blender-exported organic_path.glb as the timeline spine.
 * The GLB contains the wavy vine tube path modeled in Blender.
 */
function OrganicPathModel() {
  const { scene } = useGLTF('/models/organic_path.glb');
  const groupRef = useRef<Group>(null);

  // Very subtle idle sway – just enough to show it's 3D but not distracting
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.04;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Scale and position to fill the canvas nicely */}
      <primitive
        object={scene}
        scale={[1.6, 1.6, 1.6]}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
}

export const OrganicPath3DViewer: React.FC<OrganicPath3DViewerProps> = ({
  className = '',
  height = 900,
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      style={{ height }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55, near: 0.1, far: 200 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
        shadows={false}
      >
        <ambientLight intensity={1.5} color="#ffffff" />
        <directionalLight position={[4, 8, 4]} intensity={2.5} color="#d1fae5" />
        <directionalLight position={[-4, 3, -3]} intensity={1.0} color="#10b981" />
        <pointLight position={[0, 3, 2]} intensity={1.2} color="#059669" />

        <Suspense fallback={null}>
          <OrganicPathModel />
          <Environment preset="forest" />
        </Suspense>
      </Canvas>
    </div>
  );
};
