
import React from "react";
import { Database, MessageSquare, Ticket } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="h-12 w-12 text-beauty-purple" />,
      title: "AI Chatbot",
      description:
        "Personalized conversations about breast surgery, scar management, and hair loss treatments through WhatsApp.",
    },
    {
      icon: <Database className="h-12 w-12 text-beauty-purple" />,
      title: "Knowledge Base",
      description:
        "Comprehensive and continuously updated information using RAG (Retrieval-Augmented Generation) for accurate responses.",
    },
    {
      icon: <Ticket className="h-12 w-12 text-beauty-purple" />,
      title: "Smart CTAs",
      description:
        "AI generates relevant call-to-actions for bookings and support tickets based on your specific needs.",
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
            Powered by advanced artificial intelligence, Beauty AI offers a range of features
            to guide you on your beauty journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-custom hover:shadow-lg transition-shadow border border-gray-100 h-full animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="mb-5 bg-beauty-softpurple/20 w-20 h-20 rounded-lg flex items-center justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-beauty-softblue/30 rounded-xl p-8 animate-fade-up">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Customized Feedback System
              </h3>
              <p className="text-gray-700 mb-4">
                Our feedback logging system ensures continuous improvement. Share your thoughts on AI responses, and our agents will review and enhance the system accordingly.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-beauty-purple font-bold">✓</span>
                  <span>Provide feedback on AI responses</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-beauty-purple font-bold">✓</span>
                  <span>Help improve our knowledge base</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-beauty-purple font-bold">✓</span>
                  <span>Dedicated agents review all feedback</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-custom">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-beauty-purple/90 flex items-center justify-center text-white">
                  <MessageSquare size={20} />
                </div>
                <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 flex-1">
                  <p className="text-sm text-gray-800">
                    Was this information about hair transplant procedures helpful?
                  </p>
                </div>
              </div>
              <div className="flex gap-2 justify-end">
                <button className="bg-beauty-purple/10 hover:bg-beauty-purple/20 text-beauty-purple px-4 py-2 rounded-lg text-sm transition-colors">
                  Very Helpful
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm transition-colors">
                  Needs Improvement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
