"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment, ContactShadows, SpotLight } from "@react-three/drei";
import * as THREE from "three";

function CoffeeCup() {
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.15;
    meshRef.current.position.y = Math.sin(t * 0.4) * 0.05;
  });

  return (
    <group ref={meshRef}>
      {/* Cup Body - High-end Matte Finish */}
      <mesh position={[0, 0.45, 0]} castShadow>
        <cylinderGeometry args={[0.55, 0.4, 0.9, 64]} />
        <meshStandardMaterial 
          color="#050505" 
          roughness={0.4} 
          metalness={0.1} 
          envMapIntensity={0.5}
        />
      </mesh>
      
      {/* Cup Handle - Precision Torus */}
      <mesh position={[0.5, 0.5, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <torusGeometry args={[0.22, 0.045, 32, 64, Math.PI]} />
        <meshStandardMaterial 
          color="#050505" 
          roughness={0.4} 
          metalness={0.1} 
        />
      </mesh>

      {/* Coffee Surface - Deep & Rich */}
      <mesh position={[0, 0.88, 0]}>
        <cylinderGeometry args={[0.5, 0.5, 0.01, 64]} />
        <meshStandardMaterial 
          color="#1a110a" 
          roughness={0.1} 
          metalness={0.05}
          emissive="#1a110a"
          emissiveIntensity={0.1}
        />
      </mesh>

      {/* Saucer - Brushed Aluminum / Platinum */}
      <mesh position={[0, 0.02, 0]} receiveShadow castShadow>
        <cylinderGeometry args={[0.95, 0.75, 0.04, 64]} />
        <meshStandardMaterial 
          color="#E2E2E2" 
          roughness={0.2} 
          metalness={0.9} 
          envMapIntensity={1.5}
        />
      </mesh>
    </group>
  );
}

export function Cup3D() {
  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas shadows gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} fov={35} />
        
        {/* Cinematic Lighting Setup */}
        <Environment preset="studio" />
        <ambientLight intensity={0.2} />
        
        {/* Main Key Light */}
        <SpotLight
          position={[5, 10, 5]}
          angle={0.15}
          penumbra={1}
          intensity={50}
          castShadow
          shadow-mapSize={[1024, 1024]}
        />

        {/* Rim Light */}
        <pointLight position={[-5, 5, -5]} intensity={30} color="#F4F4F0" />
        
        <Float
          speed={2} 
          rotationIntensity={0.3} 
          floatIntensity={0.4}
        >
          <CoffeeCup />
        </Float>

        <ContactShadows 
          position={[0, -0.1, 0]} 
          opacity={0.5} 
          scale={8} 
          blur={2} 
          far={1.5} 
          resolution={512}
        />
      </Canvas>
    </div>
  );
}

