import React, { useEffect, useState } from "react";
import * as Papa from "papaparse";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import './barChart.css'

// Register necessary components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const BarChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const csvUrl = "/dataset.csv"; // File path from public folder
      Papa.parse(csvUrl, {
        download: true,
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          // Process data to generate chart
          const labels = result.data.map((row) => row.post_id);
          const likes = result.data.map((row) => parseInt(row.likes, 10));

          setChartData({
            labels,
            datasets: [
              {
                label: "Likes",
                data: likes,
                backgroundColor: "rgba(75,192,192,0.6)",
                borderColor: "rgba(75,192,192,1)",
                borderWidth: 1,
              },
            ],
          });
        },
      });
    };

    fetchData();
  }, []);

  return (
    <div className="bar_chart">
      {chartData ? (
        <div className="bar_chart_head-draw">
          <h3 className="bar-chart-heading">Likes Over Time</h3> {/* Heading added here */}
          <Bar className="bar-chart-draw"
            data={chartData}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: true,
                  labels: {
                    color: "#D1D5DB", // Change color of legend labels
                    borderColor: "#FFFFFF", // White border around legend items
                    borderWidth: 2, // Border width for legend items
                    padding: 10, // Optional: Add padding around legend items
                  },
                },
              },
              scales: {
                x: {
                  title: {
                    display: true,
                    text: "Days", // x-axis label
                    font: {
                      size: 18, // Increase font size
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
                    text: "Likes", // y-axis label
                    font: {
                      size: 18, // Increase font size
                      weight: "bold",
                      color: "#D1D5DB", // Change color of y-axis title
                    },
                  },
                  ticks: {
                    color: "#D1D5DB", // Change color of y-axis numbers
                  },
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
};

export default BarChart;
