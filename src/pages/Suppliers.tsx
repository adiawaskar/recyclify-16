import { useState } from "react";
import { motion } from "framer-motion";
import { Building2, Leaf, Award, MapPin, Search, Star, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Suppliers = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const suppliers = [
    {
      id: 1,
      name: "EcoTech Manufacturing",
      category: "Electronics",
      location: "San Jose, CA",
      rating: 4.9,
      certifications: ["Carbon Neutral", "B-Corp", "ISO 14001"],
      specialties: ["Recycled components", "Renewable energy", "Zero waste"],
      sustainability: { co2Reduction: "85%", wasteReduction: "92%", renewableEnergy: "100%" },
      description: "Leading manufacturer of sustainable electronics using 90% recycled materials.",
      verified: true
    },
    {
      id: 2,
      name: "Green Packaging Solutions",
      category: "Packaging",
      location: "Portland, OR",
      rating: 4.8,
      certifications: ["FSC Certified", "Cradle to Cradle", "LEED Gold"],
      specialties: ["Biodegradable materials", "Circular design", "Compostable packaging"],
      sustainability: { co2Reduction: "78%", wasteReduction: "88%", renewableEnergy: "85%" },
      description: "Innovative packaging solutions from agricultural waste and recycled fibers.",
      verified: true
    },
    {
      id: 3,
      name: "Sustainable Textiles Co",
      category: "Textiles",
      location: "Los Angeles, CA",
      rating: 4.7,
      certifications: ["GOTS", "OEKO-TEX", "Fair Trade"],
      specialties: ["Organic cotton", "Recycled polyester", "Natural dyes"],
      sustainability: { co2Reduction: "72%", wasteReduction: "81%", renewableEnergy: "75%" },
      description: "Ethical textile production with focus on worker welfare and environmental impact.",
      verified: true
    },
    {
      id: 4,
      name: "Renewable Materials Inc",
      category: "Construction",
      location: "Seattle, WA",
      rating: 4.6,
      certifications: ["LEED Platinum", "Living Building", "Net Zero"],
      specialties: ["Bamboo products", "Recycled steel", "Low-carbon concrete"],
      sustainability: { co2Reduction: "68%", wasteReduction: "74%", renewableEnergy: "90%" },
      description: "Sustainable building materials from rapidly renewable resources.",
      verified: false
    },
    {
      id: 5,
      name: "Clean Energy Components",
      category: "Energy",
      location: "Austin, TX",
      rating: 4.9,
      certifications: ["ENERGY STAR", "Green-e", "Carbon Trust"],
      specialties: ["Solar panels", "Wind turbines", "Energy storage"],
      sustainability: { co2Reduction: "95%", wasteReduction: "89%", renewableEnergy: "100%" },
      description: "Cutting-edge renewable energy technology with lifecycle sustainability focus.",
      verified: true
    }
  ];

  const categories = ["all", "Electronics", "Packaging", "Textiles", "Construction", "Energy"];

  const filteredSuppliers = suppliers.filter(supplier => {
    const matchesSearch = supplier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         supplier.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || supplier.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Sustainable Supplier Network</h1>
          <p className="text-muted-foreground">Connect with verified eco-friendly suppliers and build sustainable supply chains</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search suppliers, materials, or certifications..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Advanced Filters
          </Button>
        </div>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSuppliers.map((supplier, index) => (
            <motion.div
              key={supplier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass-card hover:shadow-glow transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg">{supplier.name}</CardTitle>
                      {supplier.verified && (
                        <Badge variant="default" className="text-xs bg-green-600 hover:bg-green-700">
                          <Award className="h-3 w-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{supplier.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Building2 className="h-4 w-4" />
                      {supplier.category}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {supplier.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {supplier.description}
                  </p>

                  <div>
                    <h4 className="font-medium mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {supplier.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Certifications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {supplier.certifications.map((cert, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          <Leaf className="h-3 w-3 mr-1" />
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 p-3 rounded-lg bg-muted/50">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{supplier.sustainability.co2Reduction}</div>
                      <div className="text-xs text-muted-foreground">CO₂ Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">{supplier.sustainability.wasteReduction}</div>
                      <div className="text-xs text-muted-foreground">Waste Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-yellow-600">{supplier.sustainability.renewableEnergy}</div>
                      <div className="text-xs text-muted-foreground">Renewable Energy</div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      Connect
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      View Profile
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Suppliers;