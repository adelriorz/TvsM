import { FC } from 'react'
import Button from '../common/Button.tsx'

const Register: FC = () => {
  return (
    <div className="flex justify-center items-start mt-10 h-screen-100">
      <div className="text-center mt-10">
        <h2 className="font-ldr-kaet text-5xl mt-10">WELCOME TO TVSM!</h2>
        <form>
          {/* Your input fields */}
          <div className="mt-10">
            <div className="flex flex-col">
              <input
                className="w-711 h-70 mb-4 mx-3 px-4 py-5 rounded-md border-2 border-tvsm-orange bg-tvsm-white text-center placeholder-center"
                type="text"
                placeholder="Enter your Email"
              />
              <input
                className="w-711 h-76 mb-2 mx-3 px-4 py-5 rounded-md border-2 border-tvsm-orange bg-tvsm-white text-center placeholder-center"
                type="text"
                placeholder="Re-enter your Email"
              />
            </div>
            <div className="flex justify-center">
              <input
                className="w-1/2 h-76 mb-2 px-4 m-3 py-5 rounded-md border-2 border-tvsm-orange bg-tvsm-white text-center placeholder-center"
                type="password"
                placeholder="Enter your Password"
              />
              <input
                className="w-1/2 h-76 m-3 mb-2 px-4 py-5 rounded-md border-2 border-tvsm-orange bg-tvsm-white text-center placeholder-center"
                type="text"
                placeholder="Re-enter your Password"
              />
            </div>
            <div className="flex justify-center">
              <input
                className="w-1/2 h-76 m-3 px-4 py-5 rounded-md border-2 border-tvsm-orange bg-tvsm-white text-center placeholder-center"
                type="text"
                placeholder="First Name"
              />
              <input
                className="w-1/2 h-76 px-4 m-3 py-5 rounded-md border-2 border-tvsm-orange bg-tvsm-white text-center placeholder-center"
                type="text"
                placeholder="Last Name"
              />
            </div>
          </div>
        </form>
        <div className="flex justify-center items-start">
          <Button text="SIGN UP" className="w-80 h-25 text-4xl py-6 px-4 m-3" />
          <Button text="CONTINUE AS A GEST" className="w-80 h-25 text-3xl py-2 px-4 m-3" />
        </div>
        <h3 className="font-ldr-kaet text-2xl mt-1 text-tvsm-blue">ALREADY REGISTERED? SIGN IN</h3>
      </div>
    </div>
  )
}

export default Register
