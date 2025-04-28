
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-beauty-softpurple/30 to-white/0 -z-10"></div>
      <div
        className="absolute top-40 -right-32 w-96 h-96 rounded-full bg-beauty-softblue/30 blur-3xl -z-10"
        aria-hidden="true"
      ></div>
      <div
        className="absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-beauty-softpink/20 blur-3xl -z-10"
        aria-hidden="true"
      ></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Personal <span className="gradient-text">Beauty AI</span> Guide
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Smart AI-powered assistance for breast surgery, scar management, and hair loss treatments.
              Get personalized guidance right on WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-beauty-purple hover:bg-beauty-purple/90 text-white text-lg py-6 px-8">
                Start Chatting Now
              </Button>
              <Button variant="outline" className="border-beauty-purple text-beauty-purple hover:bg-beauty-purple/5 text-lg py-6 px-8">
                Learn More
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Available on WhatsApp - More platforms coming soon!
            </p>
          </div>
          
          <div className="flex-1 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-white rounded-2xl p-5 shadow-custom max-w-md mx-auto">
              <div className="bg-beauty-softpurple/20 rounded-xl p-5">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-beauty-purple/90 flex items-center justify-center text-white">
                    <MessageCircle size={20} />
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-xs">
                    <p className="text-sm text-gray-800">
                      Hi there! I'm Beauty AI, your personal guide for beauty and cosmetic procedures. 
                      How can I help you today?
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 mb-4 justify-end">
                  <div className="bg-beauty-purple/10 rounded-2xl rounded-tr-none p-4 max-w-xs">
                    <p className="text-sm text-gray-800">
                      I'm considering breast augmentation but I'm not sure about recovery time.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-beauty-purple/90 flex items-center justify-center text-white">
                    <MessageCircle size={20} />
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 max-w-xs">
                    <p className="text-sm text-gray-800">
                      Great question! Recovery time for breast augmentation typically takes 1-2 weeks for initial healing, 
                      with full recovery in 6-8 weeks. Would you like to know more about the procedure or schedule a consultation?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
