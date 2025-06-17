
import { useBackground } from '../contexts/BackgroundContext';
import { ReactNode } from 'react';

interface BackgroundWrapperProps {
  children: ReactNode;
  className?: string;
}

const BackgroundWrapper = ({ children, className = '' }: BackgroundWrapperProps) => {
  const { backgroundColor } = useBackground();
  
  const getBackgroundStyle = (bgClass: string) => {
    switch (bgClass) {
      case 'bg-minecraft-sky':
        return {
          background: 'linear-gradient(to bottom, #87CEEB 0%, #4682B4 50%, #191970 100%)'
        };
      case 'bg-palette-cyan-bright':
        return { backgroundColor: '#00CED1' };
      case 'bg-palette-cyan-green':
        return { backgroundColor: '#00BFA5' };
      case 'bg-palette-yellow-bright':
        return { backgroundColor: '#FFD700' };
      case 'bg-palette-gray-dark':
        return { backgroundColor: '#4A4A4A' };
      case 'bg-palette-gray-medium':
        return { backgroundColor: '#6B6B6B' };
      case 'bg-palette-gray-light':
        return { backgroundColor: '#8A8A8A' };
      case 'bg-palette-gray-lighter':
        return { backgroundColor: '#A8A8A8' };
      case 'bg-palette-gray-lightest':
        return { backgroundColor: '#C6C6C6' };
      default:
        return {
          background: 'linear-gradient(to bottom, #87CEEB 0%, #4682B4 50%, #191970 100%)'
        };
    }
  };

  return (
    <div 
      className={`min-h-screen transition-all duration-500 ${className}`}
      style={getBackgroundStyle(backgroundColor)}
    >
      {children}
    </div>
  );
};

export default BackgroundWrapper;
