import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-primary flex p-5 flex-col md:flex-row justify-between items-center">
        <div className="flex gap-3">
          <img   
            width={40}
            height={30}
            
          />
          <h2 className="text-3xl font-concertOne text-white">CodeDate</h2>
        </div>
        {/* {!user?.name ? (
          <ul className="flex gap-3 text-white font-ropaSans text-2xl">
            <li className="hover:underline cursor-pointer transition-all duration-300 ease-in-out">
              About
            </li>
            <li className="hover:underline cursor-pointer transition-all duration-300 ease-in-out">
              Download
            </li>
            <li className="hover:underline cursor-pointer transition-all duration-300 ease-in-out">
              Privacy
            </li>
          </ul>
        ) : ( */}
          <ul className="flex gap-3 text-white font-ropaSans text-2xl">
            <Link
              to="/profile"
              className="hover:underline cursor-pointer transition-all duration-300 ease-in-out"
            >
              New
            </Link>
            <Link
              to="/profile/chats"
              className="hover:underline cursor-pointer transition-all duration-300 ease-in-out"
            >
              Chats
            </Link>
            <li className="hover:underline cursor-pointer transition-all duration-300 ease-in-out">
              Friends
            </li>
          </ul>
        {/* )} */}

        <div>
          {/* {user?.name ? (
            <button
              className="font-ropaSans text-2xl text-black px-5 py-1 rounded-full bg-white hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
            >
              Log Out
            </button>
          ) : ( */}
            <Link
              to="/login"
              className="font-ropaSans text-2xl text-black px-5 py-1 rounded-full bg-white hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
            >
              Log In
            </Link>
          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
