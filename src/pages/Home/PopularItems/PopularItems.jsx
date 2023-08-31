import SectionTitle from "../../../components/sectionTitle/sectionTitle";
import { useEffect, useState } from "react";
import MenuItems from "../../../shared/MenuItems/MenuItems";

const PopularItems = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const menuItems = data.filter(item => item.category === "popular")
            setItems(menuItems)
        })
        .catch(error => console.log(error))
    },[])
    return (
        <div>
            <SectionTitle heading="Check it out"
            subHeading="FROM OUR MENU"></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {
                items.map(item => <MenuItems 
                key={item._id}
                item = {item}
                ></MenuItems>)
              }
                
            </div>
        </div>
    );
};

export default PopularItems;