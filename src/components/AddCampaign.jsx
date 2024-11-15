import { Button } from "@/components/ui/button";
import { useState } from "react";
import DetailTable from "../components/DataTable";
import UserData from "./campaign/UserData";
import Uploading from "./campaign/Uploading";
import NewCampaign from "./campaign/NewCampaign";
const AddCampaign = () => {
  const tabs = [
    {
      title: "Tab1",
      content: <NewCampaign />,
    },
    {
      title: "Tab2",
      content: <Uploading />,
    },
    {
      title: "Tab3",
      content: <UserData />,
    },
    {
      title: "Tab4",
      content: <Uploading />,
    },
    {
      title: "Tab5",
      content: <DetailTable />,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleNext = () => {
    if (activeTab < tabs.length - 1) {
      setActiveTab(activeTab + 1);
    }
  };
  const handlePrevious = () => {
    if (activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  return (
    <div className="flex flex-col justify-between h-[80vh] w-[85vw] bg-white">
      <div className="h-16 w-full border-b p-6">Dashboard</div>
      <div className="h-full">{tabs[activeTab].content}</div>
      <div className="flex justify-between border-t px-9 h-16 w-full  ">
        <Button className="bg-gray-600 mt-1" onClick={handlePrevious}>
          Previous
        </Button>
        <Button className="bg-yellow-500 mt-1" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default AddCampaign;
