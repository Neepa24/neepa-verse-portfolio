
import { motion } from 'framer-motion';

interface ColorPickerProps {
  onColorChange: (color: string) => void;
  currentColor: string;
}

const ColorPicker = ({ onColorChange, currentColor }: ColorPickerProps) => {
  const colors = [
    { name: 'Sky Blue', value: 'bg-minecraft-sky', cssValue: 'linear-gradient(to bottom, #87CEEB 0%, #4682B4 50%, #191970 100%)' },
    { name: 'Cyan Bright', value: 'bg-palette-cyan-bright', cssValue: '#00CED1' },
    { name: 'Cyan Green', value: 'bg-palette-cyan-green', cssValue: '#00BFA5' },
    { name: 'Yellow Bright', value: 'bg-palette-yellow-bright', cssValue: '#FFD700' },
    { name: 'Gray Dark', value: 'bg-palette-gray-dark', cssValue: '#4A4A4A' },
    { name: 'Gray Medium', value: 'bg-palette-gray-medium', cssValue: '#6B6B6B' },
    { name: 'Gray Light', value: 'bg-palette-gray-light', cssValue: '#8A8A8A' },
    { name: 'Gray Lighter', value: 'bg-palette-gray-lighter', cssValue: '#A8A8A8' },
    { name: 'Gray Lightest', value: 'bg-palette-gray-lightest', cssValue: '#C6C6C6' },
  ];

  return (
    <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        className="flex flex-wrap justify-center gap-2 p-3 glass-card rounded-lg max-w-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {colors.map((color, index) => (
          <motion.button
            key={color.name}
            className={`w-12 h-12 rounded border-2 transition-all duration-300 ${color.value} ${
              currentColor === color.value ? 'border-white scale-110' : 'border-gray-400 hover:border-white hover:scale-105'
            }`}
            onClick={() => onColorChange(color.value)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            title={color.name}
            style={{ 
              background: color.name === 'Sky Blue' ? color.cssValue : color.cssValue 
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default ColorPicker;
