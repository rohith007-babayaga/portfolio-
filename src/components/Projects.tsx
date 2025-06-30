import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Explainable Scientific Question Answering System',
      description: 'Developed an NLP pipeline for scientific QA using retrieval-augmented generation (RAG) to answer domain-specific queries from research papers. Integrated FAISS-based dense retrieval with lightweight transformer models for scalable document search. Implemented hallucination mitigation strategies and built a clean, interactive interface using Gradio with FastAPI backend.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop&crop=center',
      technologies: ['Python', 'Transformers', 'FAISS', 'Gradio', 'FastAPI', 'RAG'],
      category: 'nlp',
      github: 'https://github.com/rohith007-babayaga/rag-qa-system',
      featured: true
    },
    {
      id: 2,
      title: 'Factual Consistency in LLMs: Reducing Hallucinations in QA Systems',
      description: 'Reduced hallucination in open-domain QA using Hugging Face transformer models via reranking and self-consistency decoding. Applied SentenceTransformer-based similarity for output selection, cutting hallucination by 40% and boosting BERTScore F1 from 0.85 to 0.93 on TriviaQA.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center',
      technologies: ['Python', 'Hugging Face', 'PyTorch', 'LLaMA-2', 'Mistral-7B', 'BERTScore'],
      category: 'nlp',
      github: 'https://github.com/rohith007-babayaga/Factual-Consistency-in-LLMs-Reducing-Hallucinations-in-QA-Systems/tree/main',
      featured: true
    },
    {
      id: 3,
      title: 'Modified Paxos | Distributed Systems',
      description: 'Designed and implemented a distributed transaction processing system for banking applications using Modified Paxos and Two-Phase Commit protocols. Developed horizontally scalable architecture with 3000 clients partitioned into shards, achieving 3500 transactions per second with high availability and consistency.',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop&crop=center',
      technologies: ['Python', 'Redis', 'gRPC', 'Paxos', 'Two-Phase Commit'],
      category: 'backend',
      github: 'https://github.com/rohith007-babayaga/Modified-2PC-paxos',
      featured: true
    },
    {
      id: 4,
      title: 'Byzantine Fault-Tolerant Distributed Transaction Processing System',
      description: 'Developed a fault-tolerant distributed system for banking applications using Linear PBFT protocol for intra-shard transactions and Two-Phase Commit for cross-shard transactions. Designed horizontally scalable architecture with Byzantine failure resilience, achieving 2000 transactions per second.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop&crop=center',
      technologies: ['Go', 'Redis', 'gRPC', 'Cryptography', 'PBFT', 'Two-Phase Commit'],
      category: 'backend',
      github: 'https://github.com/rohith007-babayaga/Modified-2PC-PBFT-',
      featured: false
    },
    {
      id: 5,
      title: 'Deep Learning-Based Predictive Skin Disease Diagnosis and Analysis',
      description: 'Developed a multimodal AI-powered skin health assessment project using advanced CNN models (Xception, DenseNet 201, ResNet50) achieving 98.8% accuracy. Enhanced YOLO algorithm for 97.8% accuracy in identifying affected skin regions. Published work in ICKECS 2024.',
      image: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322?w=400&h=250&fit=crop&crop=center',
      technologies: ['Python', 'Deep Learning', 'CNN', 'YOLO', 'SVM', 'Computer Vision'],
      category: 'ml',
      github: 'https://ieeexplore.ieee.org/document/10617139',
      featured: false
    },
    {
      id: 6,
      title: 'Singer Gender Recognition by Voice',
      description: 'Led research analysis demonstrating that language is not a barrier in predicting gender using voice features. Generated a targeted dataset of 8,000 voice features from 12 diverse languages, increasing project completion rates by 20%.',
      image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=250&fit=crop&crop=center',
      technologies: ['Python', 'R', 'Machine Learning', 'Decision Trees', 'SVM', 'Audio Processing'],
      category: 'ml',
      github: 'https://github.com/rohith007-babayaga/Singer-gender-recognition-by-voice',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'nlp', label: 'NLP & AI' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'backend', label: 'Distributed Systems' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-dark-800">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills and passion for development.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary-600 text-white text-sm rounded-full">
                    Featured
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>
                    
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                  >
                    {project.id === 5 ? <FiExternalLink className="w-4 h-4 mr-2" /> : <FiGithub className="w-4 h-4 mr-2" />}
                    {project.id === 5 ? 'Publication' : 'Code'}
                  </a>
                 
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="btn-secondary">
            View More Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 