"use client";
import { motion } from "framer-motion";
import { Avatar } from "@mui/material";
import React from "react";

type Props = {};

const getComments = async () => {
  const url = "https://jsonplaceholder.typicode.com/comments";
  const res = await fetch(url);
  return res.json();
};

const Comments = async (props: Props) => {
  const data = await getComments();
  //console.log(data);
  return (
    //TODO: MUI Avatar
    <div className=" bg-white ">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          ease: "linear",
          duration: 0.3,
          x: { duration: 1 },
        }}
        className="text-2xl md:text-4xl font-extrabold text-center p-10 "
      >
        Comments form API
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
        {data.map((d) => (
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            key={d.id}
            className="w-full p-10 space-y-5 rounded-lg border-2 border-solid  hover:border-indigo-600"
          >
            <div className="flex flex-row items-center space-x-3">
              <Avatar>{d.email[0]}</Avatar>
              <h1 className="text-lg font-extrabold">{d.email}</h1>
            </div>

            <p className="text-sm text-gray-500 hover:text-black">{d.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
