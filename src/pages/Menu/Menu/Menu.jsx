import { Helmet } from 'react-helmet-async';
import menuImg from '../../../assets/menu/banner3.jpg';
import Cover from '../../../shared/Cover/Cover';
import SectionTitle from '../../../components/sectionTitle/sectionTitle';
import useMenu from '../../../hooks/useMenu';
import Menucategory from '../MenuCategory/Menucategory';
import dessert from '../../../assets/menu/dessert-bg.jpeg';
import pizza from '../../../assets/menu/pizza-bg.jpg';
import salad from '../../../assets/menu/salad-bg.jpg';
import soup from '../../../assets/menu/soup-bg.jpg';

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === "offered");
    const desserts = menu.filter(item => item.category === "dessert");
    const pizzas = menu.filter(item => item.category === "pizza");
    const salads = menu.filter(item => item.category === "salad");
    const soups = menu.filter(item => item.category === "soup");
    return (
        <div>
            <Helmet>
                <title>Bristo Boss || Menu</title>
            </Helmet>
            <Cover img={menuImg} title="OUR MENU" main={true}></Cover>
            <SectionTitle heading="Don't miss"subHeading="TODAY'S OFFER" ></SectionTitle>
            <Menucategory items={offered} ></Menucategory>
            {/* desserts */}
            <Menucategory items={desserts} coverImg={dessert} title="dessert"></Menucategory>
            {/* pizza */}
            <Menucategory items={pizzas} coverImg={pizza} title="pizza"></Menucategory>
            <Menucategory items={salads} coverImg={salad} title="salad"></Menucategory>
            <Menucategory items={soups} coverImg={soup} title="soup"></Menucategory>

        </div>
    );
};

export default Menu;