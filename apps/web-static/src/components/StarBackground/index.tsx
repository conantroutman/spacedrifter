import React, { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  MathUtils,
  Group,
  SphereGeometry,
  MeshBasicMaterial,
  Color,
  BufferGeometry,
  Float32BufferAttribute,
  PointsMaterial,
  Points,
} from 'three';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { Stars } from '@react-three/drei';
import { LogoThree } from 'components/LogoThree';

const MovingStars = () => {
  const stars = useRef<any>();

  useFrame(() => {
    if (!stars.current) return;
    stars.current.rotation.y += 0.00075;
    stars.current.rotation.x -= 0.00075;
    console.log(stars.current.rotation);
  });

  return <Stars ref={stars} factor={3} fade speed={0.1} />;
};

export const StarBackground = () => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 15] }}>
        <EffectComposer>
          <Bloom intensity={1} luminanceThreshold={0} />
        </EffectComposer>
        <LogoThree rotation={[90, 0, 0]} scale={[2, 2, 2]} />
        <MovingStars />
        <ambientLight intensity={0.5} />
        <spotLight intensity={0.6} position={[30, 30, 50]} angle={0.2} penumbra={1} castShadow />
      </Canvas>
    </div>
  );
};
