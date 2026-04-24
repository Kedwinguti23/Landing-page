import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Eye, ClipboardList } from 'lucide-react'
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
            <span className="text-sm font-medium text-primary">Cámara de Gessell · Psicología</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
          >
            Aprende, observa y comprende el comportamiento humano
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            Una plataforma diseñada para el uso de la cámara de Gesell en la formación de estudiantes de psicología.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button variant="primary" size="lg">
              Explorar plataforma
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
              <Eye className="w-6 h-6 text-primary" />
              <span className="text-gray-700">Práctica supervisada</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <ClipboardList className="w-6 h-6 text-primary" />
              <span className="text-gray-700">Registro de sesiones</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Sparkles className="w-6 h-6 text-primary" />
              <span className="text-gray-700">Enfoque científico</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero