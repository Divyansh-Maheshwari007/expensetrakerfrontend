import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';

const CustomBarChart = ({ data }) => {
  const getBarColor = () => '#3B82F6'; // solid blue (Tailwind's blue-500)

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length > 0) {
      const { month, amount, category } = payload[0].payload;
      return (
        <div className="bg-white p-2 border border-gray-300 rounded shadow">
          <p className="text-sm font-semibold text-purple-700">{category}</p>
          <p className="text-xs text-gray-600">{month}</p>
          <p className="text-sm font-medium text-gray-800">₹{amount}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white mt-4">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#333' }} />
          <YAxis tick={{ fontSize: 12, fill: '#333' }} />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="amount" radius={[10, 10, 0, 0]}>
            {data.map((_, index) => (
              <Cell key={index} fill={getBarColor()} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomBarChart;
