"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
type Props = {};

const getPhotos = async () => {
  const url = "http://jsonplaceholder.typicode.com/photos";
  const res = await fetch(url);
  return res.json();
};

const Photos = async (props: Props) => {
  const data = await getPhotos();
  return (
    <div className="bg-white">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          ease: "linear",
          duration: 0.3,
          x: { duration: 1 },
        }}
        className="text-4xl font-extrabold text-center p-10"
      >
        Photos from API
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4  max-w-7xl mx-auto">
        {data.map((d) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={d.id}
          >
            <Image
              src={d.url}
              className="rounded-lg"
              height={400}
              width={400}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
