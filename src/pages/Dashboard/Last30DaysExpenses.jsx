import React, { useEffect, useState } from 'react';
import CustomBarChart from '../../components/Charts/CustomBarChart';

const Last30DaysExpenses = ({ data }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // Safe check for null, undefined or non-array data
    if (!Array.isArray(data) || data.length === 0) {
      setChartData([]);
      return;
    }

    const processedData = data
      .filter((item) => item?.createdAt && item?.amount != null) // Ignore invalid data
      .map((item) => ({
        month: new Date(item.createdAt).toLocaleDateString('en-IN', {
          day: 'numeric',
          month: 'short',
        }),
        amount: Number(item.amount) || 0,
        category: item.category || 'Other',
      }));

    setChartData(processedData);
  }, [data]);

  return (
    <div className="card col-span-1">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold">Last 30 Days Expenses</h5>
      </div>

      {chartData.length > 0 ? (
        <CustomBarChart data={chartData} />
      ) : (
        <p className="text-gray-500 text-sm mt-2">
          No expenses recorded in the last 30 days.
        </p>
      )}
    </div>
  );
};

export default Last30DaysExpenses;
