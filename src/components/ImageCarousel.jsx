import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const carouselSlides = [
  {
    id: 1,
    image: '/src/assets/camara gesell.jpeg',
    label: 'Cámara de Gesell',
    caption: 'Espacio de observación unidireccional para evaluación clínica con total confidencialidad',
    tag: 'Observación'
  },
  {
    id: 2,
    image: '/src/assets/camara-gesell-2.jpeg',
    label: 'Práctica Supervisada',
    caption: 'Estudiantes de psicología desarrollan habilidades clínicas bajo la guía de docentes especializados',
    tag: 'Formación'
  },
  {
    id: 3,
    image: '/src/assets/camara-gesell-4.jpeg',
    label: 'Registro de Sesiones',
    caption: 'Documentación y análisis de sesiones terapéuticas para el aprendizaje progresivo',
    tag: 'Análisis'
  },
  {
    id: 4,
    image: '/src/assets/camara-gesell-5.jpeg',
    label: 'Enfoque Científico',
    caption: 'Metodología basada en evidencia para la evaluación, diagnóstico e intervención psicológica',
    tag: 'Investigación'
  }
]

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const intervalRef = useRef(null)

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % carouselSlides.length)
    }, 2500)
  }

  const stopInterval = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  useEffect(() => {
    if (!isHovered) startInterval()
    else stopInterval()
    return () => stopInterval()
  }, [isHovered])

  const goTo = (index) => {
    setCurrent(index)
    stopInterval()
    if (!isHovered) startInterval()
  }

  const goPrev = () => {
    setCurrent(prev => (prev - 1 + carouselSlides.length) % carouselSlides.length)
    stopInterval()
  }

  const goNext = () => {
    setCurrent(prev => (prev + 1) % carouselSlides.length)
    stopInterval()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mt-0 mb-10"
    >
      {/* Header */}
      <div className="text-center mb-8">
       
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
          Conoce nuestro <span className="text-secondary">espacio</span>
        </h3>
      </div>

      {/* Carousel Wrapper */}
      <div
        className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl"
        style={{ height: '420px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >

       {/* Flecha izquierda */}
        <button onClick={goPrev} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 transition-all duration-200 hover:scale-110">
            <ChevronLeft size={24} />
        </button>

        {/* Flecha derecha */}
        <button onClick={goNext} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full p-2 transition-all duration-200 hover:scale-110">
            <ChevronRight size={24} />
        </button>


        {/* Slides */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <img
              src={carouselSlides[current].image}
              alt={carouselSlides[current].label}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* Tag badge */}
        <div className="absolute top-5 left-5 z-20">
          <motion.span
            key={`tag-${current}`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full tracking-wider uppercase shadow"
            style={{ backgroundColor: '#f3af13', color: '#10406d' }}
          >
            {carouselSlides[current].tag}
          </motion.span>
        </div>

        {/* Slide counter */}
        <div className="absolute top-5 right-5 z-20">
          <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-3 py-1 rounded-full">
            {String(current + 1).padStart(2, '0')} / {String(carouselSlides.length).padStart(2, '0')}
          </span>
        </div>

        {/* Caption */}
        <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={`caption-${current}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <h4 className="text-white text-xl md:text-2xl font-bold mb-1">
                {carouselSlides[current].label}
              </h4>
              <p className="text-white/80 text-sm md:text-base">
                {carouselSlides[current].caption}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Dot indicators */}
          <div className="flex gap-2 mt-4">
            {carouselSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="transition-all duration-300 rounded-full focus:outline-none"
                style={{
                  height: '6px',
                  width: i === current ? '28px' : '6px',
                  backgroundColor: i === current ? '#f3af13' : 'rgba(255,255,255,0.45)',
                  border: 'none',
                  cursor: 'pointer'
                }}
                aria-label={`Ir a imagen ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Progress bar */}
        {!isHovered && (
          <div className="absolute bottom-0 left-0 right-0 z-30 h-0.5 bg-white/20">
            <motion.div
              key={`progress-${current}`}
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 2.5, ease: 'linear' }}
              style={{ backgroundColor: '#f3af13', height: '100%' }}
            />
          </div>
        )}
      </div>

      {/* Thumbnail strip */}
      <div className="flex justify-center gap-3 mt-5">
        {carouselSlides.map((slide, i) => (
          <button
            key={slide.id}
            onClick={() => goTo(i)}
            className="relative rounded-xl overflow-hidden transition-all duration-300 focus:outline-none flex-shrink-0"
            style={{
              width: '72px',
              height: '48px',
              opacity: i === current ? 1 : 0.5,
              transform: i === current ? 'scale(1.08)' : 'scale(1)',
              boxShadow: i === current ? '0 0 0 2.5px #f3af13' : 'none',
              transition: 'all 0.3s ease'
            }}
            aria-label={`Ver ${slide.label}`}
          >
            <img
              src={slide.image}
              alt={slide.label}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </motion.div>
  )
}

export default ImageCarousel