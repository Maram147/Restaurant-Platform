import { CustomerLayout } from "../../../components/layout/customer-layout"
import { Button } from "../../../components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { Star, Clock, Truck, Filter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const categories = [
  { name: "Pizza", icon: "🍕", count: 24 },
  { name: "Burgers", icon: "🍔", count: 18 },
  { name: "Asian", icon: "🍜", count: 32 },
  { name: "Italian", icon: "🍝", count: 15 },
  { name: "Mexican", icon: "🌮", count: 12 },
  { name: "Desserts", icon: "🍰", count: 8 },
]

const restaurants = [
  {
    id: 1,
    name: "Mario's Pizza Palace",
    cuisine: "Italian",
    rating: 4.5,
    deliveryTime: "25-35 min",
    deliveryFee: 2.99,
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
    tags: ["Popular", "Fast Delivery"],
  },
  {
    id: 2,
    name: "Burger Junction",
    cuisine: "American",
    rating: 4.3,
    deliveryTime: "20-30 min",
    deliveryFee: 1.99,
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
    tags: ["New"],
  },
  {
    id: 3,
    name: "Dragon Wok",
    cuisine: "Chinese",
    rating: 4.7,
    deliveryTime: "30-40 min",
    deliveryFee: 3.49,
    image: "/placeholder.svg?height=200&width=300",
    featured: true,
    tags: ["Highly Rated"],
  },
  {
    id: 4,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    rating: 4.2,
    deliveryTime: "15-25 min",
    deliveryFee: 2.49,
    image: "/placeholder.svg?height=200&width=300",
    featured: false,
    tags: ["Quick Bites"],
  },
]

export default function CustomerDashboard() {
  return (
    <CustomerLayout>
      <div className="container mx-auto px-4 py-6">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-white mb-8">
          <h1 className="text-3xl font-bold mb-2">Hungry? We've got you covered!</h1>
          <p className="text-lg opacity-90">Discover amazing restaurants and get food delivered fast</p>
        </div>

        {/* Categories */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Browse by Category</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Card key={category.name} className="cursor-pointer hover:shadow-md transition-shadow">
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="font-medium text-sm">{category.name}</h3>
                  <p className="text-xs text-gray-500">{category.count} places</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Filters */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Restaurants near you</h2>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>
        </div>

        {/* Restaurant Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <Link key={restaurant.id} href={`/customer/restaurant/${restaurant.id}`}>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={restaurant.image || "/placeholder.svg"}
                    alt={restaurant.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {restaurant.featured && <Badge className="absolute top-2 left-2 bg-orange-500">Featured</Badge>}
                </div>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{restaurant.name}</CardTitle>
                      <CardDescription>{restaurant.cuisine}</CardDescription>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{restaurant.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{restaurant.deliveryTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Truck className="h-4 w-4" />
                      <span>${restaurant.deliveryFee}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {restaurant.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </CustomerLayout>
  )
}
