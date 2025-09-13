import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Play, 
  Clock, 
  Trophy, 
  Users, 
  Star,
  ChevronRight,
  Download
} from "lucide-react";

const Training = () => {
  const courses = [
    {
      id: 1,
      title: "Circular Economy Fundamentals",
      description: "Learn the basics of circular economy principles and how to implement them in your business.",
      duration: "2 hours",
      level: "Beginner",
      rating: 4.8,
      enrolled: 1234,
      progress: 0,
      category: "Fundamentals"
    },
    {
      id: 2,
      title: "Waste Reduction Strategies",
      description: "Advanced techniques for minimizing waste in manufacturing and service industries.",
      duration: "3 hours",
      level: "Intermediate",
      rating: 4.9,
      enrolled: 856,
      progress: 65,
      category: "Operations"
    },
    {
      id: 3,
      title: "Sustainable Supply Chain Management",
      description: "Build resilient and sustainable supply chains that benefit both business and environment.",
      duration: "4 hours",
      level: "Advanced",
      rating: 4.7,
      enrolled: 542,
      progress: 30,
      category: "Management"
    },
    {
      id: 4,
      title: "Carbon Footprint Measurement",
      description: "Master the tools and techniques for accurate carbon footprint assessment.",
      duration: "2.5 hours",
      level: "Intermediate",
      rating: 4.6,
      enrolled: 723,
      progress: 0,
      category: "Analytics"
    }
  ];

  const achievements = [
    { name: "Quick Learner", icon: Trophy, description: "Complete first course" },
    { name: "Dedicated Student", icon: BookOpen, description: "Study for 10 hours" },
    { name: "Community Helper", icon: Users, description: "Help 5 other learners" },
    { name: "Expert", icon: Star, description: "Complete advanced course" }
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
            Sustainability Training Hub
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Master sustainable practices with our comprehensive training programs designed for professionals and organizations.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: "Active Learners", value: "12,453", icon: Users },
            { label: "Courses Available", value: "48", icon: BookOpen },
            { label: "Hours of Content", value: "156", icon: Clock },
            { label: "Completion Rate", value: "89%", icon: Trophy }
          ].map((stat, index) => (
            <Card key={index} className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Course Categories */}
        <div className="flex flex-wrap gap-2 justify-center">
          {["All", "Fundamentals", "Operations", "Management", "Analytics"].map((category) => (
            <Badge key={category} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              {category}
            </Badge>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="group hover:shadow-lg transition-all duration-200">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <Badge variant="outline">{course.category}</Badge>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-sm line-clamp-2">
                  {course.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {course.enrolled}
                  </div>
                </div>
                
                <Badge variant={course.level === 'Beginner' ? 'default' : course.level === 'Intermediate' ? 'secondary' : 'destructive'}>
                  {course.level}
                </Badge>
                
                {course.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                )}
                
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {course.progress > 0 ? (
                    <>Continue Learning <ChevronRight className="h-4 w-4 ml-1" /></>
                  ) : (
                    <>Start Course <Play className="h-4 w-4 ml-1" /></>
                  )}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Trophy className="h-5 w-5" />
              Your Achievements
            </CardTitle>
            <CardDescription>
              Track your learning milestones and unlock rewards
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center space-y-2 p-4 rounded-lg border-2 border-dashed border-muted">
                  <achievement.icon className="h-8 w-8 mx-auto text-muted-foreground" />
                  <div className="font-medium">{achievement.name}</div>
                  <div className="text-sm text-muted-foreground">{achievement.description}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Resources */}
        <Card>
          <CardHeader>
            <CardTitle>Additional Resources</CardTitle>
            <CardDescription>
              Supplementary materials to enhance your learning experience
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { name: "Sustainability Best Practices Guide", type: "PDF", size: "2.1 MB" },
              { name: "Carbon Calculation Templates", type: "Excel", size: "1.8 MB" },
              { name: "Industry Case Studies", type: "PDF", size: "4.3 MB" },
              { name: "Regulatory Compliance Checklist", type: "PDF", size: "856 KB" }
            ].map((resource, index) => (
              <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium">{resource.name}</div>
                    <div className="text-sm text-muted-foreground">{resource.type} • {resource.size}</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Training;