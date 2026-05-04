import { motion } from "motion/react";
import { Link } from "react-router";

export default function GroupCircles() {
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
          <div className="absolute inset-0 bg-stone-900/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6 max-w-4xl"
        >
          <h1 className="text-6xl md:text-7xl mb-6 font-light tracking-wide">Group Support Circles</h1>
          <p className="text-2xl text-[#F1B75F]/70 font-light">
            Create, share, and heal together in community
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
              [One line about expressive arts in this context]
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
              <p className="text-lg text-stone-600 leading-relaxed mb-4">
                Coming together in a safe community space to explore your inner world while being seen and held in a non-judgemental container. You don't need to feel alone in your struggles. Find a community of likeminded people.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                Groups for people going through grief, caregiving roles, women's circles, queer circles, and more.
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
              className="inline-block px-10 py-4 bg-[#798C6C] text-white rounded-full hover:opacity-90 transition-all duration-300 shadow-lg font-medium"
            >
              Join a Circle
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
