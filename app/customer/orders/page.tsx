import { CustomerLayout } from "@/components/layout/customer-layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, MapPin, Star, RotateCcw } from "lucide-react"
import Image from "next/image"

const orders = [
  {
    id: "ORD-001",
    restaurant: "Mario's Pizza Palace",
    items: ["Margherita Pizza", "Garlic Bread"],
    total: 23.98,
    status: "delivered",
    orderTime: "2024-01-15 19:30",
    deliveryTime: "2024-01-15 20:15",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "ORD-002",
    restaurant: "Burger Junction",
    items: ["Classic Burger", "Fries", "Coke"],
    total: 18.5,
    status: "preparing",
    orderTime: "2024-01-16 12:15",
    deliveryTime: "2024-01-16 12:45",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: "ORD-003",
    restaurant: "Dragon Wok",
    items: ["Kung Pao Chicken", "Fried Rice"],
    total: 16.75,
    status: "on_the_way",
    orderTime: "2024-01-16 18:00",
    deliveryTime: "2024-01-16 18:35",
    image: "/placeholder.svg?height=80&width=80",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "delivered":
      return "bg-green-100 text-green-800"
    case "on_the_way":
      return "bg-blue-100 text-blue-800"
    case "preparing":
      return "bg-yellow-100 text-yellow-800"
    case "cancelled":
      return "bg-red-100 text-red-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case "delivered":
      return "Delivered"
    case "on_the_way":
      return "On the way"
    case "preparing":
      return "Preparing"
    case "cancelled":
      return "Cancelled"
    default:
      return "Unknown"
  }
}

export default function OrdersPage() {
  const activeOrders = orders.filter((order) => order.status !== "delivered" && order.status !== "cancelled")
  const pastOrders = orders.filter((order) => order.status === "delivered" || order.status === "cancelled")

  return (
    <CustomerLayout>
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold mb-6">My Orders</h1>

        <Tabs defaultValue="active" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="active">Active Orders ({activeOrders.length})</TabsTrigger>
            <TabsTrigger value="past">Past Orders ({pastOrders.length})</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-4">
            {activeOrders.length === 0 ? (
              <Card>
                <CardContent className="p-8 text-center">
                  <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No active orders</h3>
                  <p className="text-gray-600">When you place an order, it will appear here</p>
                </CardContent>
              </Card>
            ) : (
              activeOrders.map((order) => (
                <Card key={order.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Image
                        src={order.image || "/placeholder.svg"}
                        alt={order.restaurant}
                        width={80}
                        height={80}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h3 className="font-bold text-lg">{order.restaurant}</h3>
                            <p className="text-sm text-gray-600">Order #{order.id}</p>
                          </div>
                          <Badge className={getStatusColor(order.status)}>{getStatusText(order.status)}</Badge>
                        </div>

                        <div className="mb-3">
                          <p className="text-sm text-gray-600">{order.items.join(", ")}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>Ordered at {new Date(order.orderTime).toLocaleTimeString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>ETA {new Date(order.deliveryTime).toLocaleTimeString()}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-bold">${order.total.toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>

          <TabsContent value="past" className="space-y-4">
            {pastOrders.map((order) => (
              <Card key={order.id}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={order.image || "/placeholder.svg"}
                      alt={order.restaurant}
                      width={80}
                      height={80}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-bold text-lg">{order.restaurant}</h3>
                          <p className="text-sm text-gray-600">Order #{order.id}</p>
                        </div>
                        <Badge className={getStatusColor(order.status)}>{getStatusText(order.status)}</Badge>
                      </div>

                      <div className="mb-3">
                        <p className="text-sm text-gray-600">{order.items.join(", ")}</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{new Date(order.orderTime).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className="font-bold">${order.total.toFixed(2)}</p>
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <RotateCcw className="h-4 w-4 mr-2" />
                              Reorder
                            </Button>
                            <Button variant="outline" size="sm">
                              <Star className="h-4 w-4 mr-2" />
                              Rate
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </CustomerLayout>
  )
}
