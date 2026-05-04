import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import logo from 'figma:asset/4a70ed2a46e9db74c0923fec9cb1f92cd05ec65a.png';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-woman-painting-on-a-canvas-4915-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center gap-12"
        >
          {/* Logo in white circle */}
          <div className="rounded-full bg-white p-12 shadow-2xl">
            <img
              src={logo}
              alt="Aroha Expressive Arts"
              className="h-48 w-48 object-contain"
            />
          </div>

          {/* Enter Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/home')}
            className="px-12 py-4 text-lg tracking-widest text-white border-2 border-white rounded-full hover:bg-white hover:text-neutral-800 transition-all duration-300"
          >
            ENTER
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
