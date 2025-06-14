import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Minecraft-style blocky Avatar Component - Female with Long Hair
function MinecraftAvatar({ position = [0, 0, 0] as [number, number, number], scale = 1, animationType = 'idle' }) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      // Minecraft-style bobbing animation
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.2) * 0.1;
      
      // Block rotation when hovered
      if (hovered) {
        groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 2) * 0.2;
      }
      
      // Head movements - more blocky/robotic
      if (headRef.current) {
        headRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
        headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.15;
      }
      
      // Different animations based on type
      if (animationType === 'wave') {
        groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 3) * 0.2;
      }
    }
  });

  const skinColor = hovered ? "#FDBCB4" : "#F0A898";
  const shirtColor = hovered ? "#FF69B4" : "#FF1493"; // Pink shirt for female
  const pantsColor = hovered ? "#8A2BE2" : "#9370DB"; // Purple pants
  const hairColor = "#8B4513"; // Brown hair

  return (
    <group 
      ref={groupRef} 
      position={position} 
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Head - Perfect cube like Minecraft */}
      <group ref={headRef} position={[0, 1, 0]}>
        {/* Main head block */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <meshLambertMaterial color={skinColor} />
        </mesh>
        
        {/* Long Hair - Multiple layers for feminine long hair */}
        {/* Top layer */}
        <mesh position={[0, 0.3, -0.1]}>
          <boxGeometry args={[0.9, 0.4, 0.7]} />
          <meshLambertMaterial color={hairColor} />
        </mesh>
        
        {/* Side hair layers */}
        <mesh position={[-0.35, 0.2, 0]}>
          <boxGeometry args={[0.3, 0.5, 0.8]} />
          <meshLambertMaterial color={hairColor} />
        </mesh>
        <mesh position={[0.35, 0.2, 0]}>
          <boxGeometry args={[0.3, 0.5, 0.8]} />
          <meshLambertMaterial color={hairColor} />
        </mesh>
        
        {/* Long hair flowing down - left side */}
        <mesh position={[-0.5, -0.2, 0.1]}>
          <boxGeometry args={[0.25, 0.8, 0.3]} />
          <meshLambertMaterial color={hairColor} />
        </mesh>
        <mesh position={[-0.5, -0.8, 0.1]}>
          <boxGeometry args={[0.25, 0.6, 0.3]} />
          <meshLambertMaterial color={hairColor} />
        </mesh>
        
        {/* Long hair flowing down - right side */}
        <mesh position={[0.5, -0.2, 0.1]}>
          <boxGeometry args={[0.25, 0.8, 0.3]} />
          <meshLambertMaterial color={hairColor} />
        </mesh>
        <mesh position={[0.5, -0.8, 0.1]}>
          <boxGeometry args={[0.25, 0.6, 0.3]} />
          <meshLambertMaterial color={hairColor} />
        </mesh>
        
        {/* Back hair layer */}
        <mesh position={[0, 0, -0.5]}>
          <boxGeometry args={[0.7, 0.6, 0.2]} />
          <meshLambertMaterial color={hairColor} />
        </mesh>
        <mesh position={[0, -0.4, -0.5]}>
          <boxGeometry args={[0.6, 0.8, 0.2]} />
          <meshLambertMaterial color={hairColor} />
        </mesh>
        <mesh position={[0, -1, -0.5]}>
          <boxGeometry args={[0.5, 0.6, 0.2]} />
          <meshLambertMaterial color={hairColor} />
        </mesh>
        
        {/* Bangs/Fringe */}
        <mesh position={[0, 0.25, 0.35]}>
          <boxGeometry args={[0.6, 0.15, 0.1]} />
          <meshLambertMaterial color={hairColor} />
        </mesh>
        
        {/* Eyes - larger and more feminine */}
        <mesh position={[-0.15, 0.12, 0.41]}>
          <boxGeometry args={[0.12, 0.12, 0.02]} />
          <meshLambertMaterial color="#000000" />
        </mesh>
        <mesh position={[0.15, 0.12, 0.41]}>
          <boxGeometry args={[0.12, 0.12, 0.02]} />
          <meshLambertMaterial color="#000000" />
        </mesh>
        
        {/* Eye whites - larger */}
        <mesh position={[-0.15, 0.12, 0.4]}>
          <boxGeometry args={[0.14, 0.14, 0.01]} />
          <meshLambertMaterial color="#FFFFFF" />
        </mesh>
        <mesh position={[0.15, 0.12, 0.4]}>
          <boxGeometry args={[0.14, 0.14, 0.01]} />
          <meshLambertMaterial color="#FFFFFF" />
        </mesh>
        
        {/* Eyelashes - small decorative blocks */}
        <mesh position={[-0.15, 0.2, 0.42]}>
          <boxGeometry args={[0.08, 0.04, 0.01]} />
          <meshLambertMaterial color="#000000" />
        </mesh>
        <mesh position={[0.15, 0.2, 0.42]}>
          <boxGeometry args={[0.08, 0.04, 0.01]} />
          <meshLambertMaterial color="#000000" />
        </mesh>
        
        {/* Eyebrows - thinner and more arched */}
        <mesh position={[-0.15, 0.25, 0.41]}>
          <boxGeometry args={[0.12, 0.03, 0.01]} />
          <meshLambertMaterial color={hairColor} />
        </mesh>
        <mesh position={[0.15, 0.25, 0.41]}>
          <boxGeometry args={[0.12, 0.03, 0.01]} />
          <meshLambertMaterial color={hairColor} />
        </mesh>
        
        {/* Nose - smaller and more delicate */}
        <mesh position={[0, 0.05, 0.4]}>
          <boxGeometry args={[0.04, 0.06, 0.04]} />
          <meshLambertMaterial color={skinColor} />
        </mesh>
        
        {/* Lips - pink and more defined */}
        <mesh position={[0, -0.05, 0.41]}>
          <boxGeometry args={[0.12, 0.04, 0.01]} />
          <meshLambertMaterial color="#FF69B4" />
        </mesh>
        
        {/* Blush on cheeks */}
        <mesh position={[-0.25, 0.05, 0.35]}>
          <boxGeometry args={[0.08, 0.06, 0.01]} />
          <meshLambertMaterial color="#FFB6C1" transparent opacity={0.7} />
        </mesh>
        <mesh position={[0.25, 0.05, 0.35]}>
          <boxGeometry args={[0.08, 0.06, 0.01]} />
          <meshLambertMaterial color="#FFB6C1" transparent opacity={0.7} />
        </mesh>
      </group>
      
      {/* Neck */}
      <mesh position={[0, 0.6, 0]}>
        <boxGeometry args={[0.35, 0.15, 0.35]} />
        <meshLambertMaterial color={skinColor} />
      </mesh>
      
      {/* Body - slightly more fitted feminine shape with pink shirt */}
      <mesh position={[0, 0.2, 0]}>
        <boxGeometry args={[0.7, 1.1, 0.35]} />
        <meshLambertMaterial color={shirtColor} />
      </mesh>
      
      {/* Arms - slightly thinner */}
      <mesh position={[-0.55, 0.3, 0]}>
        <boxGeometry args={[0.35, 1.1, 0.35]} />
        <meshLambertMaterial color={shirtColor} />
      </mesh>
      <mesh position={[0.55, 0.3, 0]}>
        <boxGeometry args={[0.35, 1.1, 0.35]} />
        <meshLambertMaterial color={shirtColor} />
      </mesh>
      
      {/* Hands - more delicate */}
      <mesh position={[-0.55, -0.35, 0]}>
        <boxGeometry args={[0.35, 0.35, 0.35]} />
        <meshLambertMaterial color={skinColor} />
      </mesh>
      <mesh position={[0.55, -0.35, 0]}>
        <boxGeometry args={[0.35, 0.35, 0.35]} />
        <meshLambertMaterial color={skinColor} />
      </mesh>
      
      {/* Legs - purple pants */}
      <mesh position={[-0.18, -0.8, 0]}>
        <boxGeometry args={[0.35, 1.2, 0.35]} />
        <meshLambertMaterial color={pantsColor} />
      </mesh>
      <mesh position={[0.18, -0.8, 0]}>
        <boxGeometry args={[0.35, 1.2, 0.35]} />
        <meshLambertMaterial color={pantsColor} />
      </mesh>
      
      {/* Shoes - smaller and more stylish */}
      <mesh position={[-0.18, -1.45, 0.05]}>
        <boxGeometry args={[0.4, 0.25, 0.5]} />
        <meshLambertMaterial color="#8B0000" />
      </mesh>
      <mesh position={[0.18, -1.45, 0.05]}>
        <boxGeometry args={[0.4, 0.25, 0.5]} />
        <meshLambertMaterial color="#8B0000" />
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
        <Canvas camera={{ position: [3, 2, 5], fov: 50 }}>
          {/* Minecraft-style lighting */}
          <ambientLight intensity={0.7} />
          <directionalLight position={[10, 10, 10]} intensity={1} color="#FFFFFF" />
          <directionalLight position={[-10, -10, -10]} intensity={0.3} color="#87CEEB" />
          <MinecraftAvatar scale={scale} animationType={animationType} />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate={animationType === 'idle'}
            autoRotateSpeed={1}
          />
        </Canvas>
      </div>
      
      {message && (
        <motion.div 
          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 dirt-block px-4 py-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <p className="text-xs text-white pixel-text whitespace-nowrap">{message}</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Avatar3D;
