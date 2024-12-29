import React from 'react';
import { motion } from 'framer-motion';
import SkillIcon from './ui/SkillIcon';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'React Native','JavaScript', 'HTML/CSS', 'Redux'],
  },
  {
    title: 'Languages',
    skills: ['C++', 'C#', 'php','SQL'],
  },
  {
    title: 'Tools',
    skills: ['Github', 'VS Code', 'JIRA'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Skills = () => (
  <section className="py-20 bg-white" id="skills">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2 
        className="text-4xl font-bold mb-12 text-center text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Skills & Expertise
      </motion.h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
      >
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 text-gray-900">{category.title}</h3>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <SkillIcon key={skill} name={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Skills;