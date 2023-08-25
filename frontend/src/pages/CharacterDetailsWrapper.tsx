import { FC, useState } from 'react'
import Header from '../components/common/Header.tsx'
import CharacterImage from '../components/universe/CharacterImage.tsx'
import Footer from '../components/common/Footer.tsx'

interface CharacterDetailsWrapperProps {
  character: 'TEDDIES' | 'MONSTERS'
}

const CharacterDetailsWrapper: FC<CharacterDetailsWrapperProps> = ({ character }) => {
  const [title, setTitle] = useState(character)
  const [backgroundImages, setBackgroundImages] = useState(
    character === 'TEDDIES'
      ? ['bg-teddies-detail-1', 'bg-teddies-detail-2']
      : ['bg-monsters-detail-1', 'bg-monsters-detail-2'],
  )

  const onClick = () => {
    if (title === 'TEDDIES') {
      setTitle('MONSTERS')
      setBackgroundImages(['bg-monsters-detail-1', 'bg-monsters-detail-2'])
    } else {
      setTitle('TEDDIES')
      setBackgroundImages(['bg-teddies-detail-1', 'bg-teddies-detail-2'])
    }
  }

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-[130px] relative">
        <button className="h-14 w-14 bg-tvsm-orange rounded-2xl absolute left-14" onClick={onClick}>
          <span className="text-tvsm-white text-2xl">&lt;</span>
        </button>
        <h1 className="font-ldr-kaet text-3xl">{title}</h1>
      </div>
      <div>
        <CharacterImage backgroundImages={backgroundImages} />
      </div>
      <Footer />
    </>
  )
}

export default CharacterDetailsWrapper
