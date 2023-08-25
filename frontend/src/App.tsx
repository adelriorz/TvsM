import { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Universe from './pages/Universe.tsx'
import TeddiesUniverse from './components/TeddiesUniverse/TeddiesUniverse.tsx'
import MonsterUniverse from './components/MonsterUniverse/MonsterUniverse.tsx'
import SignUp from './pages/SignUp.tsx'
import Login from './pages/Login.tsx'
import Profile from './pages/Profile.tsx'
import Games from './pages/Games.tsx'
import Admin from './pages/Admin.tsx'
import Shop from './pages/Shop.tsx'
import ItemDetail from './pages/ItemDetail.tsx'
import TrackYourOrder from './pages/TrackYourOrder.tsx'

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/universe" element={<Universe />} />
        <Route path="/universe/teddies" element={<TeddiesUniverse />} />
        <Route path="/universe/monster" element={<MonsterUniverse />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/track-your-order" element={<TrackYourOrder />} />
        <Route path="/games" element={<Games />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/item/:id" element={<ItemDetail />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Router>
  )
}

export default App
