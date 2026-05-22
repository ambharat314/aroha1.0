import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, User, Building2, Users, Mountain } from "lucide-react";
import { useEffect, useState } from "react";
import { sanityClient, urlFor } from "../../sanityClient";

export default function Offerings() {
  const [sanityOfferings, setSanityOfferings] = useState<any[]>([]);

  useEffect(() => {
    sanityClient.fetch('*[_type == "offering"]').then((data) => {
      setSanityOfferings(data);
    }).catch(console.error);
  }, []);

  const defaultOfferings = [
    {
      id: 1,
      title: "Individuals",
      icon: User,
      description: "One-on-one expressive arts therapy sessions tailored to your unique journey of healing, growth, and self-discovery. A safe, compassionate space to explore what lives within you.",
      image: "https://images.unsplash.com/photo-1616013719351-d77dd6fdadbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFydCUyMHRoZXJhcHklMjBtaW5kZnVsJTIwY3JlYXRpbmd8ZW58MXx8fHwxNzc1NzIyNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/home/offerings/individuals",
      color: "#8E270E",
    },
    {
      id: 2,
      title: "Organisations",
      icon: Building2,
      description: "Expressive arts programs designed for corporates, academic institutions, and social impact organizations. Foster creativity, collaboration, and wellbeing in your teams.",
      subsections: ["Corporates", "Academia", "Social Impact"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya3Nob3AlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3NTcyMjQ2NHww&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/home/offerings/organisations",
      color: "#F1B75F",
    },
    {
      id: 3,
      title: "Group Support Circles",
      icon: Users,
      description: "Regular peer-led circles where creative expression meets community. Find belonging, witness others' journeys, and be witnessed in yours.",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGNpcmNsZSUyMGNvbW11bml0eSUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NzU3MjI0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/home/offerings/group-circles",
      color: "#798C6C",
    },
    {
      id: 4,
      title: "Nature Retreats",
      icon: Mountain,
      description: "Multi-day immersive experiences where the natural world becomes our co-facilitator. Reconnect with earth, creativity, and your deepest self.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjByZXRyZWF0JTIwbW91bnRhaW5zJTIwcGVhY2V8ZW58MXx8fHwxNzc1NzIyNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      link: "/home/offerings/nature-retreats",
      color: "#8E270E",
    },
  ];

  const offerings = sanityOfferings.length > 0 ? sanityOfferings.map((o, idx) => ({
    id: o._id,
    title: o.title,
    icon: idx === 0 ? User : idx === 1 ? Building2 : idx === 2 ? Users : Mountain,
    description: o.description,
    subsections: o.subsections,
    image: o.image ? urlFor(o.image).url() : "https://images.unsplash.com/photo-1616013719351-d77dd6fdadbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFydCUyMHRoZXJhcHklMjBtaW5kZnVsJTIwY3JlYXRpbmd8ZW58MXx8fHwxNzc1NzIyNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    link: o.link || "/home/offerings",
    color: o.color || "#8E270E",
  })) : defaultOfferings;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1775309587564-08da1b07a747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBtYXRlcmlhbHMlMjBwYWludCUyMGJydXNoZXMlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzU3MjI0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080')`,
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
          <h1 className="text-6xl md:text-7xl mb-6 font-light tracking-wide">Offerings</h1>
          <p className="text-xl md:text-2xl text-[#F1B75F]/80 font-light">
            Diverse pathways to creative healing and self-discovery
          </p>
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Intro */}
      <section className="container mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xl text-stone-500 leading-relaxed font-light">
            Just as a garden holds many varieties of flowers, each beautiful in their own way,
            we offer multiple creative modalities. Every person finds their own path to healing —
            we're here to walk alongside you.
          </p>
        </motion.div>
      </section>

      {/* Offerings Cards */}
      <section className="container mx-auto px-6 pb-24">
        <div className="max-w-6xl mx-auto space-y-12">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl overflow-hidden transition-shadow duration-500 border border-stone-100"
            >
              <div className={`grid md:grid-cols-2 gap-0 ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={`relative h-[400px] overflow-hidden ${index % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div
                    className="inline-flex items-center justify-center w-12 h-12 rounded-xl text-white mb-6 shadow-md"
                    style={{ backgroundColor: offering.color }}
                  >
                    <offering.icon size={22} />
                  </div>
                  <h2 className="text-3xl md:text-4xl text-stone-800 mb-4 font-light">{offering.title}</h2>

                  {offering.subsections && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {offering.subsections.map((sub, idx) => (
                        <span key={idx} className="px-3 py-1 bg-stone-50 text-stone-600 rounded-full text-sm border border-stone-100">
                          {sub}
                        </span>
                      ))}
                    </div>
                  )}

                  <p className="text-lg text-stone-500 leading-relaxed mb-8">{offering.description}</p>

                  <Link
                    to={offering.link}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-white transition-all duration-300 hover:gap-4 shadow-lg self-start group/btn"
                    style={{ backgroundColor: offering.color }}
                  >
                    Learn More
                    <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
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
          <div className="relative z-10 text-white">
            <h2 className="text-4xl mb-6 font-light">Not Sure Where to Start?</h2>
            <p className="text-xl mb-8 text-white/85 font-light">
              Let's have a conversation about what you're seeking and find the right offering for you.
            </p>
            <Link
              to="/home/contact"
              className="inline-block px-10 py-4 bg-white text-stone-800 rounded-full hover:bg-stone-50 transition-all duration-300 shadow-xl font-medium hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
