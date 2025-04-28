
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur-md fixed top-0 z-50 shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold gradient-text">Beauty AI</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-beauty-purple transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-600 hover:text-beauty-purple transition-colors">
            How It Works
          </a>
          <a href="#benefits" className="text-gray-600 hover:text-beauty-purple transition-colors">
            Benefits
          </a>
          <Button className="bg-beauty-purple hover:bg-beauty-purple/90 text-white ml-4">
            Get Started
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 flex flex-col space-y-4 animate-fade-in">
          <a 
            href="#features" 
            className="text-gray-600 hover:text-beauty-purple transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-gray-600 hover:text-beauty-purple transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#benefits" 
            className="text-gray-600 hover:text-beauty-purple transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Benefits
          </a>
          <Button className="bg-beauty-purple hover:bg-beauty-purple/90 text-white w-full">
            Get Started
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
