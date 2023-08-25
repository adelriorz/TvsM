import { FC, useState } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import ProfileSection from '../components/ProfileSection/ProfileSection'
import OrderSection from '../components/OrderSection/OrderSection'

const Profile: FC = () => {
    const [data, setData] = useState<string>('profile')
    return (
        <div>
            <Header />
            <div className='py-[55px] xl:px-[200px] lg:px-[40px] px-[20px]'>
                <h3 className='font-ldr-kaet lg:text-[68px] sm:text-[45px] text-[25px] text-center'>Welcome, Brruno</h3>
                <div className='flex lg:gap-[36px] gap-[20px] mt-[34px] font-mulish'>
                    <button onClick={() => setData('profile')} className={`${data === 'profile' ? "border-[#CE8C3D]" : "border-transparent"} border-b-[4px] lg:px-[34px] px-[20px] text-[#353535] lg:text-[38px] text-[24px] py-[2px]`}>Profile</button>
                    <button onClick={() => setData('orders')} className={`${data === 'orders' ? "border-[#CE8C3D]" : "border-transparent"} border-b-[4px] lg:px-[34px] px-[20px] text-[#353535] lg:text-[38px] text-[24px] py-[2px]`}>Orders</button>
                </div>
                {data === 'profile' && <ProfileSection />}
                {data === 'orders' && <OrderSection />}
            </div>
            <Footer />
        </div>
    )
}

export default Profile