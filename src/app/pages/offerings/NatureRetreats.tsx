import { motion } from "motion/react";
import { Link } from "react-router";
import { TreePine, Compass, Eye, Sun, Quote } from "lucide-react";

export default function NatureRetreats() {
  const benefits = [
    {
      title: "Grounded Restoration",
      desc: "Calms the nervous system and restores psychological clarity through somatic grounding in outdoor environments.",
      icon: Compass,
    },
    {
      title: "Interconnected Belonging",
      desc: "Deepens your feeling of connection and belonging to the larger, organic web of life.",
      icon: TreePine,
    },
    {
      title: "Eco-Art Exploration",
      desc: "Combines environmental mindfulness, nature walks, and creative art-making using natural resources.",
      icon: Sun,
    },
    {
      title: "Spacious Perspective",
      desc: "Offers expansive physical and emotional space to let go of old habits and nurture fresh life perspectives.",
      icon: Eye,
    },
  ];

  const sanctuaryStories = [
    {
      quote: "It made me feel connected to the world, a part of everything. It felt as if I belong. It helped me recognize silent aspects of my own self and made me realize that I can just be and still be accepted. I haven’t felt this peaceful in a very long time.",
      author: "Participant",
      source: "O.P. Jindal Global University (Sonipat)"
    },
    {
      quote: "Meeting new people and communicating with them through their energies and thoughts was an all-new experience for me and made me realise the power of energies as well. I felt liberated after expressing myself through art.",
      author: "Student",
      source: "IIIT-D (New Delhi)"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjByZXRyZWF0JTIwbW91bnRhaW5zJTIwcGVhY2V8ZW58MXx8fHwxNzc1NzIyNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-stone-900/60" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6 max-w-4xl"
        >
          <h1 className="text-6xl md:text-7xl mb-6 font-light tracking-wide">Nature Retreats</h1>
          <p className="text-2xl text-[#F1B75F]/85 font-light italic">
            Immersive experiences in outdoor sanctuary spaces
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 py-24 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto space-y-24">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-2xl text-stone-700 leading-relaxed font-light italic">
              "Immersive expressive arts workshops set in tranquil outdoor sanctuaries, designed to deepen your connection to yourself, others, and the natural world."
            </p>
          </motion.div>

          {/* Details Section */}
          <div className="grid md:grid-cols-12 gap-12 items-start">
            {/* Left: Who is it for */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-6 bg-white p-8 md:p-12 rounded-[2rem] shadow-lg border border-stone-100 space-y-6"
            >
              <h2 className="text-3xl text-stone-800 font-light tracking-wide flex items-center gap-3">
                <TreePine className="text-[#798C6C]" size={26} />
                Who is it for?
              </h2>
              <div className="text-stone-600 leading-relaxed space-y-4 font-light text-lg">
                <p>
                  For individuals seeking a intentional escape from the noise and speed of everyday life to reconnect with their creative essence in a peaceful sanctuary.
                </p>
                <p>
                  Ideal for those who find solace in natural environments and wish to integrate creative arts as a tool for emotional rest, somatic groundedness, and spiritual rejuvenation.
                </p>
              </div>
            </motion.div>

            {/* Right: Benefits grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {benefits.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow border border-stone-100 hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-xl bg-[#798C6C]/10 flex items-center justify-center text-[#798C6C] mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg text-stone-800 font-medium mb-2">{b.title}</h3>
                    <p className="text-sm text-stone-500 leading-relaxed font-light">{b.desc}</p>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Voices from the Sanctuary Section */}
          <div className="space-y-12 pt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl text-stone-800 font-light tracking-wide">Voices from the Sanctuary</h2>
              <p className="text-sm text-stone-400 mt-2">Shared feelings of peace, interconnectedness, and liberation</p>
            </motion.div>

            {/* Featured Double Quote Layout */}
            <div className="grid md:grid-cols-2 gap-8">
              {sanctuaryStories.map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="bg-white p-8 md:p-10 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                >
                  <Quote size={80} className="absolute -top-6 -right-6 text-stone-100 rotate-180 opacity-50" />
                  
                  <p className="text-stone-600 leading-relaxed italic text-lg mb-8 relative z-10">
                    "{s.quote}"
                  </p>
                  
                  <div className="flex items-center gap-3 border-t border-stone-50 pt-4 relative z-10">
                    <div className="w-10 h-10 rounded-full bg-[#798C6C]/10 text-[#798C6C] flex items-center justify-center font-semibold text-sm">
                      {s.author[0]}
                    </div>
                    <div>
                      <p className="text-stone-800 font-semibold text-xs leading-none">{s.author}</p>
                      <p className="text-stone-400 text-[11px] font-medium mt-1 leading-tight uppercase tracking-wider">{s.source}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center pt-8"
          >
            <Link
              to="/home/contact"
              className="inline-block px-12 py-5 bg-[#8E270E] text-white rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-xl font-medium text-lg tracking-wide"
            >
              Explore Upcoming Retreats
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
