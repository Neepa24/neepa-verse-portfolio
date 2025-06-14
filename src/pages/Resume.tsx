
import PageTransition from '../components/PageTransition';
import Avatar3D from '../components/Avatar3D';
import { motion } from 'framer-motion';

const Resume = () => {
  const education = [
    {
      title: "University school of the arts",
      period: "2008 - 2010",
      description: "There I learnt a wide range of topics that are essential to understanding both the theory and practical aspects of computing. This involves programming fundamentals, computer architecture, operating systems, databases, software engineering, problem solving, collaboration and communication soft skills."
    },
    {
      title: "New York Academy of Art",
      period: "2006 - 2007",
      description: "I chose my master degree in technology. There I deepened my knowledge, enhanced my skills in the area and learnt how to increase my career prospects in a competitive job market."
    },
    {
      title: "High School of Art and Design",
      period: "2003 - 2005",
      description: "There I learnt foundational courses and computer sciences fundamentals. In the institution, I chose my specialization in web-development that involves front-end and back-end technologies, user interface designs and content management systems."
    }
  ];

  const experience = [
    {
      title: "Creative Director",
      period: "2015 - Present",
      description: "I can develop and oversee creative concepts for projects and campaigns managing a team of designers, writers, and other creative professionals."
    },
    {
      title: "Art Director",
      period: "2013 - 2015",
      description: "I create and develop visual concepts that align with the project's goals and objectives, supervising the design process and managing timelines and budgets for design projects."
    },
    {
      title: "Web Designer",
      period: "2010 - 2013",
      description: "I create logos, color schemes and typography for a brand's identity. Also I develop graphics for websites, social media and digital ads with applications that enhance user experience."
    }
  ];

  const skills = [
    { name: "React & TypeScript", percentage: 90 },
    { name: "UI/UX Design", percentage: 85 },
    { name: "Frontend Development", percentage: 88 },
    { name: "Three.js & WebGL", percentage: 75 },
    { name: "Node.js & Backend", percentage: 70 },
    { name: "Mobile Development", percentage: 65 }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold gradient-text mb-8 text-black">Resume</h1>
            <p className="text-2xl text-black">
              My professional journey and expertise
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Avatar & Download */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex justify-center mb-8">
                <Avatar3D 
                  size="large" 
                  message="Here's my professional journey!"
                  animationType="wave"
                />
              </div>

              <div className="glass-card p-8 text-center">
                <h3 className="text-2xl font-bold text-neon-cyan mb-6">Download Resume</h3>
                <button className="futuristic-btn w-full text-lg py-4">
                  Download PDF
                </button>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              className="lg:col-span-2 space-y-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Education */}
              <div className="glass-card p-8">
                <div className="flex items-center mb-10">
                  <div className="w-12 h-12 bg-neon-cyan/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-neon-cyan text-xl">🎓</span>
                  </div>
                  <h3 className="text-4xl font-bold text-neon-cyan">Education</h3>
                </div>

                <div className="space-y-10">
                  {education.map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="border-l-2 border-neon-cyan/30 pl-8 relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className="absolute w-4 h-4 bg-neon-cyan rounded-full -left-2 top-0"></div>
                      <h4 className="text-2xl font-bold text-black mb-3">{item.title}</h4>
                      <span className="text-neon-cyan text-lg font-medium">{item.period}</span>
                      <p className="text-black mt-4 leading-relaxed text-lg">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Experience */}
              <div className="glass-card p-8">
                <div className="flex items-center mb-10">
                  <div className="w-12 h-12 bg-neon-purple/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-neon-purple text-xl">💼</span>
                  </div>
                  <h3 className="text-4xl font-bold text-neon-purple">Experience</h3>
                </div>

                <div className="space-y-10">
                  {experience.map((item, index) => (
                    <motion.div
                      key={item.title}
                      className="border-l-2 border-neon-purple/30 pl-8 relative"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className="absolute w-4 h-4 bg-neon-purple rounded-full -left-2 top-0"></div>
                      <h4 className="text-2xl font-bold text-black mb-3">{item.title}</h4>
                      <span className="text-neon-purple text-lg font-medium">{item.period}</span>
                      <p className="text-black mt-4 leading-relaxed text-lg">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="glass-card p-8">
                <div className="flex items-center mb-10">
                  <div className="w-12 h-12 bg-neon-pink/20 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-neon-pink text-xl">⚡</span>
                  </div>
                  <h3 className="text-4xl font-bold text-neon-pink">My Skills</h3>
                </div>

                <div className="space-y-8">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className="flex justify-between items-center mb-3">
                        <h5 className="text-black font-medium text-xl">{skill.name}</h5>
                        <span className="text-neon-cyan text-lg">{skill.percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-3">
                        <motion.div 
                          className="bg-gradient-to-r from-neon-cyan to-neon-purple h-3 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.percentage}%` }}
                          transition={{ duration: 1, delay: 0.5 + (0.1 * index) }}
                        />
                      </div>
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

export default Resume;
