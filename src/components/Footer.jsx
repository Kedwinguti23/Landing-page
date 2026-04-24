import React from 'react'
import { Brain, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'
import { motion } from 'framer-motion'    

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer id="contacto" className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-white">Think U</span>
            </div>
            <p className="text-sm leading-relaxed">
              Te ayudamos a encontrar respuestas y un camino a seguir para tu bienestar emocional.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-primary transition-colors">Terapia Adultos</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terapia Adolescentes</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terapia Infantil</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terapia de Parejas</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>2668-3700</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@thinkupsicologia.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Campus Universitario, San Miguel</span>
              </li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="text-white font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.instagram.com/univosm/"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.facebook.com/UNIVOSM/"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://x.com/univosm"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </motion.a>
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold text-white mb-2">Primera consulta gratuita</p>
              <button className="bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg text-sm transition-colors w-full">
                Reservar cita
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {currentYear} Think U Psicología. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer