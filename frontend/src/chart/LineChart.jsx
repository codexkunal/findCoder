import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import Papa from "papaparse";
import './LineChart.css'

// Register necessary components for the chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const LineChart = () => {
  const [chartData, setChartData] = useState(null); // State to store chart data

  // Fetch and parse the CSV file
  useEffect(() => {
    Papa.parse("/dataset.csv", {
      download: true, // Enables downloading the file from the public directory
      header: true, // Treats the first row as headers
      complete: (result) => {
        // Process the CSV data after parsing
        const labels = result.data.map((row) => row.post_id); // X-axis labels, here using 'post_id'
        const data = result.data.map((row) => parseInt(row.shares)); // Replace 'shares' for the Y-axis data
        setChartData({
          labels: labels,
          datasets: [
            {
              label: "Shares Over Time", // Label for the line
              data: data,
              fill: false,
              borderColor: "rgba(255, 99, 132, 1)", // Line color
              tension: 0.1,
            },
          ],
        });
      },
      error: (err) => {
        console.error("Error parsing CSV: ", err);
      },
    });
  }, []);

  // If data is not yet loaded, show a loading message
  if (!chartData) {
    return <div>Loading...</div>;
  }

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false, // Remove old title
      },
      tooltip: {
        enabled: true,
      },
      legend: {
        labels: {
          color: "#D1D5DB", // Change the color of the legend text (e.g., "Shares Over Time")
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Days", // Title for X-axis
          font: {
            size: 18, // Increase font size for x-axis label
            weight: "bold",
            color: "#D1D5DB", // Change color of x-axis title
          },
        },
        ticks: {
          color: "#D1D5DB", // Change color of x-axis numbers
        },
      },
      y: {
        title: {
          display: true,
          text: "Shares", // Title for Y-axis
          font: {
            size: 18, // Increase font size for y-axis label
            weight: "bold",
            color: "white", // Change color of y-axis title
          },
        },
        ticks: {
          color: "#D1D5DB", // Change color of y-axis numbers
        },
        beginAtZero: true,
      },
    },
  };
  
  
  
  

  return (
    <div className="line_chart">
      <h3 className="line-chart-heading">Shares Over Time</h3> {/* New heading added */}
      <Line className="line_chart_draw" data={chartData} options={options} />
    </div>
  );
};

export default LineChart;
