import { motion } from 'framer-motion';
import { experienceData, educationData } from '../data/timelineData';

const About = () => (
  <section className="py-20 bg-gray-50" id="about">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">About Me</h2>
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="https://media.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif"
            alt="Software Engineer"
            className="rounded-lg shadow-xl w-full"
          />
        </motion.div>
        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-gray-600 mb-8">
            Frontend Developer with experience specializing in React.js, React Native, and Javascript, Redux, HTML5, CSS. I have designed full application UIs, collaborated with UI/UX and backend teams, and integrated APIs with Axios. I'm experienced with Amazon S3 for data storage and have contributed to open source through Hacktoberfest.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-4">Education</h3>
              {educationData.map((edu, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <p className="text-gray-800 font-medium">{edu.title}</p>
                  <p className="text-gray-600">{edu.organization}</p>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                </div>
              ))}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-bold text-gray-900 mb-4">Experience</h3>
              {experienceData.map((exp, index) => (
                <div key={index} className="mb-4 last:mb-0">
                  <p className="text-gray-800 font-medium">{exp.title}</p>
                  <p className="text-gray-600">{exp.organization}</p>
                  <p className="text-gray-500 text-sm">{exp.period}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;