import React, { useEffect, useState } from "react";
import * as Papa from "papaparse";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import './pieChart.css'

// Register necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const csvUrl = "/dataset.csv"; // Path to your CSV file
      Papa.parse(csvUrl, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          const postTypes = {};
          result.data.forEach((row) => {
            postTypes[row.post_type] = (postTypes[row.post_type] || 0) + 1;
          });

          setChartData({
            labels: Object.keys(postTypes),
            datasets: [
              {
                label: "Post Types",
                data: Object.values(postTypes),
                backgroundColor: [
                  "#FF6384", // Color for the first slice
                  "#36A2EB", // Color for the second slice
                  "#FFCE56", // Color for the third slice
                  "#4BC0C0", // Color for the fourth slice
                  "#9966FF", // Color for the fifth slice
                ],
                borderColor: "#FFFFFF", // Border color of slices
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
        <div className="piechart-innerDiv">
          <h3 className="pie-chart-heading">Post Types Distribution</h3> {/* Heading added here */}
          <Pie
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    color: "#D1D5DB", // Change color of legend text
                  },
                },
                tooltip: {
                  callbacks: {
                    label: (tooltipItem) => {
                      // Customize tooltip labels
                      return `${tooltipItem.label}: ${tooltipItem.raw}`;
                    },
                  },
                },
              },
            }}
          />
          <p className="pie-chart-description">
            This pie chart displays the distribution of different post types.
          </p>
        </div>
      ) : (
        <p>Loading pie chart...</p>
      )}
    </div>
  );
};

export default PieChart;
