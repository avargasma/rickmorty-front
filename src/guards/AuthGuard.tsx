import { Navigate } from "react-router-dom";

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const isAuthenticated = localStorage.getItem('login');
  
  if(!isAuthenticated){
    return <Navigate to={'/login'} />
  }

  return <>{children}</>
  
}

export default AuthGuard