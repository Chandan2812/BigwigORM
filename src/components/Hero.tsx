import React from "react";

const SocialMediaHero: React.FC = () => {
  return (
    <section id="home" className="relative flex flex-col lg:flex-row items-center justify-between bg-blue-50 py-12 px-16 mt-16">
      {/* Left Section */}
      <div className="max-w-lg space-y-6 text-center lg:text-left">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
        Seamlesly Manage your Online Reputation & Review Management and respond to every customer across all review platforms from a single interface. <br /> <span className="text-blue-500">Powered By AI</span>
        </h1>
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
