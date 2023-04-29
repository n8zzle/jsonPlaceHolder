"use client";
import { Avatar } from "@mui/material";
import React from "react";

type Props = {};

const getUsers = async () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const res = await fetch(url);
  return res.json();
};

const Users = async (props: Props) => {
  const data = await getUsers();
  console.log(data);
  return (
    <div className="w-full">
      <h1 className="text-4xl font-extrabold text-center p-10">
        Users from API
      </h1>
      <div className="max-w-7xl mx-auto  grid grid-cols-2 gap-4">
        {data.map((d) => (
          <div
            key={d.id}
            className="  border-2  border-rounded-lg items-center"
          >
            <div className="p-5 flex flex-row space-x-5">
              <Avatar>{d.name[0]}</Avatar>
              <div>
                <h2 className="font-bold">{d.name}</h2>
                <p className="text-sm text-gray-500">{d.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
