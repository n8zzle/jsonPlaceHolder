import Link from "next/link";
import path from "path";
import React from "react";

const routes = [
  {
    name: "Posts",
    style: "p-3 hover:bg-green-100 rounded-lg",
    path: "/posts",
    key: 2,
  },
  {
    name: "Comments",
    style: "p-3 hover:bg-green-100 rounded-lg",
    path: "/comments",
    key: 3,
  },

  {
    name: "Photos",
    style: "p-3 hover:bg-green-100 rounded-lg",
    path: "/photos",
    key: 5,
  },
  {
    name: "To-do",
    style: "p-3 hover:bg-green-100 rounded-lg",
    path: "/todos",
    key: 6,
  },
  {
    name: "Users",
    style: "p-3 hover:bg-green-100 rounded-lg",
    path: "/users",
    key: 7,
  },
];

const Navbar = (props: Props) => {
  return (
    /*<nav className="bg-gray-200 p-10 flex justify-between items-center">
      <Link href="./">
        <h2 className="text-lg font-bold">Working with API</h2>
      </Link>
      <div className="space-x-3">
        <Link href="/posts">
          <button className="p-5 hover:bg-green-100 rounded-lg">Posts</button>
        </Link>
        <Link href="/comments">
          <button className="p-5 hover:bg-green-100 rounded-lg">
            Comments
          </button>
        </Link>
        <Link href="/albums">
          <button className="p-5 hover:bg-green-100 rounded-lg">Albums</button>
        </Link>
        <Link href="/photos">
          <button className="p-5 hover:bg-green-100 rounded-lg">Photos</button>
        </Link>
        <Link href="/todos">
          <button className="p-5 hover:bg-green-100 rounded-lg">To-do</button>
        </Link>
        <Link href="/users">
          <button className="p-5 hover:bg-green-100 rounded-lg">Users</button>
        </Link>
      </div>
    </nav> */
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  p-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="./">
          <h2 className="text-lg font-bold">Working with API</h2>
        </Link>
        <div className="space-x-3">
          {routes.map((r) => (
            <Link href={r.path} key={r.key}>
              <button className={r.style}>{r.name}</button>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
