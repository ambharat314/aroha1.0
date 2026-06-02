import { motion } from "motion/react";
import { BookOpen, ExternalLink } from "lucide-react";
import blogVideo from "../../assets/MVI_3510-1.mp4";

export default function Blog() {
  // Replace with your Medium username or publication name
  const mediumUsername = "YOUR_MEDIUM_USERNAME";

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative py-32 text-center overflow-hidden min-h-[50vh] flex flex-col justify-center">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source
            src={blogVideo}
            type="video/mp4"
          />
        </video>
        
        {/* Dark Overlay for text contrast */}
        <div className="absolute inset-0 bg-stone-900/60" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 relative z-10"
        >
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          >
            <BookOpen className="w-14 h-14 text-[#F1B75F] mx-auto mb-6 drop-shadow-md" />
          </motion.div>
          <h1 className="text-6xl md:text-7xl text-white mb-6 font-light tracking-wide drop-shadow-lg">Blog</h1>
          <p className="text-xl text-white/95 max-w-2xl mx-auto font-light drop-shadow-md">
            Reflections on creativity, healing, and the transformative journey of art
          </p>
        </motion.div>
      </section>

      {/* Medium Integration */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl text-stone-800 mb-4 font-light">Latest Stories</h2>
            <p className="text-lg text-stone-600 font-light">
              Read our latest articles on Medium
            </p>
          </div>

          {/* Medium Embed */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden mb-8">
            <div className="p-8 bg-stone-50 border-b border-stone-200">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-2xl text-stone-800 mb-2 font-light">Follow us on Medium</h3>
                  <p className="text-stone-600">
                    Explore our full collection of stories, insights, and reflections
                  </p>
                </div>
                <a
                  href={`https://medium.com/@${mediumUsername}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#8E270E] text-white rounded-full hover:bg-[#9a1318] transition-all duration-300 font-medium"
                >
                  Visit Medium
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Medium Feed Iframe Embed */}
            <div className="p-8">
              <iframe
                src={`https://medium.com/@${mediumUsername}`}
                width="100%"
                height="600"
                style={{ border: 'none' }}
                title="Medium Blog Posts"
              />
            </div>
          </div>

          {/* Alternative: Manual Medium Profile Link */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl text-stone-800 mb-4 font-light">Featured Topics</h3>
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-2 bg-[#F1B75F]/20 text-stone-700 rounded-full text-sm">
                  Art Therapy
                </span>
                <span className="px-4 py-2 bg-[#798C6C]/20 text-stone-700 rounded-full text-sm">
                  Creative Expression
                </span>
                <span className="px-4 py-2 bg-[#8E270E]/20 text-stone-700 rounded-full text-sm">
                  Healing
                </span>
                <span className="px-4 py-2 bg-[#F1B75F]/20 text-stone-700 rounded-full text-sm">
                  Community
                </span>
                <span className="px-4 py-2 bg-[#798C6C]/20 text-stone-700 rounded-full text-sm">
                  Nature
                </span>
              </div>
              <p className="text-stone-600 leading-relaxed">
                Dive into our explorations of expressive arts therapy, creative practices, and the transformative power of artistic expression in healing journeys.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl text-stone-800 mb-4 font-light">Subscribe on Medium</h3>
              <p className="text-stone-600 leading-relaxed mb-6">
                Get notified when we publish new stories. Follow our Medium publication to stay connected with our latest insights and reflections.
              </p>
              <a
                href={`https://medium.com/@${mediumUsername}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-full hover:bg-stone-700 transition-all duration-300 font-medium"
              >
                Follow on Medium
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Instructions */}
          <div className="mt-12 p-6 bg-amber-50 border border-amber-200 rounded-2xl">
            <p className="text-sm text-stone-700 text-center">
              <strong>Setup Instructions:</strong> Replace <code className="px-2 py-1 bg-white rounded">YOUR_MEDIUM_USERNAME</code> with your actual Medium username (e.g., "arohaarts" for medium.com/@arohaarts)
            </p>
          </div>
        </motion.div>
      </section>

      {/* Newsletter CTA */}
      <section className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto overflow-hidden rounded-3xl p-16 text-center"
        >
          <div className="absolute inset-0 bg-stone-800" />
          <div className="relative z-10 text-white">
            <h2 className="text-4xl mb-6 font-light">Never Miss a Story</h2>
            <p className="text-xl mb-8 text-white/80 font-light">
              Weekly insights on creativity, healing practices, and the transformative journey of expressive arts
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-6 py-4 rounded-full text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#F1B75F]"
              />
              <button className="px-8 py-4 bg-[#8E270E] hover:bg-[#9a1318] text-white rounded-full transition-all duration-300 whitespace-nowrap font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
