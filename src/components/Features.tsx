
import React from "react";
import { LayoutDashboard, Book, MessageSquare, Book as Topic, Ticket } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <LayoutDashboard className="h-12 w-12 text-beauty-purple" />,
      title: "Analytics Dashboard",
      description:
        "Track bookings, tickets, and message trends with detailed analytics and insights into user interactions.",
      image: "public/lovable-uploads/cd7fca31-f635-42ed-9261-2cf07ee00ef4.png",
    },
    {
      icon: <Book className="h-12 w-12 text-beauty-purple" />,
      title: "Knowledge Base",
      description:
        "Comprehensive RAG-powered knowledge management for breast surgery and hair transplant information.",
      image: "public/lovable-uploads/9ed62b60-07b7-4b54-8b1a-e259d754f74b.png",
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-beauty-purple" />,
      title: "Channel Messages",
      description:
        "Seamless WhatsApp integration for direct communication with users about treatments and consultations.",
      image: "public/lovable-uploads/27b57d7c-1f6c-4e6a-9c7a-30c68f193305.png",
    },
    {
      icon: <Ticket className="h-12 w-12 text-beauty-purple" />,
      title: "Smart CTAs",
      description:
        "Automated booking and support ticket generation based on user conversations and needs.",
      image: "public/lovable-uploads/dbcd52cf-dada-4124-a6ab-2d91b386520b.png",
    },
    {
      icon: <Topic className="h-12 w-12 text-beauty-purple" />,
      title: "Conversation Topics",
      description:
        "Organized conversation management with categorized topics for efficient information handling.",
      image: "public/lovable-uploads/4f10989c-ed90-4809-8596-cf52405cb462.png",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Beauty AI Features
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Powered by advanced artificial intelligence, Beauty AI offers comprehensive tools
            for managing beauty and medical consultations.
          </p>
        </div>

        <div className="grid gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-custom hover:shadow-lg transition-shadow border border-gray-100 animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="mb-5 bg-beauty-softpurple/20 w-20 h-20 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.description}</p>
                </div>
                <div className="order-first md:order-last mb-6 md:mb-0">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="rounded-lg shadow-md w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
