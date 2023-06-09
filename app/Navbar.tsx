"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-5 md:p-10"
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="./">
          <h2 className="text-lg font-bold">Working with API</h2>
        </Link>
        <div className="hidden md:flex md:space-x-3">
          {routes.map((r) => (
            <Link href={r.path} key={r.key}>
              <button className={r.style}>{r.name}</button>
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MenuIcon className="text-black" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {routes.map((r) => (
              <MenuItem onClick={handleClose}>
                <Link href={r.path} key={r.key}>
                  <button className={r.style}>{r.name}</button>
                </Link>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
