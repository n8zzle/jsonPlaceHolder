import Image from "next/image";
import React from "react";

type Props = {};

const getPhotos = async () => {
  const url = "http://jsonplaceholder.typicode.com/photos";
  const res = await fetch(url);
  return res.json();
};

const Photos = async (props: Props) => {
  const data = await getPhotos();
  return (
    <div className="w-full">
      <h1 className="text-4xl font-extrabold text-center p-10">
        Photos from API
      </h1>
      <div className="grid grid-cols-3 gap-4  max-w-7xl mx-auto">
        {data.map((d) => (
          <div key={d.id}>
            <Image
              src={d.url}
              className="rounded-lg"
              height={600}
              width={600}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
