import { motion } from "motion/react";
import { Link } from "react-router";

export default function NatureRetreats() {
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
          <div className="absolute inset-0 bg-stone-900/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6 max-w-4xl"
        >
          <h1 className="text-6xl md:text-7xl mb-6 font-light tracking-wide">Nature Retreats</h1>
          <p className="text-2xl text-[#F1B75F]/70 font-light">
            Immersive experiences in outdoor sanctuary spaces
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xl text-stone-600 leading-relaxed font-light">
              [One line about expressive arts in nature retreat context]
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-3xl shadow-lg mb-12"
          >
            {/* Who is it for */}
            <div className="mb-8">
              <h2 className="text-3xl text-stone-800 mb-4 font-light">Who is it for</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                [Add who is it for content here]
              </p>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-3xl text-stone-800 mb-4 font-light">Benefits</h2>
              <p className="text-lg text-stone-600 leading-relaxed">
                [Add benefits content here]
              </p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link
              to="/home/contact"
              className="inline-block px-10 py-4 bg-[#8E270E] text-white rounded-full hover:opacity-90 transition-all duration-300 shadow-lg font-medium"
            >
              Explore Upcoming Retreats
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
