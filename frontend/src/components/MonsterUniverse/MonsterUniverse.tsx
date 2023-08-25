import { FC } from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
import { useNavigate } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'
import monsterOne from '../../assets/MonsterUniOne.png'
import monsterTwo from '../../assets/MonsterUniTwo.png'


const MonsterUniverse: FC = () => {
    const navigate = useNavigate()
    return (
        <div>
            <Header />
            <div className='lg:py-[34px] py-[20px] lg:px-[75px] px-[20px] relative'>
                <button onClick={() => navigate(-1)} className='lg:h-[85px] lg:w-[85px] sm:h-[50px] sm:w-[50px] h-[35px] w-[35px] flex justify-center items-center bg-[#CE8C3D] lg:rounded-[20px] rounded-lg'>
                    <FiChevronLeft className="lg:text-[35px] text-[25px] text-white" />
                </button>
                <span className='absolute top-1/2 left-1/2 font-ldr-kaet lg:text-[40px] text-[25px] -translate-x-1/2 -translate-y-1/2'>MONSTER</span>
            </div>
            <div className='flex flex-col'>
                <img src={monsterOne} alt="monsterOne" />
                <img src={monsterTwo} alt="taddiesTwo" />
            </div>
            <Footer />
        </div>
    )
}

export default MonsterUniverse