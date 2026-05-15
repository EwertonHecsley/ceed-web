import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaBullseye, FaGraduationCap, FaHistory } from 'react-icons/fa';

const About = () => {
  const cards = [
    {
      icon: <FaHistory className="text-4xl text-accent-yellow" />,
      title: "Nossa História",
      description: "Desde a nossa fundação, temos trabalhado incansavelmente para oferecer uma educação de qualidade em Patos, construindo uma trajetória de sucesso que se consolida a cada dia."
    },
    {
      icon: <FaBullseye className="text-4xl text-accent-yellow" />,
      title: "Missão",
      description: "Proporcionar a melhor experiência educacional possível, com metodologia atualizada e abrangente, acreditando que todos os alunos podem aprender e crescer em uma jornada emocionante."
    },
    {
      icon: <FaGraduationCap className="text-4xl text-accent-yellow" />,
      title: "Metodologia",
      description: "Valorizamos a autonomia, cooperação e livre expressão. Nossos professores atuam como mediadores, assegurando condições favoráveis para o desenvolvimento de capacidades essenciais."
    },
    {
      icon: <FaLightbulb className="text-4xl text-accent-yellow" />,
      title: "Diferenciais",
      description: "Foco no protagonismo do estudante, ambiente acolhedor e infraestrutura pensada para estimular a criatividade e a curiosidade natural de cada criança."
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary-dark mb-4"
          >
            Sobre <span className="text-secondary-light">Nós</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1.5 bg-accent-yellow mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-primary-dark p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}

          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-secondary-light bg-opacity-10 rounded-3xl border border-secondary-light border-opacity-20 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left"
        >
          <div>
            <h3 className="text-3xl font-bold text-primary-dark mb-2">+ de 10 Anos de História</h3>
            <p className="text-gray-600 text-lg">Formando cidadãos e transformando o futuro através da educação.</p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} className="flex-shrink-0">
             <span className="text-6xl font-black text-primary-dark">2026</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

