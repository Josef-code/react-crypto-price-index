import React from "react";
import { TypeAnimation } from "react-type-animation";

const Header = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-full text-white p-8">
        <h1 className="text-5xl">Crypto Currency Rates</h1>
        <h2 className="text-2xl p-3">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Track the real-time exchange rates of crypto currencies.",
              2000,
              "Filter and sort the crypto currencies.",
              3000,
              "Enjoy a user-friendly interface.",
              3000,
              "Stay up-to-date",
              4000,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>
      </div>
    </>
  );
};

export default Header;
