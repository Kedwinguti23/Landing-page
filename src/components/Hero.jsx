import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Eye, ClipboardList } from 'lucide-react'
import Button from './Button'

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-14 px-4 md:pt-32 md:pb-20 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: "url('/img/universidad-fondo.jpg')"
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-white">
             Facultad de Humanidades · Psicología
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-accent bg-clip-text text-transparent"
          >
            Aprende, observa y comprende el comportamiento humano
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto mb-10"
          >
            Una plataforma diseñada para dar conocer los servicios ofrecidos
            por la facultad de humanidades en la formación de estudiantes de psicología.
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/20"
          >
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 shadow-lg">
              <Eye className="w-6 h-6 text-accent" />
              <span className="text-white font-medium">Práctica supervisada</span>
            </div>

            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 shadow-lg">
              <ClipboardList className="w-6 h-6 text-accent" />
              <span className="text-white font-medium">Registro de sesiones</span>
            </div>

            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 shadow-lg">
              <Sparkles className="w-6 h-6 text-accent" />
              <span className="text-white font-medium">Enfoque científico</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero