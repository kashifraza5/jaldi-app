import Input from "../Input";
import campgainLogo from "../../assets/images/announcement.jpg";

const NewCampaign = () => {
  return (
    <div className="flex  justify-center items-center">
      <div className=" inter-font py-5">
        <h1 className="text-lg font-extrabold tracking-wide text-center">
          Let's Create New Campaign
        </h1>
        <div className="flex justify-center ">
          <img src={campgainLogo} className="w-[25%] h-[25%]" alt="" />
        </div>
        <div className="flex flex-col justify-center  w-[50%] mx-auto  mt-5 space-y-1">
          <p className="text-slate-900 font-semibold tracking-wide">
            Enter Campaign Name
          </p>
          <Input placeholder="Enter Campaign Name" className="py-2 w-[300px]" />
        </div>
      </div>
    </div>
  );
};

export default NewCampaign;
