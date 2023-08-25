import { FC, Fragment, useState } from 'react'
import logo from '../../assets/logo.svg'
import avatar from '../../assets/avatar.png'
import cartIcon from '../../assets/icons/cart.svg'
import { Link, useNavigate } from 'react-router-dom'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoMdClose } from 'react-icons/io'
import { Dialog, Transition, Popover } from '@headlessui/react'
import useCart from '../../hooks/useCart.ts'

const Header: FC = () => {
  const [open, setOpen] = useState<boolean>(false)
  const { cartItems, fetchCart } = useCart()

  const navigate = useNavigate()

  return (
    <>
      <header className="flex justify-between items-center w-full bg-tvsm-black md:p-6 p-4">
        <div className="flex justify-between items-center xl:gap-12 gap-6">
          <Link to="/">
            <img src={logo} alt="logo" className="xl:w-full md:w-[150px] w-[100px]" />
          </Link>
          <div className="sm:flex hidden items-center xl:gap-12 gap-6">
            <Link to="/games" className="text-tvsm-white xl:text-2xl md:text-[18px] text-[16px] font-mulish">
              GAMES
            </Link>
            <Link to="/universe" className="text-tvsm-white xl:text-2xl md:text-[18px] text-[16px] font-mulish">
              TvsM UNIVERSE
            </Link>
            <Link to="/events" className="text-tvsm-white xl:text-2xl md:text-[18px] text-[16px] font-mulish">
              EVENTS
            </Link>
            <Link to="/shop" className="text-tvsm-white xl:text-2xl md:text-[18px] text-[16px] font-mulish">
              SHOP
            </Link>
          </div>
        </div>
        <div className="sm:flex hidden items-center">
          <button onClick={() => navigate('/profile')}>
            <img src={avatar} alt="avatar" className="xl:w-28 xl:h-28 w-[80px] h-[80px]" />
          </button>
          <Popover className="relative">
            <Popover.Button onClick={fetchCart}>
              <img src={cartIcon} alt="cart" className="w-12 h-12" />
            </Popover.Button>

            <Popover.Panel className="absolute -right-6 z-10 bg-[#F8F8E4] border border-tvsm-orange h-[1000px] w-[400px] rounded-2xl flex flex-col justify-between py-3">
              {cartItems.map(item => (
                <div className="flex justify-center gap-10">
                  <img
                    src={`${import.meta.env.VITE_API_ENDPOINT as string}/${item.product.filePath}`}
                    alt={item.product.name}
                    className="w-[120px] h-[120px] block object-cover"
                  />
                  <div>
                    <div className="text-2xl">{item.product.name}</div>
                    <div className="text-gray-500">{item.product.description}</div>
                    {item.product.size && <div className="text-gray-500">Size: {item.product.size}</div>}
                    <div className="text-gray-500">Quantity: {item.quantity}</div>
                    <div className="text-gray-500">${item.product.price}</div>
                  </div>
                </div>
              ))}
              <div className="flex justify-center">
                <button className="text-tvsm-white bg-tvsm-orange font-mulish text-2xl rounded-2xl p-6 w-3/5">
                  CHECK OUT
                </button>
              </div>
            </Popover.Panel>
          </Popover>
        </div>
        <div className="flex sm:hidden">
          <button onClick={() => setOpen(true)} className="px-2 py-1 border-[1px] border-[white] rounded-md">
            <HiMenuAlt3 className="text-white" />
          </button>
        </div>
      </header>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0 bg-gray-700 bg-opacity-50 transition-opacity" />
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-4">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-xs">
                    <div className="flex h-full flex-col overflow-y-scroll bg-tvsm-black py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Link to="/">
                            <img src={logo} alt="logo" className="xl:w-full md:w-[150px] w-[100px]" />
                          </Link>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              className="relative rounded-md w-max border border-white text-gray-400 hover:text-gray-500 focus:outline-none"
                              onClick={() => setOpen(false)}
                            >
                              <IoMdClose className="h-6 w-6" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-10 flex-1  px-6">
                        <div className="flex flex-col gap-4">
                          <Link
                            to="/games"
                            className="text-tvsm-white xl:text-2xl md:text-[18px] text-[16px] font-mulish"
                          >
                            GAMES
                          </Link>
                          <Link
                            to="/universe"
                            className="text-tvsm-white xl:text-2xl md:text-[18px] text-[16px] font-mulish"
                          >
                            TvsM UNIVERSE
                          </Link>
                          <Link
                            to="/events"
                            className="text-tvsm-white xl:text-2xl md:text-[18px] text-[16px] font-mulish"
                          >
                            EVENTS
                          </Link>
                          <Link
                            to="/shop"
                            className="text-tvsm-white xl:text-2xl md:text-[18px] text-[16px] font-mulish"
                          >
                            SHOP
                          </Link>
                        </div>
                        <div className="flex items-center mt-5">
                          <Popover className="relative">
                            <Popover.Button onClick={fetchCart}>
                              <img src={cartIcon} alt="cart" className="w-12 h-12" />
                            </Popover.Button>

                            <Popover.Panel className="absolute -left-6 z-10 bg-[#F8F8E4] border border-tvsm-orange h-[1000px] w-[400px] rounded-2xl flex flex-col justify-between py-3">
                              {cartItems.map(item => (
                                <div className="flex justify-center gap-10">
                                  <img
                                    src={`${import.meta.env.VITE_API_ENDPOINT as string}/${item.product.filePath}`}
                                    alt={item.product.name}
                                    className="w-[120px] h-[120px] block object-cover"
                                  />
                                  <div>
                                    <div className="text-2xl">{item.product.name}</div>
                                    <div className="text-gray-500">{item.product.description}</div>
                                    {item.product.size && (
                                      <div className="text-gray-500">Size: {item.product.size}</div>
                                    )}
                                    <div className="text-gray-500">Quantity: {item.quantity}</div>
                                    <div className="text-gray-500">${item.product.price}</div>
                                  </div>
                                </div>
                              ))}
                              <div className="flex justify-center">
                                <button className="text-tvsm-white bg-tvsm-orange font-mulish text-2xl rounded-2xl p-6 w-3/5">
                                  CHECK OUT
                                </button>
                              </div>
                            </Popover.Panel>
                          </Popover>

                          <button onClick={() => navigate('/profile')}>
                            <img src={avatar} alt="avatar" className="xl:w-28 xl:h-28 w-[80px] h-[80px]" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default Header
