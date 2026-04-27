import React from 'react'

/**
 * Componente de botón reutilizable con variantes, tamaños y estados
 * @param {Object} props
 * @param {string} props.variant - 'primary' | 'secondary' | 'outline' | 'danger'
 * @param {string} props.size - 'sm' | 'md' | 'lg'
 * @param {boolean} props.fullWidth - Si ocupa todo el ancho disponible
 * @param {boolean} props.disabled - Si el botón está desactivado
 * @param {boolean} props.loading - Si el botón está en estado de carga
 * @param {string} props.type - 'button' | 'submit' | 'reset'
 * @param {function} props.onClick - Función al hacer click
 * @param {React.ReactNode} props.children - Contenido del botón
 * @param {React.ReactNode} props.icon - Icono a mostrar (opcional)
 * @param {string} props.className - Clases CSS adicionales
 */
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
  children,
  icon = null,
  className = ''
}) => {
  const baseStyles = 'rounded-lg font-semibold transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer'
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white hover:shadow-lg hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-gray-100',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:bg-transparent',
    danger: 'bg-red-500 text-white hover:bg-red-600 hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const widthClass = fullWidth ? 'w-full' : ''
  
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      onClick={onClick}
    >
      {loading && (
        <span className="animate-spin">⏳</span>
      )}
      {icon && !loading && <span>{icon}</span>}
      {children}
    </button>
  )
}

export default Button