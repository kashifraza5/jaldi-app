import Input from "@/components/Input";
import { Button } from "@headlessui/react";
import DataTable from "react-data-table-component";
import { IoIosAdd } from "react-icons/io";
import { agentsHeaders,agents } from "@/helper/helper";
import Modal from "@/components/Modal";
const AddAgents = () => {
  return (
    <div className="flex flex-col  bg-white w-[85vw] h-[85vh] inter-font">
      <div className="flex justify-end p-9">
         {/* <Button className='flex  bg-yellow-300 rounded-sm px-5 py-1 text-slate-800'>
          <span><IoIosAdd className="w-6  h-6 text-slate-800"/>
          </span>
          <span>ADD Agent</span>
         </Button> */}
         <Modal/>
      </div>
        <div className="w-full h-full px-5 ">
      {/* DataTable Component */}
      <DataTable columns={agentsHeaders } data={agents} selectableRows />
    </div>
    </div>
  );
};

export default AddAgents;




  