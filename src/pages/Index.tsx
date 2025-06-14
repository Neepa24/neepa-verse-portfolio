
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Avatar3D from '../components/Avatar3D';
import PageTransition from '../components/PageTransition';
import { ArrowDown } from 'lucide-react';

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Hero Section */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Text Content */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Hi, I'm{' '}
                <span className="gradient-text">Neepa</span>
              </motion.h1>
              
              <motion.div
                className="text-2xl md:text-3xl text-gray-300 mb-8 h-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="typing-animation">
                  Frontend Developer, UI Enthusiast, Tech Explorer
                </div>
              </motion.div>
              
              <motion.p
                className="text-lg text-gray-400 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                I create beautiful, interactive web experiences that combine cutting-edge technology 
                with intuitive design. Let's build something amazing together.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Link to="/projects" className="futuristic-btn text-lg">
                  View My Work
                </Link>
                <Link to="/contact" className="futuristic-btn text-lg">
                  Get In Touch
                </Link>
              </motion.div>
            </motion.div>

            {/* 3D Avatar */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3 }}
            >
              <Avatar3D 
                size="large" 
                message="Welcome to my digital world!" 
                animationType="wave"
                className="floating"
              />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-neon-cyan"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center space-y-2"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>

        {/* Quick Navigation Cards */}
        <motion.section
          className="relative z-10 py-20 px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center gradient-text mb-16">
              Explore My World
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'About', path: '/about', description: 'My journey & skills', color: 'neon-cyan' },
                { title: 'Projects', path: '/projects', description: 'Creative solutions', color: 'neon-purple' },
                { title: 'Resume', path: '/resume', description: 'Professional experience', color: 'neon-pink' },
                { title: 'Contact', path: '/contact', description: 'Let\'s connect', color: 'neon-green' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Link to={item.path}>
                    <div className="glass-card p-6 text-center neon-glow-hover group">
                      <h3 className={`text-2xl font-bold text-${item.color} mb-2 group-hover:text-white transition-colors`}>
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{item.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </PageTransition>
  );
};

export default Index;
