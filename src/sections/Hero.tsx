import React from 'react';

function Hero() {
  return (
    <div className=" md:bg-hero-img bg-no-repeat bg-left-bottom md:bg-60% bg-80% h-[90vh] md:m-0 my-20 mx-2 md:grid md:grid-cols-2 items-center justify-center">
      <div></div>
      <h1 className="font-bold flex flex-col">
        <span className="font-Montserrat md:text-8xl text-6xl">
          Hi I'm Sanket.
        </span>
        <span className="font-Inter md:text-6xl text-4xl">
          Just a <span className="text-mint-green">wannabe</span>
        </span>
        <span className="font-Inter md:text-6xl text-4xl">Full Stack Dev.</span>
      </h1>
    </div>
  );
}

export default Hero;
