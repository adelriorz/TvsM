import { FC } from 'react'
import Header from '../components/common/Header.tsx'
import Footer from '../components/common/Footer.tsx'
import logo from '../assets/logo.svg'
import cards from '../assets/cards.png'
import box from '../assets/box.png'
import Button from '../components/common/Button.tsx'

const Games: FC = () => {
  return (
    <div className="flex flex-col gap-16">
      <Header />
      <div className="flex justify-center items-center h-[120px]">
        <h1 className="font-ldr-kaet text-4xl">Games</h1>
      </div>
      <div className="flex gap-2 mx-4">
        <div className="w-1/3 aspect-square flex flex-col gap-2">
          <div className="h-1/2 w-full border-8 border-tvsm-orange bg-main-screen-variant bg-cover"></div>
          <div className="h-1/2 w-full border-8 border-tvsm-orange bg-monsters-variant bg-cover"></div>
        </div>
        <div className="w-1/3 aspect-square border-8 flex justify-center items-center border-tvsm-orange">
          <img src={logo} alt="logo" className="w-4/5" />
        </div>
        <div className="w-1/3 aspect-square flex flex-col gap-2">
          <div className="h-1/2 w-full border-8 border-tvsm-orange bg-swamp-monster-variant bg-cover"></div>
          <div className="h-1/2 w-full border-8 border-tvsm-orange bg-teddies-variant bg-cover"></div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="aspect-video mx-4 bg-tvsm-dark-blue rounded-2xl flex">
          <div className="w-2/5 ml-36">
            <h3 className="text-tvsm-white font-ldr-kaet text-2xl pt-32">WHAT IS IN THE BOX?</h3>
            <div className="text-tvsm-white text-xl font-mulish pt-24">
              <p>1 Rulebook;</p>
              <p>4 decks of 50 cards each (200</p>
              <p>cards);</p>
              <div className="pl-20">
                <p>2 Teddies decks;</p>
                <p>2 Monsters decks;</p>
              </div>
              <p>16 Bedroom cards;</p>
            </div>
          </div>
          <div className="w-3/5 flex flex-col items-center justify-between my-10">
            <img src={cards} alt="cards" className="w-full" />
            <Button
              text="BUY NOW"
              className="w-72 h-24 bg-tvsm-orange text-tvsm-black font-mulish text-2xl rounded-2xl"
            />
          </div>
        </div>
        <div className="aspect-video mx-4 bg-tvsm-wine-red rounded-2xl flex">
          <div className="w-3/5 flex flex-col items-center justify-between my-10">
            <img src={box} alt="box" className="w-2/3" />
            <Button
              text="BUY NOW"
              className="w-72 h-24 bg-tvsm-orange text-tvsm-black font-mulish text-2xl rounded-2xl"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div className="ml-36 mt-16">
              <h3 className="text-tvsm-white font-ldr-kaet text-2xl">OVERVIEW</h3>
              <div className="text-tvsm-white font-mulish text-xl pt-12">
                <p>2 or 4 players;</p>
                <p>30 minutes;</p>
                <p>7+ years;</p>
                <p>Real-Time Card Game</p>
              </div>
            </div>
            <div className="text-tvsm-white italic mb-6">
              <div className="flex flex-col items-center w-2/3">
                <p>Hush little kiddos,</p>
                <p>let's have some fun -</p>
                <p>Teddies will sing,</p>
                <p>and Monsters will burn!!!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-[150px]">
        <h2 className="font-ldr-kaet text-3xl">LEARN HOW TO PLAY!</h2>
      </div>
      <div className="h-[500px]"></div>
      <Footer />
    </div>
  )
}

export default Games
