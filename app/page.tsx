import { Button } from "../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { ChefHat, ShoppingCart, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-orange-600" />
            <span className="text-2xl font-bold text-gray-900">FoodHub</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/auth/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/auth/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Order Food from Your
          <span className="text-orange-600"> Favorite Restaurants</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Discover amazing restaurants, order delicious food, and manage your restaurant business all in one platform.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/auth/register?role=customer">
            <Button size="lg" className="w-full sm:w-auto">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Order Food
            </Button>
          </Link>
          <Link href="/auth/register?role=owner">
            <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              <ChefHat className="mr-2 h-5 w-5" />
              Start Your Restaurant
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Experience</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <ShoppingCart className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle>For Customers</CardTitle>
              <CardDescription>Browse restaurants, order food, track deliveries</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Browse local restaurants</li>
                <li>• Easy ordering & payment</li>
                <li>• Real-time order tracking</li>
                <li>• Order history & favorites</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <ChefHat className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle>For Restaurant Owners</CardTitle>
              <CardDescription>Manage your restaurant, menu, and orders</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Restaurant management</li>
                <li>• Menu & pricing control</li>
                <li>• Order processing</li>
                <li>• Revenue analytics</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle>For Admins</CardTitle>
              <CardDescription>Platform management and analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• User management</li>
                <li>• Restaurant approval</li>
                <li>• Platform analytics</li>
                <li>• System monitoring</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
