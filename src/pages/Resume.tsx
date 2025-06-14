
import PageTransition from '../components/PageTransition';
import Avatar3D from '../components/Avatar3D';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Resume</h1>
            <p className="text-xl text-gray-300">
              Download my resume or view it online
            </p>
          </motion.div>

          <div className="flex justify-center">
            <Avatar3D 
              size="large" 
              message="Here's my professional journey!"
              animationType="wave"
            />
          </div>

          <motion.div
            className="glass-card p-8 text-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <button className="futuristic-btn text-lg">
              Download Resume
            </button>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resume;
