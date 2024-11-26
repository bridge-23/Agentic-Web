"use client"

import { useEffect, useRef } from "react"
import { createChart, ColorType } from "lightweight-charts"

export default function TradingChart() {
  const chartContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartContainerRef.current) {
      const chart = createChart(chartContainerRef.current, {
        width: chartContainerRef.current.clientWidth,
        height: 300,
        layout: {
          background: { type: ColorType.Solid, color: "white" },
          textColor: "black",
        },
        grid: {
          vertLines: { color: "#e0e0e0" },
          horzLines: { color: "#e0e0e0" },
        },
      })

      const candlestickSeries = chart.addCandlestickSeries({
        upColor: "#26a69a",
        downColor: "#ef5350",
        borderVisible: false,
        wickUpColor: "#26a69a",
        wickDownColor: "#ef5350",
      })

      // Sample data - replace with real data in a production environment
      const data = [
        { time: "2023-05-01", open: 1.0, high: 1.1, low: 0.9, close: 1.05 },
        { time: "2023-05-02", open: 1.05, high: 1.15, low: 1.0, close: 1.1 },
        { time: "2023-05-03", open: 1.1, high: 1.2, low: 1.05, close: 1.15 },
        { time: "2023-05-04", open: 1.15, high: 1.25, low: 1.1, close: 1.2 },
        { time: "2023-05-05", open: 1.2, high: 1.3, low: 1.15, close: 1.25 },
      ]

      candlestickSeries.setData(data)

      const handleResize = () => {
        if (chartContainerRef.current) {
          chart.applyOptions({ width: chartContainerRef.current.clientWidth })
        }
      }

      window.addEventListener("resize", handleResize)

      return () => {
        window.removeEventListener("resize", handleResize)
        chart.remove()
      }
    }
  }, [])

  return <div ref={chartContainerRef} />
}

