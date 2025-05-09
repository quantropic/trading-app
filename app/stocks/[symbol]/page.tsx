import Link from "next/link"
import { ArrowLeft, DollarSign, TrendingDown, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { StockDetailChart } from "@/components/stock-detail-chart"
import { StockStats } from "@/components/stock-stats"
import { StockNews } from "@/components/stock-news"
import { TradeForm } from "@/components/trade-form"

export default function StockDetailPage({ params }: { params: { symbol: string } }) {
  const stockData = {
    AAPL: {
      name: "Apple Inc.",
      price: 182.52,
      change: 1.25,
      changePercent: 0.69,
      positive: true,
    },
    MSFT: {
      name: "Microsoft Corporation",
      price: 415.32,
      change: -2.18,
      changePercent: -0.52,
      positive: false,
    },
    GOOGL: {
      name: "Alphabet Inc.",
      price: 142.65,
      change: 0.87,
      changePercent: 0.61,
      positive: true,
    },
    AMZN: {
      name: "Amazon.com, Inc.",
      price: 178.12,
      change: 1.45,
      changePercent: 0.82,
      positive: true,
    },
    TSLA: {
      name: "Tesla, Inc.",
      price: 175.34,
      change: -3.21,
      changePercent: -1.8,
      positive: false,
    },
  }

  const symbol = params.symbol.toUpperCase()
  const stock = stockData[symbol as keyof typeof stockData] || {
    name: `${symbol}`,
    price: 100.0,
    change: 0.0,
    changePercent: 0.0,
    positive: true,
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background">
        <div className="flex h-16 items-center px-4 sm:px-6">
          <MainNav />
          <div className="ml-auto flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
      </header>
      <main className="flex-1 space-y-4 p-4 pt-6 sm:p-6 sm:pt-8">
        <div className="flex items-center">
          <Link href="/" className="inline-flex items-center mr-4">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Link>
          <h2 className="text-3xl font-bold tracking-tight">{symbol}</h2>
          <p className="ml-2 text-lg text-muted-foreground">{stock.name}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-[1fr_300px]">
          <div className="space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <div className="flex items-baseline justify-between">
                  <div>
                    <CardTitle className="text-3xl">${stock.price.toFixed(2)}</CardTitle>
                    <CardDescription
                      className={`flex items-center ${stock.positive ? "text-green-500" : "text-red-500"}`}
                    >
                      {stock.positive ? (
                        <TrendingUp className="h-4 w-4 mr-1" />
                      ) : (
                        <TrendingDown className="h-4 w-4 mr-1" />
                      )}
                      {stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                    </CardDescription>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Add to Watchlist
                    </Button>
                    <Button size="sm">
                      <DollarSign className="h-4 w-4 mr-1" />
                      Trade
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="1D" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="1D">1D</TabsTrigger>
                    <TabsTrigger value="1W">1W</TabsTrigger>
                    <TabsTrigger value="1M">1M</TabsTrigger>
                    <TabsTrigger value="3M">3M</TabsTrigger>
                    <TabsTrigger value="1Y">1Y</TabsTrigger>
                    <TabsTrigger value="5Y">5Y</TabsTrigger>
                  </TabsList>
                  <TabsContent value="1D">
                    <StockDetailChart timeframe="1D" symbol={symbol} />
                  </TabsContent>
                  <TabsContent value="1W">
                    <StockDetailChart timeframe="1W" symbol={symbol} />
                  </TabsContent>
                  <TabsContent value="1M">
                    <StockDetailChart timeframe="1M" symbol={symbol} />
                  </TabsContent>
                  <TabsContent value="3M">
                    <StockDetailChart timeframe="3M" symbol={symbol} />
                  </TabsContent>
                  <TabsContent value="1Y">
                    <StockDetailChart timeframe="1Y" symbol={symbol} />
                  </TabsContent>
                  <TabsContent value="5Y">
                    <StockDetailChart timeframe="5Y" symbol={symbol} />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>About {stock.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {symbol === "AAPL"
                    ? "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, Mac, iPad, and wearables, home, and accessories."
                    : `${stock.name} is a publicly traded company listed on major stock exchanges. The company operates in various sectors and provides products and services to customers worldwide.`}
                </p>
                <div className="mt-4">
                  <StockStats symbol={symbol} />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Recent News</CardTitle>
              </CardHeader>
              <CardContent>
                <StockNews symbol={symbol} />
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Trade {symbol}</CardTitle>
                <CardDescription>Buy or sell shares</CardDescription>
              </CardHeader>
              <CardContent>
                <TradeForm symbol={symbol} currentPrice={stock.price} />
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
