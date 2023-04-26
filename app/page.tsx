import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="h-full w-full flex bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 items-center justify-center">
      <h1 className="text-6xl font-extrabold text-center">
        Data from <br />
        <span className="text-white">jsonplaceholder.com</span>
      </h1>
    </div>
  );
}
