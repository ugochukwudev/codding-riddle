import UserSvg from "@/components/UserSvg";
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
        <p className="text-center font-bold text-[32px]">LeaderBoard</p>
        <p className="text-center font-semibold text-[20px]">
          This algorithm works with your progress within the past two weeks
        </p>

        {data.map((i) => {
          return (
            <div
              key={i}
              className="bg-white text-[13px] lg:text-[16px] cursor-pointer text-black w-full h-[50px] flex items-center justify-between px-4 shadow-[2px_2px_1px_0_rgb(0,0,0.04)] rounded-lg"
            >
              <div className="flex items-center gap-4 lg:gap-6">
                <img
                  src="https://lh3.googleusercontent.com/a/AEdFTp6HkWUT3FT5UqTbJiITqaVZqrBGtfGK0rBIwhqI=s96-c"
                  className=" w-[30px] h-[30px] rounded-full"
                  alt=""
                />
                <p className=" font-semibold">Paul Ambrose</p>
              </div>
              <p className=" font-semibold">solved: 10 </p>
              <p className=" font-semibold ">Senior Dev</p>
              <p className="hidden lg:block t font-semibold">10 Wins</p>
              <p className="hidden lg:block  font-semibold">8 Loss</p>
            </div>
          );
        })}
        <button className="cursor-pointer bg-[#626ee3] hover:bg-[#4a59db] w-[30%] lg:w-[20%] text-white rounded-xl pl-[5%] py-2 flex self-end">
          Copy Link
        </button>
      </div>
    </div>
  );
};

export default LeaderBoard;
