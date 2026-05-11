import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars, TorusKnot } from '@react-three/drei';

const GlowingPlanet = () => {
  const planetRef = useRef<any>();
  
  useFrame((state) => {
    if (planetRef.current) {
      planetRef.current.rotation.x = state.clock.getElapsedTime() * 0.05;
      planetRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <Sphere ref={planetRef} args={[1, 100, 200]} scale={3}>
      <MeshDistortMaterial
        color="#000000"
        emissive="#3b82f6"
        emissiveIntensity={0.5}
        attach="material"
        distort={0.3}
        speed={1}
        roughness={0.8}
        metalness={0.2}
        wireframe={true}
      />
    </Sphere>
  );
};

const OrbitingGeometries = () => {
  const groupRef = useRef<any>();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <TorusKnot position={[5, 2, -2]} scale={0.5} args={[1, 0.3, 100, 16]}>
        <meshStandardMaterial color="#0A0A0A" emissive="#3b82f6" emissiveIntensity={0.8} wireframe />
      </TorusKnot>
      <TorusKnot position={[-5, -3, -5]} scale={0.8} args={[1, 0.4, 100, 16]}>
        <meshStandardMaterial color="#0A0A0A" emissive="#3b82f6" emissiveIntensity={0.3} wireframe />
      </TorusKnot>
      <Sphere position={[0, 6, -10]} scale={1}>
        <meshStandardMaterial color="#ffffff" wireframe />
      </Sphere>
    </group>
  );
};

export const Scene3D = () => {
  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      
      <GlowingPlanet />
      <OrbitingGeometries />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={1} fade speed={2} />
    </>
  );
};
