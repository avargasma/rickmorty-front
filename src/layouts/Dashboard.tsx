import Navbar from "../components/Navbar"

interface DashboardProps {
    children: React.ReactNode;
}

const Dashboard = ({ children }: DashboardProps ) => {
  return (
    <>    
        <Navbar />
        {children}
    </>
  )
}

export default Dashboard