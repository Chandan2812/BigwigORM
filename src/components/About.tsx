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
      <div  className="text-center text-2xl md:text-4xl mt-10 font-semibold ">About Us</div>
      <div
        ref={sectionRef}
        className="flex flex-col gap-5 md:flex-row items-center p-4 px-10 md:px-20 py-10 md:py-16 bg-white"
      >
        {/* Left Side (Text Section) */}
        <div className="md:w-1/2 w-full text-justify md:mr-8 mb-4 md:mb-0">
          <h1 className="text-xl md:text-2xl font-semibold mb-4 md:mb-8">
            {["Transform the Way You Manage Social Media", "with Advanced Automation and Insights", "Tailored for Success."].map((text, index) => (
              <span
                key={index}
                className={`slide-in heading block ${isVisible ? "animate animated-delay" : ""}`}
                style={{ "--animation-delay": `${index * 0.2}s` } as React.CSSProperties}
              >
                {text}
              </span>
            ))}
          </h1>

          <p className="text-md md:text-lg">
            {[
              "Our platform is designed to simplify your social media workflow, enabling you to efficiently plan and execute campaigns across multiple platforms.",
              "With advanced scheduling tools, in-depth analytics, and real-time audience engagement features, you'll have everything you need to grow your online presence.",
              "Whether you're a solo entrepreneur, a marketing agency, or a large enterprise, our solution scales to meet your needs, providing a centralized hub for all your social media activities.",
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
        <div className="md:w-1/2 w-full">
          <img
            src="https://themelooks.us/demo/smm24/html/preview/rtl/img/banner-img/slider-img-01.png" // Replace with your actual image URL
            alt="Illustration of social media automation features"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
