import  { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MyPipeLine from "./mypipleline/MyPipeLine";
import MyProductivity from "./myProductivity/MyProductivity";
// import DropDownTabs from "./DropDownTabs";
// import { agenttabContent, agenttabs, CampaigntabContent, Campaigntabs } from "@/helper/helper";

const DashboardTabs = () => {
    
  const [active, setActive] = useState("pipeline");

  const handleTabChange = (value) => {
    setActive(value);
  };
  return (
    <div className="w-full">
      <Tabs
        defaultValue="pipeline"
        className="w-[]"
        onValueChange={handleTabChange}
      >
        <div className="relative">
          <TabsList className="gap-8  flex items-start justify-start w-full h-full bg-transparent mt-5 px-5">
            <TabsTrigger
              value="pipeline"
              className={`pb-3 !font-semibold inter-font uppercase px-3 text-slate-600 ${
                active === "pipeline"
                  ? "border-b-4 border-blue-900  text-blue-900"
                  : ""
              }`}
            >
              My Pipeline
            </TabsTrigger>
            <TabsTrigger
              value="productivity"
              className={`pb-3 !font-semibold inter-font uppercase px-3 text-slate-600 ${
                active === "productivity"
                  ? "border-b-4 border-blue-900 text-blue-900"
                  : ""
              }`}
            >
              My Productivity
            </TabsTrigger>
          </TabsList>
          {/* <div className="absolute flex  top-0 space-x-3 right-[40px]">
            <p className="mt-1 text-[15px] text-slate-700 inter-font">Filtered By</p>
            <DropDownTabs buttonName='Campaign' dropdownHeader='Campaign' tabs={Campaigntabs} tabContent={CampaigntabContent} />
            <DropDownTabs buttonName='Agent' dropdownHeader='Agent' tabs={agenttabs} tabContent={agenttabContent}/>
          </div> */}
        </div>
        <TabsContent value="pipeline" className="w-full h-full mt-5">
          <MyPipeLine />
        </TabsContent>

        <TabsContent value="productivity" className="w-full h-full mt-5">
          <MyProductivity />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DashboardTabs;
