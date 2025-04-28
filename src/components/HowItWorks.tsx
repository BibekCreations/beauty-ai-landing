
import React from "react";
import { MessageSquare, Check, Book } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Start Chatting",
      description:
        "Begin a conversation with Beauty AI through WhatsApp. No downloads or complicated setup required.",
      icon: <MessageSquare className="h-6 w-6" />,
    },
    {
      number: "02",
      title: "Ask Questions",
      description:
        "Inquire about breast surgery, scar management, hair loss, or any related treatments you're interested in.",
      icon: <Book className="h-6 w-6" />,
    },
    {
      number: "03",
      title: "Get Guidance",
      description:
        "Receive personalized information, recommendations, and next steps based on your specific situation.",
      icon: <Check className="h-6 w-6" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Beauty AI Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get accurate, personalized guidance in just a few simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden md:block absolute top-24 left-0 right-0 h-0.5 bg-beauty-purple/20" aria-hidden="true"></div>
          
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl p-8 shadow-custom border border-gray-100 animate-fade-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-beauty-purple text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold">
                {step.number}
              </div>
              <div className="mt-8 text-center">
                <div className="mb-4 bg-beauty-softpurple/20 w-14 h-14 rounded-lg flex items-center justify-center mx-auto">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-xl shadow-custom overflow-hidden animate-fade-up">
          <div className="grid md:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-semibold mb-4">
                WhatsApp Integration
              </h3>
              <p className="text-gray-700 mb-6">
                Beauty AI is available through WhatsApp, making it easily accessible whenever you need guidance.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Instant responses</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>No app download needed</span>
                </div>
              </div>
              <p className="text-sm text-gray-500">
                More messaging platforms coming soon!
              </p>
            </div>
            <div className="gradient-bg p-8 lg:p-12 flex items-center justify-center">
              <div className="bg-white rounded-xl p-4 shadow-lg max-w-xs">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                      <MessageSquare size={16} />
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Beauty AI</h4>
                      <p className="text-xs text-gray-500">Online</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-green-50 rounded-lg rounded-tl-none p-3 max-w-[200px]">
                    <p className="text-xs text-gray-800">
                      Hi! I'm Beauty AI. I can help with questions about breast surgery, scars, or hair loss. What would you like to know?
                    </p>
                    <p className="text-[10px] text-gray-500 text-right mt-1">10:30 AM</p>
                  </div>
                  
                  <div className="bg-gray-100 rounded-lg rounded-tr-none p-3 max-w-[200px] ml-auto">
                    <p className="text-xs text-gray-800">
                      What are the different options for breast augmentation?
                    </p>
                    <p className="text-[10px] text-gray-500 text-right mt-1">10:31 AM</p>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg rounded-tl-none p-3 max-w-[200px]">
                    <p className="text-xs text-gray-800">
                      Great question! For breast augmentation, you have several options: silicone implants, saline implants, fat transfer, and different placement techniques. Would you like details on any specific option?
                    </p>
                    <p className="text-[10px] text-gray-500 text-right mt-1">10:33 AM</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mt-4">
                  <input 
                    type="text" 
                    placeholder="Type a message..." 
                    className="flex-1 text-xs p-2 border rounded-full bg-gray-50"
                    readOnly
                  />
                  <button className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m3 3 3 9-3 9 19-9Z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
