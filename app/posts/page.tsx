import React from "react";

async function getPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(url);
  return res.json();
}

const Posts = async () => {
  const data = await getPosts();
  console.log(data);
  return (
    <div className="h-full ">
      <h1 className="text-4xl font-extrabold text-center p-10 ">
        Posts form API
      </h1>

      <div className="grid grid-cols-4 gap-4 max-w-7xl mx-auto">
        {data.map((d) => (
          <div
            key={d.id}
            className="w-full p-10 rounded-lg border-2 border-solid  hover:border-indigo-600"
          >
            <h1 className="text-lg font-bold">{d.title}</h1>
            <p className="text-sm text-black">{d.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
