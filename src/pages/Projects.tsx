
import { motion } from 'framer-motion';
import Avatar3D from '../components/Avatar3D';
import PageTransition from '../components/PageTransition';
import { Github, Link as LinkIcon } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB',
      image: '/placeholder.svg',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: '3D Portfolio Website',
      description: 'Interactive 3D portfolio built with Three.js and React',
      image: '/placeholder.svg',
      tags: ['React', 'Three.js', 'GSAP', 'WebGL'],
      github: '#',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates',
      image: '/placeholder.svg',
      tags: ['Next.js', 'Socket.io', 'PostgreSQL', 'Tailwind'],
      github: '#',
      live: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'Beautiful weather app with animated transitions',
      image: '/placeholder.svg',
      tags: ['React', 'API Integration', 'Framer Motion'],
      github: '#',
      live: '#',
      featured: false
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">My Projects</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my latest work and creative solutions
            </p>
          </motion.div>

          {/* Featured Projects */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-neon-cyan mb-8">Featured Projects</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {projects.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  className="glass-card overflow-hidden neon-glow-hover group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/20 rounded-full text-sm text-neon-cyan"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <a 
                        href={project.github}
                        className="flex items-center space-x-2 futuristic-btn"
                      >
                        <Github size={18} />
                        <span>Code</span>
                      </a>
                      <a 
                        href={project.live}
                        className="flex items-center space-x-2 futuristic-btn"
                      >
                        <LinkIcon size={18} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* All Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-neon-purple mb-8">Other Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(p => !p.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  className="glass-card p-6 neon-glow-hover group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-neon-purple/10 border border-neon-purple/20 rounded text-xs text-neon-purple"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    <a href={project.github} className="text-neon-cyan hover:text-white transition-colors">
                      <Github size={16} />
                    </a>
                    <a href={project.live} className="text-neon-cyan hover:text-white transition-colors">
                      <LinkIcon size={16} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Avatar Guide */}
          <motion.div
            className="fixed bottom-8 right-8 z-40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Avatar3D 
              size="small" 
              message="Click any project to learn more!"
              animationType="point"
            />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
