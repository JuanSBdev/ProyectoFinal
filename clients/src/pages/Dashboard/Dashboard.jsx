import DashPro from '../../components/Dashboard/DashPro'
import { useAuth0 } from '@auth0/auth0-react'; 

export default function Dashboard() {
    const { isAuthenticated, } = useAuth0()
  return (
    <div>
        {isAuthenticated ?(
            <DashPro></DashPro>
            ):(<>Access denied</>)
        }            
    </div>
  )
}
