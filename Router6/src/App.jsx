import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Vans from './components/Vans'
import VanDetail from "./components/VanDetail"  
import Layout from "./components/Layout"
import Dashboard from "./components/Hosts/Dashboard"
import Reviews from "./components/Hosts/Reviews" 
import Income from "./components/Hosts/Income"


export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />
            <Route path="/host" element={<Dashboard />} />
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />

          </Route>
        </Routes>
      </BrowserRouter>
    )
  }