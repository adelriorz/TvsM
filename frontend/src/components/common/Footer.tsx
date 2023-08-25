import { FC } from 'react'
import instagramIcon from '../../assets/icons/instagram.svg'
import twitterIcon from '../../assets/icons/twitter.svg'
import facebookIcon from '../../assets/icons/facebook.svg'
import tiktokIcon from '../../assets/icons/tiktok.svg'
import discordIcon from '../../assets/icons/discord.svg'
import Button from './Button.tsx'

const Footer: FC = () => {
  return (
    <footer className="bg-tvsm-black text-tvsm-white w-full relative xl:p-16 sm:p-10 p-4">
      <div className='flex justify-between items-center md:flex-row flex-col md:gap-0 sm:gap-16 gap-10'>
        <div>
          <p className="lg:text-2xl text-lg font-mulish">GET NOTIFY WHEN NEW GAMES ARRIVE!</p>
          <div className="lg:mt-6 mt-4 flex gap-2 flex-wrap">
            <input className="bg-tvsm-white text-tvsm-black px-4 py-2 xl:w-96 w-60 lg:h-14 h-10" placeholder="Enter your email" />
            <Button text="SUBSCRIBE" className="lg:w-44 w-32 lg:h-14 h-10 border-2 border-tvsm-white rounded-xl" />
          </div>
          <div className="flex items-center lg:gap-10 gap-6 lg:mt-6 mt-4">
            <img src={instagramIcon} alt="instagram" className="lg:w-10 w-6 h-10" />
            <img src={twitterIcon} alt="twitter" className="lg:w-10 w-6 h-10" />
            <img src={facebookIcon} alt="facebook" className="lg:w-10 w-6 h-10" />
            <img src={tiktokIcon} alt="tiktok" className="lg:w-10 w-6 h-10" />
            <img src={discordIcon} alt="discord" className="lg:w-10 w-6 h-10" />
          </div>
        </div>
        <div className="lg:text-xl text-base grid grid-rows-3 xl:gap-x-20 lg:gap-x-10 sm:gap-x-6 gap-x-2 xl:gap-y-8 gap-y-5 grid-flow-col">
          <div>About Us</div>
          <div>Contact Us</div>
          <div>Game Rules</div>
          <div>FAQs</div>
          <div>Privacy Policy</div>
          <div>Terms of Use</div>
          <div>Track Order</div>
        </div>
      </div>
      <p className="md:mt-20 mt-10 text-center">@ 2023 We make games</p>
    </footer>
  )
}

export default Footer
