


import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const colors = [
  "#ffd700",
  "#ff4d4d",
  "#4dd2ff",
  "#4dff88",
  "#c084fc",
  "#ff9f1a",
];

export default function New() {
  const [launch, setLaunch] = useState(false);
  const [burst, setBurst] = useState(false);
  const [split, setSplit] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setLaunch(true), 800);     // ignition
    setTimeout(() => setBurst(true), 3000);     // main burst
    setTimeout(() => setSplit(true), 3300);     // color split
    setTimeout(() => setShowText(true), 4200);  // text
  }, []);

  return (
    <div className="relative w-screen h-screen bg-black overflow-hidden flex items-center justify-center">

      {/* 🌌 Sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-black to-black" />

      {/* 🔥 GROUND FIRE (IGNITION) */}
      {!launch && (
        <div className="absolute bottom-0 flex gap-1">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-[4px] h-16 bg-gradient-to-t from-orange-600 via-yellow-400 to-transparent blur-sm animate-pulse"
            />
          ))}
        </div>
      )}

      {/* 🚀 REALISTIC DIWALI ROCKET */}
      <AnimatePresence>
        {launch && !burst && (
          <motion.div
            initial={{ y: 550 }}
            animate={{ y: -350 }}
            transition={{ duration: 2.2, ease: "easeOut" }}
            className="absolute bottom-0 flex flex-col items-center"
          >
            {/* 🔥 FIRE TAIL */}
            <div className="relative w-4 h-32 overflow-hidden">
              {Array.from({ length: 14 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute bottom-0 w-[3px] h-10 bg-gradient-to-t from-orange-600 via-yellow-300 to-transparent"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  style={{
                    left: `${Math.random() * 14}px`,
                  }}
                />
              ))}
            </div>

            {/* 🚀 Cone */}
            <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px]
                            border-l-transparent border-r-transparent border-b-red-600" />

            {/* 🚀 Body */}
            <div className="w-6 h-24 bg-gradient-to-b from-red-600 via-yellow-400 to-red-700
                            shadow-[0_0_35px_rgba(255,180,0,1)] rounded-sm" />

            {/* Stick */}
            <div className="w-[3px] h-20 bg-yellow-200" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 💥 MAIN BURST */}
      {burst &&
        Array.from({ length: 40 }).map((_, i) => {
          const angle = (i / 40) * 360;
          return (
            <motion.span
              key={i}
              className="absolute w-3 h-3 bg-yellow-300 rounded-full"
              style={{ top: "45%", left: "50%" }}
              animate={{
                x: Math.cos(angle * Math.PI / 180) * 200,
                y: Math.sin(angle * Math.PI / 180) * 200,
                opacity: 0,
              }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
          );
        })}

      {/* 🌈 COLOR SPLIT BURSTS */}
      {split &&
        Array.from({ length: 70 }).map((_, i) => {
          const angle = Math.random() * 360;
          const color = colors[Math.floor(Math.random() * colors.length)];
          return (
            <motion.span
              key={i}
              className="absolute w-[6px] h-[6px] rounded-full"
              style={{
                backgroundColor: color,
                top: "45%",
                left: "50%",
              }}
              animate={{
                x: Math.cos(angle * Math.PI / 180) * 350,
                y: Math.sin(angle * Math.PI / 180) * 350,
                opacity: 0,
                scale: 0.5,
              }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          );
        })}

      {/* 🎆 NEW YEAR TEXT */}
      {showText && (
        <div className="relative z-10 text-center">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-white
                       drop-shadow-[0_0_60px_rgba(255,255,255,0.9)]"
          >
            Happy New Year
          </motion.h1>

          <motion.h1
            animate={{
              textShadow: [
                "0 0 30px #ffd700",
                "0 0 60px #ff4d4d",
                "0 0 30px #4dd2ff",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mt-4 text-6xl md:text-8xl font-black text-transparent bg-clip-text
                       bg-gradient-to-r from-yellow-300 via-pink-400 to-blue-400"
          >
            2026
          </motion.h1>

          <p className="mt-6 text-white/70 text-lg">
            Ignite hopes. Burst dreams. Shine forever ✨
          </p>
        </div>
      )}
    </div>
  );
}



















