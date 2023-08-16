import UserSvg from "@/client/components/UserSvg";
import React from "react";

const LeaderBoard = () => {
  const data = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <div
      style={{
        backgroundImage:
          "linear-gradient(-90deg, rgb(2, 32, 60), rgb(0, 21, 40))",
      }}
      className="w-full text-white pb-10"
    >
      <img
        src="logo.png"
        className=" w-[100px] lg:w-[150px] h-[100px] lg:h-[150px] rounded-full ml-[10%] mt-[-2%]"
        alt=""
      />

      <div className="bg-white text-black  flex flex-col gap-y-6 p-6 lg:p-10 shadow-xl w-[90%] lg:w-[60vw]  mt-[5%] mx-auto rounded-xl">
        <p className="text-center font-bold text-[#626ee3] text-[32px] italic">
          Welcome Paul Ambrose
        </p>
        <div className="bg-blue-600 cursor-pointer w-[50%] mx-auto rounded-full px-6 py-3 text-center text-white font-medium text-[16px] h-[50px]">
          Solve Solo Algorithms
        </div>
        <div
          style={{
            backgroundImage:
              "linear-gradient(-90deg, rgb(2, 32, 60), rgb(0, 21, 40))",
          }}
          className=" w-[50%] mx-auto cursor-pointer rounded-full px-6 py-3 text-center text-white font-medium text-[16px] h-[50px]"
        >
          Solve Multiplayer Algorithms
        </div>
        <div className="border-[1px] text-black w-[50%] mx-auto cursor-pointer rounded-full px-6 py-3 text-center font-medium text-[16px] h-[50px]">
          Visit Dashboard
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
