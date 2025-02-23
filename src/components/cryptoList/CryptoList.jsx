import React, { useEffect, useState } from "react";
import axios from "axios";
import { Slice } from "lucide-react";

const CryptoList = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 10,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCoins(response.data);
      } catch (error) {
        console.error("Error fetching coins:", error);
      }
    };

    fetchCoins();
  }, []);

  return (
    <div className=" text-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4 pl-2">Top Cryptocurrencies</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-800">
            <th className="p-1 text-left">Coin</th>
            <th className="p-1">Price</th>
            <th className="p-1 flex">Change (24h)</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id} className="border-t border-gray-700">
              <td className="p-2 flex items-center">
                <img src={coin.image} alt={coin.name} className="w-6 h-6 mr-2" />
                {coin.name.slice(0, 10)}...
              </td>
              <td className="p-2">${coin.current_price.toFixed(2)}</td>
              <td
                className={`p-2 ${
                  coin.price_change_percentage_24h >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoList;
