import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // UPDATE THIS ARRAY WITH YOUR ACTUAL WORK EXPERIENCE FROM RESUME
  const experiences = [
    {
      title: 'Research Project Assistant',
      company: 'Stony Brook University',
      period: 'Jun 2025 - Present',
      location: 'New York, United States · On-site',
      description: `Designing and implementing a parser that converts first-order logic formulas written in LaTeX into structured abstract syntax trees (ASTs) for integration with logic-based AI systems like ErgoAI.\n\nExploring handling of negation-as-failure and strong negation, ensuring logical accuracy and support for complex FOL constructs such as quantifiers, connectives, and implications.\n\nDeveloping custom grammars using tools like Lark and TPG to support flexible parsing and transformation into reasoning-compatible formats.\n\nFocusing on explainability in question answering and incorporating natural language processing techniques to bridge formal logic with human language inputs.\n\nCollaborating with a faculty advisor to align the system with research goals in logic-based AI, symbolic representation, and NLP-driven knowledge extraction.`,
      technologies: ['Lark', 'TPG', 'Python', 'NLP', 'ErgoAI', 'Project Management', 'Critical Thinking'],
      link: 'https://www.stonybrook.edu/'
    },
    {
      title: 'Area Office Assistant',
      company: 'Stony Brook University',
      period: 'Jun 2025 - Present',
      location: 'New York, United States · On-site',
      description: `Provided front-desk support and acted as a primary point of contact for residents, addressing inquiries and facilitating communication between students and housing staff.\n\nAssisted in coordinating residential hall activities and events, promoting a safe and welcoming community environment.\n\nManaged administrative tasks such as maintaining records, processing requests, and supporting housing operations to ensure smooth daily functioning.\n\nCollaborated with Residential Advisors (RAs) and campus security to respond promptly to resident concerns and emergencies.\n\nHelped enforce university policies to maintain a respectful and secure living environment for all residents.`,
      technologies: ['Communication', 'Management', 'Organization', 'Problem Solving'],
      link: 'https://www.stonybrook.edu/'
    },
    {
      title: 'Teaching Assistant',
      company: 'Stony Brook University',
      period: 'Aug 2024 - Dec 2024',
      location: 'United States · On-site',
      description: `Assisted in delivering course content on digital privacy, AI ethics, intellectual property, cybersecurity law, and professional responsibilities in tech.\n\nGuided over 100 students through discussions on real-world tech ethics cases, helping bridge theoretical concepts with current industry challenges.\n\nHeld weekly office hours to provide academic support, clarify readings, and facilitate deeper understanding of ethical reasoning in computing.\n\nCollaborated with the professor to design assignments and case studies related to algorithmic bias, data ethics, and responsible AI development.\n\nEvaluated essays and project submissions with a focus on critical thinking, clarity of argument, and ethical awareness.`,
      technologies: ['Teaching', 'Management', 'Ethics', 'AI', 'Cybersecurity'],
      link: 'https://www.stonybrook.edu/'
    },
    {
      title: 'Data Science Intern',
      company: 'CodeClause',
      period: 'Jan 2023 - Aug 2023',
      location: 'Hyderabad, Telangana, India · Remote',
      description: `Developed and deployed a system to extract and process user reviews from WhatsApp chats using Python and data analysis libraries.\n\nAutomated the feedback pipeline, reducing manual processing and improving efficiency by 20%.\n\nApplied text preprocessing and sentiment analysis techniques to derive insights from unstructured chat data.\n\nImproved customer engagement strategies by delivering actionable insights from user sentiment trends.`,
      technologies: ['Python', 'Automation', 'Data Analysis', 'Sentiment Analysis', 'WhatsApp API'],
      link: 'https://codeclause.com/'
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and the valuable experiences that have shaped my career in technology.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-dark-700"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-dark-900"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="card p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {experience.title}
                        </h3>
                        <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                          {experience.company}
                        </p>
                      </div>
                      <a
                        href={experience.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-gray-100 dark:bg-dark-700 hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors duration-200"
                      >
                        <FiExternalLink className="w-4 h-4" />
                      </a>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4 space-x-4">
                      <div className="flex items-center">
                        <FiCalendar className="w-4 h-4 mr-1" />
                        {experience.period}
                      </div>
                      <div className="flex items-center">
                        <FiMapPin className="w-4 h-4 mr-1" />
                        {experience.location}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 