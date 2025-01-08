import React from "react";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import DoughnutChart from "./DoughnutChart";
import "./analyticsPage.css"; // Import CSS for styling
import { HiArrowLeft } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const AnalyticsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="analytics-container">
      <div className="analyticsPage-gotohome-btn">
        <div className="analyticsPage-gotohome-btn-inner-div">
          <button
            onClick={() => navigate("/")}
            className="px-5 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg flex items-center"
          >
            <HiArrowLeft className="h-4 w-4 mr-2 " />
            Back to Home
          </button>
        </div>
      </div>
      <h1>Social Media Analytics</h1>
      {/* Bar Chart - 80% width */}
      
      <div className="chart-container bar-chart">
        <BarChart />
      </div>

      {/* Pie Chart and Doughnut Chart - 80% width */}
      <div className="chart-container pie-doughnut-charts pie-dough">
        <div className="chart-container pie-chart">
          <PieChart />
        </div>
        <div className="chart-container doughnut-chart">
          <DoughnutChart />
        </div>
      </div>

      {/* Line Chart - 80% width */}
      <div className="chart-container line-chart">
        <LineChart />
      </div>
    </div>
  );
};

export default AnalyticsPage;
