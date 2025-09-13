import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Leaf, Droplets, Zap, Recycle, Calculator, Target, Car, Factory, Plane } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const ImpactTracker = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const impactMetrics = [
    {
      title: "CO₂ Emissions Reduced",
      current: 2847,
      target: 5000,
      unit: "tons",
      icon: Leaf,
      color: "text-green-600"
    },
    {
      title: "Water Saved",
      current: 18420,
      target: 25000,
      unit: "liters",
      icon: Droplets,
      color: "text-blue-600"
    },
    {
      title: "Energy Conserved",
      current: 15680,
      target: 20000,
      unit: "kWh",
      icon: Zap,
      color: "text-yellow-600"
    },
    {
      title: "Waste Diverted",
      current: 892,
      target: 1200,
      unit: "tons",
      icon: Recycle,
      color: "text-purple-600"
    }
  ];

  const recentAchievements = [
    { title: "Zero Waste Facility Certified", date: "2 days ago", type: "certification" },
    { title: "50% Reduction in Plastic Waste", date: "1 week ago", type: "milestone" },
    { title: "Carbon Neutral Supply Chain", date: "2 weeks ago", type: "achievement" },
    { title: "100 NGO Partnerships", date: "3 weeks ago", type: "social" }
  ];

  // Carbon tracking data
  const carbonData = [
    { month: "Jan", emissions: 145, target: 120 },
    { month: "Feb", emissions: 132, target: 120 },
    { month: "Mar", emissions: 128, target: 120 },
    { month: "Apr", emissions: 118, target: 120 },
    { month: "May", emissions: 115, target: 120 },
    { month: "Jun", emissions: 108, target: 120 }
  ];

  const emissionSources = [
    { name: "Energy", value: 45, color: "#FF6B6B" },
    { name: "Transportation", value: 28, color: "#4ECDC4" },
    { name: "Manufacturing", value: 18, color: "#45B7D1" },
    { name: "Waste", value: 9, color: "#96CEB4" }
  ];

  const reductionTargets = [
    {
      category: "Energy Consumption",
      current: 245,
      target: 180,
      reduction: 65,
      icon: Zap,
      unit: "MWh/month"
    },
    {
      category: "Transportation",
      current: 89,
      target: 65,
      reduction: 24,
      icon: Car,
      unit: "tons CO₂/month"
    },
    {
      category: "Manufacturing",
      current: 156,
      target: 120,
      reduction: 36,
      icon: Factory,
      unit: "tons CO₂/month"
    },
    {
      category: "Business Travel",
      current: 32,
      target: 20,
      reduction: 12,
      icon: Plane,
      unit: "tons CO₂/month"
    }
  ];

  const totalEmissions = 108;
  const targetEmissions = 120;
  const reductionPercentage = ((targetEmissions - totalEmissions) / targetEmissions) * 100;

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Environmental Impact Dashboard</h1>
          <p className="text-muted-foreground">Monitor your environmental progress and carbon footprint</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="overview">Impact Overview</TabsTrigger>
            <TabsTrigger value="carbon">Carbon Tracking</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            {/* Impact Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {impactMetrics.map((metric, index) => {
                const Icon = metric.icon;
                const progress = (metric.current / metric.target) * 100;
                
                return (
                  <motion.div
                    key={metric.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card className="glass-card hover:shadow-glow transition-all duration-300">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <Icon className={`h-6 w-6 ${metric.color}`} />
                          <Badge variant="secondary" className="text-xs">
                            {progress.toFixed(1)}%
                          </Badge>
                        </div>
                        <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="text-2xl font-bold">
                          {metric.current.toLocaleString()} <span className="text-sm text-muted-foreground">{metric.unit}</span>
                        </div>
                        <Progress value={progress} className="h-2" />
                        <div className="text-xs text-muted-foreground">
                          Target: {metric.target.toLocaleString()} {metric.unit}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Recent Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentAchievements.map((achievement, index) => (
                      <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                        <div>
                          <h4 className="font-medium">{achievement.title}</h4>
                          <p className="text-sm text-muted-foreground">{achievement.date}</p>
                        </div>
                        <Badge variant="outline">{achievement.type}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          <TabsContent value="carbon" className="space-y-8">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Current Monthly Emissions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-primary">{totalEmissions}</div>
                    <div className="text-sm text-muted-foreground">tons CO₂ equivalent</div>
                    <div className="text-sm text-green-600 mt-2">
                      ↓ 10% from last month
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Target Achievement</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600">{reductionPercentage.toFixed(1)}%</div>
                    <div className="text-sm text-muted-foreground">ahead of 2024 target</div>
                    <Progress value={reductionPercentage + 100} className="mt-3" />
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="glass-card">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Carbon Offset</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600">24.5</div>
                    <div className="text-sm text-muted-foreground">tons CO₂ offset this month</div>
                    <Button size="sm" className="mt-2 w-full">
                      Purchase Credits
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Emissions Trend Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calculator className="h-5 w-5" />
                      Emissions Trend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={carbonData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line 
                          type="monotone" 
                          dataKey="emissions" 
                          stroke="hsl(var(--primary))" 
                          strokeWidth={2}
                          name="Actual Emissions"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="target" 
                          stroke="#EF4444" 
                          strokeDasharray="5 5"
                          name="Target"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Emission Sources Pie Chart */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Emission Sources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={emissionSources}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {emissionSources.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Reduction Targets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Reduction Targets by Category</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reductionTargets.map((target, index) => {
                      const Icon = target.icon;
                      const progress = ((target.current - target.reduction) / target.target) * 100;
                      
                      return (
                        <div key={target.category} className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Icon className="h-5 w-5 text-primary" />
                              <span className="font-medium">{target.category}</span>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              -{target.reduction} {target.unit}
                            </span>
                          </div>
                          <Progress value={Math.min(progress, 100)} className="h-2" />
                          <div className="flex justify-between text-sm text-muted-foreground">
                            <span>Current: {target.current} {target.unit}</span>
                            <span>Target: {target.target} {target.unit}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default ImpactTracker;