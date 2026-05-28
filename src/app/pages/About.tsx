import { motion } from "motion/react";
import { Link } from "react-router";
import { useEffect } from "react";
import { Heart, Leaf, Users, Palette, Move, PenLine, Music } from "lucide-react";
import logo from "figma:asset/91c1f4056b8afb06da9b380f44ed2fc27d4346d0.png";
import vasviProfile from "../../assets/vasvi.jpg";
import company1 from "../../assets/companies/media__1779857952669.png";
import company2 from "../../assets/companies/media__1779857952717.png";
import company3 from "../../assets/companies/media__1779857952759.png";
import company4 from "../../assets/companies/media__1779857952774.png";
import company5 from "../../assets/companies/media__1779857952828.png";
import company6 from "../../assets/companies/media__1779858431343.png";
import company7 from "../../assets/companies/media__1779858431354.png";
import company8 from "../../assets/companies/media__1779858431483.png";
import company9 from "../../assets/companies/media__1779858431542.png";
import company10 from "../../assets/companies/media__1779858431568.png";
import company11 from "../../assets/companies/media__1779858530652.png";
import company12 from "../../assets/companies/media__1779858530703.png";
import company13 from "../../assets/companies/media__1779858530736.png";
import company14 from "../../assets/companies/media__1779858530764.png";
import company15 from "../../assets/companies/media__1779858530783.png";

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

          <h1 className="text-6xl md:text-7xl mb-6 font-light tracking-wide">About Aroha</h1>
          <p className="text-xl md:text-2xl text-[#F1B75F]/80 font-light italic">
            From roots to bloom, from heart to healing
          </p>
        </motion.div>


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

          <div className="mb-20 bg-gradient-to-br from-white to-amber-50/30 p-8 md:p-12 rounded-3xl shadow-lg border border-stone-100">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-stone-600 leading-relaxed text-lg"
            >
              {/* Mobile-only centered logo block (non-floating on mobile) */}
              <div className="md:hidden flex items-center justify-center mb-8 relative w-56 h-56 mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                  className="absolute w-64 h-64 pointer-events-none"
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(241,183,95,0.15)" strokeWidth="0.5" strokeDasharray="3 6" />
                  </svg>
                </motion.div>
                <div className="w-48 h-48 flex items-center justify-center rounded-full overflow-hidden bg-white shadow-lg border border-stone-100 p-2 relative z-10">
                  <img src={logo} alt="Aroha Expressive Arts" className="w-full h-full object-contain rounded-full" />
                </div>
              </div>

              <div className="space-y-6">
                <p>
                  <span className="text-[#F1B75F] font-accent text-2xl font-semibold">Aroha</span>, a word from the Māori language, is often translated as love—but its meaning runs deeper. It speaks of a relational way of being—one that holds compassion, empathy, presence, and an affectionate connection with oneself, others, and the world.
                </p>
                <p>
                  Aroha is not just something we feel; it is something we live.
                </p>

                {/* Logo wrapper floated to the right on desktop (placed here to wrap text above & below) */}
                <div className="float-right ml-8 mb-6 relative hidden md:flex items-center justify-center w-72 h-72">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                    className="absolute w-80 h-80 pointer-events-none"
                  >
                    <svg viewBox="0 0 200 200" className="w-full h-full">
                      <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(241,183,95,0.15)" strokeWidth="0.5" strokeDasharray="3 6" />
                    </svg>
                  </motion.div>
                  <div className="w-64 h-64 flex items-center justify-center rounded-full overflow-hidden bg-white shadow-lg border border-stone-100 p-2 relative z-10">
                    <img src={logo} alt="Aroha Expressive Arts" className="w-full h-full object-contain rounded-full" />
                  </div>
                </div>

                <p>
                  In Sanskrit, a resonant parallel emerges in āroha (आरोह)—meaning ascent, rising, or an upward movement. A quiet unfolding. A becoming.
                </p>
                <p className="text-stone-700 font-medium">
                  Together, these meanings hold a shared essence: a movement of the heart—towards connection, towards compassion, towards light.
                </p>
                <p>
                  The expressive arts offer a natural pathway for this unfolding. They speak in a language beyond words—engaging the body, the senses, the emotions, and the imagination.
                </p>
                <p>
                  Through image, movement, sound, and form, they allow what is often unseen or unspoken to find expression—safely, and with care. In this expression, something begins to transform.
                </p>
              <p className="text-center text-xl md:text-2xl text-stone-500/90 font-light italic mt-12 pt-8 border-t border-stone-100/80 max-w-2xl mx-auto clear-both">
                Or as Stephen K. Levine writes,<br className="hidden sm:inline" />
                “Expression is itself transformation. This is the message art brings.”
              </p>
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
                title: "Nurturing",
                icon: Leaf,
                color: "#798C6C",
                bgColor: "from-[#798C6C]/8 to-[#798C6C]/3",
                description: "Like the seed knows how to become a tree, you carry innate wisdom for your own becoming. We nurture the conditions for natural, organic transformation.",
              },
              {
                title: "Connection",
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

          <div className="mb-20 overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-stone-600 leading-relaxed text-lg"
            >
              {/* Vasvi Image Floated Left on desktop */}
              <div className="float-left mr-10 mb-6 mt-2 relative hidden md:flex items-center justify-center w-[360px] h-[360px] group">
                <div className="absolute -inset-3 bg-gradient-to-br from-[#F1B75F]/20 to-[#8E270E]/15 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                <div className="relative overflow-hidden rounded-full aspect-square w-80 h-80 shadow-lg group-hover:shadow-2xl transition-all duration-500 border-4 border-white z-10">
                  <img
                    src={vasviProfile}
                    alt="Vasvi - Expressive Arts Therapist"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              {/* Mobile-only centered Vasvi image (non-floating) */}
              <div className="md:hidden flex items-center justify-center mb-8 relative w-64 h-64 mx-auto">
                <div className="absolute -inset-2 bg-gradient-to-br from-[#F1B75F]/15 to-[#8E270E]/10 rounded-full blur-lg pointer-events-none" />
                <div className="relative overflow-hidden rounded-full aspect-square w-56 h-56 shadow-md border-4 border-white z-10">
                  <img
                    src={vasviProfile}
                    alt="Vasvi - Expressive Arts Therapist"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-6">
                {/* Title & Qualifications Header */}
                <div className="border-b border-stone-100 pb-6 mb-6">
                  <h3 className="text-3xl text-stone-800 font-light mb-1">Vasvi</h3>
                  <div className="flex flex-col gap-1 text-stone-500 font-light text-sm mb-4">
                    <p className="font-medium text-[#8E270E] text-base">Founder — Aroha Expressive Arts</p>
                    <p className="text-stone-400">Ex Co-Founder — Abhyaantar Healing Arts (2016 - 2026)</p>
                  </div>
                  <p className="text-stone-600 font-medium text-base leading-relaxed">
                    Organisational Psychologist | Certified Intermodal Expressive Arts Therapy Practitioner | Certified Sivananda Yoga Teacher (200 RYT)
                  </p>
                </div>

                <p>
                  Vasvi’s journey with mental health and wellbeing began early in life with a deep curiosity about what drives human behaviour and shapes their inner worlds. After formal training in psychology with a specialisation in organisational psychology, she spent over seven years in Human Resources and leadership consulting with multinational organisations. Eventually, a desire to slow down and reconnect with herself brought her back to the arts — a lifelong source of healing and self-expression — revealing a path that beautifully merged psychology, creativity, and wellbeing.
                </p>
                <p>
                  Today, Vasvi is a certified Expressive Arts Therapy Practitioner, Organisational Psychologist, and Yoga Teacher with over a decade of experience facilitating transformative wellbeing spaces for diverse populations across sectors including - education, social impact, and corporates. Through Aroha Expressive Arts, she integrates creative arts with mindfulness, yoga, and nature-based practices to support emotional, mental, somatic, and spiritual wellbeing.
                </p>
                <p>
                  At the heart of Vasvi’s practice is a socially inclusive, trauma-sensitive approach rooted in compassion. She creates safe, non-judgemental spaces where individuals, groups, and communities can reconnect with themselves through creativity, play, embodiment, and reflection. Rather than focusing on fixing or diagnosing, Vasvi’s work invites people to access their inner wisdom, cultivate resilience, and rediscover more authentic and meaningful ways of being.
                </p>
              </div>

              {/* Centered / clean clearing block for quote */}
              <div className="clear-both pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-[#F1B75F]/10 to-[#F1B75F]/5 rounded-3xl border border-[#F1B75F]/15 max-w-4xl mx-auto"
                >
                  <div className="text-4xl text-[#F1B75F]/40 mb-2 font-serif">"</div>
                  <p className="text-stone-700 italic text-lg leading-relaxed">
                    My work is my sacred calling, and one of my greatest joys is witnessing people light up with childlike wonder as they step into spaces of creativity, imagination, spontaneity, and play. I deeply cherish those breakthrough moments when the creative process opens unexpected pathways — offering fresh insights, new perspectives, and a sense of possibility to those who may have felt stuck, overwhelmed, or disconnected in their everyday lives.
                  </p>
                  <p className="text-stone-900 font-medium mt-4">— Vasvi</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collaborations Marquee */}
      <section className="py-16 bg-stone-50 border-y border-stone-100 overflow-hidden">
        <div className="container mx-auto px-6 mb-10 text-center">
          <h3 className="text-3xl text-stone-800 font-light">Past Collabs</h3>
        </div>
        <div className="relative w-full overflow-hidden flex">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-stone-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-stone-50 to-transparent z-10" />
          
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex w-max items-center"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                {[
                  { type: "image", src: company1, alt: "Company 1" },
                  { type: "image", src: company2, alt: "Company 2" },
                  { type: "image", src: company3, alt: "Company 3" },
                  { type: "image", src: company4, alt: "Company 4" },
                  { type: "image", src: company5, alt: "Company 5" },
                  { type: "image", src: company6, alt: "Company 6" },
                  { type: "image", src: company7, alt: "Company 7" },
                  { type: "image", src: company8, alt: "Company 8" },
                  { type: "image", src: company9, alt: "Company 9" },
                  { type: "image", src: company10, alt: "Company 10" },
                  { type: "image", src: company11, alt: "Company 11" },
                  { type: "image", src: company12, alt: "Company 12" },
                  { type: "image", src: company13, alt: "Company 13" },
                  { type: "image", src: company14, alt: "Company 14" },
                  { type: "image", src: company15, alt: "Company 15" }
                ].map((company, index) => (
                  <div key={index} className="w-56 h-24 flex items-center justify-center shrink-0 mx-8">
                    {company.type === "image" ? (
                      <img src={company.src} alt={company.alt} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                    ) : (
                      <span className="text-xl text-stone-400 font-medium tracking-wide text-center">
                        {company.name}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
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
                quote: "I realized that I haven’t been in touch with art just for therapy or expressing and understanding myself or my thoughts. Through movement exploration I realised that my posture or stance in life at this time is perfect, in whatever way it is. I felt very good about myself today. I felt like I could accept myself wholly whatever I am.",
                author: "Participant",
                role: "The Road Back to You Workshop",
                color: "#8E270E",
              },
              {
                quote: "This session made me feel connected to the world, a part of everything. It felt as if I belong. It helped me recognize silent aspects of my own self and made me realize that I can just be and still be accepted. I haven’t felt this peaceful in a very long time.",
                author: "Participant",
                role: "O.P. Jindal Global University (Sonipat)",
                color: "#F1B75F",
              },
              {
                quote: "Vasvi’s session helped me to interact with my inner self and experience her. The session went beautifully and we all were happy at the end of the session. It made me feel more relaxed and helped me to look into my true self. I felt liberated after this session.",
                author: "Student",
                role: "IIIT-D (New Delhi)",
                color: "#798C6C",
              },
              {
                quote: "The journey has given me good friends, memories of my childhood, change in my perspective, self-awareness and motivating messages.",
                author: "Senior Citizen",
                role: "Artful Aging Workshop",
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