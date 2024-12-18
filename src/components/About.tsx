import React, { useEffect, useState, useRef } from "react";

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div id="about">
      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-50%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .slide-in {
            opacity: 0; /* Hidden before animation starts */
          }

          .animate {
            animation: slideIn 0.6s ease-in-out forwards;
          }

          .animated-delay {
            animation-delay: var(--animation-delay);
          }
        `}
      </style>
      <div className="text-center text-2xl md:text-4xl mt-10 font-semibold">About Us</div>
      <div
        ref={sectionRef}
        className="flex flex-col gap-5 md:flex-row items-center p-4 px-10 md:px-20 py-10 md:py-16 bg-white"
      >
        {/* Left Side (Text Section) */}
        <div className="md:w-1/2 w-full text-justify md:mr-8 mb-4 md:mb-0">
          <h1 className="text-lg md:text-xl font-semibold mb-4 md:mb-8">
            {[
              "Revolutionize Your Online Reputation",
              "Manage Reviews and Customer Feedback Effortlessly",
              "Drive Growth with Actionable Insights.",
            ].map((text, index) => (
              <span
                key={index}
                className={`slide-in heading block ${isVisible ? "animate animated-delay" : ""}`}
                style={{ "--animation-delay": `${index * 0.2}s` } as React.CSSProperties}
              >
                {text}
              </span>
            ))}
          </h1>

          <p className="text-md">
            {[
              "BigwigORM simplifies the way you manage online reviews and customer feedback. Build a strong online reputation by monitoring and responding to reviews seamlessly.",
              "Our platform offers powerful tools for analyzing customer sentiment, improving your brand trust, and enhancing customer relationships with actionable insights.",
              "Whether you're a small business, agency, or enterprise, our scalable solution ensures you stay ahead by turning customer feedback into opportunities for growth.",
            ].map((text, index) => (
              <span
                key={index}
                className={`slide-in subheading block ${isVisible ? "animate animated-delay" : ""}`}
                style={{ "--animation-delay": `${0.8 + index * 0.2}s` } as React.CSSProperties}
              >
                {text}
              </span>
            ))}
          </p>
        </div>

        {/* Right Side (Image Section) */}
        <div className=" w-full">
          <img
            src="https://cdn2.birdeye.com/version2/v3/pages/2024/products/reviews/generation/v1/reviews-automation@2x.png" // Replace with an image relevant to review management
            alt="Illustration of online review management"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
