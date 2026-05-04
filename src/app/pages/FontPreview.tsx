import { motion } from "motion/react";
import { useEffect } from "react";

export default function FontPreview() {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Lora:wght@400;500;600&family=Cormorant+Garamond:wght@300;400;500;600;700&family=Source+Sans+3:wght@300;400;500;600&family=Inter:wght@300;400;500;600&family=Satisfy&family=Parisienne&family=Caveat:wght@400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const options = [
    {
      name: "Option 1",
      primary: { name: "Canela", family: "'Canela', 'Playfair Display', serif" },
      secondary: { name: "Inter", family: "'Inter', sans-serif" },
      accent: { name: "Parisienne", family: "'Parisienne', cursive" },
      color: "#8E270E",
    },
    {
      name: "Option 2",
      primary: { name: "Playfair Display", family: "'Playfair Display', serif" },
      secondary: { name: "Lora", family: "'Lora', serif" },
      accent: { name: "Satisfy", family: "'Satisfy', cursive" },
      color: "#F1B75F",
    },
    {
      name: "Option 3",
      primary: { name: "Cormorant Garamond", family: "'Cormorant Garamond', serif" },
      secondary: { name: "Source Sans 3", family: "'Source Sans 3', sans-serif" },
      accent: { name: "Caveat", family: "'Caveat', cursive" },
      color: "#798C6C",
    },
    {
      name: "Option 4",
      primary: { name: "Cormorant Garamond", family: "'Cormorant Garamond', serif" },
      secondary: { name: "Lora", family: "'Lora', serif" },
      accent: { name: "Satisfy", family: "'Satisfy', cursive" },
      color: "#8E270E",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/50 via-white to-rose-50/30 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl text-stone-800 mb-4 font-light">Font Combination Samples</h1>
          <p className="text-xl text-stone-600">Choose the perfect typography for Aroha Expressive Arts</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {options.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-200"
            >
              {/* Header */}
              <div
                className="p-8 text-white text-center"
                style={{ backgroundColor: option.color }}
              >
                <h2 className="text-3xl mb-2" style={{ fontFamily: option.primary.family, fontWeight: 300 }}>
                  {option.name}
                </h2>
                <div className="space-y-1 text-sm text-white/90">
                  <p style={{ fontFamily: option.secondary.family }}>
                    Primary: {option.primary.name}
                  </p>
                  <p style={{ fontFamily: option.secondary.family }}>
                    Secondary: {option.secondary.name}
                  </p>
                  <p style={{ fontFamily: option.secondary.family }}>
                    Accent: {option.accent.name}
                  </p>
                </div>
              </div>

              {/* Content Sample */}
              <div className="p-8 space-y-6">
                {/* Large Headline */}
                <div>
                  <p className="text-xs text-stone-400 mb-2 uppercase tracking-wider">Large Headline</p>
                  <h1
                    className="text-4xl text-stone-800 mb-2"
                    style={{ fontFamily: option.primary.family, fontWeight: 300 }}
                  >
                    About Aroha
                  </h1>
                </div>

                {/* Medium Headline */}
                <div>
                  <p className="text-xs text-stone-400 mb-2 uppercase tracking-wider">Medium Headline</p>
                  <h2
                    className="text-2xl text-stone-800 mb-2"
                    style={{ fontFamily: option.primary.family, fontWeight: 400 }}
                  >
                    The Heart of Aroha
                  </h2>
                </div>

                {/* Accent Text */}
                <div>
                  <p className="text-xs text-stone-400 mb-2 uppercase tracking-wider">Accent / Artistic</p>
                  <p
                    className="text-2xl"
                    style={{ fontFamily: option.accent.family, color: option.color }}
                  >
                    aroha
                  </p>
                </div>

                {/* Body Text */}
                <div>
                  <p className="text-xs text-stone-400 mb-2 uppercase tracking-wider">Body Text</p>
                  <p
                    className="text-base text-stone-600 leading-relaxed"
                    style={{ fontFamily: option.secondary.family, fontWeight: 400 }}
                  >
                    In Māori, <span style={{ fontFamily: option.accent.family, color: option.color }}>aroha</span> means love — unconditional, compassionate, transformative love. This is the essence of our practice: creating spaces where love becomes the soil in which healing takes root.
                  </p>
                </div>

                {/* Sample Quote */}
                <div className="border-l-4 pl-4 py-2" style={{ borderColor: option.color }}>
                  <p className="text-xs text-stone-400 mb-2 uppercase tracking-wider">Quote / Testimonial</p>
                  <p
                    className="text-base text-stone-700 italic leading-relaxed mb-2"
                    style={{ fontFamily: option.secondary.family, fontWeight: 400 }}
                  >
                    "In Aroha's gentle embrace, I found permission to feel everything I'd been holding back."
                  </p>
                  <p
                    className="text-sm text-stone-900"
                    style={{ fontFamily: option.secondary.family, fontWeight: 500 }}
                  >
                    — Maria Chen
                  </p>
                </div>

                {/* Button Sample */}
                <div>
                  <p className="text-xs text-stone-400 mb-2 uppercase tracking-wider">Button / CTA</p>
                  <button
                    className="px-6 py-3 text-white rounded-full transition-all hover:opacity-90"
                    style={{ backgroundColor: option.color, fontFamily: option.secondary.family, fontWeight: 500 }}
                  >
                    Connect With Us
                  </button>
                </div>

                {/* Small Text */}
                <div>
                  <p className="text-xs text-stone-400 mb-2 uppercase tracking-wider">Small Text / Caption</p>
                  <p
                    className="text-sm text-stone-500"
                    style={{ fontFamily: option.secondary.family, fontWeight: 400 }}
                  >
                    Individual Therapy Client • Workshop Participant
                  </p>
                </div>
              </div>

              {/* Full Sample Section */}
              <div className="px-8 pb-8">
                <div className="bg-stone-50 rounded-2xl p-6">
                  <p className="text-xs text-stone-400 mb-4 uppercase tracking-wider">Complete Sample</p>
                  <h3
                    className="text-3xl text-stone-800 mb-4"
                    style={{ fontFamily: option.primary.family, fontWeight: 300 }}
                  >
                    Expressive Arts Therapy
                  </h3>
                  <p
                    className="text-base text-stone-600 leading-relaxed mb-4"
                    style={{ fontFamily: option.secondary.family, fontWeight: 400 }}
                  >
                    Through creative expression — painting, writing, movement, music — we access parts of ourselves that words alone cannot reach. This is not about creating "good art" or being "talented."
                  </p>
                  <p
                    className="text-xl text-center"
                    style={{ fontFamily: option.accent.family, color: option.color }}
                  >
                    From roots to bloom, from heart to healing
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Font Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-sm text-stone-500 max-w-3xl mx-auto bg-amber-50 rounded-2xl p-6"
        >
          <p>
            All font options are now ready to preview. Option 1 features your installed Canela font with Playfair Display as a fallback.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
