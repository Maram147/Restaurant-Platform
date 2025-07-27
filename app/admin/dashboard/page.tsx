import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card"
import { Badge } from "../../../components/ui/badge"
import { Button } from "../../../components/ui/button"
import { Progress } from "../../../components/ui/progress"
import { Users, Store, DollarSign, TrendingUp, AlertTriangle, CheckCircle, Clock, BarChart3 } from "lucide-react"

const stats = [
  {
    title: "Total Users",
    value: "12,345",
    change: "+15%",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "Active Restaurants",
    value: "234",
    change: "+8%",
    icon: Store,
    color: "text-green-600",
  },
  {
    title: "Platform Revenue",
    value: "$45,678",
    change: "+23%",
    icon: DollarSign,
    color: "text-yellow-600",
  },
  {
    title: "Total Orders",
    value: "8,901",
    change: "+12%",
    icon: TrendingUp,
    color: "text-purple-600",
  },
]

const pendingApprovals = [
  {
    id: 1,
    name: "Bella's Italian Kitchen",
    owner: "Maria Rossi",
    type: "New Restaurant",
    submitted: "2 hours ago",
    status: "pending",
  },
  {
    id: 2,
    name: "Spice Garden",
    owner: "Raj Patel",
    type: "Menu Update",
    submitted: "5 hours ago",
    status: "pending",
  },
  {
    id: 3,
    name: "Burger Express",
    owner: "John Smith",
    type: "Profile Update",
    submitted: "1 day ago",
    status: "pending",
  },
]

const recentActivity = [
  {
    id: 1,
    action: "New restaurant approved",
    details: "Dragon Wok has been approved and is now live",
    time: "10 minutes ago",
    type: "approval",
  },
  {
    id: 2,
    action: "User reported issue",
    details: "Order #12345 - delivery delay complaint",
    time: "25 minutes ago",
    type: "issue",
  },
  {
    id: 3,
    action: "Restaurant suspended",
    details: "Quick Bites suspended due to policy violation",
    time: "1 hour ago",
    type: "suspension",
  },
]

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <BarChart3 className="h-8 w-8 text-orange-600" />
              <div>
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                <p className="text-gray-600">Platform Management</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline">Export Report</Button>
              <Button>View Analytics</Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <div className="space-y-6">
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
                    <span className="text-green-600">{stat.change}</span> from last month
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Pending Approvals */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    Pending Approvals
                  </CardTitle>
                  <CardDescription>Items requiring your attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {pendingApprovals.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium">{item.name}</h4>
                          <p className="text-sm text-gray-600">Owner: {item.owner}</p>
                          <div className="flex items-center space-x-2 mt-2">
                            <Badge variant="outline">{item.type}</Badge>
                            <span className="text-xs text-gray-500">{item.submitted}</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline">
                            Review
                          </Button>
                          <Button size="sm">Approve</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* System Health & Recent Activity */}
            <div className="space-y-6">
              {/* System Health */}
              <Card>
                <CardHeader>
                  <CardTitle>System Health</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Server Uptime</span>
                      <span className="text-green-600">99.9%</span>
                    </div>
                    <Progress value={99.9} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Database Performance</span>
                      <span className="text-green-600">Excellent</span>
                    </div>
                    <Progress value={95} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>API Response Time</span>
                      <span className="text-yellow-600">Good</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          {activity.type === "approval" && <CheckCircle className="h-4 w-4 text-green-600" />}
                          {activity.type === "issue" && <AlertTriangle className="h-4 w-4 text-yellow-600" />}
                          {activity.type === "suspension" && <AlertTriangle className="h-4 w-4 text-red-600" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-xs text-gray-600">{activity.details}</p>
                          <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
