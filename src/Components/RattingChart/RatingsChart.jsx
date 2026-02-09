import React, { useMemo } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { RechartsDevtools } from "@recharts/devtools";

const RatingsChart = ({ ratings = [] }) => {
  const data = useMemo(() => {
  
    return [...ratings].reverse().map((r) => ({
      name: r.name,
      value: r.count,
    }));
  }, [ratings]);

  if (!data.length) return null;

  return (
    <div className="w-full max-w-md">
      <div style={{ width: "100%", height: 120 }}>
        <ResponsiveContainer>
          <BarChart
            data={data}
            layout="vertical"
            barCategoryGap={10}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          >
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="name" width={40} hide />
            <Bar dataKey="value" fill="#FB923C" radius={[6, 6, 6, 6]} />
            <RechartsDevtools />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RatingsChart;
