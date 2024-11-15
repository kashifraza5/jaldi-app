export const Campaigntabs = [
  { name: "Active" },
  { name: "Archived" },
  { name: "On Pause" },
];

export const CampaigntabContent = {
  Active: (
    <div>
      <div className="px-3">
        {" "}
        <label htmlFor="input-group-search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="input-group-search"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-offset-2 outline-none  focus:border-blue-900 dark:bg-blue-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-900 dark:focus:border-blue-900"
            placeholder="Search user"
          />
        </div>
      </div>
      <div className="py-2 space-y-1 px-3 text-left">
        <div className="mb-2">
          <input type="checkbox" id="secondary-sales" className="mr-2" />
          <label htmlFor="Created-By-Agent">Created By Agent</label>
        </div>
        <div className="mb-2 flex items-center">
          <input
            type="checkbox"
            id="leasing"
            className="mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="Select-ALL" className="text-gray-700">
            Select ALL
          </label>
        </div>
      </div>
      <div className="border-b border-gray-400"></div>

      <div className="py-2 overflow-y-scroll px-3 text-left">
        <div className="mb-2">
          <input type="checkbox" id="secondary-sales" className="mr-2" />
          <label htmlFor="Created-By-Agent">Created By Agent</label>
        </div>
        <div className="mb-2 flex items-center">
          <input
            type="checkbox"
            id="leasing"
            className="mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="Select-ALL" className="text-gray-700">
            Select ALL
          </label>
        </div>
         
      </div>

      <div className="px-3">
        <button className="w-full  bg-yellow-400 text-gray-900 py-2 rounded-lg hover:bg-yellow-500">
          Apply
        </button>
      </div>
    </div>
  ),
  Archived: (
    <div>
      <div className="text-gray-600">No campaign found.</div>
    </div>
  ),
  OnPause: (
    <div>
      <div className="text-gray-600">No campaign found.</div>
    </div>
  ),
};




export const agenttabs = [
    { name: "Active" },
    { name: "Archived" },

  ];
  
  export const agenttabContent = {
    Active: (
      <div>
        <div className="px-3">
          {" "}
          <label htmlFor="input-group-search" className="sr-only">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-search"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-offset-2 outline-none  focus:border-blue-900 dark:bg-blue-900 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-900 dark:focus:border-blue-900"
              placeholder="Search user"
            />
          </div>
        </div>
        <div className="py-2 space-y-1 px-3 text-left">
          <div className="mb-2">
            <input type="checkbox" id="secondary-sales" className="mr-2" />
            <label htmlFor="Created-By-Agent">Created By Agent</label>
          </div>
          <div className="mb-2 flex items-center">
            <input
              type="checkbox"
              id="leasing"
              className="mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="Select-ALL" className="text-gray-700">
              Select ALL
            </label>
          </div>
        </div>
        <div className="border-b border-gray-400"></div>
  
        <div className="py-2 overflow-y-scroll px-3 text-left">
          <div className="mb-2">
            <input type="checkbox" id="secondary-sales" className="mr-2" />
            <label htmlFor="Created-By-Agent">Created By Agent</label>
          </div>
          <div className="mb-2 flex items-center">
            <input
              type="checkbox"
              id="leasing"
              className="mr-2 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="Select-ALL" className="text-gray-700">
              Select ALL
            </label>
          </div>
           
        </div>
  
        <div className="px-3">
          <button className="w-full  bg-yellow-400 text-gray-900 py-2 rounded-lg hover:bg-yellow-500">
            Apply
          </button>
        </div>
      </div>
    ),
    Archived: (
      <div>
        <div className="text-gray-600">No campaign found.</div>
      </div>
    ),

  };



 export const uploadingStatus = [
     {
      title:"Your File Contained",
      count:"1600",
      type:"Leads"
     },
     {
      title:"SucessFully Uploaded",
      count:"2500",
      type:"Leads"
     },
     {
      title:"Duplicates",
      count:"100",
      type:"Leads"
     },
     {
      title:"Unsuccessful",
      count:"100",
      type:"Leads"
     },
 ]
  


export const AgentColumns = [
  {
    name: "User",
    selector: (row) => row.user,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
    cell: (row) => (
      <span
        className={
          row.status === "Active" ? "status-active" : "status-invited"
        }
      >
        {row.status}
      </span>
    ),
  },
];

