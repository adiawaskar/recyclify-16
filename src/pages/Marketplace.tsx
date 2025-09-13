import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Search, 
  Filter, 
  MapPin, 
  Package, 
  Plus,
  Recycle,
  Factory,
  Truck
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const listings = [
    {
      id: 1,
      title: "Industrial Steel Scrap",
      category: "Metals",
      quantity: "15 tons",
      location: "Detroit, MI",
      distance: "12 km",
      price: "$2,400/ton",
      company: "AutoTech Manufacturing",
      description: "High-grade steel scrap from automotive production. Perfect for recycling into new products.",
      sustainability: { co2Save: "2.5 tons", waterSave: "1,200L" },
      urgent: true
    },
    {
      id: 2,
      title: "Organic Waste Compost",
      category: "Organic",
      quantity: "8 tons",
      location: "Portland, OR",
      distance: "25 km",
      price: "$180/ton",
      company: "GreenEats Restaurant Chain",
      description: "Fresh organic waste suitable for industrial composting and biogas production.",
      sustainability: { co2Save: "1.8 tons", waterSave: "800L" },
      urgent: false
    },
    {
      id: 3,
      title: "Plastic Packaging Materials",
      category: "Plastics",
      quantity: "3.2 tons",
      location: "Austin, TX",
      distance: "45 km",
      price: "$320/ton",
      company: "PackTech Solutions",
      description: "Clean HDPE plastic packaging waste. Ideal for recycling into new packaging products.",
      sustainability: { co2Save: "4.1 tons", waterSave: "2,100L" },
      urgent: false
    },
    {
      id: 4,
      title: "Paper & Cardboard Surplus",
      category: "Paper",
      quantity: "22 tons",
      location: "Seattle, WA",
      distance: "8 km",
      price: "$150/ton",
      company: "PrintCorp Industries",
      description: "Mixed paper and cardboard waste from printing operations. Ready for pulping.",
      sustainability: { co2Save: "3.3 tons", waterSave: "15,000L" },
      urgent: true
    },
    {
      id: 5,
      title: "Electronic Components",
      category: "Electronics",
      quantity: "1.1 tons",
      location: "San Jose, CA",
      distance: "35 km",
      price: "$1,800/ton",
      company: "TechFlow Manufacturing",
      description: "Surplus electronic components and rare earth materials for specialized recycling.",
      sustainability: { co2Save: "0.8 tons", waterSave: "400L" },
      urgent: false
    },
    {
      id: 6,
      title: "Textile Fabric Waste",
      category: "Textiles",
      quantity: "4.5 tons",
      location: "Los Angeles, CA",
      distance: "28 km",
      price: "$120/ton",
      company: "Fashion Forward Inc.",
      description: "Cotton and polyester fabric waste from garment production. Suitable for upcycling.",
      sustainability: { co2Save: "2.2 tons", waterSave: "8,500L" },
      urgent: false
    }
  ];

  const categories = ["all", "Metals", "Organic", "Plastics", "Paper", "Electronics", "Textiles"];

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         listing.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || listing.category === selectedCategory;
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
          <h1 className="text-3xl font-bold mb-2">Circular Exchange Marketplace</h1>
          <p className="text-muted-foreground">Discover materials, surplus inventory, and byproducts from other businesses</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search materials, companies, or locations..."
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
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            List Material
          </Button>
        </div>

        {/* Marketplace Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing, index) => (
            <motion.div
              key={listing.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="glass-card hover:shadow-glow transition-all duration-300 h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {listing.title}
                    </CardTitle>
                    {listing.urgent && (
                      <Badge variant="destructive" className="text-xs">
                        Urgent
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Package className="h-4 w-4" />
                      {listing.quantity}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {listing.distance}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {listing.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <Badge variant="secondary">{listing.category}</Badge>
                    <span className="font-semibold text-primary">{listing.price}</span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium">Sustainability Impact:</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="flex items-center gap-1 text-green-600">
                        <Recycle className="h-3 w-3" />
                        {listing.sustainability.co2Save} CO₂
                      </div>
                      <div className="flex items-center gap-1 text-blue-600">
                        <Truck className="h-3 w-3" />
                        {listing.sustainability.waterSave} water
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t">
                    <div className="flex items-center gap-2 mb-3">
                      <Factory className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">{listing.company}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        Request Quote
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Contact
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredListings.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">No materials found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms or filters</p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Marketplace;