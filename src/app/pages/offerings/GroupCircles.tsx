import { motion } from "motion/react";
import { Link } from "react-router";
import { Users, Quote, Heart, Shield, Sparkles } from "lucide-react";

export default function GroupCircles() {
  const benefits = [
    {
      title: "Deep Belonging",
      desc: "Reduces isolation and restores a profound sense of shared humanity and collective safety.",
      icon: Shield,
    },
    {
      title: "Shared Reflection",
      desc: "Offers a gentle, non-judgmental mirror through others' stories and creative processes.",
      icon: Users,
    },
    {
      title: "Creative Insight",
      desc: "Deepens self-awareness and emotional integration through witnessing and being witnessed.",
      icon: Sparkles,
    },
    {
      title: "Somatic Healing",
      desc: "Engages somatic and creative modalities to process emotions that words alone cannot hold.",
      icon: Heart,
    },
  ];

  const secondaryQuotes = [
    {
      quote: "Sharing my art with other people made me listen to their part of the story as well. Meeting new people and communicating with them through their energies and thoughts was an all-new experience for me and made me realise the power of energies as well. I felt liberated after expressing myself through art — liberated from other people's opinions and expectations.",
      author: "Student",
      source: "IIIT-D (New Delhi)"
    },
    {
      quote: "This session made me realise what I actually am, my thought process etc. and through the exchange of peers' stories it gave me a different perspective of looking and dealing with situations of life. I also got hope I am not alone in the world which we may feel many times in case of depression, sadness.",
      author: "Student",
      source: "IIIT-D (New Delhi)"
    },
    {
      quote: "The journey has given me good friends, memories of my childhood, change in my perspective, self-awareness and motivating messages.",
      author: "Senior Citizen",
      source: "Artful Aging Workshop"
    },
    {
      quote: "It helped me let go for a while and just be, perceive and live. It helped me meet individuals I never thought to interact with. It helped me end my day positively. It made me laugh and that’s pretty darn helpful to everyone.",
      author: "Participant",
      source: "O.P. Jindal Global University (Sonipat)"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGNpcmNsZSUyMGNvbW11bml0eSUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NzU3MjI0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
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
          <h1 className="text-6xl md:text-7xl mb-6 font-light tracking-wide">Group Support Circles</h1>
          <p className="text-2xl text-[#F1B75F]/85 font-light italic">
            Create, share, and heal together in community
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
              "Gathering in community to share stories, process life experiences, and find restoration through the gentle power of collaborative creative practices."
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
                <Users className="text-[#798C6C]" size={26} />
                Who is it for?
              </h2>
              <div className="text-stone-600 leading-relaxed space-y-4 font-light text-lg">
                <p>
                  Coming together in a safe community space to explore your inner world while being seen and held in a non-judgmental container. You do not need to walk alone in your struggles.
                </p>
                <p>
                  We offer designated thematic circles for individuals navigating shared experiences:
                </p>
                <ul className="grid grid-cols-2 gap-3 pt-2">
                  {["Grief & Loss", "Caregiver Support", "Women's Circles", "Queer Support", "Academic Stress", "Artful Aging"].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-base text-stone-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#798C6C]" />
                      {item}
                    </li>
                  ))}
                </ul>
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

          {/* Featured Testimonial (Vrinda Malhotra) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#798C6C]/10 to-[#798C6C]/5 p-8 md:p-16 rounded-[2.5rem] border border-[#798C6C]/20 shadow-xl relative overflow-hidden"
          >
            <Quote size={120} className="absolute -top-10 -left-6 text-[#798C6C]/10 rotate-180" />
            <div className="relative z-10 space-y-6">
              <div className="inline-flex px-4 py-1.5 bg-[#798C6C]/15 text-[#798C6C] rounded-full text-xs font-semibold uppercase tracking-wider">
                Featured Journey
              </div>
              
              <blockquote className="text-xl md:text-2xl text-stone-700 leading-relaxed italic font-light">
                "Vasvi organized and led a group art therapy course at IIIT Delhi, where I was then a student. Over the months of participating in these sessions, I was able to engage deeply with the creative process, reflect on my emotions, and explore new ways of expressing myself. The supportive and thoughtful environment she created not only made the sessions meaningful but also gave me the confidence to open up and connect with others in the group."
              </blockquote>

              <blockquote className="text-lg md:text-xl text-stone-600 leading-relaxed italic font-light pt-2">
                "Through this journey, I discovered aspects of myself I hadn’t recognized before and experienced significant personal growth, both emotionally and interpersonally... The process allowed me to reconnect with a sense of childlike creativity and curiosity that I had long assumed I had outgrown or left behind. Rediscovering that part of myself was both liberating and healing, making the experience truly transformative. I credit Vasvi entirely for guiding me through this journey. Her unwavering commitment to the work, combined with her empathetic and encouraging presence, set the tone for the group and inspired every participant."
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-[#798C6C]/20">
                <div className="w-14 h-14 rounded-full bg-[#798C6C] text-white flex items-center justify-center font-medium text-xl shadow-lg">
                  V
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-stone-800">Vrinda Malhotra</h4>
                  <p className="text-sm text-stone-500">PhD Student at George Mason University, USA</p>
                  <p className="text-xs text-stone-400 font-medium">Former Group Art Therapy Course Participant, IIIT Delhi</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid of secondary testimonials */}
          <div className="space-y-12">
            <div className="text-center max-w-xl mx-auto">
              <h3 className="text-3xl font-light text-stone-800 tracking-wide">Voices from the Circles</h3>
              <p className="text-sm text-stone-400 mt-2">Shared moments of connection and liberation</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {secondaryQuotes.map((q, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                  className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <p className="text-stone-600 leading-relaxed italic mb-6">
                    "{q.quote}"
                  </p>
                  <div className="flex items-center gap-3 border-t border-stone-100 pt-4">
                    <div className="w-9 h-9 rounded-full bg-stone-100 text-[#798C6C] flex items-center justify-center font-semibold text-sm">
                      {q.author[0]}
                    </div>
                    <div>
                      <p className="text-stone-800 font-semibold text-xs leading-none">{q.author}</p>
                      <p className="text-[#798C6C] text-[11px] font-medium mt-1 uppercase tracking-wider">{q.source}</p>
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
              className="inline-block px-12 py-5 bg-[#798C6C] text-white rounded-full hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-xl font-medium text-lg tracking-wide"
            >
              Join a Circle
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
