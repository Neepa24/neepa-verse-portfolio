
import { motion } from 'framer-motion';
import Avatar3D from '../components/Avatar3D';
import PageTransition from '../components/PageTransition';

const About = () => {
  const services = [
    {
      icon: "https://i.postimg.cc/4389jZkP/icon-design.png",
      title: "Web Design",
      description: "The most modern and high-quality design made at a professional level."
    },
    {
      icon: "https://i.postimg.cc/ZqgqrqzG/icon-dev.png",
      title: "Web Development",
      description: "High-quality development of sites at the professional level."
    },
    {
      icon: "https://i.postimg.cc/xjLdzYxZ/icon-app.png",
      title: "Mobile Apps",
      description: "Professional development of applications for iOS and Android."
    },
    {
      icon: "https://i.postimg.cc/0NL8zHpx/icon-photo.png",
      title: "Photography",
      description: "I make high-quality photos of any category at a professional level."
    }
  ];

  const testimonials = [
    {
      name: "Daniel Lewis",
      avatar: "https://i.postimg.cc/zGDHfn3G/avatar-1.png",
      text: "Neepa was hired to create a corporate identity. It's modern, clean and with a beautiful design that got a lot of praises from colleagues and visitors. We were very pleased with the work done."
    },
    {
      name: "Jessica Miller",
      avatar: "https://i.postimg.cc/DwY0yHtx/avatar-2.png",
      text: "Working with Neepa has been an absolute pleasure. I was impressed with her attention to detail, her web design skills and her professional approach to our timelines and processes."
    },
    {
      name: "Emily Evans",
      avatar: "https://i.postimg.cc/fRFWhX9F/avatar-3.png",
      text: "I couldn't be happier with the website that Neepa created for us. Her attention to detail and creativity is unmatched. Our clients frequently compliment the design."
    },
    {
      name: "Henry Williams",
      avatar: "https://i.postimg.cc/zXv1Xv81/avatar-4.png",
      text: "I was overwhelmed with the thought of redesigning my online store, but Neepa made the process seamless. The site is not only visually appealing but also optimized for conversions."
    }
  ];

  const clients = [
    "https://i.postimg.cc/YqfKyG66/logo-1-color.png",
    "https://i.postimg.cc/fWm6JtgG/logo-2-color.png",
    "https://i.postimg.cc/Bb07xpwd/logo-3-color.png",
    "https://i.postimg.cc/hv1yMmkh/logo-4-color.png",
    "https://i.postimg.cc/ry1P86Dc/logo-5-color.png",
    "https://i.postimg.cc/SsWDN8NV/logo-6-color.png"
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
            <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 text-black">About Me</h1>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Avatar Column */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex justify-center mb-8">
                <Avatar3D 
                  size="large" 
                  message="Welcome to my journey!" 
                  animationType="wave"
                />
              </div>

              {/* Contact Info Card */}
              <div className="glass-card p-6 mb-8">
                <h3 className="text-xl font-bold text-black mb-4">Contact Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-neon-cyan/20 rounded-lg flex items-center justify-center">
                      <span className="text-neon-cyan text-sm">✉</span>
                    </div>
                    <div>
                      <p className="text-xs text-black">Email</p>
                      <p className="text-black">hello@neepa.dev</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-neon-purple/20 rounded-lg flex items-center justify-center">
                      <span className="text-neon-purple text-sm">📱</span>
                    </div>
                    <div>
                      <p className="text-xs text-black">Phone</p>
                      <p className="text-black">+1 (213) 352-2795</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-neon-pink/20 rounded-lg flex items-center justify-center">
                      <span className="text-neon-pink text-sm">📍</span>
                    </div>
                    <div>
                      <p className="text-xs text-black">Location</p>
                      <p className="text-black">Sacramento, California, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              className="lg:col-span-2 space-y-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* About Text */}
              <div className="glass-card p-8">
                <p className="text-black mb-4 leading-relaxed">
                  I'm a Creative Frontend Developer and UI/UX Designer from California, working in web development and modern technologies. I enjoy turning complex problems into simple, beautiful and intuitive digital experiences.
                </p>
                <p className="text-black leading-relaxed">
                  My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that it is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.
                </p>
              </div>

              {/* Services */}
              <div className="glass-card p-8">
                <h3 className="text-3xl font-bold text-black mb-8">What I'm doing</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      className="flex items-start space-x-4 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <img src={service.icon} alt={service.title} className="w-10 h-10" />
                      <div>
                        <h4 className="font-bold text-black mb-2">{service.title}</h4>
                        <p className="text-sm text-black">{service.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Testimonials */}
              <div className="glass-card p-8">
                <h3 className="text-3xl font-bold text-black mb-8">Testimonials</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <motion.div
                      key={testimonial.name}
                      className="bg-white/5 p-6 rounded-lg hover:bg-white/10 transition-colors"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className="flex items-center mb-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <h4 className="font-bold text-black">{testimonial.name}</h4>
                      </div>
                      <p className="text-sm text-black leading-relaxed">{testimonial.text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Clients */}
              <div className="glass-card p-8">
                <h3 className="text-3xl font-bold text-black mb-8">Clients</h3>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                  {clients.map((client, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-center p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.05 * index }}
                    >
                      <img src={client} alt={`Client ${index + 1}`} className="max-w-full h-8 object-contain opacity-60 hover:opacity-100 transition-opacity" />
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
