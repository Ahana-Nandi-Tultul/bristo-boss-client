import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Description from "../Description/Description";
import Featured from "../Featured/Featured";
import PopularItems from "../PopularItems/PopularItems";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Bristo Boss || Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Description></Description>
            <PopularItems></PopularItems>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </>
    );
};

export default Home;