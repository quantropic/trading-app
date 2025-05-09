"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

export function StockDetailChart({ timeframe, symbol }: { timeframe: string; symbol: string }) {
  // Generate mock data based on timeframe
  const generateData = () => {
    const data = []
    let points = 0
    let format = ""

    switch (timeframe) {
      case "1D":
        points = 24
        format = "h:mm"
        for (let i = 0; i < points; i++) {
          const hour = i + 9
          if (hour >= 9 && hour <= 16) {
            // Market hours
            data.push({
              time: `${hour % 12 || 12}:00${hour < 12 ? "am" : "pm"}`,
              price: Math.random() * 10 + 170,
            })
          }
        }
        break
      case "1W":
        points = 5
        format = "EEE"
        for (let i = 0; i < points; i++) {
          data.push({
            time: ["Mon", "Tue", "Wed", "Thu", "Fri"][i],
            price: Math.random() * 15 + 170,
          })
        }
        break
      case "1M":
        points = 30
        format = "MMM d"
        for (let i = 0; i < points; i++) {
          data.push({
            time: `Day ${i + 1}`,
            price: Math.random() * 20 + 165,
          })
        }
        break
      default:
        points = 12
        format = "MMM"
        for (let i = 0; i < points; i++) {
          data.push({
            time: `Month ${i + 1}`,
            price: Math.random() * 30 + 160,
          })
        }
    }

    return data
  }

  const data = generateData()

  return (
    <ChartContainer
      config={{
        price: {
          label: `${symbol} Price`,
          color: "hsl(var(--chart-1))",
          className: "dark:fill-green-900 dark:stroke-green-500 fill-green-100 stroke-green-500",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="time" tickLine={false} axisLine={false} tickMargin={10} />
          <YAxis
            tickFormatter={(value) => `$${value.toFixed(2)}`}
            domain={["dataMin - 5", "dataMax + 5"]}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
          />
          <Tooltip content={<ChartTooltipContent />} />
          <Area
            type="monotone"
            dataKey="price"
            stroke="var(--color-price)"
            fill="var(--color-price)"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
