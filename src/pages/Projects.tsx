import { motion } from 'framer-motion';
import Avatar3D from '../components/Avatar3D';
import PageTransition from '../components/PageTransition';
import { useState } from 'react';
import { Blocks } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Finance Dashboard',
      category: 'Web Development',
      image: 'https://i.postimg.cc/qRHpHMyd/project-1.jpg',
      description: 'A comprehensive financial dashboard built with blocks of code.',
      tags: ['React', 'TypeScript', 'Chart.js', 'Node.js'],
      blockType: 'diamond-block',
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Orizon Platform',
      category: 'Web Development',
      image: 'https://i.postimg.cc/bNrcM2Wt/project-2.png',
      description: 'A modern business platform crafted pixel by pixel.',
      tags: ['Next.js', 'MongoDB', 'Tailwind CSS'],
      blockType: 'emerald-block',
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Fundo Creative',
      category: 'Web Design',
      image: 'https://i.postimg.cc/jSJVqYsq/project-3.jpg',
      description: 'Creative agency website with blocky animations.',
      tags: ['Figma', 'Adobe XD', 'Framer Motion'],
      blockType: 'grass-block',
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Brawlhalla Mobile',
      category: 'Applications',
      image: 'https://i.postimg.cc/dtpXxNGb/project-4.png',
      description: 'Mobile companion app built block by block.',
      tags: ['React Native', 'Redux', 'Firebase'],
      blockType: 'redstone-block',
      github: '#',
      live: '#'
    },
    {
      id: 5,
      title: 'DSM Design System',
      category: 'Web Design',
      image: 'https://i.postimg.cc/43T0JKLw/project-5.png',
      description: 'Comprehensive design system for digital builders.',
      tags: ['Storybook', 'React', 'Styled Components'],
      blockType: 'stone-block',
      github: '#',
      live: '#'
    },
    {
      id: 6,
      title: 'Metaspark Web3',
      category: 'Web Design',
      image: 'https://i.postimg.cc/qR1DX1kZ/project-6.png',
      description: 'Modern Web3 platform with blockchain blocks.',
      tags: ['Web3', 'Ethereum', 'React', 'UI/UX'],
      blockType: 'gold-block',
      github: '#',
      live: '#'
    },
    {
      id: 7,
      title: 'Summary Analytics',
      category: 'Web Development',
      image: 'https://i.postimg.cc/Kj4q9tjc/project-7.png',
      description: 'Advanced analytics platform with data blocks.',
      tags: ['Python', 'Django', 'React', 'D3.js'],
      blockType: 'lapis-block',
      github: '#',
      live: '#'
    },
    {
      id: 8,
      title: 'Task Manager Pro',
      category: 'Applications',
      image: 'https://i.postimg.cc/rw2j4B1w/project-8.jpg',
      description: 'Collaborative task management built with precision.',
      tags: ['Vue.js', 'Node.js', 'Socket.io'],
      blockType: 'iron-block',
      github: '#',
      live: '#'
    },
    {
      id: 9,
      title: 'Arrival Logistics',
      category: 'Web Development',
      image: 'https://i.postimg.cc/7LxNsSQv/project-9.png',
      description: 'Logistics management system with tracking blocks.',
      tags: ['Angular', 'Express', 'PostgreSQL'],
      blockType: 'coal-block',
      github: '#',
      live: '#'
    }
  ];

  const categories = ['All', 'Web Design', 'Applications', 'Web Development'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getBlockClass = (blockType: string) => {
    const blockClasses: { [key: string]: string } = {
      'diamond-block': 'bg-minecraft-diamond',
      'emerald-block': 'bg-minecraft-emerald',
      'grass-block': 'bg-minecraft-grass',
      'redstone-block': 'bg-minecraft-redstone',
      'stone-block': 'bg-minecraft-stone',
      'gold-block': 'bg-minecraft-gold',
      'lapis-block': 'bg-minecraft-lapis',
      'iron-block': 'bg-minecraft-iron',
      'coal-block': 'bg-minecraft-coal'
    };
    return `minecraft-block ${blockClasses[blockType] || 'bg-minecraft-stone'}`;
  };

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 px-6 bg-minecraft-sky">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold pixel-text text-minecraft-gold mb-8">
              <Blocks className="w-16 h-16 inline mr-4" />
              My Builds
            </h1>
            <p className="text-black text-xl max-w-3xl mx-auto">
              A showcase of my digital constructions and creative builds
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
                className={`minecraft-btn text-lg px-6 py-3 ${
                  activeFilter === category
                    ? 'bg-minecraft-emerald'
                    : 'bg-minecraft-dirt hover:bg-minecraft-stone'
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
                className={`${getBlockClass(project.blockType)} overflow-hidden block-hover cursor-pointer`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                    style={{ imageRendering: 'pixelated' }}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 inventory-slot flex items-center justify-center">
                      <Blocks className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-xl font-bold text-black mb-3 pixel-text">
                    {project.title}
                  </h3>
                  <p className="text-minecraft-gold text-base mb-4 pixel-text">{project.category}</p>
                  <p className="text-black text-base mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-2 inventory-slot text-sm text-black pixel-text"
                        style={{ width: 'auto', height: 'auto', minWidth: '40px' }}
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
              message="Check out my builds!"
              animationType="point"
            />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
