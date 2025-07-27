import { OwnerLayout } from "../../../components/layout/owner-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { Button } from "../../../components/ui/button"
import { Progress } from "../../../components/ui/progress"
import { DollarSign, ShoppingBag, Users, Clock, Star, AlertCircle, Plus } from "lucide-react"

const stats = [
  {
    title: "Today's Revenue",
    value: "$1,234",
    change: "+12%",
    icon: DollarSign,
    color: "text-green-600",
  },
  {
    title: "Orders Today",
    value: "45",
    change: "+8%",
    icon: ShoppingBag,
    color: "text-blue-600",
  },
  {
    title: "Average Rating",
    value: "4.8",
    change: "+0.2",
    icon: Star,
    color: "text-yellow-600",
  },
  {
    title: "Active Customers",
    value: "1,234",
    change: "+15%",
    icon: Users,
    color: "text-purple-600",
  },
]

const recentOrders = [
  {
    id: "ORD-001",
    customer: "John Smith",
    items: ["Margherita Pizza", "Garlic Bread"],
    total: 23.98,
    status: "preparing",
    time: "5 min ago",
  },
  {
    id: "ORD-002",
    customer: "Sarah Johnson",
    items: ["Pepperoni Pizza", "Coke"],
    total: 19.99,
    status: "ready",
    time: "12 min ago",
  },
  {
    id: "ORD-003",
    customer: "Mike Wilson",
    items: ["Supreme Pizza"],
    total: 22.99,
    status: "delivered",
    time: "25 min ago",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "preparing":
      return "bg-yellow-100 text-yellow-800"
    case "ready":
      return "bg-green-100 text-green-800"
    case "delivered":
      return "bg-blue-100 text-blue-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function OwnerDashboard() {
  return (
    <OwnerLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your restaurant.</p>
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Menu Item
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-600">{stat.change}</span> from yesterday
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>Latest orders from your restaurant</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium">{order.customer}</h4>
                          <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{order.items.join(", ")}</p>
                        <div className="flex items-center justify-between">
                          <span className="font-bold">${order.total}</span>
                          <span className="text-xs text-gray-500">{order.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions & Alerts */}
          <div className="space-y-6">
            {/* Restaurant Status */}
            <Card>
              <CardHeader>
                <CardTitle>Restaurant Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Currently Open</span>
                  <Badge className="bg-green-100 text-green-800">Online</Badge>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Orders Capacity</span>
                    <span>75%</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                <Button variant="outline" className="w-full bg-transparent">
                  Manage Hours
                </Button>
              </CardContent>
            </Card>

            {/* Alerts */}
            <Card>
              <CardHeader>
                <CardTitle>Alerts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <AlertCircle className="h-4 w-4 text-yellow-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Low Stock Alert</p>
                    <p className="text-xs text-gray-600">Mozzarella cheese is running low</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Clock className="h-4 w-4 text-blue-600 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Peak Hours</p>
                    <p className="text-xs text-gray-600">Lunch rush starting soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Today's Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Orders Completed</span>
                  <span className="font-medium">42</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Average Prep Time</span>
                  <span className="font-medium">18 min</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Customer Satisfaction</span>
                  <span className="font-medium">4.8/5</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </OwnerLayout>
  )
}
