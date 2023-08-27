import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleClick = ()=>{
        localStorage.setItem('login', 'true');
        navigate('/');
    }

    return (
        <div className="flex h-screen items-center justify-center">
            <button className="bg-green-500 rounded py-2 px-4" onClick={handleClick}>
                Log in
            </button>
        </div>
    )
}

export default Login