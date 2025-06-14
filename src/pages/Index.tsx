
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Avatar3D from '../components/Avatar3D';
import PageTransition from '../components/PageTransition';
import { Blocks, Cube } from 'lucide-react';

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden bg-minecraft-sky">
        {/* Floating Minecraft blocks */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-16 h-16 grass-block minecraft-float opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-12 h-12 dirt-block minecraft-float opacity-30" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-20 h-20 stone-block minecraft-float opacity-15" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-3/4 left-1/8 w-14 h-14 wood-block minecraft-float opacity-25" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/8 right-1/8 w-10 h-10 diamond-block minecraft-float opacity-40" style={{ animationDelay: '1.5s' }}></div>
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
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 pixel-text text-white"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Hi, I'm{' '}
                <span className="text-minecraft-emerald">Neepa</span>
              </motion.h1>
              
              <motion.div
                className="text-lg md:text-xl text-minecraft-gold mb-8 pixel-text"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Minecraft Builder & Web Crafter
              </motion.div>
              
              <motion.p
                className="text-sm text-white mb-8 max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                I craft digital worlds with the precision of a Minecraft builder. 
                Building blocks of code into amazing experiences, one pixel at a time.
              </motion.p>
              
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <Link to="/projects" className="minecraft-btn">
                  <Blocks className="w-4 h-4 inline mr-2" />
                  View Builds
                </Link>
                <Link to="/contact" className="minecraft-btn bg-minecraft-redstone hover:bg-red-600">
                  <Cube className="w-4 h-4 inline mr-2" />
                  Connect
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
                message="Welcome to my block world!" 
                animationType="wave"
                className="minecraft-float"
              />
            </motion.div>
          </div>
        </div>

        {/* Quick Navigation Cards */}
        <motion.section
          className="relative z-10 py-20 px-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center pixel-text text-minecraft-gold mb-16">
              Explore My World
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'About', path: '/about', description: 'My story & skills', blockType: 'grass-block', icon: '👤' },
                { title: 'Projects', path: '/projects', description: 'My builds', blockType: 'diamond-block', icon: '🏗️' },
                { title: 'Resume', path: '/resume', description: 'Experience log', blockType: 'stone-block', icon: '📜' },
                { title: 'Contact', path: '/contact', description: 'Join server', blockType: 'wood-block', icon: '📨' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <Link to={item.path}>
                    <div className={`${item.blockType} p-6 text-center block-hover transition-all duration-300`}>
                      <div className="text-2xl mb-3">{item.icon}</div>
                      <h3 className="text-lg font-bold text-white mb-2 pixel-text">
                        {item.title}
                      </h3>
                      <p className="text-white text-xs opacity-80">{item.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Minecraft-style inventory bar at bottom */}
        <motion.div
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="flex space-x-1">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="inventory-slot">
                {i === 0 && <div className="w-full h-full bg-minecraft-diamond opacity-80"></div>}
                {i === 1 && <div className="w-full h-full bg-minecraft-emerald opacity-80"></div>}
                {i === 2 && <div className="w-full h-full bg-minecraft-gold opacity-80"></div>}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Index;
