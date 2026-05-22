import { motion } from "motion/react";
import { Mail, Phone, Send, Heart, Instagram, Linkedin, MapPin, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { sanityClient } from "../../sanityClient";

export default function Contact() {
  const [contactData, setContactData] = useState<any>(null);

  useEffect(() => {
    sanityClient.fetch('*[_type == "contact"][0]').then((data) => {
      if (data) setContactData(data);
    }).catch(console.error);
  }, []);

  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", interest: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdHVkaW8lMjB3YXJtJTIwbGlnaHQlMjBjb3p5fGVufDF8fHx8MTc3NTcyMjQ2NHww&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/70" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6 max-w-4xl"
        >
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }}>
            <Heart className="w-14 h-14 text-rose-300 mx-auto mb-6 fill-current" />
          </motion.div>
          <h1 className="text-6xl md:text-7xl mb-6 font-light tracking-wide">Get in Touch</h1>
          <p className="text-xl md:text-2xl text-[#F1B75F]/80 font-light">
            We'd love to hear from you and support your creative journey
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-5 gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-10"
          >
            <div>
              <h2 className="text-4xl text-stone-800 mb-6 font-light">{contactData?.heading || "Let's Connect"}</h2>
              <p className="text-stone-500 leading-relaxed text-lg font-light">
                Whether you're curious about our offerings, ready to book a session, or exploring 
                collaboration opportunities, we're here. Reach out and let's see what wants to bloom.
              </p>
            </div>

            <div className="space-y-5">
              {[
                { icon: Mail, label: "Email", content: contactData?.email || "info@arohaarts.com", href: `mailto:${contactData?.email || "info@arohaarts.com"}`, color: "#8E270E" },
                { icon: Phone, label: "Phone", content: contactData?.phone || "(555) 123-4567", href: `tel:${contactData?.phone || "+15551234567"}`, color: "#798C6C" },
                { icon: MapPin, label: "Location", content: contactData?.address || "Mumbai, India", href: contactData?.mapLink || "#", color: "#F1B75F" },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 rounded-2xl hover:bg-stone-50 transition-colors duration-300"
                  >
                    <div className="p-3 rounded-xl text-white shadow-md" style={{ backgroundColor: item.color }}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-stone-800 mb-1 font-medium text-sm uppercase tracking-wider">{item.label}</h3>
                      <a href={item.href} className="text-stone-600 hover:text-[#F1B75F] transition-colors">
                        {item.content}
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social */}
            <div>
              <h3 className="text-xl text-stone-800 mb-5 font-light">Follow Our Journey</h3>
              <div className="flex gap-3">
                <motion.a href="https://instagram.com/arohaexpressivearts" target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="p-3.5 rounded-xl bg-gradient-to-br from-[#F1B75F] to-[#e5a030] text-white shadow-lg shadow-[#F1B75F]/25 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a href="https://linkedin.com/company/aroha-expressive-arts" target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="p-3.5 rounded-xl bg-gradient-to-br from-[#798C6C] to-[#5f7054] text-white shadow-lg shadow-[#798C6C]/25 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </motion.a>
              </div>
              <p className="text-sm text-stone-400 mt-4 font-light italic">
                See our latest workshops, creative shares, and community moments
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100 p-10 lg:p-12">
              <h3 className="text-3xl text-stone-800 mb-8 font-light">Send Us a Message</h3>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-[#798C6C]/10 border border-[#798C6C]/20 rounded-2xl text-[#798C6C] text-center"
                >
                  ✨ Thank you for reaching out! We'll get back to you soon with love.
                </motion.div>
              )}

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-stone-600 mb-2 text-sm font-medium">Your Name *</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full px-5 py-3.5 border border-stone-200 rounded-xl focus:outline-none focus:border-[#F1B75F] focus:ring-2 focus:ring-[#F1B75F]/10 transition-all bg-stone-50/50 hover:bg-white"
                      placeholder="Enter your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-stone-600 mb-2 text-sm font-medium">Email Address *</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required
                      className="w-full px-5 py-3.5 border border-stone-200 rounded-xl focus:outline-none focus:border-[#F1B75F] focus:ring-2 focus:ring-[#F1B75F]/10 transition-all bg-stone-50/50 hover:bg-white"
                      placeholder="your@email.com" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-stone-600 mb-2 text-sm font-medium">Phone Number</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                      className="w-full px-5 py-3.5 border border-stone-200 rounded-xl focus:outline-none focus:border-[#F1B75F] focus:ring-2 focus:ring-[#F1B75F]/10 transition-all bg-stone-50/50 hover:bg-white"
                      placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label htmlFor="interest" className="block text-stone-600 mb-2 text-sm font-medium">I'm Interested In *</label>
                    <select id="interest" name="interest" value={formData.interest} onChange={handleChange} required
                      className="w-full px-5 py-3.5 border border-stone-200 rounded-xl focus:outline-none focus:border-[#F1B75F] focus:ring-2 focus:ring-[#F1B75F]/10 transition-all bg-stone-50/50 hover:bg-white appearance-none cursor-pointer"
                    >
                      <option value="">Select an option</option>
                      <option value="individual">Individual Sessions</option>
                      <option value="group">Group Workshops</option>
                      <option value="events">Upcoming Events</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="other">General Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-stone-600 mb-2 text-sm font-medium">Your Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                    className="w-full px-5 py-3.5 border border-stone-200 rounded-2xl focus:outline-none focus:border-[#F1B75F] focus:ring-2 focus:ring-[#F1B75F]/10 transition-all resize-none bg-stone-50/50 hover:bg-white"
                    placeholder="Share your story, ask questions, or tell us what's calling you..." />
                </div>

                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#8E270E] to-[#a03215] hover:from-[#a03215] hover:to-[#8E270E] text-white rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#8E270E]/20 font-medium text-lg"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </div>

              <p className="text-sm text-stone-400 mt-6 text-center font-light italic">
                We typically respond within 24-48 hours. For urgent matters, please call us.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}