import { FC, useState } from 'react'
import Button from '../common/Button.tsx'

const Teddies: FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false)

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
      className={`h-[1000px] w-1/2 bg-no-repeat bg-cover bg-center relative ${
        isHovered ? 'bg-teddies-variant' : 'bg-teddies-default'
      }`}
    >
      <Button
        text="MONSTER"
        className="w-72 h-20 text-3xl py-5 px-10 font-ldr-kaet absolute bottom-5 left-1/2 transform -translate-x-1/2"
      />
    </div>
  )
}

export default Teddies
