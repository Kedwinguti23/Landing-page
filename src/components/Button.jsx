import React from 'react'

/**
 * Componente de botón reutilizable con variantes de estilo
 * @param {Object} props
 * @param {string} props.variant - 'primary' | 'secondary' | 'outline'
 * @param {string} props.size - 'sm' | 'md' | 'lg'
 * @param {boolean} props.fullWidth - Si ocupa todo el ancho disponible
 * @param {function} props.onClick - Función al hacer click
 * @param {React.ReactNode} props.children - Contenido del botón
 */
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  onClick,
  children,
  className = ''
}) => {
  const baseStyles = 'rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2'
  
  const variants = {
    primary: 'bg-primary text-white hover:shadow-lg hover:scale-105',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const widthClass = fullWidth ? 'w-full' : ''
  
  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button