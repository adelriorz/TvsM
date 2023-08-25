import { FC } from 'react'
import Button from '../common/Button.tsx'

const Login: FC = () => {
  return (
    <div className="flex justify-center items-start mt-10 h-screen-100">
      <div className="text-center mt-10">
        <h2 className="font-ldr-kaet text-5xl mt-10">WELCOME TO TVSM!</h2>
        <form>
          {/* Your input fields */}
          <div className="mt-10">
            <div className="flex flex-col mb-5">
              <input
                className="w-711 h-70 mb-4 mx-3 px-4 py-5 rounded-md border-2 border-tvsm-orange bg-tvsm-white text-center font-mulish"
                type="text"
                placeholder="Enter your Email"
              />
              <input
                className="w-711 h-76 mb-2 mx-3 px-4 py-5 rounded-md border-2 border-tvsm-orange bg-tvsm-white text-center font-mulish"
                type="text"
                placeholder="Enter your Password"
              />
            </div>
          </div>
        </form>
        <div className="flex justify-center items-start">
          <Button text="LOG IN" className="w-80 h-25 text-4xl py-6 px-4 m-3" />
          <Button text="CONTINUE AS A GEST" className="w-80 h-25 text-3xl py-2 px-4 m-3" />
        </div>
        <h3 className="font-ldr-kaet text-2xl mt-1 text-tvsm-blue">ALREADY REGISTERED? SIGN IN</h3>
      </div>
    </div>
  )
}

export default Login
