
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Simple 3D Avatar Component (cartoon style)
function CartoonAvatar({ position = [0, 0, 0], scale = 1, animationType = 'idle' }) {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      // Floating animation
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
      
      // Rotate slightly when hovered
      if (hovered) {
        groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      }
      
      // Different animations based on type
      if (animationType === 'wave') {
        groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 3) * 0.2;
      }
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={position} 
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Head */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshPhongMaterial color={hovered ? "#00f5ff" : "#8b5cf6"} />
      </mesh>
      
      {/* Eyes */}
      <mesh position={[-0.15, 1.1, 0.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshPhongMaterial color="#ffffff" />
      </mesh>
      <mesh position={[0.15, 1.1, 0.4]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshPhongMaterial color="#ffffff" />
      </mesh>
      
      {/* Pupils */}
      <mesh position={[-0.15, 1.1, 0.45]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshPhongMaterial color="#000000" />
      </mesh>
      <mesh position={[0.15, 1.1, 0.45]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshPhongMaterial color="#000000" />
      </mesh>
      
      {/* Body */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.6, 0.8, 0.3]} />
        <meshPhongMaterial color={hovered ? "#ec4899" : "#10b981"} />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.5, 0.2, 0]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshPhongMaterial color={hovered ? "#ec4899" : "#10b981"} />
      </mesh>
      <mesh position={[0.5, 0.2, 0]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshPhongMaterial color={hovered ? "#ec4899" : "#10b981"} />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.15, -0.5, 0]}>
        <boxGeometry args={[0.2, 0.6, 0.2]} />
        <meshPhongMaterial color="#3b82f6" />
      </mesh>
      <mesh position={[0.15, -0.5, 0]}>
        <boxGeometry args={[0.2, 0.6, 0.2]} />
        <meshPhongMaterial color="#3b82f6" />
      </mesh>
    </group>
  );
}

interface Avatar3DProps {
  className?: string;
  message?: string;
  animationType?: 'idle' | 'wave' | 'point';
  size?: 'small' | 'medium' | 'large';
}

const Avatar3D = ({ className = '', message, animationType = 'idle', size = 'medium' }: Avatar3DProps) => {
  const sizeMap = {
    small: { width: 200, height: 200, scale: 0.7 },
    medium: { width: 300, height: 300, scale: 1 },
    large: { width: 400, height: 400, scale: 1.3 }
  };

  const { width, height, scale } = sizeMap[size];

  return (
    <motion.div 
      className={`relative ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div style={{ width, height }}>
        <Canvas camera={{ position: [2, 2, 5], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00f5ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
          <CartoonAvatar scale={scale} animationType={animationType} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={animationType === 'idle'}
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>
      
      {message && (
        <motion.div 
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 glass-card px-4 py-2 rounded-full neon-glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <p className="text-sm text-neon-cyan font-medium whitespace-nowrap">{message}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Avatar3D;
