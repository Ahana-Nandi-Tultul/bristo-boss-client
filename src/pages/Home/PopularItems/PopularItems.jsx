import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import MenuItems from "../../../shared/MenuItems/MenuItems";
import useMenu from "../../../hooks/useMenu";

const PopularItems = () => {
    const [menu] = useMenu()
    const popular = menu.filter(item => item.category === "popular");
    return (
        <div>
            <SectionTitle heading="Check it out"
            subHeading="FROM OUR MENU"></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
              {
                popular.map(item => <MenuItems 
                key={item._id}
                item = {item}
                ></MenuItems>)
              }
                
            </div> 
            <div className="flex justify-center">
                <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
            </div>
        </div>

    );
};

export default PopularItems;