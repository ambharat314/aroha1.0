import { motion } from "motion/react";

export default function Events() {

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1503264116251-35a269479413?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDF8YWxsfHx8fHx8fHx8MTY5Njg0MTg2MA&ixlib=rb-4.1.0&q=80&w=1080')`,
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
          <h1 className="text-6xl md:text-7xl mb-6 font-light tracking-wide">Events</h1>
          <p className="text-2xl text-[#F1B75F]/70 font-light">
            Gather, create, and grow together in community
          </p>
        </motion.div>
      </section>

      {/* Luma Calendar Embed */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-5xl text-stone-800 mb-4 font-light text-center">
            Upcoming Gatherings
          </h2>
          <p className="text-center text-stone-600 mb-12 font-light text-lg">
            Circle your calendars, mark your hearts
          </p>

          <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
            <iframe
              src="https://lu.ma/embed-checkout/aroha-events-calendar"
              width="100%"
              height="800"
              style={{ border: 'none', borderRadius: '1.5rem' }}
              title="Aroha Events Calendar"
            />
          </div>

          <p className="text-center text-stone-500 mt-6 text-sm">
            Replace YOUR_LUMA_CALENDAR_ID with your actual Luma calendar URL
          </p>
        </motion.div>
      </section>

      {/* Past Events */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-stone-50" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl text-stone-800 mb-4 font-light text-center"
          >
            Past Gatherings
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center text-stone-600 mb-16 font-light text-lg"
          >
            Moments of connection, creativity, and community
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-64 rounded-3xl overflow-hidden mb-4 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1775309587564-08da1b07a747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBtYXRlcmlhbHMlMjBwYWludCUyMGJydXNoZXMlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzU3MjI0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Spring Equinox Circle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-orange-800/40 to-amber-800/40" />
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-2xl text-stone-800 mb-2 font-light">Spring Equinox Circle</h3>
                <p className="text-sm text-stone-500 mb-3">March 2026</p>
                <p className="text-stone-600 leading-relaxed">
                  We gathered at dawn to honor balance and new beginnings through intuitive painting and movement.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-64 rounded-3xl overflow-hidden mb-4 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1595149417506-8651d6f7aeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHBvdHRlcnklMjBjbGF5JTIwZWFydGglMjBuYXR1cmFsfGVufDF8fHx8MTc3NTcyMjQ2NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Winter Clay Workshop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-green-700/40 to-green-600/40" />
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-2xl text-stone-800 mb-2 font-light">Winter Clay Workshop</h3>
                <p className="text-sm text-stone-500 mb-3">February 2026</p>
                <p className="text-stone-600 leading-relaxed">
                  Hands in earth, hearts in community. We shaped clay vessels while exploring themes of containment and release.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-64 rounded-3xl overflow-hidden mb-4 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm91cCUyMGNpcmNsZSUyMGNvbW11bml0eSUyMGdhdGhlcmluZ3xlbnwxfHx8fDE3NzU3MjI0NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="New Year Visioning"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-700/40 to-amber-700/40" />
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-2xl text-stone-800 mb-2 font-light">New Year Visioning</h3>
                <p className="text-sm text-stone-500 mb-3">January 2026</p>
                <p className="text-stone-600 leading-relaxed">
                  A circle of intention-setting through collage, writing, and shared dreaming for the year ahead.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-64 rounded-3xl overflow-hidden mb-4 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1761971975724-31001b4de0bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwc3BhY2UlMjBwZWFjZWZ1bCUyMGNhbG0lMjBpbmRvb3J8ZW58MXx8fHwxNzc1NzIyNDY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Grief & Gratitude Circle"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-red-700/40 to-orange-700/40" />
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-2xl text-stone-800 mb-2 font-light">Grief & Gratitude Circle</h3>
                <p className="text-sm text-stone-500 mb-3">December 2025</p>
                <p className="text-stone-600 leading-relaxed">
                  We held space for both sorrow and celebration, honoring what we've lost and what remains.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-64 rounded-3xl overflow-hidden mb-4 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1746905162688-e8f38e0137d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBnYXJkZW4lMjBwbGFudHMlMjBzb2Z0JTIwbGlnaHR8ZW58MXx8fHwxNzc1NzIyNDY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Autumn Mandala Workshop"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-amber-800/40 to-orange-800/40" />
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-2xl text-stone-800 mb-2 font-light">Autumn Mandala Workshop</h3>
                <p className="text-sm text-stone-500 mb-3">November 2025</p>
                <p className="text-stone-600 leading-relaxed">
                  Creating nature mandalas with leaves, seeds, and stones—ephemeral art honoring cycles of change.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-64 rounded-3xl overflow-hidden mb-4 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29ya3Nob3AlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3NTcyMjQ2NHww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Summer Solstice Celebration"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-700/40 to-green-600/40" />
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <h3 className="text-2xl text-stone-800 mb-2 font-light">Summer Solstice Celebration</h3>
                <p className="text-sm text-stone-500 mb-3">June 2025</p>
                <p className="text-stone-600 leading-relaxed">
                  Dancing, drumming, and painting under the longest light—celebrating abundance and joy together.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto overflow-hidden rounded-3xl p-16 text-center"
        >
          <div className="absolute inset-0 bg-[#8E270E]" />
          <div className="relative z-10 text-white">
            <h2 className="text-4xl mb-6 font-light">Stay in the Loop</h2>
            <p className="text-xl mb-8 text-white/90 font-light">
              Monthly love letters with event updates, creative inspiration, and sanctuary news
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-6 py-4 rounded-full text-stone-800 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="px-8 py-4 bg-white text-stone-800 rounded-full hover:bg-stone-50 transition-colors duration-300 font-medium whitespace-nowrap">
                Join Us
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}