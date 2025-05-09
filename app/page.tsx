import { DollarSign, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StockList } from "@/components/stock-list"
import { StockChart } from "@/components/stock-chart"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { WatchlistStocks } from "@/components/watchlist-stocks"

export default function DashboardPage() {
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
        <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 sm:space-x-4">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Button>
              <DollarSign className="mr-2 h-4 w-4" />
              Deposit
            </Button>
          </div>
        </div>
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="watchlist">Watchlist</TabsTrigger>
            <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$12,546.89</div>
                  <p className="text-xs text-green-500 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +2.5% from last week
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Available Cash</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$3,245.00</div>
                  <p className="text-xs text-muted-foreground mt-1">Ready to invest</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Today's Gain/Loss</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-green-500">+$156.32</div>
                  <p className="text-xs text-green-500 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +1.2% today
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Stock Performance</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <StockChart />
                </CardContent>
              </Card>
              <Card className="col-span-3">
                <CardHeader>
                  <CardTitle>Top Stocks</CardTitle>
                  <CardDescription>Your most active stocks today</CardDescription>
                </CardHeader>
                <CardContent>
                  <StockList />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="watchlist" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Watchlist</CardTitle>
                <CardDescription>Stocks you're keeping an eye on</CardDescription>
              </CardHeader>
              <CardContent>
                <WatchlistStocks />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="portfolio" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Portfolio</CardTitle>
                <CardDescription>Your investment holdings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h4 className="text-sm font-medium">Stocks</h4>
                    <StockList />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium mb-4">Asset Allocation</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-sm font-medium">Technology</div>
                          <div className="text-2xl font-bold">45%</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-sm font-medium">Healthcare</div>
                          <div className="text-2xl font-bold">25%</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-sm font-medium">Finance</div>
                          <div className="text-2xl font-bold">15%</div>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-4">
                          <div className="text-sm font-medium">Other</div>
                          <div className="text-2xl font-bold">15%</div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
