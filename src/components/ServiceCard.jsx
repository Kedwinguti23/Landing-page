import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, X } from 'lucide-react'

const ServiceCard = ({ title, description, longDescription, icon: Icon, color, image }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -6,
      transition: { duration: 0.3 }
    }
  }

  return (
    <>
      <motion.div
        variants={cardVariants}
        whileHover="hover"
        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
      >
        <div className="p-6 pb-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center mb-4`}>
            <Icon className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>

        <div className="px-6 pb-6 flex items-center justify-between">
          <motion.button
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-1.5 text-sm font-medium border border-gray-300 rounded-lg px-3.5 py-1.5 text-gray-700 hover:border-primary hover:text-primary transition-colors"
          >
            Más información
            <ChevronDown className="w-4 h-4" />
          </motion.button>

          <motion.span
            whileHover={{ x: 3, color: '#7c3aed' }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="text-xs text-gray-400 cursor-pointer font-medium"
          >
            Reservar →
          </motion.span>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {image ? (
                <div className="relative w-full h-52 overflow-hidden">
                  <img src={image} alt={title} className="w-full h-full object-cover" />
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
              <div className="p-6 relative">
                {!image && (
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{title}</h3>
                </div>

                <div className="border-t border-gray-100 mb-4" />

                <p className="text-gray-700 text-sm leading-relaxed mb-6">
                  {longDescription}
                </p>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full bg-primary text-white font-medium py-2.5 rounded-xl hover:opacity-90 transition-opacity"
                >
                  Reservar cita
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ServiceCard