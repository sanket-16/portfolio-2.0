import React from 'react';
import SkillCard from '../components/SkillCard';
import Skills from '../Skills.json';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { SiBuymeacoffee } from 'react-icons/si';
import { FaAddressCard } from 'react-icons/fa';

function About() {
  return (
    <div className="min-h-[90vh]">
      <div className="bg-white text-dark-blue py-8 flex justify-center font-Montserrat">
        <h1
          className="md:text-6xl text-2xl font-bold tracking-widest"
          id="about"
        >
          {`< About Me />`}
        </h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1  md:mx-20 mx-4 ">
        <div className="flex flex-col gap-4 my-8">
          <h2 className="md:text-4xl text-xl font-bold font-Montserrat">
            Personal Info
          </h2>
          <div className="font-medium  h-[100%] md:p-4 mb-4 ">
            <div className="flex flex-col" text-lg>
              <span>I am 20 years old living in Mumbai, India. </span>
              <span>
                Currently, studying in my 3rd year of Engineering in Information
                Technology.
              </span>
              <div className="md:my-8 my-2">
                <h2 className="md:text-4xl text-xl font-bold font-Montserrat">
                  Connect With Me
                </h2>
                <span className="flex md:flex-row flex-col my-8 gap-4">
                  <a
                    className="flex items-center justify-center gap-2 rounded-lg bg-white text-dark-blue hover:bg-dark-blue hover:border-2 hover:text-mint-green hover:scale-105 transition-all ease-in-out p-4"
                    href="https://www.linkedin.com/in/sanket-patil-1b3299205/"
                    target="_blank"
                  >
                    <AiFillLinkedin
                      size={30}
                      className="hover:text-mint-green  hover:scale-105 transition-all ease-in-out "
                    />
                    LinkedIn
                  </a>
                  <a
                    className="flex items-center justify-center gap-2 rounded-lg bg-white text-dark-blue hover:bg-dark-blue hover:border-2 hover:text-mint-green hover:scale-105 transition-all ease-in-out p-4"
                    href="https://github.com/sanket-16"
                    target="_blank"
                  >
                    <AiFillGithub
                      size={30}
                      className="hover:text-mint-green hover:scale-105 transition-all ease-in-out "
                    />
                    Github
                  </a>
                  <a
                    className="flex items-center justify-center gap-2 rounded-lg bg-white text-dark-blue hover:bg-dark-blue hover:border-2 hover:text-mint-green hover:scale-105 transition-all ease-in-out p-4"
                    href="https://www.buymeacoffee.com/sanket16"
                    target="_blank"
                  >
                    <SiBuymeacoffee
                      size={30}
                      className="hover:text-mint-green hover:scale-105 transition-all ease-in-out "
                    />
                    Buy Me a 🍕
                  </a>
                  <a
                    className="flex items-center justify-center gap-2 rounded-lg bg-white text-dark-blue hover:bg-dark-blue hover:border-2 hover:text-mint-green hover:scale-105 transition-all ease-in-out p-4"
                    href="https://www.buymeacoffee.com/sanket16"
                    target="_blank"
                  >
                    <FaAddressCard
                      size={30}
                      className="hover:text-mint-green hover:scale-105 transition-all ease-in-out "
                    />
                    Resume
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:p-8">
          <h2 className="md:text-4xl text-xl font-bold font-Montserrat">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 text-center">
            {Skills.skills.map((skill) => (
              <SkillCard skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
