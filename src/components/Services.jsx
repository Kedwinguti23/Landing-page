import React from 'react'
import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'
import ImageCarousel from './ImageCarousel'
import {
  Brain,
  Heart,
  Users,
  Baby,
  TrendingUp,
  Shield,
  BookOpen,
  Video,
} from 'lucide-react'

const servicesData = [
  {
    id: 1,
    title: 'Terapia Adultos',
    description: 'Manejar el estrés, la ansiedad o el duelo',
    longDescription: 'Tratamiento de ansiedad, depresión, duelo complicado, estrés, dependencia emocional, estrés postraumático.',
    icon: Brain,
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 2,
    title: 'Terapia Adolescentes',
    description: 'Abordaje terapéutico especializado',
    longDescription: 'Sintomatología ansiosa y depresión, TDAH, abuso de sustancias, abandono de estudios, conducta desafiante.',
    icon: Heart,
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 3,
    title: 'Terapia Infantil',
    description: 'Desarrollo y aprendizaje',
    longDescription: 'Estimulación cognitiva. Hiperactividad. Dificultad en el lenguaje.',
    icon: Baby,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 4,
    title: 'Terapia de Parejas',
    description: 'Asesoría y prevención',
    longDescription: 'Prevención de la demencia y desarrollo cognitivo. Mejora la comunicación y fortalece el vínculo.',
    icon: Users,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 5,
    title: 'Desarrollo Personal',
    description: 'Crecimiento y bienestar',
    longDescription: 'Fortalece tu inteligencia emocional, mejora tus relaciones y alcanza tus metas.',
    icon: TrendingUp,
    color: 'from-orange-500 to-amber-500'
  },
  {
    id: 6,
    title: 'Psicología Clínica',
    description: 'Atención integral',
    longDescription: 'Evaluación, diagnóstico y tratamiento de trastornos psicológicos con enfoque científico.',
    icon: Shield,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 7,
    title: 'Preespecializaciones',
    description: 'Formación avanzada en psicología',
    longDescription: 'Programas de preespecialización en áreas clínicas y aplicadas. Profundiza en tu área de interés con docentes especializados.',
    icon: BookOpen,
    color: 'from-cyan-500 to-blue-500',
    type: 'prespecialization'
  },
  {
    id: 8,
    title: 'Cámara Gesell',
    description: 'Observación y evaluación controlada',
    longDescription: 'Espacios de observación y evaluación controlada. Ideal para investigación, capacitación y diagnóstico con máxima confidencialidad.',
    icon: Video,
    color: 'from-teal-500 to-green-500',
    type: 'gesell'
  }
]

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <section id="servicios" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">

       {/* Image Carousel */}
        <ImageCarousel />


        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="text-secondary">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos para ayudarte a encontrar un camino a seguir, adaptándonos a tus necesidades individuales
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesData.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </motion.div>

        {/* Additional Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">¿No encuentras lo que buscas?</h3>
          <p className="text-gray-600 mb-4">
            Contáctanos y te ayudaremos a encontrar el tratamiento más adecuado para ti
          </p>
          <button className="text-primary font-semibold hover:text-secondary transition-colors">
            Consultar ahora →
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services