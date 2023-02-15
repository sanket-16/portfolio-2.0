import React from 'react';

function About() {
  return (
    <div className="min-h-[100vh]">
      <div className="bg-white text-dark-blue py-8 flex justify-center font-Montserrat">
        <h1 className="md:text-6xl text-2xl font-bold">About Me</h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="p-8">
          <p>
            <span>
              Currently, studying in my 3rd year of Engineering in Information
              Technology.
            </span>
            <span>
              Currently, studying in my 3rd year of Engineering in Information
              Technology.
            </span>
          </p>
        </div>
        <div className="p-8">
          <h2 className="md:text-4xl text-xl font-bold">Skills</h2>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default About;
