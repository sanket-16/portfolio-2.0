import React from 'react';
import { Skill } from '../types/Skill';
import Icon from './Icon';
import { AiFillHtml5 } from 'react-icons/ai';

type SkillCardProps = {
  skill: Skill;
};

function SkillCard({ skill }: SkillCardProps) {
  return <div>{skill.name}</div>;
}

export default SkillCard;
