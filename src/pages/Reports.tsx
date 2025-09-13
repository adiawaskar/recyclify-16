import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { 
  FileText, 
  Download, 
  Share, 
  Calendar, 
  TrendingUp, 
  TrendingDown,
  Target,
  Award,
  Leaf,
  Recycle,
  Zap,
  BarChart3
} from "lucide-react";

const Reports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");

  const sustainabilityData = [
    { month: 'Jan', wasteReduction: 85, energySaved: 120, carbonOffset: 95 },
    { month: 'Feb', wasteReduction: 88, energySaved: 135, carbonOffset: 102 },
    { month: 'Mar', wasteReduction: 92, energySaved: 128, carbonOffset: 108 },
    { month: 'Apr', wasteReduction: 96, energySaved: 142, carbonOffset: 115 },
    { month: 'May', wasteReduction: 94, energySaved: 138, carbonOffset: 112 },
    { month: 'Jun', wasteReduction: 98, energySaved: 155, carbonOffset: 125 }
  ];

  const impactMetrics = [
    { name: 'Waste Reduced', value: 2450, unit: 'kg', change: '+12%', positive: true },
    { name: 'Energy Saved', value: 8240, unit: 'kWh', change: '+8%', positive: true },
    { name: 'Carbon Offset', value: 1680, unit: 'kg CO₂', change: '+15%', positive: true },
    { name: 'Cost Savings', value: 12450, unit: '$', change: '+18%', positive: true }
  ];

  const categoryBreakdown = [
    { name: 'Plastic Reduction', value: 35, color: '#8b5cf6' },
    { name: 'Energy Efficiency', value: 28, color: '#06b6d4' },
    { name: 'Waste Diversion', value: 22, color: '#10b981' },
    { name: 'Carbon Offset', value: 15, color: '#f59e0b' }
  ];

  const reports = [
    {
      id: 1,
      title: "Monthly Sustainability Report",
      description: "Comprehensive overview of environmental impact and achievements",
      type: "PDF",
      date: "June 2024",
      size: "2.1 MB",
      status: "Ready",
      category: "Monthly"
    },
    {
      id: 2,
      title: "Carbon Footprint Analysis",
      description: "Detailed analysis of carbon emissions and reduction strategies",
      type: "PDF",
      date: "Q2 2024",
      size: "3.4 MB",
      status: "Ready",
      category: "Quarterly"
    },
    {
      id: 3,
      title: "Waste Management Report",
      description: "Tracking waste reduction initiatives and circular economy progress",
      type: "Excel",
      date: "June 2024",
      size: "1.8 MB",
      status: "Ready",
      category: "Monthly"
    },
    {
      id: 4,
      title: "Energy Efficiency Dashboard",
      description: "Real-time monitoring of energy consumption and savings",
      type: "Interactive",
      date: "Live",
      size: "-",
      status: "Live",
      category: "Real-time"
    },
    {
      id: 5,
      title: "Annual Impact Summary",
      description: "Year-end comprehensive sustainability performance review",
      type: "PDF",
      date: "2023",
      size: "5.2 MB",
      status: "Archived",
      category: "Annual"
    }
  ];

  const kpis = [
    { label: "Waste Diversion Rate", current: 94, target: 95, unit: "%" },
    { label: "Energy Reduction", current: 18, target: 20, unit: "%" },
    { label: "Carbon Neutrality", current: 87, target: 100, unit: "%" },
    { label: "Circular Materials", current: 72, target: 80, unit: "%" }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Sustainability Reports
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive insights into your environmental impact and progress
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Share className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button>
              <Download className="h-4 w-4 mr-2" />
              Export All
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((metric, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="text-2xl font-bold">
                      {metric.value.toLocaleString()} {metric.unit}
                    </div>
                    <div className="text-sm text-muted-foreground">{metric.name}</div>
                  </div>
                  <Badge variant={metric.positive ? "default" : "destructive"}>
                    {metric.positive ? <TrendingUp className="h-3 w-3 mr-1" /> : <TrendingDown className="h-3 w-3 mr-1" />}
                    {metric.change}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="targets">Targets</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sustainability Trends */}
              <Card>
                <CardHeader>
                  <CardTitle>6-Month Sustainability Trends</CardTitle>
                  <CardDescription>Track your environmental impact over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={sustainabilityData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => [value, '']} />
                        <Line 
                          type="monotone" 
                          dataKey="wasteReduction" 
                          stroke="#8b5cf6" 
                          strokeWidth={2} 
                          name="Waste Reduction (kg)"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="energySaved" 
                          stroke="#06b6d4" 
                          strokeWidth={2} 
                          name="Energy Saved (kWh)"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="carbonOffset" 
                          stroke="#10b981" 
                          strokeWidth={2} 
                          name="Carbon Offset (kg CO₂)"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Impact Category Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Impact Category Distribution</CardTitle>
                  <CardDescription>Where your sustainability efforts make the most impact</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={categoryBreakdown}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={120}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {categoryBreakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value}%`, 'Impact']} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {categoryBreakdown.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm">{item.name}: {item.value}%</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Reports Generated", value: "24", icon: FileText, description: "This year" },
                { title: "Data Points Tracked", value: "156", icon: BarChart3, description: "Across all metrics" },
                { title: "Stakeholders Reached", value: "1,240", icon: Share, description: "Report recipients" }
              ].map((stat, index) => (
                <Card key={index}>
                  <CardContent className="pt-6 text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.description}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Available Reports</h3>
              <div className="flex gap-2">
                {["All", "Monthly", "Quarterly", "Annual"].map((filter) => (
                  <Badge key={filter} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                    {filter}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              {reports.map((report) => (
                <Card key={report.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <FileText className="h-6 w-6 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-semibold">{report.title}</h4>
                          <p className="text-sm text-muted-foreground">{report.description}</p>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              {report.date}
                            </span>
                            <span>{report.type}</span>
                            {report.size !== "-" && <span>{report.size}</span>}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={report.status === "Ready" ? "default" : report.status === "Live" ? "secondary" : "outline"}>
                          {report.status}
                        </Badge>
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>Detailed breakdown of sustainability metrics and trends</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sustainabilityData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="wasteReduction" fill="#8b5cf6" name="Waste Reduction (kg)" />
                      <Bar dataKey="energySaved" fill="#06b6d4" name="Energy Saved (kWh)" />
                      <Bar dataKey="carbonOffset" fill="#10b981" name="Carbon Offset (kg CO₂)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="targets" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Sustainability Targets & KPIs
                </CardTitle>
                <CardDescription>
                  Track progress against your sustainability goals and targets
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {kpis.map((kpi, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{kpi.label}</span>
                      <span className="text-sm text-muted-foreground">
                        {kpi.current}{kpi.unit} / {kpi.target}{kpi.unit}
                      </span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className="bg-primary h-2 rounded-full transition-all duration-300"
                          style={{ width: `${(kpi.current / kpi.target) * 100}%` }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>0{kpi.unit}</span>
                        <span>{kpi.target}{kpi.unit}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Reports;