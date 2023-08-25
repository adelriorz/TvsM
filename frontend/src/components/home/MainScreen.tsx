import { FC, useState } from 'react'
import instagramIcon from '../../assets/icons/instagram.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import facebookIcon from '../../assets/icons/facebook.svg'
import tiktokIcon from '../../assets/icons/tiktok.svg'
import discordIcon from '../../assets/icons/discord.svg'
import Button from '../common/Button.tsx'

const MainScreen: FC = () => {
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
      className={`bg-no-repeat bg-cover bg-center w-full h-screen relative ${isHovered ? 'bg-main-screen-variant' : 'bg-main-screen-default'
        }`}
    >
      <div className="flex justify-end items-center p-10 sm:gap-10 gap-5">
        <img src={instagramIcon} alt="instagram" className="sm:w-10 w-6 sm:h-10 h-6" />
        <img src={twitterIcon} alt="twitter" className="sm:w-10 w-6 sm:h-10 h-6" />
        <img src={facebookIcon} alt="facebook" className="sm:w-10 w-6 sm:h-10 h-6" />
        <img src={tiktokIcon} alt="tiktok" className="sm:w-10 w-6 sm:h-10 h-6" />
        <img src={discordIcon} alt="discord" className="sm:w-10 w-6 sm:h-10 h-6" />
      </div>
      <Button
        text="SHOP NOW"
        className="sm:w-96 w-max sm:h-28 h-fit sm:text-3xl text-xl py-5 px-10 absolute bottom-5 left-1/2 transform -translate-x-1/2"
      />
    </div>
  )
}

export default MainScreen
