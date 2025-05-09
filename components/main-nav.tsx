import Link from "next/link"
import { TrendingUp } from "lucide-react"

export function MainNav() {
  return (
    <div className="flex items-center space-x-4 lg:space-x-6 mr-4">
      <Link href="/" className="flex items-center space-x-2">
        <TrendingUp className="h-6 w-6" />
        <span className="font-bold text-xl hidden sm:inline-block">TradePro</span>
      </Link>
      <nav className="flex items-center space-x-4">
        <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
          Dashboard
        </Link>
        <Link
          href="/stocks/AAPL"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Stocks
        </Link>
        <Link
          href="/profile"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Profile
        </Link>
      </nav>
    </div>
  )
}
