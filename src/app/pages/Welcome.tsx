import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import logo from "../../assets/new-log.png.jpeg";

export default function Welcome() {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          videoRef.current.muted = true;
          await videoRef.current.play();
        } catch (error) {
          console.log("Video autoplay failed:", error);
          setTimeout(() => {
            if (videoRef.current) {
              videoRef.current.play().catch(err => console.log("Retry failed:", err));
            }
          }, 100);
        }
      }
    };

    playVideo();

    const handleInteraction = () => {
      if (videoRef.current && videoRef.current.paused) {
        videoRef.current.play().catch(err => console.log("Play on interaction failed:", err));
      }
    };

    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('touchstart', handleInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-stone-900">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/8170120/8170120-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-stone-900/60" />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Floating organic shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[8%] w-48 h-48 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(241,183,95,0.15) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            y: [0, 25, 0],
            x: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[15%] right-[10%] w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(121,140,108,0.15) 0%, transparent 70%)",
          }}
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-[40%] right-[25%] w-32 h-32 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(142,39,14,0.12) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="relative z-10 flex flex-col items-center justify-center h-full px-6"
      >
        {/* Logo with organic circle frame */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.2, type: "spring", bounce: 0.25 }}
          className="relative mb-8"
        >


          {/* White circle backdrop */}
          <div className="absolute inset-0 -m-6">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <motion.circle
                cx="100"
                cy="100"
                r="90"
                fill="white"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.95 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.15))" }}
              />
            </svg>
          </div>
          <div className="relative rounded-full overflow-hidden w-72 h-72 md:w-80 md:h-80 flex items-center justify-center bg-white shadow-lg">
            <img src={logo} alt="Aroha Expressive Arts" className="w-full h-full object-cover rounded-full" />
          </div>
        </motion.div>
        {/* Enter Button */}
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          whileHover={{ scale: 1.06, boxShadow: "0 12px 40px rgba(0,0,0,0.3)" }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate("/home")}
          className="group relative px-12 py-4 mt-32 rounded-full text-lg font-primary font-medium tracking-[0.3em] transition-all duration-500 overflow-hidden"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.25)",
            color: "white",
            textShadow: "0 2px 8px rgba(0,0,0,0.3)",
          }}
        >
          {/* Hover shimmer */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "linear-gradient(135deg, rgba(241,183,95,0.15), rgba(121,140,108,0.15), rgba(142,39,14,0.1))",
            }}
          />
          <span className="relative z-10">ENTER</span>
        </motion.button>
      </motion.div>
    </div>
  );
}
