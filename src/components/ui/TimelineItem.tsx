import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Building2, GraduationCap, MapPin } from 'lucide-react';
import { TimelineData } from '../../types';

interface TimelineItemProps {
  item: TimelineData;
  index: number;
}

const TimelineItem = ({ item, index }: TimelineItemProps) => (
  <motion.div 
    className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
  >
    <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
      <motion.div 
        className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ scale: 1.02 }}
      >
        <div className="flex items-center mb-2">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
            className="text-blue-500"
          >
            {item.type === 'education' ? (
              <GraduationCap className="w-6 h-6 mr-2" />
            ) : (
              <Building2 className="w-6 h-6 mr-2" />
            )}
          </motion.div>
          <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
        </div>
        <div className="flex items-center mb-3 text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{item.period}</span>
        </div>
        <div className="flex items-center mb-3 text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{item.organization}</span>
        </div>
        <p className="mt-2 text-gray-500">{item.description}</p>
      </motion.div>
    </div>
    <motion.div 
      className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white"
      whileHover={{ scale: 1.5 }}
      transition={{ duration: 0.2 }}
    />
  </motion.div>
);

export default TimelineItem;