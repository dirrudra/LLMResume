import React from 'react';
import Link from 'next/link';

const NavMenu = () => {
  return (
    <div className="bg-steel-black text-radiant-white">
      <div className="flex flex-row items-center justify-center w-half m-2 py-2">

        <div className="w-half mt-4 m-4 ">
          <Link href="/upload" passHref>
            <button className="bg-steel-black text-radiant-white border-4 border-solid border-neon-purple hover:bg-radiant-white hover:text-black font-bold py-4 px-2 rounded-2xl w-full transition duration-300">
              Upload
            </button>
          </Link>
        </div>
        <div className="w-half mt-4 m-4">
          <Link href="/viewPage" passHref>
            <button className="bg-steel-black text-radiant-white border-4 border-solid border-neon-purple hover:bg-radiant-white hover:text-black font-bold py-4 px-2 rounded-2xl w-full transition duration-300">
              View
            </button>
          </Link>
        </div>
        <div className="w-half mt-4 m-4">
          <Link href="/home" passHref>
            <button className="bg-steel-black text-radiant-white border-4 border-solid border-neon-purple hover:bg-radiant-white hover:text-black font-bold py-4 px-2 rounded-2xl w-full transition duration-300">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;