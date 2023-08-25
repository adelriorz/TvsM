import { FC } from 'react'

interface CharacterImageProps {
  backgroundImages: string[]
}

const CharacterImage: FC<CharacterImageProps> = ({ backgroundImages }) => {
  return (
    <>
      {backgroundImages.map((backgroundImage, index) => {
        return (
          <div key={index} className={`h-[1153px] w-full bg-no-repeat bg-cover bg-center ${backgroundImage}`}></div>
        )
      })}
    </>
  )
}

export default CharacterImage
