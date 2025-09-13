import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar } from "recharts";
import { 
  Leaf, 
  Car, 
  Zap, 
  Home, 
  Plane, 
  TrendingDown, 
  TrendingUp,
  Target,
  Calculator,
  Award,
  Calendar
} from "lucide-react";

const CarbonTracker = () => {
  const [monthlyEmissions, setMonthlyEmissions] = useState({
    transportation: 120,
    energy: 80,
    food: 45,
    waste: 25
  });

  const monthlyData = [
    { month: 'Jan', emissions: 285, target: 250 },
    { month: 'Feb', emissions: 275, target: 245 },
    { month: 'Mar', emissions: 290, target: 240 },
    { month: 'Apr', emissions: 265, target: 235 },
    { month: 'May', emissions: 250, target: 230 },
    { month: 'Jun', emissions: 240, target: 225 },
  ];

  const emissionBreakdown = [
    { name: 'Transportation', value: monthlyEmissions.transportation, color: '#8b5cf6' },
    { name: 'Energy', value: monthlyEmissions.energy, color: '#06b6d4' },
    { name: 'Food', value: monthlyEmissions.food, color: '#10b981' },
    { name: 'Waste', value: monthlyEmissions.waste, color: '#f59e0b' }
  ];

  const totalEmissions = Object.values(monthlyEmissions).reduce((sum, value) => sum + value, 0);
  const targetReduction = 220;
  const progressToTarget = Math.max(0, Math.min(100, ((300 - totalEmissions) / (300 - targetReduction)) * 100));

  const achievements = [
    { name: "First Month Tracked", icon: Calendar, earned: true },
    { name: "10% Reduction", icon: TrendingDown, earned: true },
    { name: "Carbon Neutral Week", icon: Leaf, earned: false },
    { name: "Green Commuter", icon: Car, earned: true },
    { name: "Energy Saver", icon: Zap, earned: false },
    { name: "Eco Champion", icon: Award, earned: false }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-8"
      >
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
            Carbon Footprint Tracker
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor, analyze, and reduce your carbon emissions with our comprehensive tracking tools.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { 
              label: "This Month", 
              value: `${totalEmissions} kg CO₂`, 
              icon: Calculator, 
              change: "-12%",
              positive: true 
            },
            { 
              label: "Target Goal", 
              value: `${targetReduction} kg CO₂`, 
              icon: Target, 
              change: "On track",
              positive: true 
            },
            { 
              label: "Best Category", 
              value: "Food", 
              icon: Leaf, 
              change: "-25%",
              positive: true 
            },
            { 
              label: "Total Saved", 
              value: "45 kg CO₂", 
              icon: TrendingDown, 
              change: "This year",
              positive: true 
            }
          ].map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <stat.icon className="h-8 w-8 text-primary" />
                  <Badge variant={stat.positive ? "default" : "destructive"}>
                    {stat.change}
                  </Badge>
                </div>
                <div className="text-2xl font-bold mt-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Progress to Goal */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Progress to Monthly Goal
            </CardTitle>
            <CardDescription>
              You're {Math.round(progressToTarget)}% of the way to your carbon reduction target
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={progressToTarget} className="h-3" />
            <div className="flex justify-between text-sm">
              <span>Current: {totalEmissions} kg CO₂</span>
              <span>Target: {targetReduction} kg CO₂</span>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Emissions Breakdown */}
              <Card>
                <CardHeader>
                  <CardTitle>Current Month Breakdown</CardTitle>
                  <CardDescription>Your carbon emissions by category</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={emissionBreakdown}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={100}
                          paddingAngle={5}
                          dataKey="value"
                        >
                          {emissionBreakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => [`${value} kg CO₂`, 'Emissions']} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    {emissionBreakdown.map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-sm">{item.name}: {item.value} kg</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Monthly Trend */}
              <Card>
                <CardHeader>
                  <CardTitle>6-Month Trend</CardTitle>
                  <CardDescription>Emissions vs target over time</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={monthlyData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`${value} kg CO₂`, '']} />
                        <Line 
                          type="monotone" 
                          dataKey="emissions" 
                          stroke="#8b5cf6" 
                          strokeWidth={2} 
                          name="Actual"
                        />
                        <Line 
                          type="monotone" 
                          dataKey="target" 
                          stroke="#10b981" 
                          strokeWidth={2} 
                          strokeDasharray="5 5"
                          name="Target"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Category Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: "Transportation", value: monthlyEmissions.transportation, icon: Car, tips: ["Use public transport", "Walk or bike short distances"] },
                { category: "Energy", value: monthlyEmissions.energy, icon: Zap, tips: ["Switch to LED bulbs", "Unplug devices when not in use"] },
                { category: "Food", value: monthlyEmissions.food, icon: Home, tips: ["Eat less meat", "Buy local produce"] },
                { category: "Waste", value: monthlyEmissions.waste, icon: Leaf, tips: ["Recycle properly", "Reduce single-use items"] }
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <item.icon className="h-5 w-5" />
                      {item.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-2xl font-bold">{item.value} kg CO₂</div>
                    <div className="space-y-1">
                      <div className="text-sm font-medium">Quick Tips:</div>
                      {item.tips.map((tip, tipIndex) => (
                        <div key={tipIndex} className="text-xs text-muted-foreground">
                          • {tip}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="calculator" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Carbon Footprint Calculator</CardTitle>
                <CardDescription>
                  Input your activities to calculate and track your carbon emissions
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="car-miles">Car Miles Driven</Label>
                      <Input 
                        id="car-miles" 
                        type="number" 
                        placeholder="Miles per week" 
                        defaultValue="150"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="electricity">Electricity Usage</Label>
                      <Input 
                        id="electricity" 
                        type="number" 
                        placeholder="kWh per month" 
                        defaultValue="800"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="flights">Flights Taken</Label>
                      <Input 
                        id="flights" 
                        type="number" 
                        placeholder="Number this month" 
                        defaultValue="0"
                      />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="gas">Natural Gas</Label>
                      <Input 
                        id="gas" 
                        type="number" 
                        placeholder="Therms per month" 
                        defaultValue="45"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="waste">Waste Generated</Label>
                      <Input 
                        id="waste" 
                        type="number" 
                        placeholder="Lbs per week" 
                        defaultValue="30"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="diet">Diet Type</Label>
                      <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                        <option>Mixed Diet</option>
                        <option>Vegetarian</option>
                        <option>Vegan</option>
                      </select>
                    </div>
                  </div>
                </div>
                <Button className="w-full">
                  <Calculator className="h-4 w-4 mr-2" />
                  Calculate Emissions
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Detailed Analytics</CardTitle>
                <CardDescription>Deep dive into your carbon footprint patterns</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="emissions" fill="#8b5cf6" name="Actual Emissions" />
                      <Bar dataKey="target" fill="#10b981" name="Target Emissions" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Your Achievements</CardTitle>
                <CardDescription>Track your progress and unlock rewards for reducing your carbon footprint</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement, index) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-lg border-2 text-center space-y-3 ${
                        achievement.earned 
                          ? 'border-primary bg-primary/5' 
                          : 'border-dashed border-muted'
                      }`}
                    >
                      <achievement.icon 
                        className={`h-8 w-8 mx-auto ${
                          achievement.earned ? 'text-primary' : 'text-muted-foreground'
                        }`} 
                      />
                      <div className="space-y-1">
                        <div className="font-medium">{achievement.name}</div>
                        {achievement.earned && (
                          <Badge variant="default" className="text-xs">Earned!</Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default CarbonTracker;