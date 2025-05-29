import React, { useState } from "react";
import { Play, Image as ImageIcon, Calendar, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const galleryItems = [
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "performance",
      title: "Annual Showcase 2023",
      description: 'Contemporary piece "Reflections"',
    },
    {
      type: "video",
      src: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "training",
      title: "Hip Hop Masterclass",
      description: "Behind the scenes footage",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "training",
      title: "Ballet Technique Class",
      description: "Students perfecting their form",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "performance",
      title: "Regional Competition",
      description: "First place jazz routine",
    },
    {
      type: "video",
      src: "https://images.unsplash.com/photo-1594736797933-d0401ba3cd01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "performance",
      title: "Latin Night Gala",
      description: "Passionate salsa performance",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "training",
      title: "Lyrical Workshop",
      description: "Emotional expression through movement",
    },
    {
      type: "image",
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "performance",
      title: "Contemporary Showcase",
      description: "Student choreography night",
    },
    {
      type: "video",
      src: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      category: "training",
      title: "Intensive Workshop",
      description: "Summer dance intensive highlights",
    },
  ];

  const filters = [
    { id: "all", label: "All", icon: ImageIcon },
    { id: "performance", label: "Performances", icon: Award },
    { id: "training", label: "Training", icon: Calendar },
  ];

  const filteredItems =
    activeFilter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-spartan text-4xl md:text-5xl font-bold text-dance-navy mb-6">
            Our Dance
            <span className="block text-gradient">Gallery</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Witness the artistry, passion, and dedication that defines our
            academy. From breathtaking performances to intensive training
            sessions, every moment captures the essence of dance.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-dance-gold text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <filter.icon className="w-4 h-4 mr-2" />
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {/* Play Button for Videos */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-xs">
                      <Play className="w-6 h-6 text-dance-navy ml-1" />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex items-center mb-2">
                    <Badge
                      variant={
                        item.category === "performance"
                          ? "default"
                          : "secondary"
                      }
                      className="mb-2"
                    >
                      {item.category === "performance" ? (
                        <Award className="w-3 h-3 mr-1" />
                      ) : (
                        <Calendar className="w-3 h-3 mr-1" />
                      )}
                      {item.category}
                    </Badge>
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm">{item.description}</p>
                </div>
              </div>

              {/* Video Badge */}
              {item.type === "video" && (
                <div className="absolute top-3 right-3">
                  <Badge className="bg-black/70 text-white">
                    <Play className="w-3 h-3 mr-1" />
                    Video
                  </Badge>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-3 bg-dance-navy text-white rounded-lg hover:bg-dance-deep-purple transition-colors duration-300 font-semibold">
            View Full Gallery
            <ImageIcon className="w-5 h-5 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
