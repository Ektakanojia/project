import React from 'react';
import { Calendar, Building2 } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Tech Corp',
    period: '2021 - Present',
    description: 'Led development of scalable web applications using React and Node.js.',
  },
  {
    title: 'Software Engineer',
    company: 'Innovation Labs',
    period: '2019 - 2021',
    description: 'Developed and maintained multiple client-facing applications.',
  },
  {
    title: 'Junior Developer',
    company: 'StartUp Inc',
    period: '2018 - 2019',
    description: 'Collaborated on frontend development using React and TypeScript.',
  },
];

const Experience = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Experience</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-200"></div>
          
          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center mb-2">
                      <Building2 className="w-5 h-5 text-blue-500 mr-2" />
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    </div>
                    <div className="flex items-center mb-3 text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-600">{exp.company}</p>
                    <p className="mt-2 text-gray-500">{exp.description}</p>
                  </div>
                </div>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 border-4 border-white"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;