import { Link } from "react-router-dom";
import Cover from "../../../shared/Cover/Cover";
import MenuItems from "../../../shared/MenuItems/MenuItems";

const Menucategory = ({items, title, coverImg }) => {
    return (
        <div className="my-10">
            {title && <Cover img={coverImg} title={title}></Cover>}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              {
                items.map(item => <MenuItems
                key={item._id}
                item = {item}
                ></MenuItems>)
              }
                
            </div> 
            <div className="flex justify-center">
              <Link to={`/order/${title}`}>
              <button className="btn btn-outline border-0 border-b-4">Order Now</button>
              </Link>
            </div>
        </div>
    );
};

export default Menucategory;