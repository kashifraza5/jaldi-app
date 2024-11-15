import React from "react";
import CallOutcomes from "./CallOutcomes";
import { IoRocketOutline } from "react-icons/io5";
import DynamicTable from "../DynamicTable";
import TopPerformingAgents from "../TopPerformingAgents";

const MyProductivity = () => {
  const data = [
    { name: "Answered", value: 20, color: "#00C49F" },
    { name: "Did Not Responeded", value: 15, color: "#800080" },
    { name: "Dead Numbers", value: 10, color: "#000080" },
  ];
  return (
    <div className="inter-font">
      <div className="grid grid-cols-12 h-[355px] gap-4 ">
        <div className="col-span-4 bg-white rounded-xl">
          <p className="text-lg font-semibold p-4">Call Outcomes</p>
          <CallOutcomes />
        </div>
        <div className="flex justify-center col-span-4 bg-white rounded-xl">
          <div className="flex flex-col items-center  justify-between py-3">
            <div className="text-[13px] font-bold">
              AVERAGE LEAD RESPONSE TIME
            </div>
            <div>
              <IoRocketOutline className="w-8 h-8 text-red-700 " />
            </div>
            <div className="text-[16px] font-bold">0</div>
            <div className="text-[14px] font-bold">SECONDS</div>
          </div>
        </div>
        <div className="col-span-4 rounded-xl ">
          <div className="grid grid-rows-12 h-full gap-3">
            <div className="row-span-6 bg-white">
              <div className="flex flex-col items-center justify-between h-full  py-3 ">
                <div className="text-[14px] font-bold ">Call Answer Rate</div>
                <div className="text-blue-800 text-[25px] font-bold">55%</div>
                <div className="text-[14px] font-bold">Answered</div>
              </div>
            </div>
            <div className="row-span-6 bg-white">
              <div className="flex flex-col items-center justify-between h-full  py-3 ">
                <div className="text-[14px] font-bold ">Over Due Tasks</div>
                <div className="text-blue-800 text-[25px] font-bold">0</div>
                <div className="text-[14px] font-bold">Pending</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 mt-2">
        <div className="bg-white h-[300px] col-span-12 p-4">
          <TopPerformingAgents />
        </div>
      </div>

      <div className="grid grid-cols-12 mt-3">
        <div className="bg-white h-[150px] col-span-12 ">
          <DynamicTable />
        </div>
      </div>
    </div>
  );
};

export default MyProductivity;
