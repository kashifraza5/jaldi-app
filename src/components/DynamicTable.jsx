import React from "react";
import DataTable from "react-data-table-component";

const data = [
  {
    agent: "Abdul Rehman",
    total: 10,
    contacted: 10,
    pending: 0,
    qualified: 5,
    workingDeals: 1,
    closedDeals: 0,
    futureProspects: 1,
    lostDeals: 0,
    didNotRespond: 0,
    unqualified: 3,
  },
  // Add more rows if needed
];

const columns = [
  { name: "Agent", selector: (row) => row.agent },
  { name: "Total", selector: (row) => row.total },
  { name: "Contacted", selector: (row) => row.contacted },
  { name: "Pending", selector: (row) => row.pending },
  { name: "Qualified", selector: (row) => row.qualified },
  {
    name: "Working Deals",
    selector: (row) => row.workingDeals,
  },
  { name: "Closed Deals", selector: (row) => row.closedDeals },
  {
    name: "Future Prospects",
    selector: (row) => row.futureProspects,
  },
  { name: "Lost Deals", selector: (row) => row.lostDeals },
  {
    name: "Did Not Respond",
    selector: (row) => row.didNotRespond,
  },
  { name: "Unqualified", selector: (row) => row.unqualified },
];

const DynamicTable = () => {
  return (
    <div className="grid grid-cols-12 mt-3">
      {/* Data Table section */}
      <div className="col-span-12 bg-white shadow-md rounded p-4">
        <DataTable
          title="Agent Leaderboard"
          columns={columns}
          data={data}
          highlightOnHover
         
        />
      </div>
    </div>

  );
};

export default DynamicTable;
