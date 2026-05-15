import React from 'react';
import { motion } from 'framer-motion';
import CardsGallery from './CardsGallery';

export default function Structure() {
  return (
    <div id="structure" className="relative bg-primary-dark py-24 overflow-hidden">
      {/* Decorative SVG/Shapes could go here, but let's keep it clean with dominance of dark blue */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary-light rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-yellow rounded-full blur-[150px] opacity-20"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Nossa <span className="text-accent-yellow">Estrutura</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1.5 bg-secondary-light mx-auto rounded-full mb-8"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Oferecemos um ambiente seguro, moderno e estimulante, projetado para potencializar o aprendizado e a criatividade dos nossos alunos.
          </motion.p>
        </div>

        <section className="mt-12">
          <CardsGallery />
        </section>
      </div>
    </div>
  )
}