import { FC} from 'react';

const Faqs: FC = () => {
  // Add your login logic here


  return (
    <>
      <div className="flex justify-end items-center p-6 gap-6">
        <img src="/src/assets/icons/instagram.svg" alt="instagram" className="w-6 h-6" />
        <img src="/src/assets/icons/twitter.svg" alt="twitter" className="w-6 h-6" />
        <img src="/src/assets/icons/facebook.svg" alt="facebook" className="w-6 h-6" />
        <img src="/src/assets/icons/tiktok.svg" alt="tiktok" className="w-6 h-6" />
        <img src="/src/assets/icons/discord.svg" alt="discord" className="w-6 h-6" />
      </div>

      <div className="flex h-screen-200">
        <div className="w-full mt-10 relative">
          <h2 className="font-ldr-kaet text-center text-5xl mb-5">FAQ'S</h2>
          <div className="flex items-start space-y-4">
            <img
              src="../public/greenShadow1.png"
              alt="Image 1"
              className="w-90 h-90 rounded-md"
            />
            <div className='w-1/3 flex flex-col relative'>
              <img
                src="../public/Balao-De-Fala-PNG-Picture1.png"
                alt="Image 2"
                className="w-70 h-50 rounded-md absolute left-[-40px] "
              />
              <div className='flex flex-col relative bottom-[-400px] left-[90px] '>
                <h2 className="w-500 font-ldr-kaet text-start text-5xl mb-2 ml-10 mt-10">R</h2>
                <textarea
                  className="w-500 h-60 px-10 py-2 rounded-md text-2xl font-ldr-kaet text-tvsm-orange text-start placeholder-center focus:outline-none"
                  placeholder="Enter your message"
                  
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end ">
        <div className="w-full mt-10 relative">
          <div className="flex items-start justify-end space-y-4">
            <div className='w-1/3 flex flex-col relative order-first'>
              <img
                src="../public/Balao-De-Fala-PNG-Picture2.png"
                alt="Image 2"
                className="w-70 h-50 rounded-md absolute left-[100px] z-10"
              />
              <div className='flex flex-col relative bottom-[-400px]'>
                <h2 className="w-500 font-ldr-kaet text-start text-5xl mb-2 ml-10 mt-10">R</h2>
                <textarea
                  className="w-500 h-60 px-10 py-2 rounded-md text-2xl font-ldr-kaet text-tvsm-orange text-start placeholder-center focus:outline-none"
                  placeholder="Enter your message"
                />
              </div>
            </div>
              <img
                src="../public/monster-faqs.png"
                alt="Image 1"
                className="w-90 h-90 rounded-md mr-10 order-last"
              />
          </div>
        </div>
      </div>

    



      {/* <div className="flex justify-center h-screen-400">
        <div className="w-full mt-10">
          <h2 className="font-ldr-kaet text-center text-5xl mb-5">FAQ'S</h2>
          <div className="flex items-start space-y-4">
            <img src="../public/greenShadow1.png" alt="Image 1" className="w-90 h-90 rounded-md" />
            <div className='w-1/3 flex flex-col'>
              <img src="../public/Balao-De-Fala-PNG-Picture1.png" alt="Image 2" className="w-70 h-50 rounded-md" />
              <div className='flex flex-col'>
                <h2 className="w-500 font-ldr-kaet text-start text-5xl mb-2 ml-10 mt-10">R</h2>
                <textarea
                  className="w-500 h-60 px-4 py-2 rounded-md text-2xl font-ldr-kaet text-tvsm-orange text-start placeholder-center"
                  placeholder="Enter your message"
                />
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Faqs;
