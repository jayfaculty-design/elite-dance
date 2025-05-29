import React from "react";
import { Award, Users, Heart, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "National Champions",
      description: "Multiple national dance competition victories",
    },
    {
      icon: Users,
      title: "500+ Graduates",
      description: "Alumni performing worldwide in prestigious companies",
    },
    {
      icon: Heart,
      title: "Community Impact",
      description: "Free programs for underprivileged youth",
    },
    {
      icon: Target,
      title: "Excellence Standard",
      description: "Rigorous training methodology proven effective",
    },
  ];

  return (
    <section id="about" className="py-20 px-5 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-in-left">
            <h2 className="font-spartan text-4xl md:text-5xl font-bold text-dance-navy mb-6">
              Our Story of
              <span className="block text-gradient">Excellence</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded in 2003, Elite Dance Academy has been a beacon of artistic
              excellence, nurturing talent and transforming lives through the
              power of dance. Our mission extends beyond teaching steps – we
              cultivate confidence, discipline, and artistic expression.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From our humble beginnings in a small studio to becoming a
              nationally recognized institution, we've maintained our commitment
              to personalized instruction and holistic development. Every
              student's journey is unique, and we celebrate each milestone.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-xs hover:shadow-md transition-shadow duration-300"
                >
                  <CardContent className="p-4 text-center">
                    <achievement.icon className="w-8 h-8 text-dance-gold mx-auto mb-3" />
                    <h3 className="font-semibold text-dance-navy mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Dance class"
                  className="rounded-lg shadow-lg object-cover h-48 w-full"
                />
                <img
                  src="https://images.unsplash.com/photo-1594736797933-d0401ba3cd01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Performance"
                  className="rounded-lg shadow-lg object-cover h-64 w-full"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Studio practice"
                  className="rounded-lg shadow-lg object-cover h-64 w-full"
                />
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Group rehearsal"
                  className="rounded-lg shadow-lg object-cover h-48 w-full"
                />
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-dance-gold/20 rounded-full animate-dance-pulse"></div>
            <div
              className="absolute -bottom-4 -left-4 w-12 h-12 bg-dance-navy/20 rounded-full animate-dance-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
