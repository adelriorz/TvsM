import { FC, useState } from 'react'
import Profile from '../components/admin/Profile.tsx'
import Orders from '../components/admin/Orders.tsx'
import Data from '../components/admin/Data.tsx'
import Events from '../components/admin/Events.tsx'

const Admin: FC = () => {
  const [selectedTab, setSelectedTab] = useState<'Profile' | 'Orders' | 'Data' | 'Events'>('Profile')

  return (
    <div className="p-24">
      <div className="flex justify-center items-center h-[150px]">
        <h1 className="text-4xl font-ldr-kaet">WELCOME, ADMIN</h1>
      </div>
      <div className="flex text-gray-600 font-mulish text-2xl">
        <button
          className={`px-4 ${selectedTab === 'Profile' ? 'border-b-2 border-tvsm-orange' : ''}`}
          onClick={() => setSelectedTab('Profile')}
        >
          Profile
        </button>
        <button
          className={`px-4 ${selectedTab === 'Orders' ? 'border-b-2 border-tvsm-orange' : ''}`}
          onClick={() => setSelectedTab('Orders')}
        >
          Orders
        </button>
        <button
          className={`px-4 ${selectedTab === 'Data' ? 'border-b-2 border-tvsm-orange' : ''}`}
          onClick={() => setSelectedTab('Data')}
        >
          Data
        </button>
        <button
          className={`px-4 ${selectedTab === 'Events' ? 'border-b-2 border-tvsm-orange' : ''}`}
          onClick={() => setSelectedTab('Events')}
        >
          Events
        </button>
      </div>
      <div className="mt-20">
        {selectedTab === 'Profile' && <Profile />}
        {selectedTab === 'Orders' && <Orders />}
        {selectedTab === 'Data' && <Data />}
        {selectedTab === 'Events' && <Events />}
      </div>
    </div>
  )
}

export default Admin
