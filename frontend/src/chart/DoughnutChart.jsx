import React, { useEffect, useState } from "react";
import * as Papa from "papaparse";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import './doughnutChart.css'

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const csvUrl = "/dataset.csv"; // Path to your CSV file
      Papa.parse(csvUrl, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          const likes = result.data.reduce((sum, row) => sum + parseInt(row.likes, 10), 0);
          const shares = result.data.reduce((sum, row) => sum + parseInt(row.shares, 10), 0);
          const comments = result.data.reduce((sum, row) => sum + parseInt(row.comments, 10), 0);

          setChartData({
            labels: ["Likes", "Shares", "Comments"],
            datasets: [
              {
                label: "Engagement",
                data: [likes, shares, comments],
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                borderColor: "#FFFFFF",
                borderWidth: 2, // Border width of slices
              },
              
            ],
          });
        },
      });
    };

    fetchData();
  }, []);

  return (
    <div>
      {chartData ? (
        <div className="doughnut-chart-innerDiv">
          <h3 className="dough-chart-heading">Engagement Distribution</h3> {/* Heading added here */}
          <Doughnut
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    color: "#D1D5DB", // Change color of legend text
                    borderColor: "#FFFFFF", // White border around legend items
                    borderWidth: 2, // Border width for legend items
                    padding: 10, // Optional: Add padding around legend items
                  },
                },
              },
              elements: {
                arc: {
                  borderWidth: 2, // Optional, to adjust border width of the slices
                },
              },
            }}
          />
          <p className="dough-chart-description">
            This doughnut chart shows the total engagement (likes, shares, and comments).
          </p>
        </div>
      ) : (
        <p>Loading doughnut chart...</p>
      )}
    </div>
  );
};

export default DoughnutChart;
