import logo from "./arceus.webp";
import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar() {
  return <nav className="nav">
    <Link to="/" className="site-title">
      <img src={logo} className="homelogo"/> Arceus de Zona sur
    </Link>
    <ul>
      <CustomLink to="/tabladetipos">Tabla de tipos</CustomLink>
      <CustomLink to="/pokedex">Pokedex</CustomLink>
    </ul>
  </nav>
}

function CustomLink({ to, children, ...props}: {to: any, children: any}) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true})
  return (
    <li className={ isActive ? "active" : "" }>
      <Link to={to} {... props }>
        {children} 
      </Link>
    </li>
  )
}