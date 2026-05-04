import { motion } from "motion/react";
import { Link } from "react-router";
import { useEffect } from "react";
import { Heart, Leaf, Users, Palette, Move, PenLine, Music } from "lucide-react";
import logo from "figma:asset/91c1f4056b8afb06da9b380f44ed2fc27d4346d0.png";

export default function About() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1761971975724-31001b4de0bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwc3BhY2UlMjBwZWFjZWZ1bCUyMGNhbG0lMjBpbmRvb3J8ZW58MXx8fHwxNzc1NzIyNDY1fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/70" />
        </div>

        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-20 w-64 h-64 bg-[#798C6C]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-[#F1B75F]/20 rounded-full blur-3xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6 max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
          >
            <Leaf size={16} className="text-[#F1B75F]" />
            <span className="text-sm tracking-wider uppercase text-white/80">Our Story</span>
          </motion.div>
          <h1 className="text-6xl md:text-7xl mb-6 font-light tracking-wide">About Aroha</h1>
          <p className="text-xl md:text-2xl text-[#F1B75F]/80 font-light italic">
            From roots to bloom, from heart to healing
          </p>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Section 1: About Aroha */}
      <section id="about-aroha" className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-[#8E270E] to-[#F1B75F] rounded-full mb-8"
            />
            <h2 className="text-5xl text-stone-800 mb-4 font-light">About Aroha</h2>
            <p className="text-stone-500 text-lg font-light">The meaning behind the name</p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12 items-center mb-20 bg-gradient-to-br from-white to-amber-50/30 p-8 md:p-12 rounded-3xl shadow-lg border border-stone-100">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                <p>
                  <span className="text-[#F1B75F] font-accent text-2xl">Aroha</span>— a word from the Māori language— is often translated as love.
                </p>
                <p>
                  But it is more than a feeling. It is a way of being— rooted in compassion, presence, and connection.
                </p>
                <p>
                  In Sanskrit, āroha (आरोह) speaks of rising— an upward movement, a quiet unfolding.
                </p>
                <p className="text-stone-700 font-medium">
                  Aroha, then, is the movement of the heart— towards light.
                </p>
                <p>
                  In each of us lives a small, steady seed of this light.<br />
                  To tend to it is the work.
                </p>
                <p>
                  The expressive arts become a pathway— giving form to what is unseen, voice to what is unspoken.
                </p>
                <p className="italic text-stone-500">
                  And in that expression, something shifts.<br />
                  Something softens. Something transforms.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-2 relative flex items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                className="absolute w-80 h-80"
              >
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(241,183,95,0.15)" strokeWidth="0.5" strokeDasharray="3 6" />
                </svg>
              </motion.div>
              <div className="w-64 h-64 flex items-center justify-center">
                <img src={logo} alt="Aroha Expressive Arts" className="w-full h-full object-contain" />
              </div>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-4xl text-stone-800 mb-4 font-light">Our Roots, Our Values</h3>
            <p className="text-xl text-stone-500 max-w-2xl mx-auto font-light">
              Like a tree draws strength from deep roots, we ground our practice in timeless principles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Compassion",
                icon: Heart,
                color: "#8E270E",
                bgColor: "from-[#8E270E]/8 to-[#8E270E]/3",
                description: "Every heart deserves to be held with tenderness. We create spaces of unconditional acceptance where vulnerability becomes strength and authenticity blooms.",
              },
              {
                title: "Growth",
                icon: Leaf,
                color: "#798C6C",
                bgColor: "from-[#798C6C]/8 to-[#798C6C]/3",
                description: "Like the seed knows how to become a tree, you carry innate wisdom for your own becoming. We nurture the conditions for natural, organic transformation.",
              },
              {
                title: "Community",
                icon: Users,
                color: "#F1B75F",
                bgColor: "from-[#F1B75F]/12 to-[#F1B75F]/4",
                description: "No tree grows alone in the forest. We thrive in connection, witnessed and supported by others walking their own creative paths alongside us.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="relative group cursor-default"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${value.bgColor} rounded-3xl transform group-hover:scale-[1.02] transition-transform duration-300`} />
                <div className="relative p-10 text-center">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 shadow-lg"
                    style={{ backgroundColor: value.color }}
                  >
                    <value.icon size={32} className="text-white" />
                  </motion.div>
                  <h3 className="text-2xl text-stone-800 mb-4 font-light tracking-wide">{value.title}</h3>
                  <p className="text-stone-600 leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: About Expressive Arts Therapy */}
      <section id="about-expressive-arts-therapy" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#798C6C]/8 via-[#798C6C]/5 to-transparent" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "4rem" }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-[#798C6C] to-[#F1B75F] rounded-full mb-8"
              />
              <h2 className="text-5xl text-stone-800 mb-4 font-light">About Expressive Arts Therapy</h2>
              <p className="text-stone-500 text-lg font-light">A multimodal approach to healing</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                  <p>
                    Expressive arts therapy is a multimodal approach to healing that honors the wisdom of the body,
                    the language of the heart, and the voice of the soul. Through creative expression — painting,
                    writing, movement, music, drama, and more — we access parts of ourselves that words alone cannot reach.
                  </p>
                  <p>
                    This is not about creating "good art" or being "talented." It's about using the creative process
                    itself as a pathway to healing, insight, and transformation. When we make art from our inner world,
                    we externalize what lives inside, giving it form, witnessing it, and creating space for change.
                  </p>
                  <p>
                    Expressive arts therapy is particularly powerful for processing trauma, navigating grief, exploring
                    identity, managing anxiety and depression, and fostering personal growth.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-[#798C6C]/20 to-[#F1B75F]/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative overflow-hidden rounded-3xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                  <img
                    src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxhcnQlMjBwYWludGluZyUyMGNyZWF0aXZlJTIwaGFuZHN8ZW58MXx8fHwxNzc1NzIyNDY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Creative expression through art"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 grid md:grid-cols-4 gap-6"
            >
              {[
                { name: "Visual Arts", desc: "Painting, drawing, collage, sculpture", icon: Palette, color: "#8E270E" },
                { name: "Movement", desc: "Dance, gesture, embodied expression", icon: Move, color: "#798C6C" },
                { name: "Writing", desc: "Poetry, journaling, storytelling", icon: PenLine, color: "#F1B75F" },
                { name: "Sound", desc: "Music, voice, rhythm, silence", icon: Music, color: "#8E270E" },
              ].map((modality, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-lg transition-all duration-300 border border-stone-100"
                >
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-xl text-white mb-4 shadow-md"
                    style={{ backgroundColor: modality.color }}
                  >
                    <modality.icon size={24} />
                  </div>
                  <h4 className="text-lg text-stone-800 mb-2 font-light">{modality.name}</h4>
                  <p className="text-sm text-stone-500">{modality.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 3: About Vasvi */}
      <section id="about-vasvi" className="container mx-auto px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-[#F1B75F] to-[#8E270E] rounded-full mb-8"
            />
            <h2 className="text-5xl text-stone-800 mb-4 font-light">About Vasvi</h2>
            <p className="text-stone-500 text-lg font-light">The heart behind Aroha</p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-2 relative group"
            >
              <div className="absolute -inset-3 bg-gradient-to-br from-[#F1B75F]/20 to-[#8E270E]/15 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative overflow-hidden rounded-3xl shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHdvbWFuJTIwcHJvZmVzc2lvbmFsJTIwd2FybXxlbnwxfHx8fDE3NzU3MjI0NjV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Vasvi - Expressive Arts Therapist"
                  className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:col-span-3"
            >
              <div className="space-y-6 text-stone-600 leading-relaxed text-lg">
                <p>
                  Vasvi is the heart and founder of Aroha Expressive Arts, bringing together years of experience
                  in expressive arts therapy, trauma-informed practice, and community facilitation. Her approach
                  is rooted in deep listening, cultural humility, and the belief that every person is the expert
                  of their own story.
                </p>
                <p>
                  Trained in expressive arts therapy and holding certifications in trauma-informed care and somatic
                  practices, Vasvi creates spaces where safety and creativity interweave. She has worked with diverse
                  communities — from survivors of trauma to creative professionals seeking deeper connection with their
                  authentic voice.
                </p>
                <p>
                  What distinguishes Vasvi's work is her ability to hold complexity with tenderness. She understands
                  that healing is not linear, that transformation happens in spiral patterns, and that sometimes the
                  most profound shifts emerge from the gentlest invitations to create, to move, to witness ourselves
                  with compassion.
                </p>
                <p>
                  Beyond her clinical work, Vasvi is passionate about making expressive arts accessible to communities
                  who have been marginalized from traditional mental health spaces.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8 p-8 bg-gradient-to-br from-[#F1B75F]/10 to-[#F1B75F]/5 rounded-3xl border border-[#F1B75F]/15"
              >
                <div className="text-4xl text-[#F1B75F]/40 mb-2 font-serif">"</div>
                <p className="text-stone-700 italic text-lg leading-relaxed">
                  My greatest joy is witnessing the moment when someone discovers they already possess everything
                  they need for their own healing. The creative process simply helps us remember what we've always known.
                </p>
                <p className="text-stone-900 font-medium mt-4">— Vasvi</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-50 to-amber-50/30" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl text-stone-800 mb-6 font-light">Voices from the Garden</h2>
            <p className="text-xl text-stone-500 font-light italic">
              Stories of transformation, healing, and creative awakening
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "In Aroha's gentle embrace, I found permission to feel everything I'd been holding back. Through painting and movement, colors and tears, I discovered parts of myself I'd forgotten existed.",
                author: "Maria Chen",
                role: "Individual Therapy Client",
                color: "#8E270E",
              },
              {
                quote: "The facilitators here don't just teach techniques — they hold space for transformation. I came seeking healing from trauma; I found a community and reclaimed my voice.",
                author: "James Rodriguez",
                role: "Workshop Participant",
                color: "#F1B75F",
              },
              {
                quote: "Aroha feels like coming home to myself. Every session is an invitation to explore, to play, to heal. The creative process has become my most trusted companion on this journey.",
                author: "Sarah Okonkwo",
                role: "Group Circle Member",
                color: "#798C6C",
              },
              {
                quote: "I arrived skeptical about 'art therapy.' I left transformed. There's magic in what happens when compassionate guidance meets creative expression in safe community.",
                author: "David Kim",
                role: "Retreat Attendee",
                color: "#F1B75F",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 border border-stone-100"
              >
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: testimonial.color, opacity: 1 - i * 0.15 }} />
                  ))}
                </div>
                <p className="text-stone-600 mb-8 leading-relaxed italic text-lg">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-medium text-lg" style={{ backgroundColor: testimonial.color }}>
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="text-stone-800 font-medium">{testimonial.author}</p>
                    <p className="text-sm text-stone-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto text-center overflow-hidden rounded-3xl p-16"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#8E270E] to-[#6d1e0b]" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, rgba(241,183,95,0.3), transparent 50%), radial-gradient(circle at 80% 50%, rgba(121,140,108,0.3), transparent 50%)" }} />
          <div className="relative z-10 text-white">
            <Leaf className="w-10 h-10 mx-auto mb-6 text-[#F1B75F]/70" />
            <h2 className="text-4xl mb-6 font-light">Ready to Begin Growing?</h2>
            <p className="text-xl mb-8 text-white/85 font-light max-w-xl mx-auto">
              Your creative journey awaits. Let's explore what wants to bloom through you.
            </p>
            <Link
              to="/home/contact"
              className="inline-block px-10 py-4 bg-white text-stone-800 rounded-full hover:bg-stone-50 transition-all duration-300 shadow-xl font-medium hover:shadow-2xl hover:scale-105"
            >
              Connect With Us
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}