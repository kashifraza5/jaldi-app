import DataTable from "react-data-table-component";
import { agentsHeaders, agents } from "@/helper/helper";
const DetailTable = () => {
  return (
    <div className="w-full h-full p-6 ">
      {/* DataTable Component */}
      <DataTable columns={agentsHeaders } data={agents} selectableRows />
    </div>
  );
};

export default DetailTable;
