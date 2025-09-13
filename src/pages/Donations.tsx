import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Leaf, 
  Users, 
  Target, 
  TrendingUp, 
  Globe,
  Trees,
  Droplets,
  Recycle,
  DollarSign
} from "lucide-react";

const Donations = () => {
  const campaigns = [
    {
      id: 1,
      title: "Ocean Cleanup Initiative",
      description: "Help remove plastic waste from our oceans and protect marine life for future generations.",
      goal: 50000,
      raised: 32450,
      donors: 1234,
      daysLeft: 15,
      category: "Ocean Conservation",
      impact: "Remove 10 tons of plastic waste",
      icon: Droplets
    },
    {
      id: 2,
      title: "Reforestation Project",
      description: "Plant trees in deforested areas to combat climate change and restore natural habitats.",
      goal: 25000,
      raised: 18750,
      donors: 856,
      daysLeft: 22,
      category: "Climate Action",
      impact: "Plant 5,000 trees",
      icon: Trees
    },
    {
      id: 3,
      title: "Circular Economy Education",
      description: "Fund educational programs teaching sustainable practices to communities worldwide.",
      goal: 15000,
      raised: 12300,
      donors: 542,
      daysLeft: 8,
      category: "Education",
      impact: "Educate 1,000 people",
      icon: Users
    },
    {
      id: 4,
      title: "Zero Waste Communities",
      description: "Support communities transitioning to zero-waste lifestyles through infrastructure and training.",
      goal: 40000,
      raised: 28900,
      donors: 723,
      daysLeft: 30,
      category: "Waste Reduction",
      impact: "Transform 5 communities",
      icon: Recycle
    }
  ];

  const impactStats = [
    { label: "Trees Planted", value: "125,430", icon: Trees, color: "text-green-600" },
    { label: "Plastic Removed (kg)", value: "45,670", icon: Recycle, color: "text-blue-600" },
    { label: "People Educated", value: "15,890", icon: Users, color: "text-purple-600" },
    { label: "Communities Helped", value: "89", icon: Globe, color: "text-orange-600" }
  ];

  const donationOptions = [10, 25, 50, 100, 250, 500];

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
            Make a Difference Today
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Support environmental initiatives and help create a sustainable future for our planet. Every donation makes an impact.
          </p>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <stat.icon className={`h-8 w-8 mx-auto mb-2 ${stat.color}`} />
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Campaign */}
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Badge variant="secondary">Featured Campaign</Badge>
              <Badge variant="outline">Urgent</Badge>
            </div>
            <CardTitle className="text-2xl">Emergency Climate Response Fund</CardTitle>
            <CardDescription>
              Support immediate action against climate change impacts affecting vulnerable communities worldwide.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">$89,450</div>
                <div className="text-sm text-muted-foreground">Raised of $100,000</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2,156</div>
                <div className="text-sm text-muted-foreground">Supporters</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Days Left</div>
              </div>
            </div>
            <Progress value={89.45} className="h-3" />
            <div className="flex flex-wrap gap-2 justify-center">
              {donationOptions.map((amount) => (
                <Button key={amount} variant="outline" size="sm">
                  ${amount}
                </Button>
              ))}
            </div>
            <Button className="w-full" size="lg">
              <Heart className="h-5 w-5 mr-2" />
              Donate Now
            </Button>
          </CardContent>
        </Card>

        {/* Active Campaigns */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Active Campaigns</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {campaigns.map((campaign) => {
              const percentage = (campaign.raised / campaign.goal) * 100;
              const Icon = campaign.icon;
              
              return (
                <Card key={campaign.id} className="group hover:shadow-lg transition-all duration-200">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <Badge variant="outline">{campaign.category}</Badge>
                      <div className="text-sm text-muted-foreground">
                        {campaign.daysLeft} days left
                      </div>
                    </div>
                    <CardTitle className="flex items-center gap-2 group-hover:text-primary transition-colors">
                      <Icon className="h-5 w-5" />
                      {campaign.title}
                    </CardTitle>
                    <CardDescription>{campaign.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="flex items-center gap-1">
                          <DollarSign className="h-4 w-4" />
                          ${campaign.raised.toLocaleString()} raised
                        </span>
                        <span>${campaign.goal.toLocaleString()} goal</span>
                      </div>
                      <Progress value={percentage} className="h-2" />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{campaign.donors} donors</span>
                        <span>{percentage.toFixed(1)}% funded</span>
                      </div>
                    </div>
                    
                    <div className="p-3 bg-muted/50 rounded-lg">
                      <div className="flex items-center gap-2 text-sm font-medium">
                        <Target className="h-4 w-4 text-primary" />
                        Expected Impact
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {campaign.impact}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button className="flex-1" variant="outline">
                        Learn More
                      </Button>
                      <Button className="flex-1">
                        Donate
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* How It Works */}
        <Card>
          <CardHeader>
            <CardTitle>How Your Donations Work</CardTitle>
            <CardDescription>
              We ensure every dollar makes the maximum impact on environmental conservation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Choose a Cause",
                  description: "Select from our verified environmental projects and campaigns",
                  icon: Heart
                },
                {
                  step: "2", 
                  title: "Make a Donation",
                  description: "Contribute any amount through our secure payment system",
                  icon: DollarSign
                },
                {
                  step: "3",
                  title: "Track Impact",
                  description: "Receive updates on how your donation is making a difference",
                  icon: TrendingUp
                }
              ].map((item, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-medium text-primary">Step {item.step}</div>
                    <div className="font-semibold">{item.title}</div>
                    <div className="text-sm text-muted-foreground">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Transparency */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Leaf className="h-5 w-5" />
              Our Commitment to Transparency
            </CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-semibold">Financial Transparency</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 95% of donations go directly to projects</li>
                <li>• 5% covers platform maintenance and security</li>
                <li>• Monthly financial reports published</li>
                <li>• Third-party audits conducted annually</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold">Impact Tracking</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Real-time project updates</li>
                <li>• Photo and video documentation</li>
                <li>• Measurable environmental metrics</li>
                <li>• Direct communication with project teams</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Donations;