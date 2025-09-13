import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
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
  Calendar,
  Users,
  MessageCircle,
  Star,
  Heart,
  MapPin,
  Package,
  Search,
  Plus,
  Send,
  ThumbsUp,
  BookOpen,
  Play,
  Clock,
  CheckCircle
} from "lucide-react";

const CarbonTracker = () => {
  const [monthlyEmissions, setMonthlyEmissions] = useState({
    transportation: 120,
    energy: 80,
    food: 45,
    waste: 25
  });

  const [activeTab, setActiveTab] = useState("tracker");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");

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

  // Community data
  const communityPosts = [
    {
      id: 1,
      title: "Best practices for plastic waste reduction in manufacturing",
      author: "Sarah Chen",
      company: "EcoTech Industries",
      avatar: "SC",
      date: "2 hours ago",
      category: "Waste Reduction",
      replies: 23,
      likes: 45,
      tags: ["plastic", "manufacturing", "best-practices"],
      content: "We've implemented a new plastic reduction strategy that cut our waste by 40%. Here's what worked for us..."
    },
    {
      id: 2,
      title: "Looking for suppliers of recycled steel in the Midwest",
      author: "Mike Rodriguez",
      company: "BuildGreen Corp",
      avatar: "MR",
      date: "5 hours ago",
      category: "Resource Exchange",
      replies: 12,
      likes: 28,
      tags: ["steel", "recycled", "suppliers"],
      content: "Our construction company is expanding and we need reliable suppliers of recycled steel materials..."
    },
    {
      id: 3,
      title: "Carbon offset program experiences?",
      author: "Emily Watson",
      company: "GreenLogistics",
      avatar: "EW",
      date: "1 day ago",
      category: "Carbon Management",
      replies: 34,
      likes: 67,
      tags: ["carbon-offset", "sustainability", "logistics"],
      content: "Has anyone here implemented a comprehensive carbon offset program? Would love to hear about your experiences..."
    }
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Circular Economy Workshop",
      date: "March 15, 2024",
      time: "2:00 PM EST",
      type: "Workshop",
      attendees: 124,
      location: "Virtual",
      description: "Learn practical strategies for implementing circular economy principles in your business."
    },
    {
      id: 2,
      title: "Sustainable Supply Chain Summit",
      date: "March 22, 2024",
      time: "9:00 AM EST",
      type: "Summit",
      attendees: 456,
      location: "San Francisco, CA",
      description: "Join industry leaders discussing the future of sustainable supply chains."
    },
    {
      id: 3,
      title: "Zero Waste Certification Webinar",
      date: "March 28, 2024",
      time: "11:00 AM EST",
      type: "Webinar",
      attendees: 89,
      location: "Virtual",
      description: "Everything you need to know about achieving zero waste certification for your facility."
    }
  ];

  // NGO/Donation data
  const ngoPartners = [
    {
      id: 1,
      name: "Food Recovery Network",
      type: "Food Security",
      location: "San Francisco, CA",
      beneficiaries: "2,500+ families",
      needs: ["Surplus food", "Packaging materials", "Transportation"],
      impact: "Redistributed 45 tons of food this month",
      urgency: "high"
    },
    {
      id: 2,
      name: "Tech for Good Alliance",
      type: "Digital Inclusion",
      location: "Austin, TX",
      beneficiaries: "1,200+ students",
      needs: ["Electronics", "Computer components", "Office supplies"],
      impact: "Equipped 30 schools with refurbished tech",
      urgency: "medium"
    },
    {
      id: 3,
      name: "Green Community Center",
      type: "Environmental",
      location: "Portland, OR",
      beneficiaries: "800+ community members",
      needs: ["Textiles", "Furniture", "Educational materials"],
      impact: "Diverted 12 tons of waste from landfills",
      urgency: "low"
    },
    {
      id: 4,
      name: "Healthcare Access Initiative",
      type: "Healthcare",
      location: "Chicago, IL",
      beneficiaries: "5,000+ patients",
      needs: ["Medical supplies", "Protective equipment", "Sanitizers"],
      impact: "Served 200 free health checkups",
      urgency: "high"
    }
  ];

  const donationStats = [
    { label: "Total Donations", value: "847", unit: "tons" },
    { label: "NGO Partners", value: "156", unit: "organizations" },
    { label: "Beneficiaries", value: "12.5K", unit: "people served" },
    { label: "Impact Score", value: "94", unit: "% efficiency" }
  ];

  const types = ["all", "Food Security", "Digital Inclusion", "Environmental", "Healthcare"];

  const filteredNGOs = ngoPartners.filter(ngo => {
    const matchesSearch = ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ngo.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "all" || ngo.type === selectedType;
    return matchesSearch && matchesType;
  });

  // Training data
  const courses = [
    {
      id: 1,
      title: "Circular Economy Fundamentals",
      description: "Master the principles of circular economy and sustainable business models",
      duration: "4 hours",
      level: "Beginner",
      rating: 4.8,
      students: 2456,
      progress: 0,
      modules: 8,
      category: "Sustainability",
      instructor: "Dr. Sarah Green",
      thumbnail: "🌱"
    },
    {
      id: 2,
      title: "Zero Waste Manufacturing",
      description: "Implement zero waste strategies in manufacturing processes",
      duration: "6 hours",
      level: "Intermediate",
      rating: 4.9,
      students: 1834,
      progress: 65,
      modules: 12,
      category: "Manufacturing",
      instructor: "Michael Chen",
      thumbnail: "🏭"
    },
    {
      id: 3,
      title: "Sustainable Supply Chain Management",
      description: "Build resilient and sustainable supply chain networks",
      duration: "8 hours",
      level: "Advanced",
      rating: 4.7,
      students: 1245,
      progress: 100,
      modules: 15,
      category: "Supply Chain",
      instructor: "Emma Rodriguez",
      thumbnail: "🚛"
    },
    {
      id: 4,
      title: "Carbon Footprint Assessment",
      description: "Learn to measure, track, and reduce organizational carbon emissions",
      duration: "3 hours",
      level: "Beginner",
      rating: 4.6,
      students: 3102,
      progress: 25,
      modules: 6,
      category: "Carbon Management",
      instructor: "Dr. James Wilson",
      thumbnail: "📊"
    }
  ];

  const certifications = [
    {
      id: 1,
      title: "Certified Circular Economy Professional",
      description: "Industry-recognized certification for circular economy expertise",
      duration: "20 hours",
      requirements: ["Complete 5 core courses", "Pass final assessment", "Submit case study"],
      benefits: ["Industry recognition", "Career advancement", "Network access"],
      enrolled: 892,
      completedCourses: 3,
      totalCourses: 5
    },
    {
      id: 2,
      title: "Zero Waste Specialist Certification",
      description: "Specialized certification in zero waste implementation strategies",
      duration: "15 hours",
      requirements: ["Complete 4 specialized courses", "Practical project", "Peer review"],
      benefits: ["Expert status", "Consultation opportunities", "Premium resources"],
      enrolled: 567,
      completedCourses: 2,
      totalCourses: 4
    }
  ];

  const learningPaths = [
    {
      id: 1,
      title: "Sustainability Leadership Track",
      description: "Comprehensive program for sustainability professionals",
      courses: 8,
      duration: "32 hours",
      difficulty: "Intermediate to Advanced",
      completionRate: 85
    },
    {
      id: 2,
      title: "Circular Business Model Design",
      description: "Design and implement circular business models",
      courses: 6,
      duration: "24 hours",
      difficulty: "Beginner to Intermediate",
      completionRate: 92
    }
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
            Carbon Footprint Tracker & Community Hub
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor, analyze, and reduce your carbon emissions while connecting with a community of sustainability champions.
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

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="tracker">Tracker</TabsTrigger>
            <TabsTrigger value="calculator">Calculator</TabsTrigger>
            <TabsTrigger value="community">Community</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="partners">Partners</TabsTrigger>
            <TabsTrigger value="learning">Learning</TabsTrigger>
          </TabsList>

          <TabsContent value="tracker" className="space-y-6">
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

            {/* Achievements */}
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

          <TabsContent value="community" className="space-y-6">
            {/* Community Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="glass-card text-center">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">2,847</div>
                  <div className="text-sm text-muted-foreground">Active Members</div>
                </CardContent>
              </Card>
              <Card className="glass-card text-center">
                <CardContent className="pt-6">
                  <MessageCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">1,234</div>
                  <div className="text-sm text-muted-foreground">Discussions</div>
                </CardContent>
              </Card>
              <Card className="glass-card text-center">
                <CardContent className="pt-6">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">456</div>
                  <div className="text-sm text-muted-foreground">Solutions Shared</div>
                </CardContent>
              </Card>
              <Card className="glass-card text-center">
                <CardContent className="pt-6">
                  <ThumbsUp className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">89%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </CardContent>
              </Card>
            </div>

            {/* New Post Section */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Start a Discussion</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="What's your sustainability challenge or success story?" />
                <div className="flex gap-2">
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="waste">Waste Reduction</SelectItem>
                      <SelectItem value="carbon">Carbon Management</SelectItem>
                      <SelectItem value="resource">Resource Exchange</SelectItem>
                      <SelectItem value="energy">Energy Efficiency</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button className="gap-2 ml-auto">
                    <Send className="h-4 w-4" />
                    Post Discussion
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Discussion Posts */}
            <div className="space-y-6">
              {communityPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-card hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-white font-medium">
                            {post.avatar}
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{post.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <span>{post.author}</span>
                              <span>•</span>
                              <span>{post.company}</span>
                              <span>•</span>
                              <span>{post.date}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline">{post.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{post.content}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center gap-4">
                          <Button variant="ghost" size="sm" className="gap-2">
                            <ThumbsUp className="h-4 w-4" />
                            {post.likes}
                          </Button>
                          <Button variant="ghost" size="sm" className="gap-2">
                            <MessageCircle className="h-4 w-4" />
                            {post.replies} replies
                          </Button>
                        </div>
                        <Button variant="outline" size="sm">
                          Join Discussion
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl font-semibold">Upcoming Events</h3>
                <p className="text-muted-foreground">Join workshops, webinars, and summits to advance your sustainability knowledge</p>
              </div>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Create Event
              </Button>
            </div>

            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-card hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-lg bg-gradient-hero">
                            <Calendar className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{event.title}</CardTitle>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                              <span>{event.date}</span>
                              <span>•</span>
                              <span>{event.time}</span>
                              <span>•</span>
                              <span>{event.location}</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant="outline">{event.type}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{event.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-4 w-4" />
                          {event.attendees} attendees
                        </div>
                        <Button size="sm">
                          Register Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="partners" className="space-y-6">
            {/* Donation Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {donationStats.map((stat, index) => (
                <Card key={index} className="glass-card text-center">
                  <CardContent className="pt-6">
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                    <div className="text-xs text-muted-foreground mt-1">{stat.unit}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Search and Filter */}
            <Card className="glass-card">
              <CardContent className="pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Search by organization or location..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="w-full sm:w-48">
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      {types.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type === "all" ? "All Categories" : type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* NGO Partners */}
            <div className="space-y-6">
              {filteredNGOs.map((ngo, index) => (
                <motion.div
                  key={ngo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-card hover:shadow-glow transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-3 rounded-lg bg-gradient-hero">
                            <Heart className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{ngo.name}</CardTitle>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              {ngo.location}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{ngo.type}</Badge>
                          <Badge 
                            className={
                              ngo.urgency === "high" 
                                ? "bg-red-600 hover:bg-red-700" 
                                : ngo.urgency === "medium" 
                                ? "bg-orange-600 hover:bg-orange-700" 
                                : "bg-green-600 hover:bg-green-700"
                            }
                          >
                            {ngo.urgency} priority
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Beneficiaries:</span>
                          <div className="font-medium">{ngo.beneficiaries}</div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Recent Impact:</span>
                          <div className="font-medium">{ngo.impact}</div>
                        </div>
                      </div>

                      <div>
                        <span className="text-sm text-muted-foreground">Current Needs:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {ngo.needs.map((need, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {need}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="gap-2">
                          <Package className="h-4 w-4" />
                          Donate Materials
                        </Button>
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="learning" className="space-y-6">
            {/* Learning Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              <Card className="glass-card text-center">
                <CardContent className="pt-6">
                  <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">42</div>
                  <div className="text-sm text-muted-foreground">Available Courses</div>
                </CardContent>
              </Card>
              <Card className="glass-card text-center">
                <CardContent className="pt-6">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">8,947</div>
                  <div className="text-sm text-muted-foreground">Active Learners</div>
                </CardContent>
              </Card>
              <Card className="glass-card text-center">
                <CardContent className="pt-6">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">1,234</div>
                  <div className="text-sm text-muted-foreground">Certifications Issued</div>
                </CardContent>
              </Card>
              <Card className="glass-card text-center">
                <CardContent className="pt-6">
                  <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold">156</div>
                  <div className="text-sm text-muted-foreground">Hours Learned</div>
                </CardContent>
              </Card>
            </div>

            {/* Learning Content Tabs */}
            <Tabs defaultValue="courses" className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="courses">Courses</TabsTrigger>
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
                <TabsTrigger value="learning-paths">Learning Paths</TabsTrigger>
              </TabsList>

              <TabsContent value="courses" className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Featured Courses</h3>
                  <Button variant="outline">View All Courses</Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {courses.map((course, index) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="glass-card hover:shadow-glow transition-all duration-300 h-full">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div className="text-3xl mb-2">{course.thumbnail}</div>
                            <Badge variant="secondary">{course.level}</Badge>
                          </div>
                          <CardTitle className="text-lg">{course.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{course.description}</p>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="flex items-center justify-between text-sm text-muted-foreground">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {course.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <BookOpen className="h-4 w-4" />
                                {course.modules} modules
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 text-yellow-500 fill-current" />
                              <span>{course.rating}</span>
                            </div>
                          </div>

                          {course.progress > 0 && (
                            <div className="space-y-2">
                              <div className="flex justify-between text-sm">
                                <span>Progress</span>
                                <span>{course.progress}%</span>
                              </div>
                              <Progress value={course.progress} className="h-2" />
                            </div>
                          )}

                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              {course.students.toLocaleString()} students
                            </span>
                            <span className="text-muted-foreground">
                              by {course.instructor}
                            </span>
                          </div>

                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1 gap-2">
                              <Play className="h-4 w-4" />
                              {course.progress > 0 ? "Continue" : "Start Course"}
                            </Button>
                            <Button variant="outline" size="sm">
                              Preview
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="certifications" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-6">Professional Certifications</h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="glass-card hover:shadow-glow transition-all duration-300 h-full">
                        <CardHeader>
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gradient-hero">
                              <Award className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{cert.title}</CardTitle>
                              <p className="text-sm text-muted-foreground">{cert.duration}</p>
                            </div>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">{cert.description}</p>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <h4 className="font-medium">Progress</h4>
                            <div className="flex justify-between text-sm text-muted-foreground">
                              <span>Completed {cert.completedCourses} of {cert.totalCourses} courses</span>
                              <span>{Math.round((cert.completedCourses / cert.totalCourses) * 100)}%</span>
                            </div>
                            <Progress value={(cert.completedCourses / cert.totalCourses) * 100} className="h-2" />
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-medium">Requirements</h4>
                            <ul className="space-y-1">
                              {cert.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <CheckCircle className={`h-4 w-4 ${idx < cert.completedCourses ? 'text-green-600' : 'text-gray-400'}`} />
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-medium">Benefits</h4>
                            <div className="flex flex-wrap gap-2">
                              {cert.benefits.map((benefit, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {benefit}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="flex items-center justify-between pt-2">
                            <span className="text-sm text-muted-foreground">
                              {cert.enrolled} enrolled
                            </span>
                            <Button size="sm">
                              {cert.completedCourses === cert.totalCourses ? "Get Certificate" : "Continue Program"}
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="learning-paths" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-6">Guided Learning Paths</h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {learningPaths.map((path, index) => (
                    <motion.div
                      key={path.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="glass-card hover:shadow-glow transition-all duration-300 h-full">
                        <CardHeader>
                          <CardTitle className="text-lg">{path.title}</CardTitle>
                          <p className="text-sm text-muted-foreground">{path.description}</p>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Courses:</span>
                              <div className="font-medium">{path.courses}</div>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Duration:</span>
                              <div className="font-medium">{path.duration}</div>
                            </div>
                            <div className="col-span-2">
                              <span className="text-muted-foreground">Difficulty:</span>
                              <div className="font-medium">{path.difficulty}</div>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Completion Rate</span>
                              <span>{path.completionRate}%</span>
                            </div>
                            <Progress value={path.completionRate} className="h-2" />
                          </div>

                          <Button className="w-full">Start Learning Path</Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default CarbonTracker;