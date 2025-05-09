"use client"

import { useState } from "react"
import { DollarSign } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TradeForm({ symbol, currentPrice }: { symbol: string; currentPrice: number }) {
  const [shares, setShares] = useState("1")
  const [orderType, setOrderType] = useState("market")

  const estimatedCost = Number.parseFloat(shares) * currentPrice
  const isValidShares = !isNaN(Number.parseFloat(shares)) && Number.parseFloat(shares) > 0

  return (
    <div>
      <Tabs defaultValue="buy" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="buy">Buy</TabsTrigger>
          <TabsTrigger value="sell">Sell</TabsTrigger>
        </TabsList>
        <TabsContent value="buy" className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="shares">Shares</Label>
            <Input
              id="shares"
              type="number"
              min="0.000001"
              step="0.000001"
              value={shares}
              onChange={(e) => setShares(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Order Type</Label>
            <RadioGroup defaultValue="market" onValueChange={setOrderType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="market" id="market" />
                <Label htmlFor="market">Market Order</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="limit" id="limit" />
                <Label htmlFor="limit">Limit Order</Label>
              </div>
            </RadioGroup>
          </div>

          {orderType === "limit" && (
            <div className="space-y-2">
              <Label htmlFor="limit-price">Limit Price</Label>
              <Input
                id="limit-price"
                type="number"
                min="0.01"
                step="0.01"
                placeholder={`$${currentPrice.toFixed(2)}`}
              />
            </div>
          )}

          <div className="pt-2 space-y-4">
            <div className="flex justify-between text-sm">
              <span>Estimated Cost</span>
              <span className="font-medium">${isValidShares ? estimatedCost.toFixed(2) : "0.00"}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Available Cash</span>
              <span className="font-medium">$3,245.00</span>
            </div>

            <Button className="w-full" disabled={!isValidShares}>
              <DollarSign className="h-4 w-4 mr-2" />
              Buy {symbol}
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="sell" className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="sell-shares">Shares</Label>
            <Input
              id="sell-shares"
              type="number"
              min="0.000001"
              step="0.000001"
              value={shares}
              onChange={(e) => setShares(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label>Order Type</Label>
            <RadioGroup defaultValue="market" onValueChange={setOrderType}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="market" id="sell-market" />
                <Label htmlFor="sell-market">Market Order</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="limit" id="sell-limit" />
                <Label htmlFor="sell-limit">Limit Order</Label>
              </div>
            </RadioGroup>
          </div>

          {orderType === "limit" && (
            <div className="space-y-2">
              <Label htmlFor="sell-limit-price">Limit Price</Label>
              <Input
                id="sell-limit-price"
                type="number"
                min="0.01"
                step="0.01"
                placeholder={`$${currentPrice.toFixed(2)}`}
              />
            </div>
          )}

          <div className="pt-2 space-y-4">
            <div className="flex justify-between text-sm">
              <span>Estimated Credit</span>
              <span className="font-medium">${isValidShares ? estimatedCost.toFixed(2) : "0.00"}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shares Owned</span>
              <span className="font-medium">10</span>
            </div>

            <Button className="w-full" variant="destructive" disabled={!isValidShares}>
              <DollarSign className="h-4 w-4 mr-2" />
              Sell {symbol}
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
