import { NavLink } from "react-router"

export const Navbar = () => {
  return (
        <nav className="fixed top-0 left-0 w-full z-50 flex justify-center shadow-md bg-white px-6 py-4">
            <ul className="flex gap-3">
                <NavLink to={'/'} className={({isActive}) => isActive ? "text-red-500" : ""}>Home</NavLink>
                <NavLink to="/about" className={({isActive}) => isActive ? "text-red-500" : ""}>About</NavLink>
            </ul>
        </nav>
  )
}

export default Navbar