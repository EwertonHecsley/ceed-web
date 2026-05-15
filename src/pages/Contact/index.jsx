import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../../components/Button';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // WhatsApp Integration
    const phoneNumber = "5583996907686"; // Dalva
    const text = `*Novo Contato do Site*\n\n*Nome:* ${formData.name}\n*E-mail:* ${formData.email}\n*Telefone:* ${formData.phone}\n*Mensagem:* ${formData.message}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(url, '_blank');
    setSubmitted(true);
    
    // Reset form after a few seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-primary-dark mb-4"
          >
            Fale <span className="text-secondary-light">Conosco</span>
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-1.5 bg-accent-yellow mx-auto rounded-full"
          ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-primary-dark mb-8">Informações de Contato</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-secondary-light bg-opacity-10 p-3 rounded-lg text-secondary-light">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-dark">Endereço</h4>
                  <p className="text-gray-600">Rua Hildo Menezes, 557, Bela Vista, Patos - PB</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-secondary-light bg-opacity-10 p-3 rounded-lg text-secondary-light">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-dark">Telefone</h4>
                  <p className="text-gray-600">(83) 99690-7686</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-secondary-light bg-opacity-10 p-3 rounded-lg text-secondary-light">
                  <FaEnvelope className="text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-primary-dark">E-mail</h4>
                  <p className="text-gray-600">contato@ceestreladalva.com.br</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="font-bold text-primary-dark mb-4">Siga-nos</h4>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/ceestreladalva" target="_blank" rel="noreferrer" className="bg-primary-dark text-white p-3 rounded-full hover:bg-secondary-light transition-colors">
                  <FaInstagram className="text-xl" />
                </a>
                <a href="https://wa.me/5583996907686" target="_blank" rel="noreferrer" className="bg-primary-dark text-white p-3 rounded-full hover:bg-secondary-light transition-colors">
                  <FaWhatsapp className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-primary-dark p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-accent-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaWhatsapp className="text-4xl text-primary-dark" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-400">Você será redirecionado para o WhatsApp da Dalva.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-secondary-light transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">E-mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-secondary-light transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Telefone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-secondary-light transition-colors"
                      placeholder="(83) 9XXXX-XXXX"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensagem</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-secondary-light transition-colors"
                    placeholder="Como podemos ajudar?"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  label="ENVIAR MENSAGEM"
                  className="w-full"
                />
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

