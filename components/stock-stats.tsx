export function StockStats({ symbol }: { symbol: string }) {
  // Mock data for different stocks
  const stockStats = {
    AAPL: {
      marketCap: "2.85T",
      peRatio: "30.25",
      dividend: "0.92%",
      volume: "58.2M",
      avgVolume: "62.5M",
      high: "184.95",
      low: "180.17",
      open: "181.27",
      prevClose: "181.27",
    },
    MSFT: {
      marketCap: "3.12T",
      peRatio: "35.67",
      dividend: "0.75%",
      volume: "22.1M",
      avgVolume: "25.3M",
      high: "417.45",
      low: "412.89",
      open: "417.50",
      prevClose: "417.50",
    },
    GOOGL: {
      marketCap: "1.78T",
      peRatio: "24.32",
      dividend: "0%",
      volume: "15.7M",
      avgVolume: "18.2M",
      high: "143.52",
      low: "141.78",
      open: "141.78",
      prevClose: "141.78",
    },
    AMZN: {
      marketCap: "1.85T",
      peRatio: "42.18",
      dividend: "0%",
      volume: "32.5M",
      avgVolume: "35.8M",
      high: "179.45",
      low: "176.89",
      open: "176.67",
      prevClose: "176.67",
    },
    TSLA: {
      marketCap: "557.2B",
      peRatio: "50.67",
      dividend: "0%",
      volume: "98.7M",
      avgVolume: "102.3M",
      high: "178.55",
      low: "172.13",
      open: "178.55",
      prevClose: "178.55",
    },
  }

  // Default stats if symbol not found
  const stats = stockStats[symbol as keyof typeof stockStats] || {
    marketCap: "100B",
    peRatio: "20.00",
    dividend: "1.00%",
    volume: "10M",
    avgVolume: "12M",
    high: "102.00",
    low: "98.00",
    open: "100.00",
    prevClose: "100.00",
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
      <div>
        <p className="text-muted-foreground">Market Cap</p>
        <p className="font-medium">${stats.marketCap}</p>
      </div>
      <div>
        <p className="text-muted-foreground">P/E Ratio</p>
        <p className="font-medium">{stats.peRatio}</p>
      </div>
      <div>
        <p className="text-muted-foreground">Dividend Yield</p>
        <p className="font-medium">{stats.dividend}</p>
      </div>
      <div>
        <p className="text-muted-foreground">Volume</p>
        <p className="font-medium">{stats.volume}</p>
      </div>
      <div>
        <p className="text-muted-foreground">Avg. Volume</p>
        <p className="font-medium">{stats.avgVolume}</p>
      </div>
      <div>
        <p className="text-muted-foreground">Day High</p>
        <p className="font-medium">${stats.high}</p>
      </div>
      <div>
        <p className="text-muted-foreground">Day Low</p>
        <p className="font-medium">${stats.low}</p>
      </div>
      <div>
        <p className="text-muted-foreground">Open</p>
        <p className="font-medium">${stats.open}</p>
      </div>
    </div>
  )
}
