
import { motion } from 'framer-motion';
import Avatar3D from '../components/Avatar3D';
import PageTransition from '../components/PageTransition';

const About = () => {
  const timeline = [
    { year: '2020', title: 'Started Web Development', description: 'Began my journey into frontend development' },
    { year: '2021', title: 'First React Project', description: 'Built my first complex React application' },
    { year: '2022', title: 'UI/UX Focus', description: 'Specialized in user interface and experience design' },
    { year: '2023', title: 'Full Stack', description: 'Expanded into backend technologies' },
    { year: '2024', title: 'Senior Developer', description: 'Leading development projects and mentoring' },
  ];

  const techStack = [
    'React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Three.js', 'Framer Motion'
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">About Me</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              I'm a passionate frontend developer who loves creating beautiful, interactive experiences on the web.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Timeline Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-neon-cyan mb-8">My Journey</h2>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="glass-card p-6 neon-glow-hover"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-cyan to-neon-purple flex items-center justify-center font-bold">
                        {item.year.slice(-2)}
                      </div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    </div>
                    <p className="text-gray-300 ml-16">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Avatar and Tech Stack */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex justify-center">
                <Avatar3D 
                  size="large" 
                  message="Welcome to my journey!" 
                  animationType="wave"
                />
              </div>

              {/* Tech Stack */}
              <div className="glass-card p-6">
                <h3 className="text-2xl font-bold text-neon-purple mb-6">Tech Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  {techStack.map((tech, index) => (
                    <motion.div
                      key={tech}
                      className="bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border border-neon-cyan/20 rounded-lg p-3 text-center"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                      whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 245, 255, 0.3)' }}
                    >
                      <span className="font-medium text-white">{tech}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
