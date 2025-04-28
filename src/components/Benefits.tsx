
import React from "react";

const Benefits = () => {
  const benefits = [
    {
      title: "Personalized Guidance",
      description:
        "Get tailored information specific to your unique situation and needs.",
    },
    {
      title: "Expert Knowledge",
      description:
        "Access medical-grade information about breast surgery, scar management, and hair treatments.",
    },
    {
      title: "24/7 Availability",
      description:
        "Get answers whenever you need them, day or night, without waiting for appointments.",
    },
    {
      title: "Privacy Focused",
      description:
        "Your conversations remain private and secure, providing a safe space to ask sensitive questions.",
    },
    {
      title: "Seamless Appointments",
      description:
        "When needed, Beauty AI can help schedule consultations with real specialists.",
    },
    {
      title: "Continuous Improvement",
      description:
        "The system learns from every interaction, becoming more helpful over time.",
    },
  ];

  return (
    <section id="benefits" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Benefits of Beauty AI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how Beauty AI can enhance your journey to personal satisfaction
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-custom border border-gray-100 animate-fade-up h-full"
              style={{ animationDelay: `${0.05 * index}s` }}
            >
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 lg:p-12 bg-beauty-softpurple/20 rounded-2xl animate-fade-up">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Real Information, Real Results
              </h3>
              <p className="text-gray-700 mb-6">
                Beauty AI combines the latest medical knowledge with a compassionate approach to help you understand your options for breast surgery, scar management, and hair loss treatments.
              </p>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="min-w-6 mt-1">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-beauty-purple text-white text-xs">1</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong>Evidence-based information</strong> sourced from medical literature and expert knowledge
                  </p>
                </div>
                <div className="flex items-start gap-3 mb-4">
                  <div className="min-w-6 mt-1">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-beauty-purple text-white text-xs">2</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong>Constantly updated</strong> with the latest research and treatment options
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="min-w-6 mt-1">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-beauty-purple text-white text-xs">3</span>
                  </div>
                  <p className="text-sm text-gray-700">
                    <strong>Human oversight</strong> ensures quality and accuracy of all information
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto bg-beauty-purple/10 rounded-full flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full bg-beauty-purple/20 flex items-center justify-center">
                  <div className="w-1/2 h-1/2 rounded-full bg-beauty-purple/30 flex items-center justify-center">
                    <div className="w-2/3 h-2/3 rounded-full bg-beauty-purple/40 flex items-center justify-center text-beauty-purple font-bold text-xl">
                      Beauty AI
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 right-1/4 bg-white rounded-lg p-3 shadow-custom border border-gray-100">
                <p className="text-sm font-medium">Breast Surgery Info</p>
              </div>
              <div className="absolute top-1/3 -right-4 bg-white rounded-lg p-3 shadow-custom border border-gray-100">
                <p className="text-sm font-medium">Scar Management</p>
              </div>
              <div className="absolute bottom-1/4 left-1/4 bg-white rounded-lg p-3 shadow-custom border border-gray-100">
                <p className="text-sm font-medium">Hair Loss Treatment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
