
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Beauty AI</h3>
            <p className="text-gray-400 mb-4">
              Your personal AI guide for beauty and cosmetic procedures.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-beauty-purple transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-beauty-purple transition-colors"
                aria-label="Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-beauty-purple transition-colors"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Features</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-beauty-purple transition-colors"
                >
                  AI Chatbot
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-beauty-purple transition-colors"
                >
                  Knowledge Base
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-beauty-purple transition-colors"
                >
                  Smart CTAs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-beauty-purple transition-colors"
                >
                  Feedback System
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-beauty-purple transition-colors"
                >
                  Breast Surgery
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-beauty-purple transition-colors"
                >
                  Scar Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-beauty-purple transition-colors"
                >
                  Hair Loss Treatment
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-beauty-purple transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-beauty-purple transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-beauty-purple transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-beauty-purple transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-beauty-purple transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Beauty AI. All rights reserved.
          </p>
          <p className="text-gray-600 text-sm mt-2">
            Beauty AI provides information for educational purposes only. It does not replace professional medical advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
