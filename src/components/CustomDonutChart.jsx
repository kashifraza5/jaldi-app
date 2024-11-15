import React from "react";
import ReactApexChart from "react-apexcharts";

const CustomDonutChart = () => {
  // Define chart data internally
  const chartData = [
    { name: "Qualified Leads", value: 20, color: "#00C49F" },
    { name: "Working Leads", value: 15, color: "#800080" },
    { name: "Deals Closed", value: 10, color: "#000080" },
    { name: "Future Prospect", value: 5, color: "#808080" },
    { name: "Lost Deals", value: 10, color: "#00BFFF" },
    { name: "Did Not Respond", value: 5, color: "#FFD700" },
    { name: "Unqualified Leads", value: 35, color: "#FF4500" },
  ];

  // Extract labels, series data, and colors from the chartData
  const chartLabels = chartData.map((entry) => entry.name);
  const chartSeries = chartData.map((entry) => entry.value);
  const chartColors = chartData.map((entry) => entry.color);

  // Apex chart options
  const chartOptions = {
    series: chartSeries,
    chart: {
      type: "donut",
    },
    labels: chartLabels,
    colors: chartColors,
    plotOptions: {
      pie: {
        donut: {
          size: "75%",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false, // Custom legend
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " calls";
        },
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  return (
    <div className="flex">
      {/* Status Legend */}
      <div className="flex mr-4">
        <ul className="list-none p-0">
          {chartData.map((entry, index) => (
            <li key={`item-${index}`} className="flex items-center mb-2">
              <div
                className="w-3 h-3 rounded-full mr-2"
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className="text-sm">{entry.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pie Chart */}
      <div className="flex flex-col justify-center">
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="donut"
          height={280}
          width={250}
        />
      </div>
    </div>
  );
};

export default CustomDonutChart;
