
import React from "react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-20 px-4 gradient-bg">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-white rounded-2xl shadow-custom p-8 lg:p-12 max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Beauty Journey Today
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Get personalized guidance on breast surgery, scar management, and hair loss treatments with Beauty AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-beauty-purple hover:bg-beauty-purple/90 text-white text-lg py-6 px-8">
              Chat on WhatsApp
            </Button>
            <Button variant="outline" className="border-beauty-purple text-beauty-purple hover:bg-beauty-purple/5 text-lg py-6 px-8">
              Learn More
            </Button>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            No registration required. Message and data rates may apply.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
