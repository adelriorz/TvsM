import { Dialog, Transition } from '@headlessui/react'
import { FC, Fragment, ReactNode } from 'react'
import Button from '../common/Button';
import modalBg from "../../assets/modalBG.jpg"
import avatarFull from "../../assets/avatarFull.png"
import arrowLeft from "../../assets/icons/ArrowLeft.svg"
import arrowRight from "../../assets/icons/ArrowRight.svg"

interface ProfileModalProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    children?: ReactNode;
}

const ProfileModal: FC<ProfileModalProps> = ({ open, setOpen, children }) => {
    return (
        <div>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-[#9d9b9b80]" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-xl bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl h-[400px] sm:h-[600px] border-[5px] border-tvsm-orange">
                                    <div className='h-full'>
                                        <img src={modalBg} alt="modalBG" className='object-cover h-full' />
                                        <div className='absolute bottom-10 left-1/2 -translate-x-1/2 z-20'>
                                            <img src={avatarFull} alt="avatar" />
                                        </div>
                                        <div className='flex items-center gap-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30'>
                                            <button>
                                                <img src={arrowLeft} alt="arrow" />
                                            </button>
                                            <div className='h-[180px] w-[180px] border-[5px] border-tvsm-orange rounded-full'>

                                            </div>
                                            <button>
                                                <img src={arrowRight} alt="arrow" />
                                            </button>
                                        </div>
                                        <div className='absolute bottom-5 left-1/2 -translate-x-1/2 z-20'>
                                            <Button text="CONFIRM" onClick={() => setOpen(false)} className="lg:w-44 w-32 lg:h-14 h-10 border-2 border-tvsm-white rounded-xl" />
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default ProfileModal