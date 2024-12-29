import React from 'react';
import TimelineItem from './ui/TimelineItem';
import { experienceData, educationData } from '../data/timelineData';

interface TimelineProps {
  type: 'experience' | 'education';
}

const Timeline = ({ type }: TimelineProps) => {
  const data = type === 'experience' ? experienceData : educationData;
  const title = type === 'experience' ? 'Experience' : 'Education';

  return (
    <section className="py-20 bg-white" id={type}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">{title}</h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200" />
          <div className="space-y-12">
            {data.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;