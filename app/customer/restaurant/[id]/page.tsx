"use client"

import { useState } from "react"
import { CustomerLayout } from "@/components/layout/customer-layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Clock, Truck, Plus, Minus, Heart } from "lucide-react"
import Image from "next/image"

const restaurant = {
  id: 1,
  name: "Mario's Pizza Palace",
  cuisine: "Italian",
  rating: 4.5,
  reviews: 324,
  deliveryTime: "25-35 min",
  deliveryFee: 2.99,
  minOrder: 15,
  image: "/placeholder.svg?height=300&width=600",
  description:
    "Authentic Italian pizzas made with fresh ingredients and traditional recipes passed down through generations.",
  address: "123 Main Street, Downtown",
  phone: "(555) 123-4567",
  hours: "11:00 AM - 11:00 PM",
}

const menuCategories = [
  {
    name: "Popular Items",
    items: [
      {
        id: 1,
        name: "Margherita Pizza",
        description: "Fresh mozzarella, tomato sauce, basil",
        price: 16.99,
        image: "/placeholder.svg?height=150&width=150",
        popular: true,
      },
      {
        id: 2,
        name: "Pepperoni Pizza",
        description: "Classic pepperoni with mozzarella cheese",
        price: 18.99,
        image: "/placeholder.svg?height=150&width=150",
        popular: true,
      },
    ],
  },
  {
    name: "Pizzas",
    items: [
      {
        id: 3,
        name: "Supreme Pizza",
        description: "Pepperoni, sausage, peppers, onions, mushrooms",
        price: 22.99,
        image: "/placeholder.svg?height=150&width=150",
      },
      {
        id: 4,
        name: "Hawaiian Pizza",
        description: "Ham, pineapple, mozzarella cheese",
        price: 19.99,
        image: "/placeholder.svg?height=150&width=150",
      },
    ],
  },
  {
    name: "Appetizers",
    items: [
      {
        id: 5,
        name: "Garlic Bread",
        description: "Fresh baked bread with garlic butter",
        price: 6.99,
        image: "/placeholder.svg?height=150&width=150",
      },
      {
        id: 6,
        name: "Mozzarella Sticks",
        description: "Crispy breaded mozzarella with marinara sauce",
        price: 8.99,
        image: "/placeholder.svg?height=150&width=150",
      },
    ],
  },
]

export default function RestaurantPage() {
  const [cart, setCart] = useState<{ [key: number]: number }>({})

  const addToCart = (itemId: number) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }))
  }

  const removeFromCart = (itemId: number) => {
    setCart((prev) => ({
      ...prev,
      [itemId]: Math.max((prev[itemId] || 0) - 1, 0),
    }))
  }

  const getCartTotal = () => {
    return Object.entries(cart).reduce((total, [itemId, quantity]) => {
      const item = menuCategories.flatMap((cat) => cat.items).find((item) => item.id === Number.parseInt(itemId))
      return total + (item?.price || 0) * quantity
    }, 0)
  }

  return (
    <CustomerLayout>
      <div className="container mx-auto px-4 py-6">
        {/* Restaurant Header */}
        <div className="relative mb-8">
          <Image
            src={restaurant.image || "/placeholder.svg"}
            alt={restaurant.name}
            width={600}
            height={300}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg" />
          <div className="absolute bottom-4 left-4 text-white">
            <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
            <p className="text-lg opacity-90">{restaurant.cuisine}</p>
          </div>
          <Button variant="secondary" size="sm" className="absolute top-4 right-4">
            <Heart className="h-4 w-4 mr-2" />
            Save
          </Button>
        </div>

        {/* Restaurant Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-lg">{restaurant.rating}</span>
              </div>
              <p className="text-sm text-gray-600">{restaurant.reviews} reviews</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="h-5 w-5 mx-auto mb-2 text-gray-600" />
              <p className="font-medium">{restaurant.deliveryTime}</p>
              <p className="text-sm text-gray-600">Delivery time</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4 text-center">
              <Truck className="h-5 w-5 mx-auto mb-2 text-gray-600" />
              <p className="font-medium">${restaurant.deliveryFee}</p>
              <p className="text-sm text-gray-600">Delivery fee</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Menu */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="menu" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="menu">Menu</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="info">Info</TabsTrigger>
              </TabsList>

              <TabsContent value="menu" className="space-y-6">
                {menuCategories.map((category) => (
                  <div key={category.name}>
                    <h3 className="text-xl font-bold mb-4">{category.name}</h3>
                    <div className="space-y-4">
                      {category.items.map((item) => (
                        <Card key={item.id}>
                          <CardContent className="p-4">
                            <div className="flex items-start space-x-4">
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.name}
                                width={150}
                                height={150}
                                className="w-20 h-20 object-cover rounded-lg"
                              />
                              <div className="flex-1">
                                <div className="flex items-start justify-between">
                                  <div>
                                    <h4 className="font-medium flex items-center">
                                      {item.name}
                                      {item.popular && (
                                        <Badge variant="secondary" className="ml-2 text-xs">
                                          Popular
                                        </Badge>
                                      )}
                                    </h4>
                                    <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                                    <p className="font-bold text-lg mt-2">${item.price}</p>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    {cart[item.id] > 0 && (
                                      <Button variant="outline" size="sm" onClick={() => removeFromCart(item.id)}>
                                        <Minus className="h-4 w-4" />
                                      </Button>
                                    )}
                                    {cart[item.id] > 0 && <span className="w-8 text-center">{cart[item.id]}</span>}
                                    <Button size="sm" onClick={() => addToCart(item.id)}>
                                      <Plus className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="reviews">
                <div className="space-y-4">
                  <p className="text-gray-600">Reviews coming soon...</p>
                </div>
              </TabsContent>

              <TabsContent value="info">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">About</h4>
                    <p className="text-gray-600">{restaurant.description}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Address</h4>
                    <p className="text-gray-600">{restaurant.address}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Hours</h4>
                    <p className="text-gray-600">{restaurant.hours}</p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Phone</h4>
                    <p className="text-gray-600">{restaurant.phone}</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Your Order</CardTitle>
                <CardDescription>From {restaurant.name}</CardDescription>
              </CardHeader>
              <CardContent>
                {Object.keys(cart).length === 0 ? (
                  <p className="text-gray-500 text-center py-4">Your cart is empty</p>
                ) : (
                  <div className="space-y-4">
                    {Object.entries(cart).map(([itemId, quantity]) => {
                      if (quantity === 0) return null
                      const item = menuCategories
                        .flatMap((cat) => cat.items)
                        .find((item) => item.id === Number.parseInt(itemId))
                      if (!item) return null

                      return (
                        <div key={itemId} className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-gray-600">${item.price}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button variant="outline" size="sm" onClick={() => removeFromCart(Number.parseInt(itemId))}>
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{quantity}</span>
                            <Button size="sm" onClick={() => addToCart(Number.parseInt(itemId))}>
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      )
                    })}

                    <div className="border-t pt-4">
                      <div className="flex justify-between font-bold">
                        <span>Total: ${getCartTotal().toFixed(2)}</span>
                      </div>
                      <Button className="w-full mt-4" disabled={getCartTotal() < restaurant.minOrder}>
                        {getCartTotal() < restaurant.minOrder
                          ? `Minimum order $${restaurant.minOrder}`
                          : "Proceed to Checkout"}
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </CustomerLayout>
  )
}
