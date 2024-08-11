import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <section className="flex h-24 bg-slate-800 px-10 justify-between font-normal text-xl tracking-wide">
        <article className="flex items-center text-primary-400 hover:text-primary-600">
            <Link to='/' className="flex items-center gap-3">
                <img className="w-8 h-8" src="logo advanced-Photoroom.png" alt="Logo" />
                <p className="uppercase">Advance Management</p>
            </Link>
        </article>  
        <article className="flex items-center gap-8 mr-28 tracking-widest text-primary-400">
            <NavLink
              to='/'
              className={({ isActive }) => `${isActive ? 'underline-animation active text-primary-700' : 'underline-animation hover:text-primary-600'}`}
            >
              Home
            </NavLink>
            <NavLink
              to='/about'
              className={({ isActive }) => `${isActive ? 'underline-animation active text-primary-700' : 'underline-animation hover:text-primary-600'}`}
            >
              About Us
            </NavLink>
            <NavLink
              to='/contact'
              className={({ isActive }) => `${isActive ? 'underline-animation active text-primary-700' : 'underline-animation hover:text-primary-600'}`}
            >
              Contact
            </NavLink>
        </article>
        <div className="w-2"></div>
    </section>
  )
}