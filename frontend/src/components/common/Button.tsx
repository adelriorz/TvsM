import { FC, useState } from 'react'

interface ButtonProps {
  text: string
  onClick?: () => void
  className?: string
}

const Button: FC<ButtonProps> = ({ text, onClick, className }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <button
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`border-2 lg:rounded-2xl rounded-md ${className ?? ''} ${isHovered
          ? 'bg-tvsm-white text-tvsm-orange border-tvsm-orange'
          : 'bg-tvsm-orange text-tvsm-white border-tvsm-white'
        }`}
    >
      {text}
    </button>
  )
}

export default Button
