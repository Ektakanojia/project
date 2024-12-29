import React from 'react';

interface SkillCardProps {
  title: string;
  skills: string[];
}

const SkillCard = ({ title, skills }: SkillCardProps) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
    <ul className="text-gray-600">
      {skills.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </ul>
  </div>
);

export default SkillCard;