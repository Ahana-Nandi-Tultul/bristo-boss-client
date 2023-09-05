import useCart from "../../hooks/useCart";

const MyCart = () => {
    const [carts] = useCart();
    // console.log(carts)
    const totalPrice = carts.reduce((sum, item) => item.price + sum, 0)
    return (
        <div className="md:w-11/12 mx-auto w-full">  
            <div className="flex justify-between">
                <h2 className="text-3xl uppercase font-bold">Total orders: {carts.length}</h2>
                <h2 className="text-3xl uppercase font-bold">total price: ${totalPrice}</h2>
                <button className="btn bg-[#D1A054] text-white">Pay</button>
            </div>
        </div>
    );
};

export default MyCart;