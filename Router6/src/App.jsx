import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Vans from './components/Vans/Vans'
import VanDetail from "./components/Vans/VanDetail"  
import Layout from "./components/Layout"
import Reviews from "./components/Host/Reviews" 
import Income from "./components/Host/Income"
import HostLayout from "./components/HostLayout"
import Dashboard from "./components/Host/Dashboard"

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          
            <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  }