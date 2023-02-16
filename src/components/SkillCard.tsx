import React from 'react';
import { Skill } from '../types/Skill';
import { AiFillHtml5 } from 'react-icons/ai';

type SkillCardProps = {
  skill: Skill;
};

function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center justify-center font-medium mr-8 my-4 md:p-4 p-2 border-2 hover:border-mint-green border-white hover:bg-white rounded-lg hover:text-mint-green hover:scale-105 transition-all ease-in-out ">
      <AiFillHtml5 className="md:text-4xl text-2xl" />
      {skill.name}
    </div>
  );
}

export default SkillCard;
