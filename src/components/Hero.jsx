import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart, Shield } from 'lucide-react'
import Button from './Button'

const Hero = () => {
  return (
    <section id="inicio" className="pt-32 pb-20 px-4 md:pt-40 md:pb-28 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">PRINCIPALES DE CONVIVENCIA: ESPAÇO DE TI</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-gray-900"
          >
            Te ayudamos a encontrar respuestas
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Creemos que la terapia es eficaz para conectar con un terapeuta que comprenda tus emociones
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button variant="primary" size="lg">
              Primera consulta gratuita
            </Button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-gray-100"
          >
            <div className="flex items-center justify-center gap-3">
              <Heart className="w-6 h-6 text-primary" />
              <span className="text-gray-700">Atención personalizada</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              <span className="text-gray-700">Confidencialidad garantizada</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-gray-700">Método científico</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero