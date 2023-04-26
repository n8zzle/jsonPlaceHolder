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
    <div className=" w-full ">
      <h1 className="text-4xl font-extrabold text-center p-10 ">
        Comments form API
      </h1>
      <div className="grid grid-cols-3 gap-4 max-w-7xl mx-auto">
        {data.map((d) => (
          <div
            key={d.id}
            className="w-full p-10 rounded-lg border-2 border-solid  hover:border-indigo-600"
          >
            <h1 className="text-lg font-extrabold">{d.email}</h1>
            <hr className="p-2"></hr>
            <p className="text-sm text-gray-500 hover:text-black">{d.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
