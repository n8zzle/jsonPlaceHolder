"use client";

import React from "react";
import { motion } from "framer-motion";

async function getPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(url);
  return res.json();
}

const Posts = async () => {
  const data = await getPosts();
  //console.log(data);
  return (
    <div className=" bg-white ">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          ease: "linear",
          duration: 0.3,
          x: { duration: 1 },
        }}
        className="text-2xl md:text-4xl font-extrabold text-center  p-10"
      >
        Posts form API
      </motion.h1>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto "
      >
        {data.map((d) => (
          <div
            transition={{ delayChildren: 0.3, staggerChildren: 0.2 }}
            key={d.id}
            className="w-full p-10 rounded-lg border-2 border-solid  hover:border-indigo-600"
          >
            <h1 className="text-lg font-bold">{d.title}</h1>
            <p className="text-sm text-black">{d.body}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Posts;
