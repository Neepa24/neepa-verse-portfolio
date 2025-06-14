
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Simple 3D Avatar Component (cartoon style)
function CartoonAvatar({ position = [0, 0, 0] as [number, number, number], scale = 1, animationType = 'idle' }) {
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
      {/* Hair */}
      <mesh position={[0, 1.3, -0.1]}>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshPhongMaterial color={hovered ? "#8b4513" : "#4a2c2a"} />
      </mesh>
      
      {/* Hair bangs */}
      <mesh position={[0, 1.1, 0.4]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshPhongMaterial color={hovered ? "#8b4513" : "#4a2c2a"} />
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshPhongMaterial color={hovered ? "#ffdbcc" : "#fdbcb4"} />
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
      
      {/* Eyelashes */}
      <mesh position={[-0.15, 1.15, 0.46]}>
        <boxGeometry args={[0.02, 0.06, 0.01]} />
        <meshPhongMaterial color="#000000" />
      </mesh>
      <mesh position={[0.15, 1.15, 0.46]}>
        <boxGeometry args={[0.02, 0.06, 0.01]} />
        <meshPhongMaterial color="#000000" />
      </mesh>
      
      {/* Nose */}
      <mesh position={[0, 1.05, 0.42]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshPhongMaterial color={hovered ? "#ffdbcc" : "#fdbcb4"} />
      </mesh>
      
      {/* Lips */}
      <mesh position={[0, 0.95, 0.42]}>
        <sphereGeometry args={[0.06, 16, 8]} />
        <meshPhongMaterial color={hovered ? "#ff69b4" : "#ff1493"} />
      </mesh>
      
      {/* Body (dress-like) */}
      <mesh position={[0, 0.1, 0]}>
        <cylinderGeometry args={[0.45, 0.35, 0.9, 8]} />
        <meshPhongMaterial color={hovered ? "#ff69b4" : "#da70d6"} />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.45, 0.3, 0]}>
        <boxGeometry args={[0.12, 0.5, 0.12]} />
        <meshPhongMaterial color={hovered ? "#ffdbcc" : "#fdbcb4"} />
      </mesh>
      <mesh position={[0.45, 0.3, 0]}>
        <boxGeometry args={[0.12, 0.5, 0.12]} />
        <meshPhongMaterial color={hovered ? "#ffdbcc" : "#fdbcb4"} />
      </mesh>
      
      {/* Hands */}
      <mesh position={[-0.45, 0.05, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshPhongMaterial color={hovered ? "#ffdbcc" : "#fdbcb4"} />
      </mesh>
      <mesh position={[0.45, 0.05, 0]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshPhongMaterial color={hovered ? "#ffdbcc" : "#fdbcb4"} />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.15, -0.5, 0]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshPhongMaterial color={hovered ? "#ffdbcc" : "#fdbcb4"} />
      </mesh>
      <mesh position={[0.15, -0.5, 0]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshPhongMaterial color={hovered ? "#ffdbcc" : "#fdbcb4"} />
      </mesh>
      
      {/* Shoes */}
      <mesh position={[-0.15, -0.85, 0.05]}>
        <boxGeometry args={[0.18, 0.1, 0.25]} />
        <meshPhongMaterial color={hovered ? "#ff1493" : "#c71585"} />
      </mesh>
      <mesh position={[0.15, -0.85, 0.05]}>
        <boxGeometry args={[0.18, 0.1, 0.25]} />
        <meshPhongMaterial color={hovered ? "#ff1493" : "#c71585"} />
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
