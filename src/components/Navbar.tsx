import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CHARACTERS_PATH, FAVORITES_PATH, HOME_PATH, LOGOUT_PATH } from "../routes/constants";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const logout = () =>{
        localStorage.setItem('login', '');        
        navigate('/login');
    }

    const routes = [
        {
            path:HOME_PATH,
            name:'Home'
        },
        {
            path:CHARACTERS_PATH,
            name:'Characters'
        },
        {
            path:FAVORITES_PATH,
            name:'Favorites'
        },
    ]

    return (
        <nav className="border-b border-gray-300">
            <div className="py-4 px-10 flex justify-between items-center">
                <Link className="font-bold text-2xl tracking-widest text-green-700" to="/">
                    Rick & Morty
                </Link>
                <ul className="flex space-x-6">
                    {
                        routes.map((route, index) => (
                            <li key={index}>
                                <Link className={`hover:text-green-700 ${location.pathname === route.path ? 'text-green-700 font-bold' : ''}`} to={route.path}>
                                    {route.name}
                                </Link>
                            </li>
                        ))
                    }
                    <li key={LOGOUT_PATH}>
                        <button onClick={logout}>Logout</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar