import React from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import LogoHeader from '../../assets/images/logo-header.png';
import { Link } from 'react-scroll';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white py-16 border-t border-white border-opacity-5">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="space-y-6">
            <img src={LogoHeader} alt="CEED Logo" className="h-12 w-auto" />
            <p className="text-gray-400 leading-relaxed">
              Centro Educacional Estrela Dalva: Formando cidadãos e transformando o futuro através de uma educação de excelência em Patos - PB.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/ceestreladalva" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent-yellow transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="https://facebook.com/ricardo6334" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-accent-yellow transition-colors">
                <FaFacebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link to="home" smooth={true} duration={500} className="text-gray-400 hover:text-secondary-light cursor-pointer transition-colors">Início</Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} className="text-gray-400 hover:text-secondary-light cursor-pointer transition-colors">Sobre Nós</Link>
              </li>
              <li>
                <Link to="structure" smooth={true} duration={500} className="text-gray-400 hover:text-secondary-light cursor-pointer transition-colors">Estrutura</Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} className="text-gray-400 hover:text-secondary-light cursor-pointer transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contatos</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <FaWhatsapp className="text-accent-yellow" />
                <a href="https://wa.me/5583996907686" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Dalva: (83) 9.9690-7686</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaWhatsapp className="text-accent-yellow" />
                <a href="https://wa.me/5583998212733" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Ricardo: (83) 9.9821-2733</a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FaInstagram className="text-accent-yellow" />
                <a href="https://www.instagram.com/ceestreladalva" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">@ceestreladalva</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h3 className="text-xl font-bold mb-6">Matrículas Abertas</h3>
            <p className="text-gray-400 mb-6">Garanta já a vaga da sua pequena estrela em nossa instituição.</p>
            <a href="https://forms.gle/e8fAuNxiQGyvnPUa6" target="_blank" rel="noreferrer">
              <button className="bg-accent-yellow text-primary-dark font-bold py-2 px-6 rounded-lg hover:bg-yellow-400 transition-colors w-full">
                PRÉ-MATRÍCULA
              </button>
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white border-opacity-5 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} Centro Educacional Estrela Dalva. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

