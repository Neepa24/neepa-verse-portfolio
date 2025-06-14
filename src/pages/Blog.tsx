
import PageTransition from '../components/PageTransition';
import Avatar3D from '../components/Avatar3D';
import { motion } from 'framer-motion';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Design conferences in 2024',
      category: 'Design',
      date: 'Feb 23, 2024',
      image: 'https://i.postimg.cc/DysCZrWs/blog-1.jpg',
      excerpt: 'In 2024, several exciting design conferences are set to take place, offering opportunities for professionals and enthusiasts to connect, learn, and share innovative ideas.',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Best fonts every designer',
      category: 'Design',
      date: 'Jan 29, 2024',
      image: 'https://i.postimg.cc/QC7qFDMs/blog-2.jpg',
      excerpt: 'When it comes to typography, choosing the right font is essential for effective design. In this article, I\'ll bring a brief overview of some of the best fonts that every designer should consider.',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Design digest #80',
      category: 'Design',
      date: 'Dec 20, 2023',
      image: 'https://i.postimg.cc/W1T71QcL/blog-3.jpg',
      excerpt: 'Hello, my friends. In this Design Digest, I\'ll show you a curated collection of the latest trends, insights, and innovations in the design world.',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: '2023 UI interactions',
      category: 'Design',
      date: 'Nov 29, 2023',
      image: 'https://i.postimg.cc/2S0n8yxh/blog-4.jpg',
      excerpt: 'As we move into 2024, 2023 was marked by the rapidly evolution of the landscape of UI interactions, driven by advancements in technology and user expectations.',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'The forgotten art of spacing',
      category: 'Design',
      date: 'Nov 12, 2023',
      image: 'https://i.postimg.cc/YCCmVkw9/blog-5.jpg',
      excerpt: 'In the realm of design, spacing is often an overlooked yet crucial element that can significantly impact the overall aesthetic and functionality of a composition.',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'Design digest #79',
      category: 'Design',
      date: 'Oct 20, 2023',
      image: 'https://i.postimg.cc/zBCBvP16/blog-6.jpg',
      excerpt: 'Hi, my friends. In this Design Digest I\'ll focus in the tools and resources that we use daily in our projects. Also, I\'ll include examples of software recommendations.',
      readTime: '4 min read'
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
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6">Blog</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Sharing insights about web development, design, and technology
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="glass-card overflow-hidden neon-glow-hover group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-neon-cyan/10 border border-neon-cyan/20 rounded-full text-xs text-neon-cyan">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <span>•</span>
                      <time>{post.date}</time>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                    <button className="text-neon-cyan hover:text-white transition-colors text-sm font-medium">
                      Read More →
                    </button>
                  </div>
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
