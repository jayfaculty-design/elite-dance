import React from "react";
import { ShoppingBag, Star, Heart } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Elite Dance Academy T-Shirt",
      price: 29.99,
      originalPrice: 39.99,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      reviews: 124,
      bestseller: true,
      colors: ["Black", "White", "Navy", "Gold"],
    },
    {
      id: 2,
      name: "Professional Dance Bag",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.9,
      reviews: 89,
      colors: ["Black", "Purple", "Pink"],
    },
    {
      id: 3,
      name: "Academy Logo Hoodie",
      price: 54.99,
      originalPrice: 69.99,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.7,
      reviews: 156,
      colors: ["Gray", "Navy", "Black"],
    },
    {
      id: 4,
      name: "Dance Water Bottle",
      price: 19.99,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.6,
      reviews: 203,
      colors: ["Clear", "Pink", "Blue", "Black"],
    },
    {
      id: 5,
      name: "Elite Training Leggings",
      price: 44.99,
      image:
        "https://images.unsplash.com/photo-1506629905607-e9e0892c98b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.8,
      reviews: 91,
      colors: ["Black", "Navy", "Charcoal"],
    },
    {
      id: 6,
      name: "Academy Dance Towel",
      price: 14.99,
      image:
        "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      rating: 4.5,
      reviews: 67,
      colors: ["White", "Navy", "Gold"],
    },
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating)
                ? "text-yellow-400 fill-current"
                : "text-gray-300"
            }`}
          />
        ))}
        <span className="ml-1 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  return (
    <section id="shop" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-spartan text-4xl md:text-5xl font-bold text-dance-navy mb-6">
            Academy
            <span className="block text-gradient">Shop</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Show your Elite Dance Academy pride with our premium merchandise
            collection. From comfortable practice wear to stylish accessories,
            find everything you need to look and feel like a dancer.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 space-y-2">
                  {product.bestseller && (
                    <Badge className="bg-dance-gold text-white">
                      Bestseller
                    </Badge>
                  )}
                  {product.originalPrice && (
                    <Badge variant="destructive">Sale</Badge>
                  )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white">
                  <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
                </button>

                {/* Quick Shop Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-white text-dance-navy hover:bg-gray-100">
                    Quick Shop
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-2">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg text-dance-navy group-hover:text-dance-gold transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center justify-between">
                    {renderStars(product.rating)}
                    <span className="text-sm text-gray-500">
                      {product.reviews} reviews
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="text-xl font-bold text-dance-navy">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Color Options */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    Available Colors:
                  </p>
                  <div className="flex space-x-2">
                    {product.colors.slice(0, 4).map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 rounded-full border-2 border-gray-300 bg-gray-200 flex items-center justify-center"
                      >
                        <span className="text-xs text-gray-600">
                          {color.charAt(0)}
                        </span>
                      </div>
                    ))}
                    {product.colors.length > 4 && (
                      <div className="text-sm text-gray-500">
                        +{product.colors.length - 4} more
                      </div>
                    )}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full bg-dance-navy hover:bg-dance-deep-purple text-white">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Free shipping on orders over $75. Student discounts available.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-2  border-dance-gold text-dance-gold hover:bg-dance-gold hover:text-white"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
