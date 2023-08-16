import UserSvg from "@/components/UserSvg";
import React from "react";

const LeaderBoard = () => {
  const data = ["1", "2"];
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

      <div
        style={{
          backgroundImage:
            "linear-gradient(-90deg, rgb(2, 32, 70), rgb(0, 21, 50))",
        }}
        className=" text-black   flex flex-col gap-y-6 p-6 lg:p-10 shadow-xl w-[90%] lg:w-[95vw]  mt-[5%] mx-auto rounded-xl"
      >
        <div className="border-[0.1px] w-[100%] h-[50vh] scrollbar-hide text-white overflow-y-scroll p-4 lg:p-8 rounded-lg">
          <div className=" scrollbar-hide h-[40vh] overflow-y-scroll">
            <p className="leading-[30px] text-[16px] font-normal">
              You are in charge of the cake for a child's birthday. You have
              decided the cake will have one candle for each year of their total
              age. They will only be able to blow out the tallest of the
              candles. Count how many candles are tallest. Example The maximum
              height candles are units high. There are of them, so return .
              Function Description Complete the function birthdayCakeCandles in
              the editor below. birthdayCakeCandles has the following
              parameter(s): int candles[n]: the candle heights Returns int: the
              number of candles that are tallest Input Format The first line
              contains a single integer, , the size of . The second line
              contains space-separated integers, where each integer describes
              the height of . Constraints Sample Input 0 4 3 2 1 3 Sample Output
              0 2 Explanation 0 Candle heights are . The tallest candles are
              units, and there are of them. You are in charge of the cake for a
              child's birthday. You have decided the cake will have one candle
              for each year of their total age. They will only be able to blow
              out the tallest of the candles. Count how many candles are
              tallest. Example The maximum height candles are units high. There
              are of them, so return . Function Description Complete the
              function birthdayCakeCandles in the editor below.
              birthdayCakeCandles has the following parameter(s): int
              candles[n]: the candle heights Returns int: the number of candles
              that are tallest Input Format The first line contains a single
              integer, , the size of . The second line contains space-separated
              integers, where each integer describes the height of . Constraints
              Sample Input 0 4 3 2 1 3 Sample Output 0 2 Explanation 0 Candle
              heights are . The tallest candles are units, and there are of
              them.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-y-10">
          <div className=" w-full lg:w-[65%] h-[50vh] lg:h-[90vh] border-[0.1px] rounded-lg text-white p-8 overflow-y-scroll scrollbar-hide">
            <div className=" scrollbar-hide h-[80vh] overflow-y-scroll ">
              <p className="leading-[30px] text-purple-600 text-[16px] font-normal">
                {"const solveAlgo=(sum,data)=>{"}
              </p>
              <p className="leading-[30px] text-green-600 text-[16px] font-normal">
                {"const data = sum.forEach((e )=>{"}
              </p>
              <p className="leading-[30px] text-pink-600 text-[16px] font-normal">
                {"console.log(e)"}
              </p>
              <p className="leading-[30px] text-orange-600 text-[16px] font-normal">
                {"return e.max;"}
              </p>
              <p className="leading-[30px] text-green-600 text-[16px] font-normal">
                {"})"}
              </p>
              <p className="leading-[30px] text-yellow-600 text-[16px] font-normal">
                {"return townhall;"}
              </p>
              <p className="leading-[30px] text-purple-600 text-[16px] font-normal">
                {"}"}
              </p>
            </div>
          </div>
          <div className="border-[0.2px] text-white rounded-xl w-full lg:w-[30%] h-[90vh] p-6">
            <div className=" scrollbar-hide h-[80vh] flex flex-col gap-y-6 overflow-y-scroll">
              <div className="w-full rounded-xl bg-gray-600 p-4 flex flex-col gap-y-1 overflow-y-scroll scrollbar-hide min-h-[40vh]">
                <p className="font-bold">Your console to preview result:</p>
                <p className="text-[16px] font-semibold">
                  balablu jigibalabala
                </p>
              </div>
              {data.map(() => {
                return (
                  <div className="w-full rounded-xl bg-green-700 p-4 flex flex-col gap-y-1">
                    <p className="font-bold">Test Case: 1</p>
                    <div className="flex gap-4">
                      <p className="font-semibold text-[14px] leading-[16px]">
                        {"Sum : [5,2,4,5,6,7,7,7]"}
                      </p>
                      <p className="font-semibold text-[14px] leading-[16px]">
                        {'Data : "a dog " '}
                      </p>
                    </div>
                    <p className="font-semibold text-[16px] ">
                      {"Sol: a dog is 15yrs"}
                    </p>
                  </div>
                );
              })}
              {data.map(() => {
                return (
                  <div className="w-full rounded-xl bg-red-700 p-4 flex flex-col gap-y-1">
                    <p className="font-bold">Test Case: 1</p>
                    <div className="flex gap-4">
                      <p className="font-semibold text-[14px] leading-[16px]">
                        {"Sum : [5,2,4,5,6,7,7,7]"}
                      </p>
                      <p className="font-semibold text-[14px] leading-[16px]">
                        {'Data : "a dog " '}
                      </p>
                    </div>
                    <p className="font-semibold text-[16px] ">
                      {"Sol: a dog is 15yrs"}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <button className="bg-green-600 pl-12 text-white font-semibold text-[16px] py-2 w-[150px] rounded-lg flex self-end">
          Submit
        </button>
      </div>
    </div>
  );
};

export default LeaderBoard;
