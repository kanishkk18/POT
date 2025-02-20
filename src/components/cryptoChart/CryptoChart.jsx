import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import { 
  Chart as ChartJS, 
  LineElement, 
  PointElement, 
  LinearScale, 
  CategoryScale, // <-- Add this
  Title, 
  Tooltip 
} from "chart.js";

// Register the missing scale
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip);

const CryptoChart = ({ coinId = "bitcoin" }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart`,
          { params: { vs_currency: "usd", days: "7", interval: "daily" } }
        );

        const prices = response.data.prices.map((price) => ({
          time: new Date(price[0]).toLocaleDateString(),
          value: price[1],
        }));

        setChartData({
          labels: prices.map((p) => p.time),
          datasets: [
            {
              label: `${coinId} Price (USD)`,
              data: prices.map((p) => p.value),
              borderColor: "#3b82f6",
              backgroundColor: "rgba(59, 130, 246, 0.2)",
            },
          ],
        });
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchChartData();
  }, [coinId]);

  return (
    <div className="p-6 w-full text-white rounded-lg shadow-lg ">
      <h2 className="text-xl font-bold mb-4">{coinId} Price Chart (7 Days)</h2>
      {chartData ? <Line data={chartData} /> : <p>Loading chart...</p>}
    </div>
  );
};

export default CryptoChart;
