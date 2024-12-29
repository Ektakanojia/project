import React from 'react';
import { motion } from 'framer-motion';
import { 
  Blocks, 
  Code2, 
  FileJson, 
  Globe, 
  Database, 
  Server, 
  GitBranch, 
  Terminal,
  Cpu,
  MonitorSmartphone,
  PackageCheck,
  Workflow
} from 'lucide-react';

const iconMap: { [key: string]: React.ReactNode } = {
  'React.js': <Blocks />,
  'JavaScript': <FileJson />,
  'HTML/CSS': <Globe />,
  'Redux': <Workflow />,
  'Node.js': <Server />,
  'Express': <PackageCheck />,
  'MongoDB': <Database />,
  'Git': <GitBranch />,
  'VS Code': <Code2 />,
  'Webpack': <Cpu />,
  'REST APIs': <MonitorSmartphone />,
  'Terminal': <Terminal />
};

interface SkillIconProps {
  name: string;
}

const SkillIcon = ({ name }: SkillIconProps) => {
  return (
    <motion.div
      className="flex items-center space-x-4 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="text-blue-500 w-8 h-8"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        {iconMap[name] || <Code2 />}
      </motion.div>
      <div className="flex-1">
        <span className="text-gray-700 font-medium">{name}</span>
      </div>
    </motion.div>
  );
};

export default SkillIcon;