// Define the data
export const AgentData = [
  {
    id: 1,
    user: "Jerome Bell",
    email: "michele.rivera@example.com",
    status: "Active",
  },
  {
    id: 2,
    user: "Savannah Nguyen",
    email: "deanna.curtis@example.com",
    status: "Active",
  },
  {
    id: 3,
    user: "Theresa Webb",
    email: "tanya.hill@example.com",
    status: "Invited",
  },

];



export const agents = [
  {
    id: 1,
    name: "Jerome Bell",
    email: "michele.rivera@example.com",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Savannah Nguyen",
    email: "deanna.curtis@example.com",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Theresa Webb",
    email: "tanya.hill@example.com",
    status: "InActive",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Courtney Henry",
    email: "michael.mitc@example.com",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Jenny Wilson",
    email: "bill.sanders@example.com",
    status: "Active",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

// Define the columns for the table
export const agentsHeaders = [
  {
    name: "USER",
    selector: (row) => (
      <div className="flex justify-between  items-center space-x-3 w-[40vw]">
        <div className="flex items-center space-x-3">
          <img
            src={row.avatar}
            alt={row.name}
            className="w-8 h-8 rounded-full"
          />
          <span>{row.name}</span>
        </div>
      </div>
    ),
    sortable: true,
  },
  {
    name: "EMAIL",
    selector: (row) => (
      <div className="flex justify-between w-[40vw]">
        <span>{row.email}</span>
      </div>
    ),
    sortable: true,
  },
  {
    name: "STATUS",
    cell: (row) => (
      <div className="flex justify-between w-[15vw]">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            row.status === "Active"
              ? "bg-green-100 text-green-600"
              : "bg-purple-100 text-purple-600"
          }`}
        >
          {row.status}
        </span>
      </div>
    ),
    sortable: true,
  },
];






export const campaignColumns = [
  {
    name: 'Campaign Name',
    selector: row => row.campaignName,
    sortable: true,
    width: '200px',  // Increase width
  },
  {
    name: 'Start Date',
    selector: row => row.startDate,
    sortable: true,
    width: '150px',  // Increase width
  },
  {
    name: 'End Date',
    selector: row => row.endDate,
    sortable: true,
    width: '150px',  // Increase width
  },
  {
    name: 'Status',
    selector: row => row.status,
    sortable: true,
    width: '120px',  // Increase width
  },
  {
    name: 'Target Properties',
    selector: row => row.targetProperties,
    sortable: true,
    right: true,
    width: '160px',  // Increase width
  },
  {
    name: 'Leads Generated',
    selector: row => row.leadsGenerated,
    sortable: true,
    right: true,
    width: '160px',  // Increase width
  },
  {
    name: 'Budget',
    selector: row => row.budget,
    sortable: true,
    right: true,
    width: '120px',  // Increase width
  },
  {
    name: 'Cost Per Lead',
    selector: row => row.cpl,
    sortable: true,
    right: true,
    width: '150px',  // Increase width
  },
  {
    name: 'Source',
    selector: row => row.source,
    sortable: true,
    width: '150px',  // Increase width
  },
  {
    name: 'Assigned Team/Agent',
    selector: row => row.assignedTeam,
    sortable: true,
    width: '180px',  // Increase width
  },

  {
    name: 'Actions',
    cell: row => (
      <div className="s">
        <button className="mr-2 bg-slate-700   py-2 px-3 text-white rounded-md">Edit</button>
        <button className="bg-red-800   py-2 mr-2 px-3 text-white rounded-md ">Delete</button>
        <button className="bg-yellow-500  px-3 py-2 text-white rounded-md ">Progress</button>

      </div>
    ),
    width: '250px',  // Increase width of Actions column
  },
];


export const campaignData = [
  {
    id: 1,
    campaignName: 'Summer Sale Campaign',
    startDate: '2024-06-01',
    endDate: '2024-06-30',
    status: 'Active',
    targetProperties: 120,
    leadsGenerated: 30,
    budget: '$5,000',
    cpl: '$50',
    source: 'Google Ads',
    assignedTeam: 'Team Alpha',
    performance: '5%',
  },
  {
    id: 2,
    campaignName: 'New Year Property Deals',
    startDate: '2024-01-01',
    endDate: '2024-01-31',
    status: 'Completed',
    targetProperties: 200,
    leadsGenerated: 60,
    budget: '$8,000',
    cpl: '$40',
    source: 'Facebook Ads',
    assignedTeam: 'Team Beta',
    performance: '7%',
  },
  // Add more sample data as needed
];
