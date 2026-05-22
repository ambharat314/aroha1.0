import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { X, ZoomIn, Image as ImageIcon, ChevronLeft, ChevronRight, LayoutGrid, Columns, Rows, Grid3X3, Sparkles, GalleryHorizontal } from "lucide-react";
import { sanityClient, urlFor } from "../../sanityClient";

export default function Gallery() {
  const [sanityImages, setSanityImages] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [layoutType, setLayoutType] = useState<"bento" | "masonry" | "rows" | "grid" | "scattered" | "carousel">("bento");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [columns, setColumns] = useState(3);

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    sanityClient.fetch('*[_type == "gallery"]').then((data) => {
      setSanityImages(data);
    }).catch(console.error);
  }, []);

  useEffect(() => {
    const updateColumns = () => {
      if (window.innerWidth >= 1280) setColumns(4);
      else if (window.innerWidth >= 1024) setColumns(3);
      else if (window.innerWidth >= 768) setColumns(2);
      else setColumns(1);
    };
    updateColumns();
    window.addEventListener("resize", updateColumns);
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const defaultImages = [
    { id: 1, url: "https://images.unsplash.com/photo-1775309587564-08da1b07a747?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBtYXRlcmlhbHMlMjBwYWludCUyMGJydXNoZXMlMjBjcmVhdGl2ZXxlbnwxfHx8fDE3NzU3MjI0NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080", title: "Creative Materials", category: "process" },
    { id: 2, url: "https://images.unsplash.com/photo-1595149417506-8651d6f7aeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMHBvdHRlcnklMjBjbGF5JTIwZWFydGglMjBuYXR1cmFsfGVufDF8fHx8MTc3NTcyMjQ2NHww&ixlib=rb-4.1.0&q=80&w=1080", title: "Hands in Clay", category: "process" },
    { id: 3, url: "https://images.unsplash.com/photo-1770726527494-00c9373d36ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGpvdXJuYWwlMjBwYWludGluZyUyMHByb2Nlc3N8ZW58MXx8fHwxNzc1NzIyNDY1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Studio Atmosphere", category: "space" },
    { id: 4, url: "https://images.unsplash.com/photo-1746905162688-e8f38e0137d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3RhbmljYWwlMjBnYXJkZW4lMjBwbGFudHMlMjBzb2Z0JTIwbGlnaHR8ZW58MXx8fHwxNzc1NzIyNDY1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Natural Elements", category: "space" },
    { id: 5, url: "https://images.unsplash.com/photo-1616013719351-d77dd6fdadbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMGFydCUyMHRoZXJhcHklMjBtaW5kZnVsJTIwY3JlYXRpbmd8ZW58MXx8fHwxNzc1NzIyNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Creative Process", category: "process" },
    { id: 6, url: "https://images.unsplash.com/photo-1761971975724-31001b4de0bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwc3BhY2UlMjBwZWFjZWZ1bCUyMGNhbG0lMjBpbmRvb3J8ZW58MXx8fHwxNzc1NzIyNDY1fDA&ixlib=rb-4.1.0&q=80&w=1080", title: "Mindful Creating", category: "visual" },
    { id: 7, url: "https://images.unsplash.com/photo-1768471125958-78556538fadc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjBzdHVkaW8lMjB3YXJtJTIwbGlnaHQlMjBjb3p5fGVufDF8fHx8MTc3NTcyMjQ2NHww&ixlib=rb-4.1.0&q=80&w=1080", title: "Workshop Space", category: "space" },
    { id: 8, url: "https://images.unsplash.com/photo-1601662528567-526cd06f6582?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0JTIwd2F0ZXJjb2xvciUyMHRleHR1cmUlMjBwYXBlciUyMGNyZWFtfGVufDF8fHx8MTc3NTcyMjQ2M3ww&ixlib=rb-4.1.0&q=80&w=1080", title: "Watercolor Textures", category: "visual" },
  ];

  const images = sanityImages.length > 0 ? sanityImages.map((img: any, i: number) => ({
    id: img._id || i,
    url: img.image ? urlFor(img.image).url() : "",
    title: img.title || "Untitled",
    category: img.category?.toLowerCase() || "visual"
  })).filter((img: any) => img.url) : defaultImages;

  const categories = [
    { value: "all", label: "All", count: images.length },
    { value: "visual", label: "Visual Arts", count: images.filter(i => i.category === "visual").length },
    { value: "process", label: "Creative Process", count: images.filter(i => i.category === "process").length },
    { value: "space", label: "Our Sanctuary", count: images.filter(i => i.category === "space").length },
  ];

  const filteredItems = filter === "all" ? images : images.filter((item) => item.category === filter);

  const selectedImage = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // For masonry layout specifically
  const columnItems: (typeof images)[] = Array.from({ length: columns }, () => []);
  if (layoutType === "masonry") {
    filteredItems.forEach((item, i) => {
      columnItems[i % columns].push(item);
    });
  }

  // Generic render function for an image card across layouts
  const renderImageCard = (item: any, index: number, layoutClasses: string = "") => {
    const originalIndex = filteredItems.findIndex(i => i.id === item.id);
    return (
      <motion.div
        key={item.id}
        layout
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ 
          opacity: { duration: 0.6 },
          y: { duration: 0.6 },
          layout: { type: "spring", stiffness: 300, damping: 30 },
          delay: (index % 6) * 0.1 
        }}
        className={`relative group rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-700 bg-white p-1.5 border border-stone-100 ${layoutClasses}`}
        onClick={() => setSelectedImageIndex(originalIndex)}
      >
        <div className="relative overflow-hidden rounded-[1.25rem] bg-stone-100 w-full h-full min-h-[250px]">
          <motion.img
            src={item.url}
            alt={item.title}
            className="w-full h-full object-cover transform will-change-transform"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6 md:p-8">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[#F1B75F] text-xs font-bold tracking-widest uppercase mb-2">
                    {item.category}
                  </p>
                  <h3 className="font-light text-white mb-1 line-clamp-1 text-xl md:text-2xl">
                    {item.title}
                  </h3>
                </div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 flex-shrink-0 ml-4">
                  <ZoomIn size={18} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen relative" ref={containerRef}>
      <div className="absolute inset-0 pointer-events-none opacity-[0.015] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-24">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-[#F1B75F]/10 to-transparent"
          style={{ y: yBackground }}
        />
        
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ x: [0, 50, 0], y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 -left-20 w-96 h-96 bg-[#F1B75F]/20 rounded-full blur-[100px]"
          />
          <motion.div 
            animate={{ x: [0, -50, 0], y: [0, 40, 0], opacity: [0.1, 0.4, 0.1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-[#798C6C]/20 rounded-full blur-[100px]"
          />
        </div>

        <motion.div
          style={{ opacity: opacityHero }}
          className="container mx-auto px-6 relative z-10"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center justify-center p-2.5 px-4 bg-white/60 backdrop-blur-md rounded-full mb-8 shadow-sm border border-stone-200/50"
              >
                <ImageIcon className="w-4 h-4 text-[#8E270E] mr-2" />
                <span className="text-xs font-bold tracking-widest text-stone-600 uppercase">Visual Journey</span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl text-stone-800 mb-6 font-light tracking-tight leading-none">
                Artistic <br />
                <span className="font-serif italic text-[#8E270E]">Visions</span>
              </h1>
              <p className="text-xl text-stone-500 max-w-lg font-light leading-relaxed">
                Explore our curated collection of moments, spaces, and the beautiful processes that bring art to life.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="hidden lg:flex justify-end relative"
            >
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-[80%] aspect-[4/5] rounded-[2rem] overflow-hidden relative shadow-2xl rotate-3"
              >
                <img src={defaultImages[2].url} alt="Gallery Highlight" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-stone-900/10" />
              </motion.div>
              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 -left-10 w-[60%] aspect-square rounded-[2rem] overflow-hidden shadow-2xl -rotate-6 border-8 border-white"
              >
                <img src={defaultImages[1].url} alt="Gallery Secondary" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Marquee Banner */}
      <div className="w-full overflow-hidden bg-[#8E270E] text-[#F1B75F] py-3 mb-12 flex relative z-30 shadow-lg">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap gap-8 items-center"
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-sm font-medium tracking-[0.2em] uppercase flex items-center gap-8">
              Explore The Gallery • Uncover The Process • Experience The Space
            </span>
          ))}
        </motion.div>
      </div>

      {/* Filters and Layout Toggle */}
      <section className="sticky top-20 z-40 container mx-auto px-6 mb-12 py-4 backdrop-blur-xl bg-[#FAF9F6]/80 border-b border-stone-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Layout Toggles */}
        <div className="flex bg-white rounded-full p-1 border border-stone-200 shadow-sm gap-0.5">
          {[
            { key: "bento" as const, icon: LayoutGrid, label: "Bento" },
            { key: "masonry" as const, icon: Columns, label: "Masonry" },
            { key: "rows" as const, icon: Rows, label: "Cinematic" },
            { key: "grid" as const, icon: Grid3X3, label: "Grid" },
            { key: "scattered" as const, icon: Sparkles, label: "Scattered" },
            { key: "carousel" as const, icon: GalleryHorizontal, label: "Carousel" },
          ].map(({ key, icon: Icon, label }) => (
            <button
              key={key}
              onClick={() => { setLayoutType(key); if (key === "carousel") setCarouselIndex(0); }}
              className={`p-2 rounded-full transition-all duration-300 relative group/btn ${layoutType === key ? "bg-[#8E270E] text-white shadow-md" : "text-stone-400 hover:text-stone-700 hover:bg-stone-50"}`}
              title={label}
            >
              <Icon size={18} />
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-medium text-stone-500 opacity-0 group-hover/btn:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">{label}</span>
            </button>
          ))}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <motion.button
              key={category.value}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setFilter(category.value);
                setSelectedImageIndex(null);
              }}
              className={`px-5 py-2 rounded-full transition-all duration-300 text-sm font-medium tracking-wide flex items-center gap-2 relative overflow-hidden ${
                filter === category.value
                  ? "text-white shadow-lg shadow-[#8E270E]/20"
                  : "bg-white text-stone-600 hover:bg-stone-50 border border-stone-200 hover:border-stone-300 shadow-sm"
              }`}
            >
              {filter === category.value && (
                <motion.div 
                  layoutId="activeFilter"
                  className="absolute inset-0 bg-[#8E270E]"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category.label}</span>
              <span className={`relative z-10 text-xs px-1.5 py-0.5 rounded-full transition-colors ${
                filter === category.value ? "bg-white/20 text-white" : "bg-stone-100 text-stone-500"
              }`}>
                {category.count}
              </span>
            </motion.button>
          ))}
        </div>
      </section>

      {/* Dynamic Gallery Container */}
      <section className="container mx-auto px-6 pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={layoutType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Bento Layout */}
            {layoutType === "bento" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[250px] lg:auto-rows-[300px] grid-flow-row-dense">
                {filteredItems.map((item, index) => {
                  const patternIndex = index % 14;
                  const isHero = patternIndex === 0;
                  const isTall = [2, 5, 11].includes(patternIndex);
                  const isWide = [4, 7, 13].includes(patternIndex);
                  const isGiant = patternIndex === 8;
                  const classes = isHero ? 'sm:col-span-2 sm:row-span-2' : isGiant ? 'sm:col-span-2 md:col-span-3 sm:row-span-2' : isWide ? 'sm:col-span-2' : isTall ? 'sm:row-span-2' : '';
                  return renderImageCard(item, index, classes);
                })}
              </div>
            )}

            {/* Masonry Layout */}
            {layoutType === "masonry" && (
              <div className="flex gap-6 items-start">
                {columnItems.map((col, colIdx) => (
                  <div key={colIdx} className="flex-1 flex flex-col gap-6">
                    {col.map((item, index) => renderImageCard(item, index, "h-auto"))}
                  </div>
                ))}
              </div>
            )}

            {/* Rows Layout */}
            {layoutType === "rows" && (
              <div className="flex flex-col gap-8 max-w-4xl mx-auto">
                {filteredItems.map((item, index) => renderImageCard(item, index, "w-full aspect-[16/9] sm:aspect-[21/9]"))}
              </div>
            )}

            {/* Grid Layout — Clean uniform grid */}
            {layoutType === "grid" && (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredItems.map((item, index) => renderImageCard(item, index, "aspect-square"))}
              </div>
            )}

            {/* Scattered Layout — Artistic overlapping editorial */}
            {layoutType === "scattered" && (
              <div className="relative min-h-[800px] max-w-6xl mx-auto">
                {filteredItems.map((item, index) => {
                  const originalIndex = filteredItems.findIndex(i => i.id === item.id);
                  // Deterministic but varied positioning
                  const seed = (item.id * 17 + index * 31) % 100;
                  const col = index % 3;
                  const row = Math.floor(index / 3);
                  const xBase = col * 33;
                  const yBase = row * 320;
                  const xOffset = (seed % 15) - 7;
                  const rotation = ((seed % 12) - 6);
                  const size = index % 5 === 0 ? 'w-[55%] md:w-[45%]' : index % 3 === 0 ? 'w-[50%] md:w-[40%]' : 'w-[42%] md:w-[32%]';
                  const zIndex = index % 5 === 0 ? 20 : 10 + (index % 10);

                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, scale: 0.8, rotate: rotation * 2 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
                      viewport={{ once: true, margin: "-30px" }}
                      whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }}
                      transition={{ duration: 0.8, delay: (index % 4) * 0.15 }}
                      className={`absolute cursor-pointer group ${size}`}
                      style={{
                        left: `${xBase + xOffset}%`,
                        top: `${yBase}px`,
                        zIndex,
                      }}
                      onClick={() => setSelectedImageIndex(originalIndex)}
                    >
                      <div className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500 border-[6px] border-white bg-white">
                        <img
                          src={item.url}
                          alt={item.title}
                          className="w-full aspect-[4/5] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                          <p className="text-[#F1B75F] text-[10px] font-bold tracking-widest uppercase mb-1">{item.category}</p>
                          <h3 className="text-lg font-light text-white line-clamp-1">{item.title}</h3>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* Carousel Layout — Featured image with filmstrip */}
            {layoutType === "carousel" && filteredItems.length > 0 && (
              <div className="max-w-5xl mx-auto">
                {/* Main featured image */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={filteredItems[carouselIndex]?.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.5 }}
                    className="relative rounded-3xl overflow-hidden cursor-pointer group bg-white p-2 border border-stone-100 shadow-lg mb-6"
                    onClick={() => setSelectedImageIndex(carouselIndex)}
                  >
                    <div className="relative overflow-hidden rounded-[1.25rem] bg-stone-100">
                      <img
                        src={filteredItems[carouselIndex]?.url}
                        alt={filteredItems[carouselIndex]?.title}
                        className="w-full aspect-[16/10] object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
                        <p className="text-[#F1B75F] text-xs font-bold tracking-widest uppercase mb-3">{filteredItems[carouselIndex]?.category}</p>
                        <h3 className="text-3xl md:text-5xl font-light text-white mb-2">{filteredItems[carouselIndex]?.title}</h3>
                        <p className="text-white/60 text-sm">{carouselIndex + 1} / {filteredItems.length}</p>
                      </div>
                    </div>

                    {/* Nav arrows on featured */}
                    {filteredItems.length > 1 && (
                      <>
                        <button
                          onClick={(e) => { e.stopPropagation(); setCarouselIndex((carouselIndex - 1 + filteredItems.length) % filteredItems.length); }}
                          className="absolute left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
                        >
                          <ChevronLeft size={24} />
                        </button>
                        <button
                          onClick={(e) => { e.stopPropagation(); setCarouselIndex((carouselIndex + 1) % filteredItems.length); }}
                          className="absolute right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
                        >
                          <ChevronRight size={24} />
                        </button>
                      </>
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Filmstrip thumbnails */}
                <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
                  {filteredItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      whileHover={{ y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setCarouselIndex(index)}
                      className={`flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300 ${carouselIndex === index ? 'border-[#8E270E] shadow-lg shadow-[#8E270E]/20 ring-2 ring-[#8E270E]/30' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-20 h-20 md:w-24 md:h-24 object-cover"
                      />
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Lightbox with Navigation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12"
          >
            <motion.div className="absolute inset-0 bg-stone-900/95 backdrop-blur-2xl" onClick={() => setSelectedImageIndex(null)} />
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 z-20 p-4 text-white/70 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:rotate-90"
              onClick={() => setSelectedImageIndex(null)}
            >
              <X size={24} />
            </motion.button>
            
            {filteredItems.length > 1 && (
              <>
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="absolute left-6 z-20 p-4 text-white/70 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  onClick={prevImage}
                >
                  <ChevronLeft size={32} />
                </motion.button>
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="absolute right-6 z-20 p-4 text-white/70 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  onClick={nextImage}
                >
                  <ChevronRight size={32} />
                </motion.button>
              </>
            )}

            <div className="relative z-10 max-w-6xl w-full flex flex-col items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedImage.id}
                  initial={{ scale: 0.9, opacity: 0, x: 50 }}
                  animate={{ scale: 1, opacity: 1, x: 0 }}
                  exit={{ scale: 0.9, opacity: 0, x: -50 }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className="relative rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/10"
                >
                  <img src={selectedImage.url} alt={selectedImage.title} className="max-w-full max-h-[75vh] object-contain" onClick={(e) => e.stopPropagation()} />
                </motion.div>
              </AnimatePresence>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={`text-${selectedImage.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.1 }}
                  className="mt-8 text-center"
                >
                  <span className="inline-block px-4 py-1 rounded-full bg-white/10 text-[#F1B75F] text-xs tracking-widest uppercase mb-4">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-light text-white">{selectedImage.title}</h3>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quote Section */}
      <section className="relative py-32 overflow-hidden border-t border-stone-200/50">
        <div className="absolute inset-0 bg-stone-900" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601662528567-526cd06f6582?q=80&w=2000')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="container mx-auto px-6 text-center max-w-4xl relative z-10"
        >
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-20 h-20 mx-auto bg-[#8E270E] rounded-full flex items-center justify-center mb-10 shadow-xl shadow-[#8E270E]/30"
          >
            <span className="text-4xl text-[#F1B75F] font-serif leading-none mt-4">"</span>
          </motion.div>
          <blockquote className="text-4xl md:text-5xl text-white mb-10 font-light italic leading-tight">
            Art washes away from the soul the dust of everyday life.
          </blockquote>
          <cite className="text-xl text-[#F1B75F] not-italic font-medium tracking-wide">— Pablo Picasso</cite>
        </motion.div>
      </section>
    </div>
  );
}