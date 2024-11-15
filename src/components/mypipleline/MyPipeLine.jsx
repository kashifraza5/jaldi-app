import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import AccountProgress from "../AccountProgress";
import CustomDonutChart from "../CustomDonutChart";
import DynamicTable from "../DynamicTable";
import TopPerformingAgents from "../TopPerformingAgents";

const MyPipeLine = () => {
  const data = [];

  const leadsStats = [
    {
      title: "Total Leads",
      count: "8",
      leads: "LEADS",
    },
    {
      title: "CONTACTED",
      count: "5",
      leads: "LEADS",
    },
    {
      title: "PENDING",
      count: "12",
      leads: "LEADS",
    },
    {
      title: "CLOSED",
      count: "2",
      leads: "LEADS",
    },
  ];

  return (
    <div className="inter-font">
      <div className="grid  grid-cols-6 gap-4">
        {leadsStats.map((card, index) => (
          <Card
            key={index}
            className="h-[135px] flex justify-center items-center"
          >
            <CardContent className=" text-center  space-y-3 py-2">
              <h2 className="text-xs font-semibold mb-2 ">{card.title}</h2>
              <p className="text-3xl font-semibold text-secondary !text-blue-900 mb-2">
                {card.count}
              </p>
              <p className="text-xs font-semibold text-tertiary-gray-dark">
                {card.leads}
              </p>
            </CardContent>
          </Card>
        ))}

        <Card className="col-span-2">
          <CardContent className="text-center">
            {/* <h2 className="text-lg font-bold">Total Leads</h2>
            <p className="text-2xl font-bold ">8</p>
            <p className="text-sm text-muted-foreground">Leads</p> */}
              
           {/* <DropDown/> */}

          </CardContent>
        </Card>

        {/* Last card with full width */}
      </div>

      <div className="grid grid-cols-12 gap-4 mt-2 h-[400px]">
        <div className="col-span-8 bg-white rounded-lg p-4 shadow-md">
          <p className="text-xl font-medium mb-6">Lead Sources</p>
          <div className="">
            <AccountProgress />
          </div>
        </div>

        <div className="col-span-4 bg-white rounded-lg p-4 shadow-md">
          <p className="text-lg font-semibold">Status</p>
          <CustomDonutChart data={data} />
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

export default MyPipeLine;
