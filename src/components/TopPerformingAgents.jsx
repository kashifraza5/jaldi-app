import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { IoMdContact } from "react-icons/io";

const TopPerformingAgents = () => {
  return (
    <div>
      <p className="text-xl font-bold mb-6">Top Performing Agents</p>

      <Card className="flex flex-col w-[350px] h-[200px] bg-[#FFFBD1] shadow-sm hover:shadow-md border-none">
        <CardContent className=" text-center space-y-2 py-2">
          <div className="flex space-x-2">
            <span>
              {" "}
              <IoMdContact className="w-9 h-9 text-gray-400" />
            </span>
            <span className="text-[18px] py-1 ">
              <h2 className=" font-semibold mb-2 ">Kashif Raza</h2>
            </span>
          </div>

          <div className="flex flex-col justify-between w-[100%] h-[100px] !mt-[20px] text-[14px] font-medium">
            <div className="flex felx-row justify-between ">
              <p>Leads Contacted</p>
              <p>0</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Qualified Leads</p>
              <p>0</p>
            </div>
            <div className="flex flex-row justify-between">
              <p>Deals Closed</p>
              <p>0</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TopPerformingAgents;
