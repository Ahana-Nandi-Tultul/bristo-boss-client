import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../shared/Footer/Footer';
import Navber from '../shared/Navber/Navber';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') ||
    location.pathname.includes('login')
    return (
        <div>
        { noHeaderFooter || <Navber></Navber>}
            <Outlet></Outlet>
        { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;