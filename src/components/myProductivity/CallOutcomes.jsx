// CallOutcomesChart.js
import React from "react";
import ReactApexChart from "react-apexcharts";

const CallOutcomes = () => {
  const chartOptions = {
    series: [8, 2, 1],
    chart: {
      type: "donut",
    },
    labels: ["Answered", "Did Not Respond", "Dead Numbers"],
    colors: ["#66DA26", "#FFB951", "#FF4560"], // Colors for the sections
    plotOptions: {
      pie: {
        donut: {
          size: "70%",
        },
      },
    },
    dataLabels: {
      enabled: false,
    },

    legend: {
      position: "bottom",
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
    <div>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="donut"
        height={320}
        
      />
    </div>
  );
};

export default CallOutcomes;
