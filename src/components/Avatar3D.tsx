
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
      {/* Long black hair - main volume */}
      <mesh position={[0, 1.2, -0.2]}>
        <sphereGeometry args={[0.65, 32, 32]} />
        <meshPhongMaterial color={hovered ? "#2a2a2a" : "#1a1a1a"} />
      </mesh>
      
      {/* Hair side strands */}
      <mesh position={[-0.4, 1.0, 0.1]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshPhongMaterial color={hovered ? "#2a2a2a" : "#1a1a1a"} />
      </mesh>
      <mesh position={[0.4, 1.0, 0.1]}>
        <sphereGeometry args={[0.3, 16, 16]} />
        <meshPhongMaterial color={hovered ? "#2a2a2a" : "#1a1a1a"} />
      </mesh>
      
      {/* Hair bangs */}
      <mesh position={[0, 1.1, 0.35]}>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshPhongMaterial color={hovered ? "#2a2a2a" : "#1a1a1a"} />
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshPhongMaterial color={hovered ? "#ffdbcc" : "#fdbcb4"} />
      </mesh>
      
      {/* Glasses frame */}
      <mesh position={[0, 1.05, 0.35]}>
        <torusGeometry args={[0.12, 0.02, 8, 16]} />
        <meshPhongMaterial color="#8B4513" />
      </mesh>
      <mesh position={[-0.2, 1.05, 0.35]}>
        <torusGeometry args={[0.08, 0.015, 8, 16]} />
        <meshPhongMaterial color="#8B4513" />
      </mesh>
      <mesh position={[0.2, 1.05, 0.35]}>
        <torusGeometry args={[0.08, 0.015, 8, 16]} />
        <meshPhongMaterial color="#8B4513" />
      </mesh>
      
      {/* Glasses lenses */}
      <mesh position={[-0.2, 1.05, 0.37]}>
        <circleGeometry args={[0.07, 16]} />
        <meshPhongMaterial color="#e6f3ff" transparent opacity={0.3} />
      </mesh>
      <mesh position={[0.2, 1.05, 0.37]}>
        <circleGeometry args={[0.07, 16]} />
        <meshPhongMaterial color="#e6f3ff" transparent opacity={0.3} />
      </mesh>
      
      {/* Eyes behind glasses */}
      <mesh position={[-0.2, 1.05, 0.35]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshPhongMaterial color="#000000" />
      </mesh>
      <mesh position={[0.2, 1.05, 0.35]}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshPhongMaterial color="#000000" />
      </mesh>
      
      {/* Eyebrows */}
      <mesh position={[-0.2, 1.15, 0.38]}>
        <boxGeometry args={[0.08, 0.02, 0.01]} />
        <meshPhongMaterial color="#1a1a1a" />
      </mesh>
      <mesh position={[0.2, 1.15, 0.38]}>
        <boxGeometry args={[0.08, 0.02, 0.01]} />
        <meshPhongMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Nose */}
      <mesh position={[0, 1.0, 0.38]}>
        <sphereGeometry args={[0.02, 8, 8]} />
        <meshPhongMaterial color={hovered ? "#ffdbcc" : "#fdbcb4"} />
      </mesh>
      
      {/* Lips */}
      <mesh position={[0, 0.92, 0.38]}>
        <sphereGeometry args={[0.04, 16, 8]} />
        <meshPhongMaterial color={hovered ? "#ff8a95" : "#ff6b7a"} />
      </mesh>
      
      {/* Green top */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.5, 0.6, 0.25]} />
        <meshPhongMaterial color={hovered ? "#7cb342" : "#689f38"} />
      </mesh>
      
      {/* Arms */}
      <mesh position={[-0.35, 0.3, 0]}>
        <boxGeometry args={[0.1, 0.5, 0.1]} />
        <meshPhongMaterial color={hovered ? "#ffdbcc" : "#fdbcb4"} />
      </mesh>
      <mesh position={[0.35, 0.3, 0]}>
        <boxGeometry args={[0.1, 0.5, 0.1]} />
        <meshPhongMaterial color={hovered ? "#ffdbcc" : "#fdbcb4"} />
      </mesh>
      
      {/* Hands */}
      <mesh position={[-0.35, 0.05, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshPhongMaterial color={hovered ? "#ffdbcc" : "#fdbcb4"} />
      </mesh>
      <mesh position={[0.35, 0.05, 0]}>
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshPhongMaterial color={hovered ? "#ffdbcc" : "#fdbcb4"} />
      </mesh>
      
      {/* Blue jeans */}
      <mesh position={[0, -0.3, 0]}>
        <boxGeometry args={[0.45, 0.8, 0.25]} />
        <meshPhongMaterial color={hovered ? "#5c9bd5" : "#4a90c2"} />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.12, -0.8, 0]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshPhongMaterial color={hovered ? "#5c9bd5" : "#4a90c2"} />
      </mesh>
      <mesh position={[0.12, -0.8, 0]}>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshPhongMaterial color={hovered ? "#5c9bd5" : "#4a90c2"} />
      </mesh>
      
      {/* White sneakers */}
      <mesh position={[-0.12, -1.15, 0.08]}>
        <boxGeometry args={[0.18, 0.12, 0.28]} />
        <meshPhongMaterial color={hovered ? "#f5f5f5" : "#ffffff"} />
      </mesh>
      <mesh position={[0.12, -1.15, 0.08]}>
        <boxGeometry args={[0.18, 0.12, 0.28]} />
        <meshPhongMaterial color={hovered ? "#f5f5f5" : "#ffffff"} />
      </mesh>
      
      {/* Sneaker accents */}
      <mesh position={[-0.12, -1.1, 0.15]}>
        <boxGeometry args={[0.16, 0.02, 0.15]} />
        <meshPhongMaterial color={hovered ? "#ff8c00" : "#ffa500"} />
      </mesh>
      <mesh position={[0.12, -1.1, 0.15]}>
        <boxGeometry args={[0.16, 0.02, 0.15]} />
        <meshPhongMaterial color={hovered ? "#ff8c00" : "#ffa500"} />
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
