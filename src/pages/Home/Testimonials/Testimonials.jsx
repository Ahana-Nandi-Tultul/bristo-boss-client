import SectionTitle from '../../../components/sectionTitle/sectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    } ,[])
    return (
        <div>
            <SectionTitle
            heading="What Our Clients Say"
            subHeading="TESTIMONIALS"
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide
                    key ={review._id}
                    review = {review}
                    >
                        <div className='mx-24 my-12 flex flex-col items-center justify-center'>
                        <Rating
                        style={{ maxWidth: 180 }}
                        value={review.rating}
                        readOnly
                        />
                            <p className='my-4'>{review.details}</p>
                            <h2 className='text-3xl text-orange-500 text-center uppercase'>{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;