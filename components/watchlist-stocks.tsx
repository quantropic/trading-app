import Link from "next/link"
import { TrendingDown, TrendingUp, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WatchlistStocks() {
  const stocks = [
    { symbol: "AAPL", name: "Apple Inc.", price: 182.52, change: 1.25, changePercent: 0.69, positive: true },
    { symbol: "NFLX", name: "Netflix, Inc.", price: 625.89, change: 12.34, changePercent: 2.01, positive: true },
    { symbol: "NVDA", name: "NVIDIA Corporation", price: 875.23, change: 15.67, changePercent: 1.82, positive: true },
    { symbol: "TSLA", name: "Tesla, Inc.", price: 175.34, change: -3.21, changePercent: -1.8, positive: false },
    {
      symbol: "META",
      name: "Meta Platforms, Inc.",
      price: 485.12,
      change: -1.23,
      changePercent: -0.25,
      positive: false,
    },
    {
      symbol: "DIS",
      name: "The Walt Disney Company",
      price: 112.45,
      change: 0.87,
      changePercent: 0.78,
      positive: true,
    },
  ]

  return (
    <div className="space-y-2">
      {stocks.map((stock) => (
        <div
          key={stock.symbol}
          className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
        >
          <Link href={`/stocks/${stock.symbol}`} className="flex items-center justify-between flex-1">
            <div className="flex flex-col">
              <div className="font-medium">{stock.symbol}</div>
              <div className="text-xs text-muted-foreground">{stock.name}</div>
            </div>
            <div className="flex flex-col items-end">
              <div className="font-medium">${stock.price.toFixed(2)}</div>
              <div className={`text-xs flex items-center ${stock.positive ? "text-green-500" : "text-red-500"}`}>
                {stock.positive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                {stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
              </div>
            </div>
          </Link>
          <Button variant="ghost" size="icon" className="h-8 w-8 ml-2">
            <X className="h-4 w-4" />
            <span className="sr-only">Remove from watchlist</span>
          </Button>
        </div>
      ))}
    </div>
  )
}
