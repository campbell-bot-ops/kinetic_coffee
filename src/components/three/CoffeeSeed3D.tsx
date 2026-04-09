"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

function CoffeeSeed({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const meshRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    const scroll = scrollProgress?.get() || 0;
    
    // Smooth rotation based on time + scroll
    meshRef.current.rotation.y = t * 0.2 + scroll * 10;
    meshRef.current.rotation.z = Math.sin(t * 0.5) * 0.1 + scroll * 2;
    
    // Scale up as we move away from the top, then scale down
    const s = 1 + Math.sin(scroll * Math.PI) * 0.5;
    meshRef.current.scale.set(s, s, s);
    
    // Position shifting
    meshRef.current.position.y = Math.sin(t * 0.8) * 0.1 - scroll * 5;
  });

  return (
    <group ref={meshRef}>
      {/* Main Seed Body - Half 1 */}
      <mesh position={[0, 0, 0]} castShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          color="#2d1b0d" 
          roughness={0.3} 
          metalness={0.1}
          flatShading={false}
        />
      </mesh>
      
      {/* The Central Crease - Procedural look */}
      <mesh scale={[1.05, 1.05, 0.1]} position={[0, 0, 0]}>
        <torusGeometry args={[0.95, 0.05, 16, 100]} />
        <meshStandardMaterial color="#1a110a" roughness={0.1} />
      </mesh>

      {/* Subtle core glow */}
      <mesh scale={[0.8, 0.8, 0.8]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial 
          color="#3d2b1d" 
          emissive="#2d1b0d" 
          emissiveIntensity={0.2} 
          transparent 
          opacity={0.5} 
        />
      </mesh>
    </group>
  );
}

export function CoffeeSeed3D({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <CoffeeSeed scrollProgress={scrollProgress} />
    </Float>
  );
}

