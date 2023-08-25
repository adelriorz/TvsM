import { FC } from 'react'
import Header from '../components/common/Header.tsx'
import Footer from '../components/common/Footer.tsx'

// Sources
import PurpleDoll from '/purple-doll.png'
import BubbleChat from '/balao-de-fala.png'

// Icons
import instagramIcon from '../assets/icons/instagram.svg'
import twitterIcon from '../assets/icons/twitter.svg'
import facebookIcon from '../assets/icons/facebook.svg'
import tiktokIcon from '../assets/icons/tiktok.svg'
import discordIcon from '../assets/icons/discord.svg'

const TrackYourOrder: FC = () => {
  return (
    <>
        <Header />
        <div className="h-full text-center">
            <div className="flex justify-end items-center p-6 gap-6">
                <img src={instagramIcon} alt="instagram" className="w-6 h-6" />
                <img src={twitterIcon} alt="twitter" className="w-6 h-6" />
                <img src={facebookIcon} alt="facebook" className="w-6 h-6" />
                <img src={tiktokIcon} alt="tiktok" className="w-6 h-6" />
                <img src={discordIcon} alt="discord" className="w-6 h-6" />
            </div>
            <h2 className="font-ldr-kaet text-4xl">Track Your Order</h2>
            <form  className="text-center mt-20">
                <h4 className='font-ldr-kaet text-black text-center text-l not-italic font-normal'>Email</h4>
                <input type="email" className='h-10 flex-shrink-0 w-[450px] bg-[#F8F8E4] rounded mt-2' style={{border: "1px solid #CE8C3D"}}/>
                <h4 className='font-ldr-kaet text-black text-center text-l not-italic font-normal mt-10'>Order Number</h4>
                <input type="email" className='h-10 flex-shrink-0 bg-[#F8F8E4] w-[450px] rounded mt-2' style={{border: "1px solid #CE8C3D"}}/>
            </form>
            <button className='h-[45.964px] mb-20 w-[184.289px] rounded-[8px] bg-yellow-600 mt-3 text-orange-100 text-center text-xl not-italic' style={{border: "2px solid #F8F8E4"}}>Track</button>
            <img src={PurpleDoll} alt="" className='absolute w-[209px] top-[270px] left-[30px]'/>
            <img src={BubbleChat} className='absolute w-[209px] top-[185px] left-[150px]'></img>
            <p className='font-ldr-kaet text-black text-center text-l not-italic font-normal absolute top-[215px] left-[190px] leading-none'>CAN’T WAIT TO PLAY<br></br>WITH US HMM??</p>
            <p className='font-ldr-kaet text-black text-center text-l not-italic font-normal absolute top-[265px] left-[225px] leading-none'>HIHIHIHIHI</p>
        </div>
        
        <Footer />
    </>
  )
}

export default TrackYourOrder
