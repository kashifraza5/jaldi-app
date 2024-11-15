// import { Button } from "@/components/ui/button";
// import { useState, useRef } from "react";
// import campgainLogo from "../assets/images/announcement.jpg";
// import Input from "../components/Input";
// import { FiUpload } from "react-icons/fi";
// import { FaRegCheckCircle } from "react-icons/fa";
// import { uploadingStatus } from "@/helper/helper";
// import DataTable from "react-data-table-component";
// import { AgentColumns,AgentData } from "@/helper/helper";
// import DetailTable from "@/components/DataTable";
import DataTable from "react-data-table-component";
import { campaignColumns, campaignData } from "@/helper/helper";
import styled from "styled-components";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
const Campaign = () => {
  const navigate = useNavigate();
  const StyledTable = styled.div`
    .rdt_TableHead {
      background-color: #4a5568;
    }

    .rdt_TableHeadRow {
      font-weight: bold;
    }

    .rdt_TableRow:hover {
      background-color: #edf2f7;
    }

    button {
      padding: 6px 12px;
      border-radius: 4px;
      font-size: 14px;
      cursor: pointer;
    }

    // button.bg-slate-700 {
    //   background-color: #2d3748;
    // }
  `;

  const handleAddCampaign = () => {
    navigate("/addCampaign"); // Navigate to the AddCampaign route
  };

  return (
    <div className="">
      <div className="flex justify-end px-9 "><Button className='bg-yellow-400 hover:bg-yellow-500' onClick={handleAddCampaign}>Add Campaign</Button></div>
      <div className="  mx-auto p-4 h-screen inter-font">
        <StyledTable>
          <DataTable
            title="Marketing Campaigns"
            columns={campaignColumns}
            data={campaignData}
            pagination
            selectableRows
            highlightOnHover
            subHeader
            subHeaderAlign="right"
            subHeaderWrap
          />
        </StyledTable>
      </div>
    </div>
  );
};

export default Campaign;
