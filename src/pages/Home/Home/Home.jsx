import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Description from "../Description/Description";
import Featured from "../Featured/Featured";
import PopularItems from "../PopularItems/PopularItems";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Category></Category>
            <Description></Description>
            <PopularItems></PopularItems>
            <Featured></Featured>
        </>
    );
};

export default Home;