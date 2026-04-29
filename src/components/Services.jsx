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
  Video,
  BookOpen
} from 'lucide-react'

const servicesData = [
  {
    id: 1,
    title: 'Terapia Adultos',
    description: 'Manejar el estrés, la ansiedad o el duelo',
    longDescription: 'Espacio seguro y confidencial para tratar ansiedad, depresión, duelo, estrés, dependencia emocional y trauma con terapia cognitivo-conductual y aceptación, recuperando bienestar y calidad de vida.',
    icon: Brain,
    color: 'from-purple-500 to-purple-600',
    image: 'https://psicologialevy.com/wp-content/uploads/2022/08/candid-shot-of-young-man-in-glasses-talking-about-his-problems-during-psychological-therapy-session-sitting-on-coach-while-mature-female-psychologist-with-copybook-listening-to-him-and-making-notes-1024x683.jpg'
  },
  {
    id: 2,
    title: 'Terapia Adolescentes',
    description: 'Abordaje terapéutico especializado',
    longDescription: 'Acompañamos a adolescentes con ansiedad, depresión, TDAH, consumo, baja autoestima y conducta desafiante en un espacio de confianza, ayudándoles a expresarse y desarrollar herramientas para sus retos.',
    icon: Heart,
    color: 'from-pink-500 to-rose-500',
        image: 'https://pymstatic.com/91402/psicologos-mirasierra.jpg'
      },
  {
    id: 3,
    title: 'Terapia Infantil',
    description: 'Desarrollo y aprendizaje',
    longDescription: 'Apoyamos a niños en su desarrollo emocional, cognitivo y social, atendiendo hiperactividad, atención, lenguaje, miedos y conflictos familiares o escolares, siempre en coordinación con padres y docentes.',
    icon: Baby,
    color: 'from-blue-500 to-cyan-500',
    image: 'https://www.mundopsicologos.com/site/article/39592/50664/terapia-infantil-terapia-para-padres-0_ai1.jpg'
  },
  {
    id: 4,
    title: 'Terapia de Parejas',
    description: 'Asesoría y prevención',
    longDescription: 'Acompañamos a parejas en momentos difíciles, mejorando comunicación, confianza y vínculo afectivo. También ofrecemos terapia preventiva para quienes desean crecer juntos y consolidar una relación sana.',
    icon: Users,
    color: 'from-green-500 to-emerald-500',
    image: 'https://www.unir.net/wp-content/uploads/2025/02/La-terapia-de-pareja-en-que-consiste-y-como-puede-ayudar1.jpg'
  },
  {
    id: 5,
    title: 'Desarrollo Personal',
    description: 'Crecimiento y bienestar',
    longDescription: 'Apoyamos tu desarrollo personal con técnicas para superar bloqueos, establecer límites, fortalecer autoestima y habilidades sociales, alcanzando metas personales y profesionales con mayor seguridad.',
    icon: TrendingUp,
    color: 'from-orange-500 to-amber-500',
    image: 'https://tse1.mm.bing.net/th/id/OIP.mUXvUz_6sKUmx0PJHnSM7gHaEz?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    id: 6,
    title: 'Psicología Clínica',
    description: 'Atención integral',
    longDescription: 'Realizamos evaluaciones psicológicas para diagnóstico preciso y tratamiento personalizado. Atendemos trastornos del ánimo, personalidad, fobias, TOC y sueño, con enfoque científico, ético y centrado en la persona.',
    icon: Shield,
    color: 'from-indigo-500 to-purple-500',
    image: 'https://th.bing.com/th/id/R.7afc389fb91b77cb5fbe32b2cb59d09f?rik=mvrMZiE%2b6LfUxg&pid=ImgRaw&r=0'},
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
    <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-6xl">
        {/* Contenedor del carrusel con margen inferior */}
        <div className="mb-12">
          <ImageCarousel/>
        </div>

        {/* Section Header */}
        <div id='servicios'>
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nuestros <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos para ayudarte a encontrar un camino a seguir, adaptándonos a tus necesidades individuales
          </p>
        </motion.div>
        </div>

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