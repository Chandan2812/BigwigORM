import React from "react";

const SocialMediaHero: React.FC = () => {
  return (
    <section id="home" className="relative flex flex-col lg:flex-row items-center justify-between bg-blue-50 py-12 px-4 lg:px-24 mt-16">
      {/* Left Section */}
      <div className="max-w-lg space-y-6 text-center lg:text-left">
        <h4 className="text-blue-500 font-semibold text-lg flex items-center justify-center lg:justify-start">
        Review Management
          <span className="ml-1 text-blue-500">✨</span>
        </h4>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
        Scale review management with AI
        </h1>
        <p className="text-gray-600 leading-relaxed">
        Use AI to effortlessly manage and respond to every customer review from one intuitive dashboard.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 items-center justify-center lg:justify-start">
          <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition">
            Start 14-day Free Trial
          </button>
        </div>
        <p className="text-gray-500 text-sm">
          No CC Required | Cancel Anytime
        </p>
      </div>

      {/* Right Section */}
      <div className="mt-8 lg:mt-0 lg:ml-8 w-full lg:w-auto">
        <img
          src="https://cdn2.birdeye.com/version2/v3/pages/2024/products/reviews/management/v1/review-management-v3@2x.png" // Replace with your actual image URL
          alt="Happy User"
          className="w-60 mx-auto md:w-full object-cover"
        />
      </div>
    </section>
  );
};

export default SocialMediaHero;
