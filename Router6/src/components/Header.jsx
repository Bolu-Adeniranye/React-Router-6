import { Link } from "react-router-dom"

export default function Header() {
   return (<header>
          <Link className="site-logo" to="/">#Van4Life</Link>
          <nav>
          <Link to="/host">Host</Link>
          <Link to="/about">About</Link>
          <Link to="/vans">Our Vans</Link>
          </nav>
    </header>
   )
}