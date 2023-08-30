import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../components/sectionTitle/sectionTitle';

const Category = () => {
    return (
        <section className='my-10'>
        <SectionTitle 
        heading="From 11:00am to 10:00pm"
        subHeading="ORDER ONLINE"></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={img1} alt=""/>
                    <p className='text-4xl uppercase text-center -mt-20 text-slate-500'>Salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <p className='text-4xl uppercase text-center -mt-20 text-slate-500'>Pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <p className='text-4xl uppercase text-center -mt-20 text-slate-500'>Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <p className='text-4xl uppercase text-center -mt-20 text-slate-500'>Desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <p className='text-4xl uppercase text-center -mt-20 text-slate-500'>Salads</p>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;