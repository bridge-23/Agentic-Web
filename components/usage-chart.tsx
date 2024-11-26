"use client"

import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { name: "Jan", credits: 4000, tasks: 2400 },
  { name: "Feb", credits: 3000, tasks: 1398 },
  { name: "Mar", credits: 2000, tasks: 9800 },
  { name: "Apr", credits: 2780, tasks: 3908 },
  { name: "May", credits: 1890, tasks: 4800 },
  { name: "Jun", credits: 2390, tasks: 3800 },
]

export default function UsageChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis yAxisId="left" />
        <YAxis yAxisId="right" orientation="right" />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="credits" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line yAxisId="right" type="monotone" dataKey="tasks" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  )
}

