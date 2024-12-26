import React from "react";
import ceo from "../assets/ceo.jpg"

const Team: React.FC = () => {
  // Sample data for team members


  return (
    <>
    <section className=" container mx-auto py-12 px-4 lg:px-8">
      <div className="max=w-6xl px-6 md:px-8 gap-8">
        {/* CEO Section */}
        <div className=" bg-gray-100 p-6 rounded-lg shadow-lg">
          <img
            src={ceo} // Replace with your CEO image
            alt="CEO"
            className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
          />
          <h3 className="text-xl font-semibold text-center">Vipul Dutta</h3>
          <p className="text-black font-semibold text-center my-3">Founder & CEO</p>
          <p className="text-gray-600 md:text-center text-justify">
          Make way for Bigwig Media, the superhero of the digital marketing world with a black belt in AI tech! Our mission? To catapult businesses like yours straight into the glitzy realm of online success. 
          </p>
          <h2 className="font-bold text-gray-700 mt-6 text-center text-2xl">About Bigwig ORM</h2>
          <h2 className="text-gray-600 mt-4 md:text-center text-justify">
          We don't just talk a big game -- we deliver. Whether it's magnetizing leads like bees to honey, bolstering your brand till it's as big as you wish, fanning the flames of creativity, conjuring mind-blowing content, or playing king of the hill one search engine at a time—we've got the magic sauce.
          </h2>
          <h2 className="text-gray-600 mt-4 md:text-center text-justify">
          When it comes to teamwork, we're like ants at a picnic. With over 70 committed professionals in our corner, we hustle and haggle - all for your success. So, strap on your seatbelt, and let Bigwig Media take you on a thrilling ride to the top!          </h2>
        </div>
      </div>
    </section>
    </>
  );
};

export default Team;
