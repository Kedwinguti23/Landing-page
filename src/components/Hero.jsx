import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Eye, ClipboardList } from 'lucide-react'
import fondoHero from '../assets/universidad-fondo.jpg'
import Button from './Button'

const features = [
  {
    icon: Eye,
    text: 'Práctica supervisada'
  },
  {
    icon: ClipboardList,
    text: 'Registro de sesiones'
  },
  {
    icon: Sparkles,
    text: 'Enfoque científico'
  }
]

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay
    }
  })
}

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative pt-28 pb-14 px-4 md:pt-32 md:pb-20 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${fondoHero})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 container mx-auto max-w-6xl">
        <div className="text-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-white">
              Facultad de Humanidades · Psicología
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-4xl sm:text-5xl md:text-7xl leading-tight font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-accent bg-clip-text text-transparent"
          >
            Aprende, observa y comprende el comportamiento humano
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="text-xl text-gray-200 max-w-2xl mx-auto mb-10"
          >
            Una plataforma diseñada para dar a conocer los servicios ofrecidos
            por la Facultad de Humanidades en la formación de estudiantes de psicología.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.3}
          >
            <Button variant="primary" size="lg">
              Explorar plataforma
            </Button>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="grid md:grid-cols-3 gap-6 mt-16 pt-8 border-t border-white/20"
          >
            {features.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 shadow-lg"
              >
                <Icon className="w-6 h-6 text-accent" />
                <span className="text-white font-medium">
                  {text}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Hero