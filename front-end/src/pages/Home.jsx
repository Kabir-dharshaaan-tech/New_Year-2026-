
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import galaxyVideo from "../assets/zooming-in-on-the-heart-of-the-milky-way-ytshorts.savetube.me.mp4";

export default function Home() {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current.currentTime >= 55) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black">

      {/* Galaxy Video Background */}
      <motion.video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={galaxyVideo}
        autoPlay
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 120, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_70%_60%,#fde68a_1px,transparent_1px)] bg-[length:120px_120px] animate-[spin_400s_linear_infinite]" />

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-5xl font-serif drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
        >
          A Special New Year Greeting
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 text-yellow-100/80 text-lg"
        >
          For a wonderful teacher
        </motion.p>

        {/* 🔥 CLICK BUTTON */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{
            boxShadow: [
              "0 0 15px rgba(250,204,21,0.4)",
              "0 0 35px rgba(250,204,21,0.8)",
              "0 0 15px rgba(250,204,21,0.4)",
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
          onClick={() => navigate("/new-year")}
          className="mt-10 px-10 py-4 rounded-full text-lg text-white
                     bg-gradient-to-r from-yellow-600/40 to-yellow-400/30
                     backdrop-blur-md border border-yellow-400/40"
        >
          Click here
        </motion.button>

      </div>
    </div>
  );
}
