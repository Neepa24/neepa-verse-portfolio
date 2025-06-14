
import PageTransition from '../components/PageTransition';
import Avatar3D from '../components/Avatar3D';
import { motion } from 'framer-motion';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Interactive 3D Experiences with React Three Fiber',
      excerpt: 'Learn how to create stunning 3D web experiences using React Three Fiber and Three.js',
      date: '2024-01-15',
      tags: ['React', 'Three.js', 'WebGL'],
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'The Future of Web Animation',
      excerpt: 'Exploring modern animation libraries and techniques for creating smooth, performant web animations',
      date: '2024-01-10',
      tags: ['Animation', 'CSS', 'JavaScript'],
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Glassmorphism in Modern UI Design',
      excerpt: 'How to implement the popular glassmorphism design trend in your web applications',
      date: '2024-01-05',
      tags: ['CSS', 'Design', 'UI/UX'],
      readTime: '6 min read'
    }
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
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Blog & Thoughts</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Sharing insights about web development, design, and technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="glass-card p-6 neon-glow-hover group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-neon-cyan">{post.date}</span>
                  <span className="text-sm text-gray-400">{post.readTime}</span>
                </div>
                
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-300 mb-4 text-sm">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-neon-purple/10 border border-neon-purple/20 rounded text-xs text-neon-purple"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div
            className="fixed bottom-8 right-8 z-40"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Avatar3D 
              size="small" 
              message="Check out my latest thoughts!"
              animationType="point"
            />
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Blog;
