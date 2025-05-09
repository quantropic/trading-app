import Link from "next/link"
import { TrendingDown, TrendingUp } from "lucide-react"

export function StockList() {
  const stocks = [
    { symbol: "AAPL", name: "Apple Inc.", price: 182.52, change: 1.25, changePercent: 0.69, positive: true },
    {
      symbol: "MSFT",
      name: "Microsoft Corporation",
      price: 415.32,
      change: -2.18,
      changePercent: -0.52,
      positive: false,
    },
    { symbol: "GOOGL", name: "Alphabet Inc.", price: 142.65, change: 0.87, changePercent: 0.61, positive: true },
    { symbol: "AMZN", name: "Amazon.com, Inc.", price: 178.12, change: 1.45, changePercent: 0.82, positive: true },
    { symbol: "TSLA", name: "Tesla, Inc.", price: 175.34, change: -3.21, changePercent: -1.8, positive: false },
  ]

  return (
    <div className="space-y-2">
      {stocks.map((stock) => (
        <Link
          key={stock.symbol}
          href={`/stocks/${stock.symbol}`}
          className="flex items-center justify-between p-2 rounded-md hover:bg-muted transition-colors"
        >
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
      ))}
    </div>
  )
}
