
const MenuItems = ({item}) => {
    const {_id, name, recipe, image, price} = item
    return (
        <div className="flex gap-4">
            <img src={image} alt="" className="w-[118px] h-[104px] border border-black" 
            style={{borderRadius : "0 200px 200px 200px"}} />
            <div>
                <h2>{name} ------------------</h2>
                <p>{recipe}</p>
            </div>
            <p className="text-warning">${price}</p>
         </div>
    );
};

export default MenuItems;