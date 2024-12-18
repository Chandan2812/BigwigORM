import { motion } from "framer-motion";

function Features() {
  const featureData = [
    {
      title: "AI-Powered Post Creation",
      description:
        "Create engaging and high-quality posts effortlessly with Handly's AI-powered content generation. Tailor content to match your audience and industry, ensuring your message resonates with the right tone and style.",
      imageUrl: "https://cdn2.birdeye.com/version2/v3/pages/2024/products/social/overview/v3/img-social-publishing.png",
    },
    {
      title: "Generate High-Definition Images with AI",
      description:
        "Bring your posts to life with stunning, high-definition images generated using OpenAI technology. Simply provide a prompt, and Handly creates visually appealing and contextually relevant images in seconds.",
      imageUrl: "https://cdn2.birdeye.com/version2/v3/pages/2024/products/social/overview/v4/img-post-library.png",
    },
    {
      title: "Seamless Multi-Platform Posting",
      description:
        "Save time by publishing posts across all your social media accounts simultaneously. With Handly, you can streamline posting to platforms like Facebook, Twitter, Instagram, and LinkedIn with just a click.",
      imageUrl: "https://cdn2.birdeye.com/version2/v3/pages/2024/products/social/overview/v4/img-bulk-publishing.png",
    },
    {
      title: "AI-Driven Replies to Engage Your Audience",
      description:
        "Respond to comments, questions, and messages effortlessly using AI-powered replies. Handly ensures timely and on-brand responses to boost audience engagement and build meaningful connections.",
      imageUrl: "https://cdn2.birdeye.com/version2/v3/pages/2024/products/social/overview/v4/img-social-engagement.png",
    },
    {
      title: "Schedule Posts with Visual Calendar",
      description:
        "Plan and schedule your posts ahead of time using Handly's intuitive visual calendar. Filter posts by date, platform, or status and maintain a consistent social media presence with ease.",
      imageUrl: "https://cdn2.birdeye.com/version2/v3/pages/2024/products/social/overview/v4/img-social-scheduling.png",
    },
    {
      title: "AI-Optimized Posting Times",
      description:
        "Maximize your content's impact with AI-powered suggestions on the best times to post. Identify trends, boost reach, and optimize your posting schedule for maximum audience engagement.",
      imageUrl: "https://cdn2.birdeye.com/version2/v3/pages/2024/products/social/overview/v3/img-increase-engagement.png",
    },
    {
      title: "Analyze Post Performance and Insights",
      description:
        "Track post performance with advanced analytics. Measure reach, engagement, and audience growth across platforms, uncovering valuable insights to refine your social media strategy.",
      imageUrl: "https://cdn2.birdeye.com/version2/v3/pages/2024/social/track-performance.png",
    },
    {
      title: "Build a Shared Content Library",
      description:
        "Store and manage a library of pre-approved posts, images, and templates for quick access. Easily repurpose proven content and maintain consistency across all your social media channels.",
      imageUrl: "https://cdn2.birdeye.com/version2/v3/pages/2024/products/social/overview/v4/img-post-library.png",
    },
  ];
  

  const variants = {
    hidden: (direction: string) => ({
      opacity: 0,
      x: direction === "left" ? -100 : 100,
    }),
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div id="features" className="py-16 px-8 sm:px-12">
      {featureData.map((feature, index) => (
        <div
          key={index}
          className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8 mt-${
            index === 0 ? 0 : 16
          }`}
        >
          {/* Text Section */}
          <motion.div
            className={`col-span-1 ${
              index % 2 === 0 ? "" : "md:col-start-3 order-1 md:order-2"
            }`}
            custom={index % 2 === 0 ? "left" : "right"}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight transition-colors duration-300">
              {feature.title}
            </h2>
            <p className="text-lg text-gray-600 mt-4">{feature.description}</p>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className={`col-span-2 flex justify-center ${
              index % 2 === 0 ? "" : "md:col-start-1 order-2 md:order-1"
            }`}
            custom={index % 2 === 0 ? "right" : "left"}
            initial="hidden"
            animate="visible"
            variants={variants}
          >
            <img
              src={feature.imageUrl}
              alt={feature.title}
              className="w-full object-cover rounded-lg transition-transform duration-300"
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Features;
