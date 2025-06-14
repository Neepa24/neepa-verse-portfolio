
import { motion } from 'framer-motion';
import { useState } from 'react';
import Avatar3D from '../components/Avatar3D';
import PageTransition from '../components/PageTransition';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 pixel-text">Contact</h1>
            <p className="text-2xl text-black max-w-3xl mx-auto pixel-text">
              Let's create something amazing together. Drop me a message!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grass-block p-8">
                <h2 className="text-4xl font-bold text-black mb-8 pixel-text">Contact Form</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="fullname"
                        value={formData.fullname}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border-4 border-black text-black text-lg pixel-text placeholder-gray-600 focus:outline-none focus:border-minecraft-emerald"
                        placeholder="Full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border-4 border-black text-black text-lg pixel-text placeholder-gray-600 focus:outline-none focus:border-minecraft-emerald"
                        placeholder="Email Address"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white border-4 border-black text-black text-lg pixel-text placeholder-gray-600 focus:outline-none focus:border-minecraft-emerald resize-none"
                      placeholder="Your Message"
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full minecraft-btn py-4 text-xl flex items-center justify-center space-x-2"
                  >
                    <span>✉️</span>
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Avatar, Map and Contact Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* Avatar */}
              <div className="flex justify-center">
                <Avatar3D 
                  size="large" 
                  message="I'd love to hear from you!"
                  animationType="wave"
                />
              </div>

              {/* Map and Contact Info Side by Side */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Map */}
                <div className="dirt-block p-6">
                  <h3 className="text-3xl font-bold text-black mb-6 pixel-text">Location</h3>
                  <div className="overflow-hidden border-4 border-black">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
                      width="100%" 
                      height="300" 
                      style={{ border: 0 }}
                      allowFullScreen 
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                {/* Contact Info */}
                <div className="stone-block p-6">
                  <h3 className="text-3xl font-bold text-black mb-6 pixel-text">Contact Info</h3>
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-minecraft-emerald border-2 border-black"></div>
                      <span className="text-black text-xl pixel-text">hello@neepa.dev</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-minecraft-gold border-2 border-black"></div>
                      <span className="text-black text-xl pixel-text">+1 (213) 352-2795</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-minecraft-redstone border-2 border-black"></div>
                      <span className="text-black text-xl pixel-text">Sacramento, California, USA</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-minecraft-diamond border-2 border-black"></div>
                      <span className="text-black text-xl pixel-text">Available for freelance work</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
