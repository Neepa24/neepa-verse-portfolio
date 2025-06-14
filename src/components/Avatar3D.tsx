
import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// More human-like 3D Avatar Component
function HumanAvatar({ position = [0, 0, 0] as [number, number, number], scale = 1, animationType = 'idle' }) {
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating animation
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.08;
      
      // Subtle rotation when hovered
      if (hovered) {
        groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.1;
      }
      
      // Head movements for more lifelike appearance
      if (headRef.current) {
        headRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 1.2) * 0.05;
        headRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.08;
      }
      
      // Different animations based on type
      if (animationType === 'wave') {
        groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.15;
      }
    }
  });

  const skinColor = hovered ? "#ffdbcc" : "#fdbcb4";
  const hairColor = hovered ? "#2a1810" : "#1a0f08";

  return (
    <group 
      ref={groupRef} 
      position={position} 
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Head group for separate animation */}
      <group ref={headRef} position={[0, 1, 0]}>
        {/* Main hair volume - more realistic shape */}
        <mesh position={[0, 0.25, -0.15]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshPhongMaterial color={hairColor} />
        </mesh>
        
        {/* Hair sides and layers */}
        <mesh position={[-0.35, 0.1, 0]}>
          <sphereGeometry args={[0.25, 24, 24]} />
          <meshPhongMaterial color={hairColor} />
        </mesh>
        <mesh position={[0.35, 0.1, 0]}>
          <sphereGeometry args={[0.25, 24, 24]} />
          <meshPhongMaterial color={hairColor} />
        </mesh>
        
        {/* Hair bangs - more natural */}
        <mesh position={[0, 0.15, 0.25]}>
          <sphereGeometry args={[0.28, 24, 16]} />
          <meshPhongMaterial color={hairColor} />
        </mesh>
        
        {/* Head - more proportional */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.32, 32, 32]} />
          <meshPhongMaterial color={skinColor} />
        </mesh>
        
        {/* Eyes - more realistic */}
        <mesh position={[-0.12, 0.08, 0.28]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshPhongMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0.12, 0.08, 0.28]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshPhongMaterial color="#ffffff" />
        </mesh>
        
        {/* Pupils */}
        <mesh position={[-0.12, 0.08, 0.32]}>
          <sphereGeometry args={[0.025, 12, 12]} />
          <meshPhongMaterial color="#2c5530" />
        </mesh>
        <mesh position={[0.12, 0.08, 0.32]}>
          <sphereGeometry args={[0.025, 12, 12]} />
          <meshPhongMaterial color="#2c5530" />
        </mesh>
        
        {/* Iris reflection */}
        <mesh position={[-0.11, 0.09, 0.33]}>
          <sphereGeometry args={[0.008, 8, 8]} />
          <meshPhongMaterial color="#ffffff" />
        </mesh>
        <mesh position={[0.13, 0.09, 0.33]}>
          <sphereGeometry args={[0.008, 8, 8]} />
          <meshPhongMaterial color="#ffffff" />
        </mesh>
        
        {/* Eyebrows - more defined */}
        <mesh position={[-0.12, 0.16, 0.29]}>
          <boxGeometry args={[0.08, 0.015, 0.01]} />
          <meshPhongMaterial color={hairColor} />
        </mesh>
        <mesh position={[0.12, 0.16, 0.29]}>
          <boxGeometry args={[0.08, 0.015, 0.01]} />
          <meshPhongMaterial color={hairColor} />
        </mesh>
        
        {/* Eyelashes */}
        <mesh position={[-0.12, 0.12, 0.31]}>
          <boxGeometry args={[0.06, 0.008, 0.005]} />
          <meshPhongMaterial color="#000000" />
        </mesh>
        <mesh position={[0.12, 0.12, 0.31]}>
          <boxGeometry args={[0.06, 0.008, 0.005]} />
          <meshPhongMaterial color="#000000" />
        </mesh>
        
        {/* Glasses frame - more realistic */}
        <mesh position={[0, 0.08, 0.3]}>
          <torusGeometry args={[0.18, 0.015, 8, 32]} />
          <meshPhongMaterial color="#8B4513" />
        </mesh>
        
        {/* Left lens */}
        <mesh position={[-0.12, 0.08, 0.31]}>
          <ringGeometry args={[0.05, 0.08, 16]} />
          <meshPhongMaterial color="#8B4513" />
        </mesh>
        <mesh position={[-0.12, 0.08, 0.315]}>
          <circleGeometry args={[0.075, 16]} />
          <meshPhongMaterial color="#e6f3ff" transparent opacity={0.2} />
        </mesh>
        
        {/* Right lens */}
        <mesh position={[0.12, 0.08, 0.31]}>
          <ringGeometry args={[0.05, 0.08, 16]} />
          <meshPhongMaterial color="#8B4513" />
        </mesh>
        <mesh position={[0.12, 0.08, 0.315]}>
          <circleGeometry args={[0.075, 16]} />
          <meshPhongMaterial color="#e6f3ff" transparent opacity={0.2} />
        </mesh>
        
        {/* Nose - more defined */}
        <mesh position={[0, 0.02, 0.3]}>
          <coneGeometry args={[0.015, 0.04, 8]} />
          <meshPhongMaterial color={skinColor} />
        </mesh>
        
        {/* Nostrils */}
        <mesh position={[-0.008, 0.01, 0.31]}>
          <sphereGeometry args={[0.003, 8, 8]} />
          <meshPhongMaterial color="#d4988a" />
        </mesh>
        <mesh position={[0.008, 0.01, 0.31]}>
          <sphereGeometry args={[0.003, 8, 8]} />
          <meshPhongMaterial color="#d4988a" />
        </mesh>
        
        {/* Mouth - more realistic */}
        <mesh position={[0, -0.08, 0.29]}>
          <sphereGeometry args={[0.025, 16, 8]} />
          <meshPhongMaterial color="#ff6b7a" />
        </mesh>
        
        {/* Smile line */}
        <mesh position={[0, -0.08, 0.295]}>
          <boxGeometry args={[0.04, 0.002, 0.001]} />
          <meshPhongMaterial color="#e85a6b" />
        </mesh>
        
        {/* Cheeks - subtle blush */}
        <mesh position={[-0.18, 0.02, 0.25]}>
          <sphereGeometry args={[0.03, 12, 12]} />
          <meshPhongMaterial color="#ffb3ba" transparent opacity={0.4} />
        </mesh>
        <mesh position={[0.18, 0.02, 0.25]}>
          <sphereGeometry args={[0.03, 12, 12]} />
          <meshPhongMaterial color="#ffb3ba" transparent opacity={0.4} />
        </mesh>
        
        {/* Ears */}
        <mesh position={[-0.28, 0.05, 0.1]}>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshPhongMaterial color={skinColor} />
        </mesh>
        <mesh position={[0.28, 0.05, 0.1]}>
          <sphereGeometry args={[0.04, 12, 12]} />
          <meshPhongMaterial color={skinColor} />
        </mesh>
      </group>
      
      {/* Neck */}
      <mesh position={[0, 0.65, 0]}>
        <cylinderGeometry args={[0.08, 0.1, 0.15, 16]} />
        <meshPhongMaterial color={skinColor} />
      </mesh>
      
      {/* Green top - more fitted */}
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[0.4, 0.5, 0.2]} />
        <meshPhongMaterial color={hovered ? "#7cb342" : "#689f38"} />
      </mesh>
      
      {/* Arms - more proportional */}
      <mesh position={[-0.3, 0.4, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.4, 12]} />
        <meshPhongMaterial color={skinColor} />
      </mesh>
      <mesh position={[0.3, 0.4, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.4, 12]} />
        <meshPhongMaterial color={skinColor} />
      </mesh>
      
      {/* Hands */}
      <mesh position={[-0.3, 0.18, 0]}>
        <sphereGeometry args={[0.055, 12, 12]} />
        <meshPhongMaterial color={skinColor} />
      </mesh>
      <mesh position={[0.3, 0.18, 0]}>
        <sphereGeometry args={[0.055, 12, 12]} />
        <meshPhongMaterial color={skinColor} />
      </mesh>
      
      {/* Blue jeans - more realistic */}
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[0.38, 0.6, 0.22]} />
        <meshPhongMaterial color={hovered ? "#5c9bd5" : "#4a90c2"} />
      </mesh>
      
      {/* Belt */}
      <mesh position={[0, 0.15, 0]}>
        <boxGeometry args={[0.4, 0.03, 0.23]} />
        <meshPhongMaterial color="#8B4513" />
      </mesh>
      
      {/* Legs */}
      <mesh position={[-0.1, -0.55, 0]}>
        <cylinderGeometry args={[0.08, 0.09, 0.5, 12]} />
        <meshPhongMaterial color={hovered ? "#5c9bd5" : "#4a90c2"} />
      </mesh>
      <mesh position={[0.1, -0.55, 0]}>
        <cylinderGeometry args={[0.08, 0.09, 0.5, 12]} />
        <meshPhongMaterial color={hovered ? "#5c9bd5" : "#4a90c2"} />
      </mesh>
      
      {/* White sneakers - more detailed */}
      <mesh position={[-0.1, -0.85, 0.06]}>
        <boxGeometry args={[0.14, 0.08, 0.24]} />
        <meshPhongMaterial color={hovered ? "#f5f5f5" : "#ffffff"} />
      </mesh>
      <mesh position={[0.1, -0.85, 0.06]}>
        <boxGeometry args={[0.14, 0.08, 0.24]} />
        <meshPhongMaterial color={hovered ? "#f5f5f5" : "#ffffff"} />
      </mesh>
      
      {/* Sneaker soles */}
      <mesh position={[-0.1, -0.9, 0.06]}>
        <boxGeometry args={[0.16, 0.03, 0.26]} />
        <meshPhongMaterial color="#333333" />
      </mesh>
      <mesh position={[0.1, -0.9, 0.06]}>
        <boxGeometry args={[0.16, 0.03, 0.26]} />
        <meshPhongMaterial color="#333333" />
      </mesh>
      
      {/* Sneaker accents */}
      <mesh position={[-0.1, -0.82, 0.13]}>
        <boxGeometry args={[0.12, 0.015, 0.12]} />
        <meshPhongMaterial color={hovered ? "#ff8c00" : "#ffa500"} />
      </mesh>
      <mesh position={[0.1, -0.82, 0.13]}>
        <boxGeometry args={[0.12, 0.015, 0.12]} />
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
          <pointLight position={[5, 0, 5]} intensity={0.3} color="#ffffff" />
          <HumanAvatar scale={scale} animationType={animationType} />
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
