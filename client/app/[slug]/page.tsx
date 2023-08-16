import UserSvg from "@/components/UserSvg";
import React from "react";

const Dashboard = () => {
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
      <div className="w-[90%] lg:w-[40%] flex flex-col lg:flex-row justify-center mt-[5%] items-center gap-6 mx-auto self-center">
        <img
          src="https://lh3.googleusercontent.com/a/AEdFTp6HkWUT3FT5UqTbJiITqaVZqrBGtfGK0rBIwhqI=s96-c"
          className=" w-[80px] h-[80px] rounded-full"
          alt=""
        />
        <div>
          <p className="font-normal leading-[1.3] text-[2em]">paul ambrose</p>
          <p className="font-normal text-[#b1b7bb] text-[16px] leading-[1.7]">
            Account type: Google
          </p>
        </div>
      </div>
      <div className="bg-white  flex flex-col gap-y-6 p-6 lg:p-10 shadow-xl w-[90%] lg:w-[60vw]  mt-[5%] mx-auto rounded-xl">
        <div className="flex gap-4 items-center">
          <UserSvg />
          <p className="font-normal leading-[1.3] text-[1.5em]">Username</p>
        </div>
        <p className="font-normal text-[16px] leading-[1.7] text-[#445d6e]">
          Your username will be visible to other users and can be used to tag
          you on a multiplayer algorithm
        </p>
        <div className="flex gap-4">
          <input
            className="bg-gray-100 text-black shadow-sm h-[50px] rounded-md w-[80%] px-6 py-6 outline-none"
            placeholder="Paul Ambrose"
          />
          <div className="bg-[#626ee3] hover:bg-[#5664e2] cursor-pointer rounded-lg text-white flex items-center justify-center gap-4 w-[20%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              fill="white"
              className="w-[20px] hidden lg:block"
            >
              <path d="m30.71 7.29-6-6A1 1 0 0 0 24 1H4a3 3 0 0 0-3 3v24a3 3 0 0 0 3 3h24a3 3 0 0 0 3-3V8a1 1 0 0 0-.29-.71ZM20 3v6h-8V3ZM8 29v-7a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7Zm21-1a1 1 0 0 1-1 1h-2v-7a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v7H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3h1.59L29 8.41Z"></path>
            </svg>
            <p className="text-[16px]">Save</p>
          </div>
        </div>
        <div className="text-black flex flex-col gap-y-2">
          <p className="font-medium text-[16px]">Rank:</p>
          <input
            className="bg-gray-100 text-black shadow-sm h-[50px] rounded-md w-[100%] px-6 py-6 outline-none"
            placeholder="Juniour Dev"
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 justify-between w-full">
          <div className="text-black flex flex-col gap-y-2 w-full lg:w-[30%]">
            <p className="font-medium text-[16px]">Total :</p>
            <input
              className="bg-gray-100 text-black shadow-sm h-[50px] rounded-md w-[100%]  px-6 py-6 outline-none"
              value="48"
            />
          </div>
          <div className="text-black flex flex-col gap-y-2 w-full lg:w-[30%]">
            <p className="font-medium text-[16px]">Won :</p>
            <input
              className="bg-gray-100 text-black shadow-sm h-[50px] rounded-md w-[100%]  px-6 py-6 outline-none"
              value={"25"}
            />
          </div>
          <div className="text-black flex flex-col gap-y-2 w-full lg:w-[30%]">
            <p className="font-medium text-[16px]">Lost :</p>
            <input
              className="bg-gray-100 text-black shadow-sm h-[50px] rounded-md w-[100%]  px-6 py-6 outline-none"
              value={"22"}
            />
          </div>
        </div>
        <button className="cursor-pointer bg-white  hover:bg-red-600 hover:text-white border-[1px] w-[40%] lg:w-[30%] text-red-600 text-[14px] mt-10 font-medium  rounded-xl pl-[5%] py-3 flex self-center">
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
