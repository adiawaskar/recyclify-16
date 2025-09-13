import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, 
  User, 
  Settings, 
  Bell,
  Shield,
  Users,
  MapPin,
  Phone,
  Mail,
  Globe,
  Edit,
  Save,
  X
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [notifications, setNotifications] = useState({
    wasteAlerts: true,
    marketplaceMatches: true,
    sustainabilityGoals: false,
    weeklyReports: true,
    partnerships: true,
  });

  const companyInfo = {
    name: "EcoTech Manufacturing Inc.",
    industry: "Manufacturing",
    size: "500-1000 employees",
    location: "Seattle, WA",
    website: "www.ecotech-mfg.com",
    phone: "+1 (555) 123-4567",
    email: "contact@ecotech-mfg.com",
    sustainability: {
      score: 87,
      certification: "B-Corp Certified",
      goals: ["Net Zero by 2030", "50% Waste Reduction", "Circular Supply Chain"]
    }
  };

  const teamMembers = [
    { name: "Sarah Johnson", role: "Sustainability Director", email: "sarah.j@ecotech-mfg.com", status: "active" },
    { name: "Mike Chen", role: "Supply Chain Manager", email: "mike.c@ecotech-mfg.com", status: "active" },
    { name: "Elena Rodriguez", role: "Operations Lead", email: "elena.r@ecotech-mfg.com", status: "pending" },
    { name: "David Park", role: "Environmental Analyst", email: "david.p@ecotech-mfg.com", status: "active" },
  ];

  const handleNotificationChange = (key: string, value: boolean) => {
    setNotifications(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Organization Profile</h1>
          <p className="text-muted-foreground">Manage your company information, team, and preferences</p>
        </div>

        <Tabs defaultValue="company" className="space-y-6">
          <TabsList className="grid w-full lg:w-auto grid-cols-4">
            <TabsTrigger value="company" className="gap-2">
              <Building2 className="h-4 w-4" />
              Company
            </TabsTrigger>
            <TabsTrigger value="team" className="gap-2">
              <Users className="h-4 w-4" />
              Team
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-2">
              <Shield className="h-4 w-4" />
              Security
            </TabsTrigger>
          </TabsList>

          {/* Company Information */}
          <TabsContent value="company">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="lg:col-span-2"
              >
                <Card className="glass-card">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Company Details</CardTitle>
                    {!isEditing ? (
                      <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    ) : (
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={() => setIsEditing(false)}>
                          <X className="h-4 w-4 mr-2" />
                          Cancel
                        </Button>
                        <Button size="sm" onClick={() => setIsEditing(false)}>
                          <Save className="h-4 w-4 mr-2" />
                          Save
                        </Button>
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-name">Company Name</Label>
                        {isEditing ? (
                          <Input id="company-name" defaultValue={companyInfo.name} />
                        ) : (
                          <p className="text-sm">{companyInfo.name}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry</Label>
                        {isEditing ? (
                          <Input id="industry" defaultValue={companyInfo.industry} />
                        ) : (
                          <p className="text-sm">{companyInfo.industry}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company-size">Company Size</Label>
                        {isEditing ? (
                          <Input id="company-size" defaultValue={companyInfo.size} />
                        ) : (
                          <p className="text-sm">{companyInfo.size}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        {isEditing ? (
                          <Input id="location" defaultValue={companyInfo.location} />
                        ) : (
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-muted-foreground" />
                            {companyInfo.location}
                          </div>
                        )}
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h4 className="font-medium">Contact Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="website">Website</Label>
                          {isEditing ? (
                            <Input id="website" defaultValue={companyInfo.website} />
                          ) : (
                            <div className="flex items-center gap-2 text-sm">
                              <Globe className="h-4 w-4 text-muted-foreground" />
                              {companyInfo.website}
                            </div>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          {isEditing ? (
                            <Input id="phone" defaultValue={companyInfo.phone} />
                          ) : (
                            <div className="flex items-center gap-2 text-sm">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                              {companyInfo.phone}
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        {isEditing ? (
                          <Input id="email" defaultValue={companyInfo.email} />
                        ) : (
                          <div className="flex items-center gap-2 text-sm">
                            <Mail className="h-4 w-4 text-muted-foreground" />
                            {companyInfo.email}
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Sustainability Profile</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">
                        {companyInfo.sustainability.score}/100
                      </div>
                      <p className="text-sm text-muted-foreground">Sustainability Score</p>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">Certification</span>
                        <Badge variant="secondary">{companyInfo.sustainability.certification}</Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <span className="text-sm font-medium">Goals</span>
                        <div className="space-y-1">
                          {companyInfo.sustainability.goals.map((goal, index) => (
                            <div key={index} className="text-xs text-muted-foreground">
                              • {goal}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </TabsContent>

          {/* Team Management */}
          <TabsContent value="team">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="glass-card">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Team Members</CardTitle>
                  <Button>
                    <User className="h-4 w-4 mr-2" />
                    Invite Member
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {teamMembers.map((member, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-full bg-primary/10">
                            <User className="h-4 w-4 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.role}</p>
                            <p className="text-xs text-muted-foreground">{member.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={member.status === 'active' ? 'default' : 'secondary'}>
                            {member.status}
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Notifications */}
          <TabsContent value="notifications">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Waste Reduction Alerts</p>
                        <p className="text-sm text-muted-foreground">
                          Get notified when surplus inventory is detected
                        </p>
                      </div>
                      <Switch
                        checked={notifications.wasteAlerts}
                        onCheckedChange={(value) => handleNotificationChange('wasteAlerts', value)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Marketplace Matches</p>
                        <p className="text-sm text-muted-foreground">
                          Receive alerts when potential buyers are found
                        </p>
                      </div>
                      <Switch
                        checked={notifications.marketplaceMatches}
                        onCheckedChange={(value) => handleNotificationChange('marketplaceMatches', value)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Sustainability Goals</p>
                        <p className="text-sm text-muted-foreground">
                          Updates on progress towards sustainability targets
                        </p>
                      </div>
                      <Switch
                        checked={notifications.sustainabilityGoals}
                        onCheckedChange={(value) => handleNotificationChange('sustainabilityGoals', value)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Weekly Reports</p>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive weekly sustainability reports
                        </p>
                      </div>
                      <Switch
                        checked={notifications.weeklyReports}
                        onCheckedChange={(value) => handleNotificationChange('weeklyReports', value)}
                      />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Partnership Opportunities</p>
                        <p className="text-sm text-muted-foreground">
                          New circular economy partnership suggestions
                        </p>
                      </div>
                      <Switch
                        checked={notifications.partnerships}
                        onCheckedChange={(value) => handleNotificationChange('partnerships', value)}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>

          {/* Security */}
          <TabsContent value="security">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Security Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Two-Factor Authentication</p>
                        <p className="text-sm text-muted-foreground">
                          Add an extra layer of security to your account
                        </p>
                      </div>
                      <Button variant="outline">Configure</Button>
                    </div>

                    <Separator />

                    <div className="space-y-3">
                      <p className="font-medium">Data & Privacy</p>
                      <div className="space-y-2">
                        <Button variant="outline" className="w-full justify-start">
                          Download My Data
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          Privacy Settings
                        </Button>
                        <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                          Delete Account
                        </Button>
                      </div>
                    </div>
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

export default Profile;