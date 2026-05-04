import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { X, ZoomIn } from "lucide-react";

export default function Gallery() {
  const [filter, setFilter] = useState<string>("all");
  const [columns, setColumns] = useState(3);
  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1024) setColumns(3);
      else if (window.innerWidth >= 768) setColumns(2);
      else setColumns(1);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const images = [
    { id: 1, url: "https://images.unsplash.com/photo-1775309587564-08da1b07a747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBtYXRlcmlhbHMlMjBwYWludCUyMGJydXNoZXMlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzU3MjI0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Creative Materials", category: "process" },
    { id: 2, url: "https://images.unsplash.com/photo-1595149417506-8651d6f7aeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHBvdHRlcnklMjBjbGF5JTIwZWFydGglMjBuYXR1cmFsfGVufDF8fHx8MTc3NTcyMjQ2NHww&ixlib=rb-4.1.0&q=80&w=1080", title: "Hands in Clay", category: "process" },
    { id: 3, url: "https://images.unsplash.com/photo-1770726527494-00c9373d36ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGpvdXJuYWwlMjBwYWludGluZyUyMHByb2Nlc3N8ZW58MXx8fHwxNzc1NzIyNDY1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Studio Atmosphere", category: "space" },
    { id: 4, url: "https://images.unsplash.com/photo-1746905162688-e8f38e0137d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBnYXJkZW4lMjBwbGFudHMlMjBzb2Z0JTIwbGlnaHR8ZW58MXx8fHwxNzc1NzIyNDY1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Natural Elements", category: "space" },
    { id: 5, url: "https://images.unsplash.com/photo-1616013719351-d77dd6fdadbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFydCUyMHRoZXJhcHklMjBtaW5kZnVsJTIwY3JlYXRpbmd8ZW58MXx8fHwxNzc1NzIyNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Creative Process", category: "process" },
    { id: 6, url: "https://images.unsplash.com/photo-1761971975724-31001b4de0bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwc3BhY2UlMjBwZWFjZWZ1bCUyMGNhbG0lMjBpbmRvb3J8ZW58MXx8fHwxNzc1NzIyNDY1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Mindful Creating", category: "visual" },
    { id: 7, url: "https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdHVkaW8lMjB3YXJtJTIwbGlnaHQlMjBjb3p5fGVufDF8fHx8MTc3NTcyMjQ2NHww&ixlib=rb-4.1.0&q=80&w=1080", title: "Workshop Space", category: "space" },
    { id: 8, url: "https://images.unsplash.com/photo-1601662528567-526cd06f6582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwd2F0ZXJjb2xvciUyMHRleHR1cmUlMjBwYXBlciUyMGNyZWFtfGVufDF8fHx8MTc3NTcyMjQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080", title: "Watercolor Textures", category: "visual" },
  ];

  const categories = [
    { value: "all", label: "All", count: images.length },
    { value: "visual", label: "Visual Arts", count: images.filter(i => i.category === "visual").length },
    { value: "process", label: "Creative Process", count: images.filter(i => i.category === "process").length },
    { value: "space", label: "Our Sanctuary", count: images.filter(i => i.category === "space").length },
  ];

  const filteredItems = filter === "all" ? images : images.filter((item) => item.category === filter);

  // Distribute items into columns for masonry
  const columnItems: (typeof images)[] = Array.from({ length: columns }, () => []);
  filteredItems.forEach((item, i) => {
    columnItems[i % columns].push(item);
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-24 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F1B75F]/8 to-[#798C6C]/5" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 relative z-10"
        >
          <h1 className="text-6xl md:text-7xl text-stone-800 mb-6 font-light tracking-wide">Gallery</h1>
          <p className="text-xl text-stone-500 max-w-2xl mx-auto font-light leading-relaxed">
            Glimpses of creative journeys, sacred spaces, and the beauty that emerges when heart meets art
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-6 mb-16">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <motion.button
              key={category.value}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setFilter(category.value)}
              className={`px-6 py-3 rounded-full transition-all duration-300 text-sm flex items-center gap-2 ${
                filter === category.value
                  ? "bg-[#8E270E] text-white shadow-lg shadow-[#8E270E]/20"
                  : "bg-white text-stone-600 hover:bg-stone-50 border border-stone-200 hover:border-[#F1B75F]/40"
              }`}
            >
              {category.label}
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                filter === category.value ? "bg-white/20" : "bg-stone-100"
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Gallery Grid (CSS-based masonry) */}
      <section className="container mx-auto px-6 pb-24">
        <div className="flex gap-6">
          {columnItems.map((col, colIdx) => (
            <div key={colIdx} className="flex-1 flex flex-col gap-6">
              {col.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="relative group overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                      <div className="p-6 text-white w-full flex items-end justify-between">
                        <div>
                          <h3 className="text-xl font-light mb-1">{item.title}</h3>
                          <p className="text-sm text-white/70 capitalize">{item.category}</p>
                        </div>
                        <ZoomIn size={20} className="text-white/80" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </motion.button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selectedImage.url}
              alt={selectedImage.title}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-8 text-center text-white"
            >
              <h3 className="text-2xl font-light">{selectedImage.title}</h3>
              <p className="text-sm text-white/60 capitalize mt-1">{selectedImage.category}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quote */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-900" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-6 text-center max-w-4xl relative z-10"
        >
          <div className="text-7xl text-[#F1B75F]/60 mb-6 font-serif">"</div>
          <blockquote className="text-3xl md:text-4xl text-white mb-8 font-light italic leading-relaxed">
            Art washes away from the soul the dust of everyday life
          </blockquote>
          <cite className="text-lg text-white/50 not-italic">— Pablo Picasso</cite>
        </motion.div>
      </section>
    </div>
  );
}