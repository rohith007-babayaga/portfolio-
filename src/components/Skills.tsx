import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiCpu, FiMessageCircle, FiSettings, FiTool 
} from 'react-icons/fi';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: FiCpu,
      skills: [
        { name: 'Python (for ML/AI)', level: 90 },
        { name: 'Hugging Face Transformers', level: 85 },
        { name: 'PyTorch', level: 88 },
        { name: 'Scikit-learn', level: 80 },
        { name: 'Fine-tuning LLMs', level: 75 },
        { name: 'Multimodal Deep Learning', level: 70 },
      ]
    },
    {
      title: 'NLP & Reasoning Systems',
      icon: FiMessageCircle,
      skills: [
        { name: 'LangChain / LlamaIndex', level: 88 },
        { name: 'LaTeX to Logic Parsing (Lark/TPG)', level: 85 },
        { name: 'Prompt Engineering', level: 90 },
        { name: 'FOL to ErgoAI AST Conversion', level: 80 },
        { name: 'Text Generation / QA Systems', level: 85 },
        { name: 'Logic Programming (ErgoAI, Rulelog)', level: 75 },
      ]
    },
    {
      title: 'Dev Tools & LLM Integration',
      icon: FiSettings,
      skills: [
        { name: 'FastAPI (LLM APIs)', level: 85 },
        { name: 'Gradio (ML App UI)', level: 90 },
        { name: 'LLaMA.cpp / Ollama CLI', level: 82 },
        { name: 'Shell Scripting / CLI Automation', level: 70 },
        { name: 'VS Code / Jupyter', level: 80 },
        { name: 'Git & GitHub', level: 75 },
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: FiTool,
      skills: [
        { name: 'Transformers (Hugging Face)', level: 90 },
        { name: 'LangChain / LlamaIndex', level: 85 },
        { name: 'Lark (Parser Generator)', level: 80 },
        { name: 'TPG (Parsing & Lexing)', level: 75 },
        { name: 'Docker (Containers)', level: 65 },
        { name: 'OpenAI / Ollama API', level: 80 },
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various technologies and platforms.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="card p-6"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-lg bg-primary-100 dark:bg-primary-900 mr-4">
                  <category.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: (categoryIndex * 0.1) + (skillIndex * 0.05) 
                        }}
                        className="bg-gradient-to-r from-primary-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Other Skills & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'NumPy', 'Pandas', 'Matplotlib',
              'TensorFlow', 'Keras',
              'OpenCV', 'Mediapipe',
              'gRPC', 'REST APIs',
              'Redis', 'SQLite', 'MongoDB',
              'Cryptography (basic)', 'Shell scripting'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + (index * 0.02) }}
                className="px-4 py-2 bg-white dark:bg-dark-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-dark-600 hover:border-primary-300 dark:hover:border-primary-600 transition-colors duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 