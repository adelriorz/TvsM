import { FC, useState } from 'react'
import Button from '../common/Button.tsx'
import { useNavigate } from 'react-router-dom'

const Teddies: FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const navigate = useNavigate()

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`md:h-[1000px] sm:h-[500px] h-[400px] lg:w-1/2 w-full bg-no-repeat bg-cover bg-center relative ${isHovered ? 'bg-teddies-variant' : 'bg-teddies-default'
        }`}
    >
      <Button
        text="TEDDIES"
        onClick={() => navigate('/universe/teddies')}
        className="lg:w-72 w-max lg:h-20 lg:text-3xl text-xl lg:py-5 py-1 px-10 font-ldr-kaet absolute bottom-5 left-1/2 transform -translate-x-1/2"
      />
    </div>
  )
}

export default Teddies
