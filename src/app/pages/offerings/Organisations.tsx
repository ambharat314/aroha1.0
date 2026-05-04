import { motion } from "motion/react";
import { Link } from "react-router";

export default function Organisations() {
  const orgTypes = [
    {
      title: "Corporates",
      intro: "[One line about expressive arts in corporate context]",
      whoIsItFor: "For employees, clients, and leadership seeking creative approaches to wellbeing, team cohesion, and innovation.",
      color: "#8E270E",
    },
    {
      title: "Education",
      intro: "[One line about expressive arts in educational context]",
      whoIsItFor: "For students, staff, and faculty looking to integrate creative expression into learning and community building.",
      color: "#F1B75F",
    },
    {
      title: "Social Impact",
      intro: "[One line about expressive arts in social impact context]",
      whoIsItFor: "For the communities being served and for organizational employees and staff supporting social change.",
      color: "#798C6C",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya3Nob3AlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3NTcyMjQ2NHww&ixlib=rb-4.1.0&q=80&w=1080')`,
          }}
        >
          <div className="absolute inset-0 bg-stone-900/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6 max-w-4xl"
        >
          <h1 className="text-6xl md:text-7xl mb-6 font-light tracking-wide">Organisations</h1>
          <p className="text-2xl text-[#F1B75F]/70 font-light">
            Expressive arts programs for teams and communities
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {orgTypes.map((org, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-3xl shadow-lg"
            >
              <h2 className="text-4xl text-stone-800 mb-6 font-light">{org.title}</h2>

              <div className="space-y-6">
                {/* Intro */}
                <div>
                  <p className="text-xl text-stone-600 leading-relaxed font-light">
                    {org.intro}
                  </p>
                </div>

                {/* Who is it for */}
                <div>
                  <h3 className="text-2xl text-stone-800 mb-3 font-light">Who is it for</h3>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    {org.whoIsItFor}
                  </p>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-2xl text-stone-800 mb-3 font-light">Benefits</h3>
                  <p className="text-lg text-stone-600 leading-relaxed">
                    [Add benefits content here]
                  </p>
                </div>

                {/* Formats */}
                <div>
                  <h3 className="text-2xl text-stone-800 mb-4 font-light">Formats for Organisations</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-stone-100 text-stone-700 rounded-full">
                      Teams
                    </span>
                    <span className="px-4 py-2 bg-stone-100 text-stone-700 rounded-full">
                      Office Wide
                    </span>
                    <span className="px-4 py-2 bg-stone-100 text-stone-700 rounded-full">
                      Offsites / Retreats
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            to="/home/contact"
            className="inline-block px-10 py-4 bg-[#8E270E] text-white rounded-full hover:opacity-90 transition-all duration-300 shadow-lg font-medium"
          >
            Partner With Us
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
