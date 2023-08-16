import Link from "next/link";
import React from "react";
type props = {
  toggle: Function;
};
const Navbar = ({ toggle }: props) => {
  console.log(toggle);

  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(-90deg, rgb(2, 32, 60), rgb(0, 21, 40))",
      }}
      className="min-h-[100vh] py-4 px-10"
    >
      <div className="flex justify-between text-white w-[99%] lg:w-[80%] ">
        <Link href="/">
          <img
            src="/logo-dark.png"
            className="rounded-full h-[150px] "
            alt=""
          />
          <p className="text-[#8d96eb] hidden lg:block font-semibold text-[18px]">
            Become a better developer
          </p>
        </Link>

        <button
          onClick={() => toggle()}
          className="hover:border-2 hover:bg-[#626ee3] border-[#7a85eb] h-fit flex self-center px-4 py-2 rounded-md"
        >
          Log In
        </button>
        <Link
          href="/leaderboard"
          className="bg-[#626ee3] border-[#7a85eb] h-fit flex self-center px-4 py-2 rounded-full"
        >
          LeaderBoard
        </Link>
      </div>

      <p className="text-[#8d96eb]  lg:hidden font-semibold text-[18px]">
        Become a better developer
      </p>
      <div className=" w-full lg:w-[50%] mt-24 text-white">
        <p className="text-[38px] font-normal">Coding Riddles</p>
        <p className="text-[18px] font-normal ">
          The ultimate resource to prepare for coding interviews, become a
          better software engineer, meet great devs and connect.
        </p>
        <button
          onClick={() => toggle()}
          className="bg-[#626ee3] px-20 py-4 mt-10 shadow-[0_2px_5px_0_rgb(0,0,0/50%)] rounded-lg text-[16px]"
        >
          Join Us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
