"use client";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-full w-full flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 items-center justify-center">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        className="text-6xl font-extrabold text-center"
      >
        Data from <br />
        <span className="text-white">jsonplaceholder.com</span>
      </motion.h1>
    </div>
  );
}
