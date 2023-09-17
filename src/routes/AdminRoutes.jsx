import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoutes = ({children}) => {
    const {user} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if(isAdminLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user && isAdmin){
        return children;
    }
    return <Navigate to='/' state={{from : location}} />
};

export default AdminRoutes;