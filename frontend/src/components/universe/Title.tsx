import { FC } from 'react'
import instagramIcon from '../../assets/icons/instagram.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import facebookIcon from '../../assets/icons/facebook.svg'
import tiktokIcon from '../../assets/icons/tiktok.svg'
import discordIcon from '../../assets/icons/discord.svg'

const Header: FC = () => {
  return (
    <div className="md:h-60 h-40 text-center">
      <div className="flex justify-end items-center p-6 gap-6">
        <img src={instagramIcon} alt="instagram" className="w-6 h-6" />
        <img src={twitterIcon} alt="twitter" className="w-6 h-6" />
        <img src={facebookIcon} alt="facebook" className="w-6 h-6" />
        <img src={tiktokIcon} alt="tiktok" className="w-6 h-6" />
        <img src={discordIcon} alt="discord" className="w-6 h-6" />
      </div>
      <h1 className="font-ldr-kaet md:text-6xl text-3xl">CHOOSE YOUR SIDE!</h1>
    </div>
  )
}

export default Header
