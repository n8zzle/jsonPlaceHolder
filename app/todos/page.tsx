"use client";
import React from "react";
import { useState } from "react";
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
    <div className="w-full">
      <h1 className="text-4xl font-extrabold text-center p-10">
        TODOS from API
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-4">
        {data.map((d) => (
          <div
            key={d.id}
            className="border-2 rounded-lg hover:border-indigo-600"
          >
            <p className="p-5">{d.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;
