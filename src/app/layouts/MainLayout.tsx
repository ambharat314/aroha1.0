import { Outlet, Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Menu, X, Heart, ChevronDown, ArrowUp, Instagram, Linkedin, Mail } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import logo from "figma:asset/91c1f4056b8afb06da9b380f44ed2fc27d4346d0.png";

export default function MainLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [offeringsDropdownOpen, setOfferingsDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileOfferingsOpen, setMobileOfferingsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const location = useLocation();

  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setAboutDropdownOpen(false);
    setOfferingsDropdownOpen(false);
    setMobileAboutOpen(false);
    setMobileOfferingsOpen(false);

    const hash = location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const aboutSubLinks = [
    { path: "/home/about#about-aroha", label: "About Aroha" },
    { path: "/home/about#about-expressive-arts-therapy", label: "About Expressive Arts Therapy" },
    { path: "/home/about#about-vasvi", label: "About Vasvi" },
  ];

  const offeringsSubLinks = [
    { path: "/home/offerings/individuals", label: "Individuals" },
    { path: "/home/offerings/organisations", label: "Organisations" },
    { path: "/home/offerings/group-circles", label: "Group Support Circles" },
    { path: "/home/offerings/nature-retreats", label: "Nature Retreats" },
  ];

  const navLinks = [
    { path: "/home/about", label: "About Aroha", hasDropdown: true, subLinks: aboutSubLinks, dropdownKey: "about" },
    { path: "/home/offerings", label: "Offerings", hasDropdown: true, subLinks: offeringsSubLinks, dropdownKey: "offerings" },
    { path: "/home/gallery", label: "Gallery" },
    { path: "/home/events", label: "Events" },
    { path: "/home/blog", label: "Blog" },
    { path: "/home/contact", label: "Get in Touch" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50/50 via-white to-rose-50/30">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
        style={{
          width: progressWidth,
          background: "linear-gradient(90deg, #8E270E, #F1B75F, #798C6C)",
        }}
      />

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#F5EDE4]/90 backdrop-blur-xl shadow-lg shadow-stone-200/30"
            : "bg-[#F5EDE4] border-b border-stone-200/30"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-4 group">
            <div className="relative">
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className="w-14 h-14 bg-white rounded-full p-0.5 shadow-sm border border-stone-200/50 flex items-center justify-center overflow-hidden"
              >
                <img src={logo} alt="Aroha" className="w-full h-full object-contain rounded-full" />
              </motion.div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl text-stone-700 tracking-wide font-light" style={{ fontFamily: "var(--font-primary)" }}>Aroha</div>
              <div className="text-[11px] text-stone-500 tracking-[0.2em] uppercase">Expressive Arts</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.hasDropdown ? (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => {
                    if (link.dropdownKey === "about") setAboutDropdownOpen(true);
                    if (link.dropdownKey === "offerings") setOfferingsDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (link.dropdownKey === "about") setAboutDropdownOpen(false);
                    if (link.dropdownKey === "offerings") setOfferingsDropdownOpen(false);
                  }}
                >
                  <Link
                    to={link.path}
                    className={`px-4 py-2.5 rounded-full text-sm tracking-wide transition-all duration-300 relative overflow-hidden group flex items-center gap-1.5 ${
                      location.pathname === link.path || location.pathname.startsWith(link.path + "/")
                        ? "text-white bg-[#8E270E] shadow-md shadow-[#8E270E]/25"
                        : "text-stone-600 hover:text-stone-900 hover:bg-amber-100/70"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        (link.dropdownKey === "about" && aboutDropdownOpen) ||
                        (link.dropdownKey === "offerings" && offeringsDropdownOpen)
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </Link>

                  <AnimatePresence>
                    {((link.dropdownKey === "about" && aboutDropdownOpen) ||
                      (link.dropdownKey === "offerings" && offeringsDropdownOpen)) && (
                      <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.96 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100 overflow-hidden"
                      >
                        {link.subLinks?.map((subLink, idx) => (
                          <Link
                            key={subLink.path}
                            to={subLink.path}
                            className="block px-5 py-3.5 text-sm text-stone-600 hover:bg-gradient-to-r hover:from-amber-50 hover:to-transparent hover:text-stone-900 transition-all duration-200 border-b border-stone-100/50 last:border-0 group/item"
                          >
                            <span className="flex items-center gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F1B75F] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                              {subLink.label}
                            </span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2.5 rounded-full text-sm tracking-wide transition-all duration-300 relative overflow-hidden group ${
                    location.pathname === link.path
                      ? link.label === "Get in Touch"
                        ? "text-white bg-[#8E270E] shadow-md shadow-[#8E270E]/25"
                        : "text-white bg-[#8E270E] shadow-md shadow-[#8E270E]/25"
                      : link.label === "Get in Touch"
                        ? "text-[#8E270E] border border-[#8E270E]/30 hover:bg-[#8E270E] hover:text-white hover:shadow-md hover:shadow-[#8E270E]/20"
                        : "text-stone-600 hover:text-stone-900 hover:bg-amber-100/70"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                </Link>
              )
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 text-stone-700 hover:bg-amber-100 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
                onClick={() => setMobileMenuOpen(false)}
              />
              <motion.nav
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="lg:hidden border-t border-amber-200/30 bg-white/98 backdrop-blur-xl relative z-50"
              >
                <div className="container mx-auto px-6 py-6 flex flex-col gap-2">
                  {navLinks.map((link, idx) => (
                    link.hasDropdown ? (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <button
                          onClick={() => {
                            if (link.dropdownKey === "about") setMobileAboutOpen(!mobileAboutOpen);
                            if (link.dropdownKey === "offerings") setMobileOfferingsOpen(!mobileOfferingsOpen);
                          }}
                          className={`w-full px-5 py-3 rounded-2xl text-sm tracking-wide transition-all flex items-center justify-between ${
                            location.pathname === link.path || location.pathname.startsWith(link.path + "/")
                              ? "bg-[#8E270E] text-white"
                              : "text-stone-600 hover:bg-amber-50"
                          }`}
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-200 ${
                              (link.dropdownKey === "about" && mobileAboutOpen) ||
                              (link.dropdownKey === "offerings" && mobileOfferingsOpen)
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {((link.dropdownKey === "about" && mobileAboutOpen) ||
                            (link.dropdownKey === "offerings" && mobileOfferingsOpen)) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-2 ml-4 flex flex-col gap-1"
                            >
                              {link.subLinks?.map((subLink) => (
                                <Link
                                  key={subLink.path}
                                  to={subLink.path}
                                  className="px-5 py-2.5 rounded-xl text-sm text-stone-600 hover:bg-amber-50 transition-all flex items-center gap-2"
                                >
                                  <span className="w-1 h-1 rounded-full bg-[#F1B75F]" />
                                  {subLink.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          to={link.path}
                          className={`block px-5 py-3 rounded-2xl text-sm tracking-wide transition-all ${
                            location.pathname === link.path
                              ? "bg-[#8E270E] text-white"
                              : "text-stone-600 hover:bg-amber-50"
                          }`}
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    )
                  ))}
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main>
        <Outlet />
      </main>

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-8 z-50 p-3.5 bg-[#8E270E] text-white rounded-full shadow-xl shadow-[#8E270E]/30 hover:bg-[#a03215] transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="relative mt-24 overflow-hidden border-t border-stone-200">
        <div className="bg-stone-800 py-16 text-white">
          {/* Decorative organic shapes */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#798C6C]/8 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#F1B75F]/8 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid md:grid-cols-4 gap-12 mb-12">
              {/* Brand Column */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-16 w-16 bg-white rounded-full p-1 flex items-center justify-center shadow-md border border-stone-700/30 overflow-hidden shrink-0">
                    <img src={logo} alt="Aroha" className="w-full h-full object-contain rounded-full" />
                  </div>
                  <div>
                    <div className="text-xl font-light" style={{ fontFamily: "var(--font-primary)" }}>Aroha</div>
                    <div className="text-xs text-stone-400 tracking-[0.15em] uppercase">Expressive Arts</div>
                  </div>
                </div>
                <p className="text-stone-300/80 leading-relaxed mb-6 max-w-md">
                  Aroha Expressive Arts brings sanctuary wherever we gather, supporting your journey of 
                  transformation through creative expression. Like a seed finding its roots and reaching for light, 
                  we honor each person's path to healing and growth.
                </p>
                <div className="flex items-center gap-2 text-[#F1B75F] text-sm mb-6">
                  <Heart size={14} className="fill-current" />
                  <span className="italic font-light">Where heart meets art</span>
                </div>

                {/* Social Icons */}
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/arohaexpressivearts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/10 hover:bg-[#F1B75F] text-white transition-all duration-300 hover:scale-110"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href="https://linkedin.com/company/aroha-expressive-arts"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/10 hover:bg-[#798C6C] text-white transition-all duration-300 hover:scale-110"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href="mailto:info@arohaarts.com"
                    className="p-2.5 rounded-full bg-white/10 hover:bg-[#8E270E] text-white transition-all duration-300 hover:scale-110"
                  >
                    <Mail size={18} />
                  </a>
                </div>
              </div>
              
              {/* Explore Column */}
              <div>
                <h3 className="text-white mb-5 tracking-wide text-sm font-medium uppercase">Explore</h3>
                <div className="flex flex-col gap-3 text-sm">
                  {navLinks.filter(l => !l.hasDropdown).map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="text-stone-400 hover:text-[#F1B75F] transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {link.label}
                    </Link>
                  ))}
                  {offeringsSubLinks.map((subLink) => (
                    <Link
                      key={subLink.path}
                      to={subLink.path}
                      className="text-stone-400 hover:text-[#F1B75F] transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      {subLink.label}
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Connect Column */}
              <div>
                <h3 className="text-white mb-5 tracking-wide text-sm font-medium uppercase">Connect</h3>
                <div className="flex flex-col gap-3 text-sm text-stone-400">
                  <a href="mailto:info@arohaarts.com" className="hover:text-[#F1B75F] transition-colors flex items-center gap-2">
                    <Mail size={14} />
                    info@arohaarts.com
                  </a>
                </div>

                {/* Mini newsletter signup */}
                <div className="mt-8">
                  <h4 className="text-white text-sm font-medium mb-3">Stay Connected</h4>
                  <p className="text-stone-400 text-xs mb-3">Monthly inspiration & event updates</p>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 px-4 py-2.5 bg-white/10 border border-white/10 rounded-full text-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-[#F1B75F]/50 transition-colors"
                    />
                    <button className="px-4 py-2.5 bg-[#8E270E] hover:bg-[#a03215] text-white rounded-full text-sm transition-colors whitespace-nowrap">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom bar */}
            <div className="pt-8 border-t border-stone-700/50">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-stone-500">
                <p>
                  © {new Date().getFullYear()} Aroha Expressive Arts. All rights reserved.
                </p>
                <p className="text-stone-500/70 italic text-xs">
                  Growing with love since 2020
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}