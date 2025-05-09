import { CalendarIcon } from "lucide-react"
import Link from "next/link"

export function StockNews({ symbol }: { symbol: string }) {
  // Mock news data for different stocks
  const stockNews = {
    AAPL: [
      {
        title: "Apple Announces New iPhone 15 Pro with Revolutionary Camera System",
        source: "TechCrunch",
        date: "2 hours ago",
        url: "#",
      },
      {
        title: "Apple's Services Revenue Hits All-Time High in Q3 Earnings",
        source: "Bloomberg",
        date: "1 day ago",
        url: "#",
      },
      {
        title: "Apple Vision Pro: First Impressions and What It Means for AR/VR",
        source: "The Verge",
        date: "2 days ago",
        url: "#",
      },
    ],
    MSFT: [
      {
        title: "Microsoft Cloud Revenue Surges 25% in Latest Quarter",
        source: "CNBC",
        date: "5 hours ago",
        url: "#",
      },
      {
        title: "Microsoft's AI Investments Begin to Pay Off, Says CEO",
        source: "Wall Street Journal",
        date: "1 day ago",
        url: "#",
      },
      {
        title: "Microsoft Teams Gets Major Redesign and Performance Improvements",
        source: "ZDNet",
        date: "3 days ago",
        url: "#",
      },
    ],
  }

  // Default news if symbol not found
  const defaultNews = [
    {
      title: `${symbol} Reports Strong Quarterly Earnings, Beating Expectations`,
      source: "Financial Times",
      date: "3 hours ago",
      url: "#",
    },
    {
      title: `Analysts Upgrade ${symbol} Stock Rating to "Buy" on Growth Prospects`,
      source: "MarketWatch",
      date: "1 day ago",
      url: "#",
    },
    {
      title: `${symbol} Announces New Product Line, Shares Rise 3%`,
      source: "Reuters",
      date: "2 days ago",
      url: "#",
    },
  ]

  const news = stockNews[symbol as keyof typeof stockNews] || defaultNews

  return (
    <div className="space-y-4">
      {news.map((item, index) => (
        <Link key={index} href={item.url} className="block p-3 rounded-lg hover:bg-muted transition-colors">
          <h3 className="font-medium">{item.title}</h3>
          <div className="flex items-center mt-2 text-xs text-muted-foreground">
            <span>{item.source}</span>
            <span className="mx-2">•</span>
            <span className="flex items-center">
              <CalendarIcon className="h-3 w-3 mr-1" />
              {item.date}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}
