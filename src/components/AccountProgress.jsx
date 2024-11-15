import ProgressBar from "@ramonak/react-progress-bar";
import { FaFacebook } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { RiGlobalFill } from "react-icons/ri";
import { FaFileCsv } from "react-icons/fa6";

const socialMediaStats = [
  {
    title: "Facebook",
    logo: <FaFacebook className="w-8 h-8  text-blue-900" />,
    value: "5",
  },
  {
    title: "TikTok",
    logo: <AiFillTikTok className="w-8 h-8  text-blue-900" />,
    value: "5",
  },
  {
    title: "Websites",
    logo: <RiGlobalFill className="w-8 h-8  text-blue-900" />,
    value: "5",
  },
  {
    title: "CSV",
    logo: <FaFileCsv className="w-7 h-7  text-blue-900" />,
    value: "5",
  },
];

const AccountProgress = () => {
  return (
    <div className="space-y-5">
      {socialMediaStats.map((stat, index) => (
        <div key={index} className="flex flex-row justify-between inter-font">
          <div className="w-[5vw]">{stat.logo}</div>
          <div className="w-[70vw]">
            <div className="flex  justify-between ">
              <p className="font-bold">{stat.title}</p>
              <p>{stat.value}</p>
            </div>
            <ProgressBar
              completed={stat.value}
              height="10px"
              bgColor="#FFC300"
              margin=""
              labelColor="#FFC300"
              labelSize="14px"
              transitionDuration="300"
              maxCompleted={10}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccountProgress;

// {
//     <AiFillTikTok />,
//     <RiGlobalFill />,
//     <FaFileCsv />

// },
