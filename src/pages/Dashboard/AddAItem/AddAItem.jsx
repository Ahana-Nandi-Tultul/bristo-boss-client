import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/sectionTitle/sectionTitle";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddAItem = () => {
    const {register, handleSubmit,  formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`
    const onSubmit = (data) => {
        console.log(data)
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgRes => {
            console.log(imgRes);
            if(imgRes.success){
                const imgURL = imgRes.data.display_url;
                console.log(imgURL);
                const {name, price, category, recipe} = data;
                const newItem = {name, price:parseFloat(price), category, recipe, image: imgURL};
                console.log(newItem);
            }
        })
    }
    return (
        <div className="w-full p-4">
            <SectionTitle heading="What's new?" subHeading="ADD AN ITEM"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-fulls">
                    <label className="label">
                        <span className="label-text font-semibold">Recipes Name*</span>
                    </label>
                    <input type="text" placeholder="Recipes Name"
                    {...register("name", { required: true, maxLength: 150 }) }
                     className="input input-bordered w-full" />
                     {errors.name && <p className="text-red-700">Recipes Name field is required</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select className="select select-bordered w-full" {...register("category")}>
                            <option>Salads</option>
                            <option>Pizzas</option>
                            <option>Soups</option>
                            <option>Desserts</option>
                            <option>Drinks</option>
                        </select>
                    </div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" placeholder="Price" 
                        {...register("price")}
                        className="input input-bordered w-full" />
                        {errors.price && <p className="text-red-700">Price field is required</p>}

                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details*</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24"
                    {...register("recipe")}
                     placeholder="Recipe Details"></textarea>
                    {errors.recipe && <p className="text-red-700">Recipes Details field is required</p>}
                </div>
                <div className="form-control my-4">
                    <input type="file" {...register("image")} className="file-input file-input-bordered w-full max-w-xs" />
                    {errors.image && <p className="text-red-700">Recipes Image field is required</p>}
                </div>
                <input type="submit" value="Add item"  className="btn bg-orange-700 text-white"/>
            </form>
        </div>
    );
};

export default AddAItem;