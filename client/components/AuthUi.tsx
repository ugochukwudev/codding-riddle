import React from "react";
import AuthIcon from "./AuthIcon";
type props = {
  toggle: Function;
};
const AuthUi = ({ toggle }: props) => {
  return (
    <div className="fixed text-[#02203c] shadow-[2px_2px_10px_0_rgb(0,0,0.4)] top-[6%] border-t-[5px] rounded-lg border-[#626ee3] p-10 bg-white w-[90vw] lg:w-[30vw] left-[calc(5vw)] lg:left-[calc(50%-15vw)]">
      <div
        onClick={() => toggle()}
        className="h-[15px] hover:opacity-100  absolute opacity-50 cursor-pointer top-[5px] right-[5px] transition-[opacity] duration-[2000] w-[15px] before:bg-gray-400 before:rounded-[4px] before:content-[''] before:rotate-45 before:w-1 before:h-5 before:absolute after:bg-gray-400 after:rounded-[4px] after:content-[''] after:rotate-[320deg] after:w-1 after:h-5 after:absolute"
      ></div>
      <p className="text-[24px] text-center">Sign In to</p>
      <div className="flex justify-center gap-0 items-center text-black ">
        <img src="/logo.png" className="rounded-full h-[100px] " alt="" />
        <p className="text-[30px]">Coding Riddles</p>
      </div>
      <p className="mt-4 mb-4 leading-[1.7] text-[#445d6e] text-center text-[16px]">
        Log In to experience a townhall.{" "}
      </p>
      <div className="flex flex-col gap-4">
        <AuthIcon title="Google" tag="google" color="#4285f4" />
        <AuthIcon title="Github" tag="github" color="#252525" />
        <AuthIcon title="Facebook" tag="facebook" color="#1877f2" />
        <AuthIcon title="LinkedIn" tag="linkedin" color="#0072b1" />
      </div>
    </div>
  );
};

export default AuthUi;
