import { FC } from 'react'

const OrderSection: FC = () => {
    return (
        <div>
            <div className='h-[1000px]'>
                <div className="lg:mt-[100px] mt-[50px]">
                    <div>
                        <h3 className='font-ldr-kaet text-[#353535] lg:text-[30px] text-[22px]'>LasT orders</h3>
                        <div className='mt-[21px]'>
                            <div className='w-full flex items-center lg:text-[30px] text-[20px] font-mulish px-3 sm:pl-8 pl-4 text-center lg:h-[75px] h-[50px] border border-tvsm-orange bg-tvsm-white rounded-[10px]'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderSection