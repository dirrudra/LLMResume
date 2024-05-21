import Image from "next/image";
import Link from "next/link";
import NavMenu from "./components/NavMenu";

export default function Home() {
  return (
    <main className="bg-steel-black h-screen">
      <div className="container mx-auto p-4 pt-8 md:p-6 lg:p-12 w-3/5">
        <div className="text-radiant-white mt-24">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to my Project page!
          </h1>
          <h2 className="text-2xl mb-8">
            This is a small project where you upload your resume and get a personal portfolio website!
          </h2>
        </div>

        <div>
          <NavMenu />
        </div>
      </div>
    </main>
  );
}