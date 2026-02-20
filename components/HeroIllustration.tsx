'use client';

import { motion } from 'motion/react';


export function HeroIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto lg:ml-auto flex items-center justify-center p-4">
      {/* Background Glow/Aura */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-[#e6f2f1] via-[#ffe4e6] to-[#e6f2f1] rounded-full blur-[80px] opacity-70"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* The Blob Image Container */}
      <motion.div
        className="relative w-full h-full overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          clipPath: "path('M441,208.5Q441,317,345.5,404.5Q250,492,130,421.5Q10,351,10,225.5Q10,100,130,62Q250,24,345.5,116.25Q441,208.5,441,208.5Z')",
        }}
      >
        <div className="absolute inset-0 bg-[#ffe4e6] opacity-20"></div>
        <img
          src="/hina-portrait.jpg"
          alt="Hina Usman"
          className="w-full h-full object-cover object-[center_20%]"
        />

        {/* Subtle Overlay to match visual aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#135c58]/10" />
      </motion.div>

      {/* Decorative floating dots/shapes from visual */}
      <motion.div
        className="absolute top-1/4 -left-4 w-4 h-4 rounded-full bg-[#135c58]/20 blur-sm"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-4 w-6 h-6 rounded-full bg-[#be185d]/10 blur-md"
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
