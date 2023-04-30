"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {};

const getTodos = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  const res = await fetch(url);
  return res.json();
};

const Todo = async (props: Props) => {
  const data = await getTodos();
  console.log(data);
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
        TODOS from API
      </motion.h1>
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4">
        {data.map((d) => (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={d.id}
            className="border-2 rounded-lg hover:border-indigo-600"
          >
            <p className="p-5">{d.title}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
