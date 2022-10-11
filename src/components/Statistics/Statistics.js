import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';




const Statistics = () => {
  const recharts = useLoaderData([]);
  const {data} = recharts;
  console.log(data)
  return (
    <div className="text-center mt-5 d-flex justify-content-center">
    <LineChart
      width={900}
      height={500}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="total" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis dataKey="total" />
      <Tooltip></Tooltip>
    </LineChart>
  </div>
  );
};

export default Statistics;
