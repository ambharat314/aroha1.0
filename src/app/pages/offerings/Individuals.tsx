import { motion } from "motion/react";
import { Link } from "react-router";
import { Heart, Compass, Sparkles, Feather, Quote } from "lucide-react";

export default function Individuals() {
  const benefits = [
    {
      title: "Self-Awareness",
      desc: "Uncover subconscious patterns and barriers in a safe, trauma-informed individual setting.",
      icon: Compass,
    },
    {
      title: "Emotional Integration",
      desc: "Reconnect with your authentic voice, somatic sensations, and innate creative wisdom.",
      icon: Heart,
    },
    {
      title: "Healthy Coping",
      desc: "Develop customized creative and mindfulness tools for daily stress and emotional regulation.",
      icon: Feather,
    },
    {
      title: "Compassionate Support",
      desc: "Navigate life transitions, grief, anxiety, and self-doubt with experienced, compassionate guidance.",
      icon: Sparkles,
    },
  ];

  const personalStories = [
    {
      quote: "I realized that I haven’t been in touch with art just for therapy or expressing and understanding myself or my thoughts. That my posture or stance in life at this time is perfect, in whatever way it is. I felt very good about myself today. I felt like I could accept myself wholly whatever I am.",
      author: "Participant",
      source: "The Road Back to You Workshop"
    },
    {
      quote: "I came in crying and I am leaving with a smile on my face. That says a lot about how this workshop made me feel. I was devastated and breaking down, but just being able to freely interact through art and not talking about the problem was beautiful and very therapeutic.",
      author: "Participant",
      source: "O.P. Jindal Global University (Sonipat)"
    },
    {
      quote: "Expression comes with difficulty to me in words. This workshop and the method of expressing oneself with gestures and art forms was very enriching to me. Something which I would like to carry out of here.",
      author: "Participant",
      source: "Matr Prem Holistic Centre for Women's Health (Palampur)"
    },
    {
      quote: "This session helped me to interact with my inner self and experience her. This session went beautiful and we all were happy at the end of the session. This session made me more relaxed and helped me to look into my true self. I felt liberated after this session.",
      author: "Student",
      source: "IIIT-D (New Delhi)"
    },
    {
      quote: "Sometimes you feel lost without a direction. So, having these sessions to get to know yourself better and find a direction is good to have.",
      author: "Student",
      source: "Delhi Technological University"
    },
    {
      quote: "Interesting and relaxing. Felt like a short visit to a temple nearby home.",
      author: "Student",
      source: "IISER Bhopal"
    },
    {
      quote: "This session was a very calming, therapeutic experience. I feel a lot more peaceful after this!",
      author: "Student",
      source: "IISER Bhopal"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1616013719351-d77dd6fdadbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFydCUyMHRoZXJhcHklMjBtaW5kZnVsJTIwY3JlYXRpbmd8ZW58MXx8fHwxNzc1NzIyNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
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
          <h1 className="text-6xl md:text-7xl mb-6 font-light tracking-wide">Individuals</h1>
          <p className="text-2xl text-[#F1B75F]/85 font-light italic">
            Creative wellbeing for self-awareness, clarity and insight through expressive arts
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
              "Providing supportive, highly individualized, and trauma-informed containers to gently hold your vulnerability and nurture your personal growth."
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl text-stone-800 font-light tracking-wide">Key Benefits of Individual Practice</h2>
              <div className="w-16 h-1 bg-gradient-to-r from-[#8E270E] to-[#F1B75F] mx-auto mt-4 rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((b, idx) => {
                const Icon = b.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm flex gap-6 hover:shadow-md transition-shadow"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#8E270E]/10 flex items-center justify-center text-[#8E270E] shrink-0">
                      <Icon size={24} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl text-stone-800 font-medium">{b.title}</h3>
                      <p className="text-stone-500 leading-relaxed font-light">{b.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Stories of Personal Healing Section */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl text-stone-800 font-light tracking-wide">Stories of Personal Healing</h2>
              <p className="text-sm text-stone-400 mt-2">Shared pathways of vulnerability and deep self-acceptance</p>
            </motion.div>

            {/* Testimonials Masonry-style/flex Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {personalStories.map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
                >
                  {/* Accent Top Highlight */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8E270E]/30 to-[#F1B75F]/30" />
                  
                  <p className="text-stone-600 leading-relaxed italic mb-6">
                    "{s.quote}"
                  </p>
                  
                  <div className="flex items-center gap-3 border-t border-stone-50 pt-4">
                    <div className="w-10 h-10 rounded-full bg-[#8E270E]/5 text-[#8E270E] flex items-center justify-center font-semibold text-sm">
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
              Book a Session
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
