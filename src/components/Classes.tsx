
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Classes = () => {
  const classes = [
    {
      name: "Contemporary Dance",
      instructor: "Sarah Mitchell",
      level: "All Levels",
      duration: "90 min",
      students: "12-15",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      schedule: "Mon, Wed, Fri - 6:00 PM",
      description:
        "Expressive movement combining classical ballet with modern dance techniques.",
      featured: true,
    },
    {
      name: "Hip Hop Fusion",
      instructor: "Marcus Johnson",
      level: "Beginner-Advanced",
      duration: "75 min",
      students: "15-20",
      image:
        "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      schedule: "Tue, Thu - 7:30 PM",
      description:
        "Urban street dance styles with contemporary elements and creative choreography.",
    },
    {
      name: "Classical Ballet",
      instructor: "Elena Kowalski",
      level: "Intermediate",
      duration: "90 min",
      students: "8-12",
      image:
        "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      schedule: "Mon, Wed, Fri - 4:00 PM",
      description:
        "Traditional ballet technique focusing on precision, grace, and classical repertoire.",
    },
    {
      name: "Jazz & Musical Theatre",
      instructor: "Tony Rivera",
      level: "All Levels",
      duration: "60 min",
      students: "10-16",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      schedule: "Sat - 2:00 PM",
      description:
        "Energetic jazz techniques with Broadway-style choreography and performance skills.",
    },
    {
      name: "Latin Dance",
      instructor: "Isabella Rodriguez",
      level: "Beginner-Intermediate",
      duration: "75 min",
      students: "12-18",
      image:
        "https://images.unsplash.com/photo-1594736797933-d0401ba3cd01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      schedule: "Tue, Thu - 6:00 PM",
      description:
        "Passionate Latin rhythms including Salsa, Bachata, and Cha-cha-cha.",
    },
    {
      name: "Lyrical Dance",
      instructor: "Grace Chen",
      level: "Intermediate-Advanced",
      duration: "75 min",
      students: "8-14",
      image:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      schedule: "Wed, Fri - 5:00 PM",
      description:
        "Emotional storytelling through movement, blending ballet, jazz, and contemporary.",
    },
  ];

  return (
    <section id="classes" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-spartan text-4xl md:text-5xl font-bold text-dance-navy mb-6">
            Our Dance
            <span className="block text-gradient">Classes</span>
          </h2>
          <p className="text-lg text-gray-600  max-w-3xl mx-auto">
            Discover your passion with our comprehensive range of dance classes.
            From classical ballet to contemporary hip-hop, our expert
            instructors guide you on your artistic journey.
          </p>
        </div>

        {/* Classes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((classItem, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 overflow-hidden ${
                classItem.featured ? "ring-2 ring-dance-gold" : ""
              }`}
            >
              {/* Class Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={classItem.image}
                  alt={classItem.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {classItem.featured && (
                  <Badge className="absolute top-3 left-3 bg-dance-gold text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </Badge>
                )}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-playfair text-dance-navy group-hover:text-dance-gold transition-colors">
                    {classItem.name}
                  </CardTitle>
                  <Badge variant="outline" className="text-xs">
                    {classItem.level}
                  </Badge>
                </div>
                <p className="text-sm font-medium text-dance-gold mb-2">
                  with {classItem.instructor}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {classItem.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Class Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-dance-gold" />
                    {classItem.duration} • {classItem.schedule}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-dance-gold" />
                    {classItem.students} students
                  </div>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-dance-navy hover:bg-dance-deep-purple text-white group/btn">
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Can't find the perfect class? We offer private lessons and custom
            programs.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-dance-gold text-dance-gold hover:bg-dance-gold hover:text-white"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Classes;
