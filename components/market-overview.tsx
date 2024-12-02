"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { time: "00:00", price: 0.050 },
  { time: "04:00", price: 0.052 },
  { time: "08:00", price: 0.051 },
  { time: "12:00", price: 0.054 },
  { time: "16:00", price: 0.053 },
  { time: "20:00", price: 0.052 },
  { time: "24:00", price: 0.055 },
]

export function MarketOverview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <LineChart data={data}>
        <XAxis
          dataKey="time"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#adfa1d"
          strokeWidth={2}
          dot={false}
        />
        <Tooltip
          contentStyle={{ background: "#333", border: "none" }}
          labelStyle={{ color: "#fff" }}
          formatter={(value: number) => [`$${value.toFixed(3)}`, "Price"]}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

