import { useState } from "react";
import { motion } from "framer-motion";
import { Users, MessageCircle, Calendar, Star, Heart, MapPin, Package, Search, Plus, Send, Award, ThumbsUp, BookOpen, Play, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

const Community = () => {
  const [activeTab, setActiveTab] = useState("forum");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("all");

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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Community Hub</h1>
          <p className="text-muted-foreground">Connect, collaborate, and contribute to sustainable business practices</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="forum">Community Forum</TabsTrigger>
            <TabsTrigger value="events">Events & Workshops</TabsTrigger>
            <TabsTrigger value="donations">Impact Partners</TabsTrigger>
            <TabsTrigger value="training">Training & Learning</TabsTrigger>
          </TabsList>

          <TabsContent value="forum" className="space-y-6">
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
                          <span>{event.attendees} registered</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Learn More
                          </Button>
                          <Button size="sm">
                            Register
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="donations" className="space-y-6">
            {/* Donation Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {donationStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="glass-card text-center">
                    <CardContent className="pt-6">
                      <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.unit}</div>
                      <div className="text-sm font-medium mt-2">{stat.label}</div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Search and Filters */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search NGOs, locations, or causes..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {types.map(type => (
                    <SelectItem key={type} value={type}>
                      {type === "all" ? "All Categories" : type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Schedule Donation
              </Button>
            </div>

            {/* NGO Partners Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredNGOs.map((ngo, index) => (
                <motion.div
                  key={ngo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="glass-card hover:shadow-glow transition-all duration-300 h-full">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-lg">{ngo.name}</CardTitle>
                        <Badge 
                          variant={ngo.urgency === "high" ? "destructive" : ngo.urgency === "medium" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {ngo.urgency} priority
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {ngo.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {ngo.beneficiaries}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{ngo.type}</Badge>
                        <Heart className="h-4 w-4 text-red-500" />
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">Current Needs:</h4>
                        <div className="flex flex-wrap gap-2">
                          {ngo.needs.map((need, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {need}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-muted/50">
                        <div className="flex items-center gap-2 mb-1">
                          <Package className="h-4 w-4 text-green-600" />
                          <span className="text-sm font-medium">Recent Impact</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{ngo.impact}</p>
                      </div>

                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          Donate Now
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="training" className="space-y-6">
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Sustainability Training Center</h2>
              <p className="text-muted-foreground">Develop your sustainability expertise with expert-led courses and certifications</p>
            </div>

            {/* Learning Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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

            {/* Training Content Tabs */}
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

export default Community;