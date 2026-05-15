import React from 'react';
import { motion } from 'framer-motion';
import { FaBookReader, FaFlask, FaSchool, FaGamepad, FaBasketballBall, FaLeaf } from 'react-icons/fa';

import img1 from '../../../assets/images/estrutura/areaExterna.jpg';
import img2 from '../../../assets/images/estrutura/areaExterna2.jpg';
import img3 from '../../../assets/images/estrutura/areaExterna3.jpg';
import img4 from '../../../assets/images/estrutura/salaMaternal3Anos.jpg';
import img5 from '../../../assets/images/estrutura/salaMaternalzinho.jpg';
import img6 from '../../../assets/images/estrutura/salaPrimeiroAno2.jpg';

const CardsGallery = () => {
  const items = [
    {
      img: img4,
      icon: <FaSchool className="text-2xl text-accent-yellow" />,
      title: "Salas de Aula",
      desc: "Amplas, climatizadas e equipadas com recursos modernos para um aprendizado dinâmico."
    },
    {
      img: img6,
      icon: <FaFlask className="text-2xl text-accent-yellow" />,
      title: "Laboratórios",
      desc: "Espaços dedicados à experimentação e descoberta, estimulando o pensamento científico."
    },
    {
      img: img5,
      icon: <FaBookReader className="text-2xl text-accent-yellow" />,
      title: "Biblioteca",
      desc: "Um acervo rico e variado em um ambiente tranquilo, perfeito para mergulhar no mundo da leitura."
    },
    {
      img: img1,
      icon: <FaGamepad className="text-2xl text-accent-yellow" />,
      title: "Área de Recreação",
      desc: "Parquinhos e espaços lúdicos onde a diversão e a socialização acontecem com segurança."
    },
    {
      img: img3,
      icon: <FaBasketballBall className="text-2xl text-accent-yellow" />,
      title: "Quadra Esportiva",
      desc: "Espaço para atividades físicas e esportivas, promovendo saúde e trabalho em equipe."
    },
    {
      img: img2,
      icon: <FaLeaf className="text-2xl text-accent-yellow" />,
      title: "Áreas Verdes",
      desc: "Ambientes externos integrados à natureza, proporcionando momentos de relaxamento e estudo ao ar livre."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          <div className="relative h-64 overflow-hidden">
            <img 
              src={item.img} 
              alt={item.title} 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark opacity-60"></div>
            <div className="absolute bottom-4 left-4 flex items-center gap-3">
              <div className="bg-primary-dark p-2 rounded-lg shadow-lg">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
            </div>
          </div>
          <div className="p-6">
            <p className="text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CardsGallery;

