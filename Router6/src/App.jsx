import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Vans from './components/Vans'
export default function App() {
    return (
      <BrowserRouter>
        <header>
          <Link className="site-logo" to="/">#Van4Life</Link>
          <nav>
          <Link to="/about">About</Link>
          <Link to="/vans">Check Out Our Vans</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
      </BrowserRouter>
    )
  }