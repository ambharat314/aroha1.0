import { motion } from "motion/react";
import { Link } from "react-router";
import { useEffect } from "react";
import { Palette, Move, PenLine, Music, Leaf, Sparkles, Hand, Heart } from "lucide-react";

export default function ExpressiveArtsTherapy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxhcnQlMjBwYWludGluZyUyMGNyZWF0aXZlJTIwaGFuZHN8ZW58MXx8fHwxNzc1NzIyNDY1fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/70" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6 max-w-4xl pt-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
          >
            <Sparkles size={16} className="text-[#F1B75F]" />
            <span className="text-sm tracking-wider uppercase text-white/80">Our Approach</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 font-light tracking-wide">Expressive Arts Therapy</h1>
          <p className="text-xl md:text-2xl text-[#F1B75F]/80 font-light italic">
            Creativity as a path inward
          </p>
          <p className="text-lg text-white/70 font-light mt-2">
            Where words make room for art
          </p>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Main Blurb */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl text-stone-600 leading-relaxed font-light"
          >
            Expressive Arts Therapy is a gentle, creative space for exploring what is stirring within — through colour, movement, music, storytelling, writing, or other forms of expression. At Aroha, the focus is not on being ‘good’ at art, but on the process itself: making room for feeling, imagination, and inner reflection. Guided with care, sessions may move between different art forms and quiet reflection, helping you notice what is present, discover new perspectives, and reconnect with your own inner resources. It is a welcoming approach for anyone seeking a softer, more spacious way to understand themselves, without pressure to perform or have prior artistic experience.
          </motion.p>
        </div>
      </section>

      {/* Modalities */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#798C6C]/8 via-[#798C6C]/5 to-transparent" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl text-stone-800 mb-6 font-light">Modalities</h2>
              <p className="text-xl text-stone-500 font-light">The many languages of expression</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Visual Arts", icon: Palette, color: "#8E270E" },
                { name: "Claywork", icon: Hand, color: "#F1B75F" },
                { name: "Body movement", icon: Move, color: "#798C6C" },
                { name: "Music", icon: Music, color: "#8E270E" },
                { name: "Drama", icon: Heart, color: "#F1B75F" },
                { name: "Poetry & Writing", icon: PenLine, color: "#798C6C" },
                { name: "Mindfulness & Yoga", icon: Sparkles, color: "#8E270E" },
                { name: "Nature", icon: Leaf, color: "#F1B75F" },
              ].map((modality, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center justify-center p-8 rounded-3xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100"
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-4 shadow-md"
                    style={{ backgroundColor: modality.color }}
                  >
                    <modality.icon size={28} />
                  </div>
                  <h4 className="text-lg text-stone-800 text-center font-light">{modality.name}</h4>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="text-5xl text-stone-800 mb-6 font-light">Frequently Asked Questions</h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                q: "Who is it for?",
                a: "Anyone seeking wellbeing, self-awareness, and a greater sense of wholeness. Expressive Arts Therapy can be especially meaningful for those drawn to multi-sensory or less word-centred ways of exploring and understanding themselves.",
              },
              {
                q: "What benefits can I expect from Expressive Arts sessions?",
                a: (
                  <ul className="list-disc pl-5 space-y-2 text-stone-600 mt-4">
                    <li>A slowing down — gently returning from the mind into the body</li>
                    <li>Greater presence and connection to the here and now</li>
                    <li>A more sensory, intuitive way of experiencing and making meaning of life</li>
                    <li>New pathways of imagination, metaphor, and creative expression</li>
                    <li>Feelings of safety, spontaneity, and playfulness that support nervous system regulation</li>
                    <li>Fresh insights and shifts in perspective as creativity and imagination open up</li>
                    <li>In group settings, deeper authenticity and meaningful human connection through a space of unconditional positive regard</li>
                  </ul>
                ),
              },
              {
                q: "Do I need prior art experience?",
                a: "Not at all. Aroha sessions welcome people from all backgrounds. The focus is not on artistic skill or performance, but on openness, curiosity, and surrender to the process.",
              },
              {
                q: "What does a typical session look like?",
                a: "Each session is thoughtfully tailored to the individual or group, and not every session includes every art form. Typically, sessions begin with grounding and gently arriving into the space, followed by a guided creative exploration. This is then supported through reflection, meaning-making, and “harvesting” the insights that emerge, before closing softly and intentionally.",
              },
              {
                q: "How long is a typical session?",
                a: (
                  <div className="mt-4 space-y-2 text-stone-600">
                    <p><strong>Individual sessions:</strong> 1.5 hours</p>
                    <p><strong>Group Sessions:</strong> 2 hours</p>
                  </div>
                ),
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-stone-50 rounded-3xl p-8 md:p-10 border border-stone-100"
              >
                <h3 className="text-2xl text-stone-800 mb-4 font-medium">{faq.q}</h3>
                {typeof faq.a === 'string' ? (
                  <p className="text-stone-600 text-lg leading-relaxed">{faq.a}</p>
                ) : (
                  <div className="text-lg">{faq.a}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro-CTAs */}
      <section className="container mx-auto px-6 py-20 pb-32">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link
            to="/home/contact"
            className="group relative px-10 py-5 bg-[#798C6C] text-white rounded-full overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full md:w-auto text-center"
          >
            <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 text-lg font-medium">Begin gently, at your own pace</span>
          </Link>
          <Link
            to="/home/offerings"
            className="group relative px-10 py-5 bg-white text-stone-800 border-2 border-[#798C6C] rounded-full overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full md:w-auto text-center"
          >
            <div className="absolute inset-0 bg-[#798C6C]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative z-10 text-lg font-medium">Explore a softer way in</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
