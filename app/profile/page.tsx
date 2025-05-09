import { ArrowLeft, Bell, CreditCard, DollarSign, Lock, User } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MainNav } from "@/components/main-nav"
import { UserNav } from "@/components/user-nav"
import { Separator } from "@/components/ui/separator"
import { ProfileForm } from "@/components/profile-form"

export default function ProfilePage() {
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
          <h2 className="text-3xl font-bold tracking-tight">Profile</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr]">
          <Card className="h-fit">
            <CardHeader>
              <CardTitle>Settings</CardTitle>
              <CardDescription>Manage your account settings</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <nav className="flex flex-col space-y-1 px-2 pb-4">
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="#" className="flex items-center">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="#" className="flex items-center">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Payment Methods
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="#" className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Banking
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="#" className="flex items-center">
                    <Bell className="h-4 w-4 mr-2" />
                    Notifications
                  </Link>
                </Button>
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href="#" className="flex items-center">
                    <Lock className="h-4 w-4 mr-2" />
                    Security
                  </Link>
                </Button>
              </nav>
            </CardContent>
          </Card>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent>
                <ProfileForm />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Account Summary</CardTitle>
                <CardDescription>Overview of your trading account</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Account Type</h4>
                      <p className="font-medium">Individual</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Account Number</h4>
                      <p className="font-medium">****3456</p>
                    </div>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Buying Power</h4>
                      <p className="font-medium">$3,245.00</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-muted-foreground mb-1">Account Value</h4>
                      <p className="font-medium">$12,546.89</p>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="text-sm font-medium text-muted-foreground mb-1">Tax Documents</h4>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-sm">2023 Tax Statement</p>
                      <Button variant="outline" size="sm">
                        Download
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
