
import { motion } from 'framer-motion';
import Avatar3D from '../components/Avatar3D';
import PageTransition from '../components/PageTransition';
import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Finance Dashboard',
      category: 'Web Development',
      image: 'https://i.postimg.cc/qRHpHMyd/project-1.jpg',
      description: 'A comprehensive financial dashboard with real-time analytics and reporting features.',
      tags: ['React', 'TypeScript', 'Chart.js', 'Node.js'],
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Orizon Platform',
      category: 'Web Development',
      image: 'https://i.postimg.cc/bNrcM2Wt/project-2.png',
      description: 'A modern business platform with advanced user management and analytics.',
      tags: ['Next.js', 'MongoDB', 'Tailwind CSS'],
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Fundo Creative',
      category: 'Web Design',
      image: 'https://i.postimg.cc/jSJVqYsq/project-3.jpg',
      description: 'Creative agency website with stunning animations and modern design.',
      tags: ['Figma', 'Adobe XD', 'Framer Motion'],
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Brawlhalla Mobile',
      category: 'Applications',
      image: 'https://i.postimg.cc/dtpXxNGb/project-4.png',
      description: 'Mobile companion app for the popular fighting game with real-time stats.',
      tags: ['React Native', 'Redux', 'Firebase'],
      github: '#',
      live: '#'
    },
    {
      id: 5,
      title: 'DSM Design System',
      category: 'Web Design',
      image: 'https://i.postimg.cc/43T0JKLw/project-5.png',
      description: 'Comprehensive design system for enterprise applications.',
      tags: ['Storybook', 'React', 'Styled Components'],
      github: '#',
      live: '#'
    },
    {
      id: 6,
      title: 'Metaspark Web3',
      category: 'Web Design',
      image: 'https://i.postimg.cc/qR1DX1kZ/project-6.png',
      description: 'Modern Web3 platform design with blockchain integration concepts.',
      tags: ['Web3', 'Ethereum', 'React', 'UI/UX'],
      github: '#',
      live: '#'
    },
    {
      id: 7,
      title: 'Summary Analytics',
      category: 'Web Development',
      image: 'https://i.postimg.cc/Kj4q9tjc/project-7.png',
      description: 'Advanced analytics platform with machine learning insights.',
      tags: ['Python', 'Django', 'React', 'D3.js'],
      github: '#',
      live: '#'
    },
    {
      id: 8,
      title: 'Task Manager Pro',
      category: 'Applications',
      image: 'https://i.postimg.cc/rw2j4B1w/project-8.jpg',
      description: 'Collaborative task management application with team features.',
      tags: ['Vue.js', 'Node.js', 'Socket.io'],
      github: '#',
      live: '#'
    },
    {
      id: 9,
      title: 'Arrival Logistics',
      category: 'Web Development',
      image: 'https://i.postimg.cc/7LxNsSQv/project-9.png',
      description: 'Logistics management system with real-time tracking and analytics.',
      tags: ['Angular', 'Express', 'PostgreSQL'],
      github: '#',
      live: '#'
    }
  ];

  const categories = ['All', 'Web Design', 'Applications', 'Web Development'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Portfolio</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my latest work and creative solutions
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-gradient-to-r from-neon-cyan to-neon-purple text-white'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="glass-card overflow-hidden neon-glow-hover group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-neon-cyan/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <span className="text-neon-cyan text-xl">👁</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-neon-purple text-sm mb-3">{project.category}</p>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-neon-cyan/10 border border-neon-cyan/20 rounded text-xs text-neon-cyan"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
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
