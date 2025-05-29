import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Heart,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Studio",
      details: ["123 Dance Avenue", "Arts District, CA 90028"],
      link: "https://maps.google.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["(555) 123-DANCE", "Mon-Fri: 9AM-9PM"],
      link: "tel:+15551234263",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@elitedanceacademy.com", "We respond within 24 hours"],
      link: "mailto:info@elitedanceacademy.com",
    },
    {
      icon: Clock,
      title: "Studio Hours",
      details: ["Mon-Fri: 10AM-10PM", "Sat-Sun: 9AM-8PM"],
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/elitedanceacademy",
      followers: "15.2K",
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/elitedanceacademy",
      followers: "8.5K",
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://youtube.com/elitedanceacademy",
      followers: "12.1K",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/elitedanceacademy",
      followers: "5.8K",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 px-5 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-spartan text-4xl md:text-5xl font-bold text-dance-navy mb-6">
            Get In
            <span className="block text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start your dance journey? We'd love to hear from you.
            Contact us for class information, studio tours, or any questions
            about our programs.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow duration-300"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-dance-light-gold rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="w-6 h-6 text-dance-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-dance-navy mb-2">
                          {item.title}
                        </h3>
                        <div className="space-y-1">
                          {item.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-600 text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                        {item.link && (
                          <a
                            href={item.link}
                            className="text-dance-gold hover:text-amber-600 text-sm font-medium mt-2 inline-block"
                          >
                            Click to {item.title.split(" ")[0].toLowerCase()}
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="overflow-hidden">
              <CardHeader>
                <CardTitle className="text-dance-navy">
                  Follow Our Journey
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center p-4 rounded-lg bg-gray-50 hover:bg-dance-light-gold transition-colors duration-300 group"
                    >
                      <social.icon className="w-6 h-6 text-gray-600 group-hover:text-dance-gold mb-2" />
                      <span className="text-sm font-medium text-dance-navy">
                        {social.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        {social.followers}
                      </span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Donation CTA */}
            <Card className="bg-linear-to-br from-dance-gold to-amber-600 text-white overflow-hidden">
              <CardContent className="p-6 text-center">
                <Heart className="w-8 h-8 mx-auto mb-4" />
                <h3 className="font-playfair text-xl font-bold mb-2">
                  Support Our Mission
                </h3>
                <p className="text-sm mb-4 opacity-90">
                  Help us provide dance education to underprivileged youth in
                  our community.
                </p>
                <Button className="w-full bg-white text-dance-gold hover:bg-gray-100">
                  Donate with Paystack
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-dance-navy">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <Input
                        placeholder="Your first name"
                        className="border-gray-300 focus:border-dance-gold focus:ring-dance-gold"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <Input
                        placeholder="Your last name"
                        className="border-gray-300 focus:border-dance-gold focus:ring-dance-gold"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-gray-300 focus:border-dance-gold focus:ring-dance-gold"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        placeholder="(555) 123-4567"
                        className="border-gray-300 focus:border-dance-gold focus:ring-dance-gold"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      I'm interested in:
                    </label>
                    <select className="w-full p-3 border border-gray-300 rounded-md focus:border-dance-gold focus:ring-dance-gold">
                      <option>Class Information</option>
                      <option>Private Lessons</option>
                      <option>Studio Rental</option>
                      <option>Performance Opportunities</option>
                      <option>Summer Intensives</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Tell us about your dance goals or ask any questions..."
                      rows={4}
                      className="border-gray-300 focus:border-dance-gold focus:ring-dance-gold"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-dance-navy hover:bg-dance-deep-purple text-white"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80"
                  alt="Studio Location"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-dance-navy/60 flex items-center justify-center">
                  <div className="text-center text-white">
                    <MapPin className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-semibold">Visit Our Studio</p>
                    <p className="text-sm opacity-90">
                      123 Dance Avenue, Arts District
                    </p>
                    <Button
                      className="mt-3 bg-dance-gold hover:bg-amber-600"
                      onClick={() =>
                        window.open("https://maps.google.com", "_blank")
                      }
                    >
                      Get Directions
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
