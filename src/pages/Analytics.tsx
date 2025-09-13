import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, PieChart, TrendingUp, Download, Filter, Calendar, FileText, Eye, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart as RechartsPieChart, Pie, Cell } from "recharts";

const Analytics = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPeriod, setSelectedPeriod] = useState("monthly");

  // Analytics data
  const sustainabilityMetrics = [
    { month: "Jan", wasteReduction: 45, carbonSaved: 230, energySaved: 180, cost: 12000 },
    { month: "Feb", wasteReduction: 52, carbonSaved: 275, energySaved: 210, cost: 14500 },
    { month: "Mar", wasteReduction: 48, carbonSaved: 310, energySaved: 195, cost: 13800 },
    { month: "Apr", wasteReduction: 65, carbonSaved: 345, energySaved: 240, cost: 16200 },
    { month: "May", wasteReduction: 58, carbonSaved: 380, energySaved: 225, cost: 15600 },
    { month: "Jun", wasteReduction: 72, carbonSaved: 420, energySaved: 280, cost: 18900 }
  ];

  const wasteByCategory = [
    { name: "Plastic", value: 35, color: "#FF6B6B" },
    { name: "Paper", value: 28, color: "#4ECDC4" },
    { name: "Metal", value: 18, color: "#45B7D1" },
    { name: "Organic", value: 12, color: "#96CEB4" },
    { name: "Electronics", value: 7, color: "#FFEAA7" }
  ];

  const supplierPerformance = [
    { name: "EcoSupply Co", rating: 95, sustainability: 92, cost: 88, delivery: 96 },
    { name: "GreenTech Ltd", rating: 89, sustainability: 94, cost: 85, delivery: 90 },
    { name: "CleanSource Inc", rating: 87, sustainability: 85, cost: 90, delivery: 89 },
    { name: "SustainableMats", rating: 92, sustainability: 96, cost: 87, delivery: 93 },
    { name: "EcoLogistics", rating: 85, sustainability: 88, cost: 92, delivery: 82 }
  ];

  // Reports data
  const sustainabilityReports = [
    {
      id: 1,
      title: "Q1 2024 Sustainability Impact Report",
      type: "Quarterly Impact",
      generatedDate: "April 1, 2024",
      period: "Jan - Mar 2024",
      status: "Published",
      format: "PDF",
      size: "2.3 MB",
      metrics: ["CO₂ Reduction", "Waste Diversion", "Water Conservation"],
      description: "Comprehensive analysis of environmental impact and sustainability initiatives for Q1 2024."
    },
    {
      id: 2,
      title: "March 2024 Circular Economy Metrics",
      type: "Monthly Metrics",
      generatedDate: "April 5, 2024",
      period: "March 2024",
      status: "Ready",
      format: "PDF",
      size: "1.8 MB",
      metrics: ["Material Recovery", "Circular Revenue", "Supplier Network"],
      description: "Detailed breakdown of circular economy performance and material flow analysis."
    },
    {
      id: 3,
      title: "Annual ESG Performance Report 2023",
      type: "Annual ESG",
      generatedDate: "January 15, 2024",
      period: "2023",
      status: "Published",
      format: "PDF",
      size: "4.1 MB",
      metrics: ["Environmental", "Social", "Governance"],
      description: "Complete ESG performance report meeting regulatory compliance requirements."
    }
  ];

  const operationalReports = [
    {
      id: 1,
      title: "Supply Chain Efficiency Dashboard",
      type: "Operational",
      generatedDate: "Today",
      period: "Real-time",
      status: "Live",
      format: "Interactive",
      size: "N/A",
      metrics: ["Delivery Times", "Cost Efficiency", "Supplier Performance"],
      description: "Real-time operational metrics and supply chain performance indicators."
    },
    {
      id: 2,
      title: "Waste Stream Analysis Report",
      type: "Waste Management",
      generatedDate: "March 28, 2024",
      period: "March 2024",
      status: "Ready",
      format: "Excel",
      size: "956 KB",
      metrics: ["Waste Categories", "Diversion Rates", "Cost Savings"],
      description: "Detailed analysis of waste streams and optimization opportunities."
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "bg-green-600 hover:bg-green-700";
      case "Ready": return "bg-blue-600 hover:bg-blue-700";
      case "Live": return "bg-orange-600 hover:bg-orange-700";
      case "Submitted": return "bg-purple-600 hover:bg-purple-700";
      default: return "bg-gray-600 hover:bg-gray-700";
    }
  };

  const ReportCard = ({ report, index }: { report: any; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Card className="glass-card hover:shadow-glow transition-all duration-300">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-gradient-hero">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg">{report.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{report.type}</p>
              </div>
            </div>
            <Badge className={getStatusColor(report.status)}>
              {report.status}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">{report.description}</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Period:</span>
              <div className="font-medium truncate">{report.period}</div>
            </div>
            <div>
              <span className="text-muted-foreground">Format:</span>
              <div className="font-medium truncate">{report.format} {report.size && `(${report.size})`}</div>
            </div>
          </div>

          <div>
            <span className="text-sm text-muted-foreground">Key Metrics:</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {report.metrics.map((metric: string, idx: number) => (
                <Badge key={idx} variant="secondary" className="text-xs">
                  {metric}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <div className="flex gap-2">
              <Button size="sm" className="flex-1 gap-2">
                <Eye className="h-4 w-4" />
                <span className="hidden sm:inline">View Report</span>
                <span className="sm:hidden">View</span>
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Download className="h-4 w-4" />
                <span className="hidden sm:inline">Download</span>
              </Button>
            </div>
            <Button variant="outline" size="sm" className="w-full gap-2">
              <Share2 className="h-4 w-4" />
              <span>Share Report</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Analytics & Reports</h1>
          <p className="text-muted-foreground">Comprehensive insights into your sustainability performance and operations</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Analytics Overview</TabsTrigger>
            <TabsTrigger value="sustainability">Sustainability Reports</TabsTrigger>
            <TabsTrigger value="operational">Operational Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <Card className="glass-card">
                <CardContent className="pt-4 lg:pt-6">
                  <div className="flex items-center justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs lg:text-sm font-medium text-muted-foreground truncate">Total Waste Reduced</p>
                      <p className="text-lg lg:text-2xl font-bold">340 tons</p>
                      <p className="text-xs text-green-600">↑ 15% from last month</p>
                    </div>
                    <BarChart3 className="h-6 w-6 lg:h-8 lg:w-8 text-primary flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="pt-4 lg:pt-6">
                  <div className="flex items-center justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs lg:text-sm font-medium text-muted-foreground truncate">Carbon Footprint</p>
                      <p className="text-lg lg:text-2xl font-bold">1,960 tons</p>
                      <p className="text-xs text-green-600">↓ 8% reduction</p>
                    </div>
                    <TrendingUp className="h-6 w-6 lg:h-8 lg:w-8 text-primary flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="pt-4 lg:pt-6">
                  <div className="flex items-center justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs lg:text-sm font-medium text-muted-foreground truncate">Cost Savings</p>
                      <p className="text-lg lg:text-2xl font-bold">$89.2K</p>
                      <p className="text-xs text-green-600">↑ 22% increase</p>
                    </div>
                    <PieChart className="h-6 w-6 lg:h-8 lg:w-8 text-primary flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardContent className="pt-4 lg:pt-6">
                  <div className="flex items-center justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs lg:text-sm font-medium text-muted-foreground truncate">Supplier Score</p>
                      <p className="text-lg lg:text-2xl font-bold">94.3%</p>
                      <p className="text-xs text-green-600">↑ 3% improvement</p>
                    </div>
                    <BarChart3 className="h-6 w-6 lg:h-8 lg:w-8 text-primary flex-shrink-0" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Time Period Selector */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <h3 className="text-lg font-semibold">Performance Trends</h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                  <SelectTrigger className="w-full sm:w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Export</span>
                </Button>
              </div>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
              {/* Sustainability Metrics Line Chart */}
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base lg:text-lg">Sustainability Metrics Trend</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={sustainabilityMetrics} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" fontSize={12} />
                      <YAxis fontSize={12} />
                      <Tooltip />
                      <Line 
                        type="monotone" 
                        dataKey="wasteReduction" 
                        stroke="hsl(var(--primary))" 
                        strokeWidth={2}
                        name="Waste Reduction (tons)"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="carbonSaved" 
                        stroke="hsl(var(--accent))" 
                        strokeWidth={2}
                        name="Carbon Saved (kg)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Waste Distribution Pie Chart */}
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base lg:text-lg">Waste Distribution by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <RechartsPieChart>
                      <Pie
                        data={wasteByCategory}
                        cx="50%"
                        cy="50%"
                        outerRadius={60}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                        labelLine={false}
                      >
                        {wasteByCategory.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Cost Savings Bar Chart */}
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base lg:text-lg">Monthly Cost Savings</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={sustainabilityMetrics} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" fontSize={12} />
                      <YAxis fontSize={12} />
                      <Tooltip />
                      <Bar dataKey="cost" fill="hsl(var(--primary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Supplier Performance */}
              <Card className="glass-card">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base lg:text-lg">Supplier Performance Ratings</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={250}>
                    <BarChart data={supplierPerformance} layout="horizontal" margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} fontSize={12} />
                      <YAxis dataKey="name" type="category" width={80} fontSize={10} />
                      <Tooltip />
                      <Bar dataKey="rating" fill="hsl(var(--primary))" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="sustainability" className="space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <Card className="glass-card text-center">
                <CardContent className="pt-6">
                  <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-sm text-muted-foreground">Reports Generated</div>
                </CardContent>
              </Card>
              <Card className="glass-card text-center">
                <CardContent className="pt-6">
                  <BarChart3 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">89%</div>
                  <div className="text-sm text-muted-foreground">Data Accuracy</div>
                </CardContent>
              </Card>
              <Card className="glass-card text-center">
                <CardContent className="pt-6">
                  <Download className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">156</div>
                  <div className="text-sm text-muted-foreground">Downloads</div>
                </CardContent>
              </Card>
              <Card className="glass-card text-center">
                <CardContent className="pt-6">
                  <Share2 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">42</div>
                  <div className="text-sm text-muted-foreground">Stakeholders</div>
                </CardContent>
              </Card>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Report Period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                  <SelectItem value="quarterly">Quarterly</SelectItem>
                  <SelectItem value="annually">Annually</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Filter Reports
              </Button>
              <Button className="gap-2 ml-auto">
                <PieChart className="h-4 w-4" />
                Generate New Report
              </Button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
              {sustainabilityReports.map((report, index) => (
                <ReportCard key={report.id} report={report} index={index} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="operational" className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <h3 className="text-lg lg:text-xl font-semibold">Operational Reports</h3>
                <p className="text-sm lg:text-base text-muted-foreground">Real-time operational metrics and efficiency reports</p>
              </div>
              <Button className="gap-2 self-start sm:self-auto">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Generate Report</span>
              </Button>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 lg:gap-6">
              {operationalReports.map((report, index) => (
                <ReportCard key={report.id} report={report} index={index} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default Analytics;