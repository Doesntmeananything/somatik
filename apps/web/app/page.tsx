import Link from "next/link";

import { Logo } from "./Logo";
import { Navbar } from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <div className="pt-20 pb-32 flex flex-col items-center gap-12 relative">
          <div className="glow-gradient absolute w-[1000px] h-[900px] top-[-500px] opacity-20 rounded-full blur-3xl z-0"></div>
          <div className="absolute top-0 z-10 w-full h-40 from-black to-transparent bg-gradient-to-b"></div>

          <div className="z-10 flex flex-col gap-6 items-center px-6">
            <Logo isAnimated className="w-12 h-12" />

            <span className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-rose-400 tracking-widest">
              SOMATIK
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent text-center">
              Build Yourself Up
            </h1>

            <p className="text-xl lg:text-2xl text-gray-300 max-w-xl text-center leading-tight">
              Somatik is a workout tracker for developing the right exercise habits and achieving
              your fitness goals.
            </p>
          </div>

          <div className="relative flex">
            <Link
              className="font-semibold bg-white text-gray-900 rounded px-16 py-3 focus-visible:ring outline-none ring-offset-2 ring-blue-400 transition-all hover:bg-transparent hover:text-gray-50 duration-200"
              href="/signup"
            >
              Join the Alpha
            </Link>

            <span className="absolute top-0 left-0 -z-10 rounded w-full h-full bg-gradient-to-r from-blue-400 to-rose-400"></span>

            <div className="glow-animation h-full w-full absolute top-0 blur-xl -z-10"></div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
