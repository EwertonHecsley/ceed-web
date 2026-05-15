import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/Button';
import HeroGallery from '../../components/HeroGallery';
import { Link } from 'react-scroll';

function Home() {
  return (
    <section id="home" className="min-h-screen pt-20 flex items-center bg-primary-dark relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-secondary-light opacity-10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent-yellow opacity-5 blur-[100px] rounded-full" />
      
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center lg:text-left z-10"
        >
          <img src="/logo.png" alt="Centro Educacional Estrela Dalva" className="w-48 mb-8 mx-auto lg:mx-0" />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Nossa constelação é formada por <span className="text-accent-yellow">estrelas</span> como você.
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Oferecemos uma jornada educacional de excelência, onde cada aluno é protagonista do seu próprio brilho. Venha fazer parte da nossa história de sucesso em Patos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link to="contact" smooth={true} duration={500}>
              <Button
                label="CONHEÇA NOSSA ESCOLA"
                className="w-full sm:w-auto"
              />
            </Link>
            <a href="https://forms.gle/e8fAuNxiQGyvnPUa6" target="_blank" rel="noreferrer">
              <Button
                label="PRÉ-MATRÍCULA"
                primary={true}
                className="w-full sm:w-auto"
              />
            </a>
          </div>
        </motion.div>


        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="z-10"
        >
          <HeroGallery />
        </motion.div>


      </div>
    </section>
  );
}

export default Home;