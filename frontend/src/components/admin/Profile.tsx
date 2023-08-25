import { FC } from 'react'

const Profile: FC = () => {
  return (
    <div className="w-96">
      <div className="flex justify-between items-center">
        <h2 className="font-ldr-kaet text-2xl">PERSONAL INFORMATION</h2>
        <i className="fas fa-edit"></i>
      </div>
      <div className="flex flex-col">
        <input
          className="h-16 w-96 rounded-md border-2 border-tvsm-orange bg-tvsm-white text-center font-mulish"
          type="text"
          value="Bruno Mars"
        />
        <input
          className="h-16 w-96 rounded-md border-2 border-tvsm-orange bg-tvsm-white text-center font-mulish"
          type="text"
          value="brunocatro.pp@gmail.com"
        />
        <input
          className="h-16 w-96 rounded-md border-2 border-tvsm-orange bg-tvsm-white text-center font-mulish"
          type="text"
          value="08123456789"
        />
        <input
          className="h-16 w-96 rounded-md border-2 border-tvsm-orange bg-tvsm-white text-center font-mulish"
          type="text"
          placeholder="Emplyee ID"
        />
      </div>
    </div>
  )
}

export default Profile
