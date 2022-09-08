import * as React from "react";
import BarChart from "./Charts/BarChart/BarChart";
import PieChart from "./Charts/PieChart/PieChart";
import axios from "axios";
import "./style.css";

export default function App() {
  const [dashboardData, setDashboardData] = React.useState<Record<string, any>>(
    {}
  );
  const [stage, setStage] = React.useState<string>("");

  const getDashBoardData = async () => {
    try {
      setStage("loading");
      const res = await axios.get("https://test.api.mainstack.io");

      setStage("data");
      setDashboardData(res.data);
    } catch (err) {
      setStage("error");
    }
  };

  React.useEffect(() => {
    getDashBoardData();
  }, []);

  const renderBasedOnApiStage = () => {
    switch (stage) {
      case "loading":
        return <p className="stage">Loading...</p>;
      case "data":
        return (
          <div className="chart-container">
            <div className="pie-chart-container">
              <div className="pie-chart">
                <PieChart
                  labels={dashboardData?.top_locations?.map(
                    (locations: Record<string, string | number>) =>
                      `${locations?.country} | count: ${locations?.count}`
                  )}
                  pieData={dashboardData?.top_locations?.map(
                    (locations: Record<string, string | number>) =>
                      locations?.percent
                  )}
                />
              </div>
              <div className="pie-chart">
                <PieChart
                  labels={dashboardData?.top_sources?.map(
                    (data: Record<string, string | number>) =>
                      `${data?.source} | count: ${data?.count}`
                  )}
                  pieData={dashboardData?.top_sources?.map(
                    (data: Record<string, string | number>) => data?.count
                  )}
                />
              </div>
            </div>
            <div className="bar-chart">
              <BarChart
                labels={Array?.from(
                  Object?.keys(dashboardData?.graph_data?.views)
                )}
                barData={Array?.from(
                  Object?.values(dashboardData?.graph_data?.views)
                )}
              />
            </div>
          </div>
        );
      case "error":
        return (
          <p className="stage error" onClick={getDashBoardData}>
            Error occurred, try again
          </p>
        );
    }
  };

  return (
    <div>
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>
      {renderBasedOnApiStage()}
    </div>
  );
}
