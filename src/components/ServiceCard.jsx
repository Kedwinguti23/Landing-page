import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Button from './Button'

/**
 * Tarjeta de servicio individual con animación de expansión
 */
const ServiceCard = ({ title, description, longDescription, icon: Icon, color }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      y: -8,
      transition: { duration: 0.3 }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow"
    >
      <div className="p-6">
        {/* Icon */}
        <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${color} bg-opacity-10 flex items-center justify-center mb-4`}>
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        
        {/* Short Description */}
        <p className="text-gray-600 mb-4">{description}</p>
        
        {/* Expandable Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              <div className="pt-4 border-t border-gray-100">
                <p className="text-gray-700 text-sm leading-relaxed">
                  {longDescription}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Actions */}
        <div className="flex items-center justify-between mt-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>Ver menos <ChevronUp className="w-4 h-4" /></>
            ) : (
              <>Más información <ChevronDown className="w-4 h-4" /></>
            )}
          </Button>
          
          <span className="text-xs text-gray-400 cursor-pointer hover:text-primary transition-colors">
            Reservar →
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default ServiceCard