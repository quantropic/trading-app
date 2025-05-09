"use client"

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"

export function StockChart() {
  const data = [
    { date: "Jan", value: 10000 },
    { date: "Feb", value: 10200 },
    { date: "Mar", value: 10800 },
    { date: "Apr", value: 10600 },
    { date: "May", value: 11200 },
    { date: "Jun", value: 11800 },
    { date: "Jul", value: 12100 },
    { date: "Aug", value: 12400 },
    { date: "Sep", value: 12200 },
    { date: "Oct", value: 12500 },
    { date: "Nov", value: 12800 },
    { date: "Dec", value: 12546 },
  ]

  return (
    <ChartContainer
      config={{
        value: {
          label: "Portfolio Value",
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
          <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={10} />
          <YAxis
            tickFormatter={(value) => `$${value.toLocaleString()}`}
            tickLine={false}
            axisLine={false}
            tickMargin={10}
          />
          <Tooltip content={<ChartTooltipContent />} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="var(--color-value)"
            fill="var(--color-value)"
            fillOpacity={0.2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
