import { FC, useState } from 'react'
import { FaEdit } from 'react-icons/fa'
import plus from '../../assets/icons/plusIcon.png'
import profile from '../../assets/icons/ProfileIcon.png'
import Button from '../common/Button'
import ProfileModal from '../ProfileModal/ProfileModal'

const ProfileSection: FC = () => {
    const [value, setValue] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    return (
        <>
            <div className='lg:mt-[100px] mt-[50px]'>
                <div className='flex justify-between md:flex-row flex-col md:gap-5 gap-10'>
                    <div className='md:order-1 order-2'>
                        <div>
                            <h3 className='font-ldr-kaet text-[#353535] lg:text-[30px] text-[22px]'>Personal Information</h3>
                            <div className='mt-[21px]'>
                                <div className='max-w-[436px] w-full flex items-center lg:text-[30px] text-[20px] font-mulish px-3 sm:pl-8 pl-4 text-center lg:h-[75px] h-[50px] border border-tvsm-orange bg-tvsm-white rounded-[10px]'>Bruno Pelegrino de Castro</div>
                                <div className='max-w-[436px] w-full flex items-center lg:text-[30px] text-[20px] font-mulish px-3 sm:pl-8 pl-4 text-center lg:h-[75px] h-[50px] border border-tvsm-orange bg-tvsm-white rounded-[10px]'>brunocastro.pp@gmail.com</div>
                                <div className='max-w-[436px] w-full flex items-center lg:text-[30px] text-[20px] font-mulish px-3 sm:pl-8 pl-4 text-center lg:h-[75px] h-[50px] border border-tvsm-orange bg-tvsm-white rounded-[10px]'>+1 236 777 5899</div>
                            </div>
                        </div>
                        <div className='mt-[100px]'>
                            <div className='flex items-center gap-[18px]'>
                                <h3 className='font-ldr-kaet text-[#353535] lg:text-[30px] text-[22px]'>Addresses</h3>
                                <button>
                                    <img src={plus} className='lg:h-[30px] h-[22px] w-[22px] lg:w-[30px]' alt="" />
                                </button>
                            </div>
                            <div className='mt-[21px] font-mulish'>
                                <div className='max-w-[611px] h-fit lg:text-[30px] text-[20px] font-mulish px-4 py-3 border border-tvsm-orange bg-tvsm-white rounded-[10px]'>
                                    <div className='bg-[#0CFF07] text-[#353535] w-max lg:text-[28px] text-[24px] px-[20px] rounded-[5px]'>primary</div>
                                    <p>
                                        <h3>Bruno Pelegrino de Castro</h3>
                                        <h3>321 - 3890 Carrigan Ct</h3>
                                        <h3>Burnaby, Canada, British Columbia</h3>
                                        <h3>V3N 4J1</h3>
                                    </p>
                                    <div className='flex justify-end'>
                                        <button><FaEdit className="text-tvsm-orange" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-[100px] mb-10'>
                            <div className='flex items-center gap-[18px]'>
                                <h3 className='font-ldr-kaet text-[#353535] lg:text-[30px] text-[22px]'>Payment Methods</h3>
                                <button onClick={() => setValue(true)}>
                                    <img src={plus} className='lg:h-[30px] h-[22px] w-[22px] lg:w-[30px]' alt="" />
                                </button>
                            </div>
                            <div className='mt-[21px] font-mulish'>
                                {value ?
                                    <div className='max-w-[346px] w-full'>
                                        <div>
                                            <input type="text" placeholder="Name on card" className="w-full lg:text-[30px] text-[20px] font-mulish px-3 text-center lg:h-[75px] h-[50px] border border-tvsm-orange bg-tvsm-white rounded-[10px]" />
                                        </div>
                                        <div>
                                            <input type="text" placeholder="Card Number" className="w-full lg:text-[30px] text-[20px] font-mulish px-3 text-center lg:h-[75px] h-[50px] border border-tvsm-orange bg-tvsm-white rounded-[10px]" />
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div>
                                                <input type="text" placeholder="Exp. Date" className="w-full lg:text-[30px] text-[20px] font-mulish px-3 text-center lg:h-[75px] h-[50px] border border-tvsm-orange bg-tvsm-white rounded-[10px]" />
                                            </div>
                                            <div>
                                                <input type="text" placeholder="CVV" className="w-full lg:text-[30px] text-[20px] font-mulish px-3 text-center lg:h-[75px] h-[50px] border border-tvsm-orange bg-tvsm-white rounded-[10px]" />
                                            </div>

                                        </div>
                                        <div className='flex justify-center my-5'>
                                            <Button text='SUBMIT' className='border-tvsm-orange lg:text-[32px] text-[20px] mx-auto lg:h-[63px] h-[50px] w-[221px]' />
                                        </div>
                                    </div> :
                                    <div className='max-w-[346px] lg:h-[75px] h-[50px] lg:text-[30px] text-[20px] font-mulish px-4 py-3 border border-tvsm-orange bg-tvsm-white rounded-[10px]'>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='md:order-2 order-1'>
                        <div className='flex justify-center flex-col items-center'>
                            <button className='relative group' onClick={() => setOpen(true)}>
                                <img src={profile} className='lg:w-[300px] w-[150px] group-hover:opacity-50' alt="" />
                                <div className='hidden group-hover:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                                    <FaEdit className="text-[#ce8c3d] text-[125px]" />
                                </div>
                            </button>
                            <h3 className='font-ldr-kaet text-[#353535] lg:text-[30px] text-[22px] text-center'>Your Avatar</h3>
                        </div>
                    </div>
                </div>
            </div>
            <ProfileModal open={open} setOpen={setOpen} />
        </>
    )
}

export default ProfileSection