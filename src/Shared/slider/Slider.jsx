import slide1 from "../../../public/image/slide1.jpg";
import slide2 from "../../../public/image/slide2.jpg";
import slide3 from "../../../public/image/slide3.jpg";
import slide4 from "../../../public/image/slide4.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { EffectFlip } from 'swiper/modules';

const Slider = () => {
    return (

        <Swiper
        className="lg:mt-0 -z-30"
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFlip]}
            spaceBetween={50}
            effect="flip"
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
        >
            <SwiperSlide>
                <img src={slide1} alt="" style={{ width: "100%", height: "100vh"}} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="" style={{ width: "100%", height: "100vh" }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" style={{ width: "100%", height: "100vh" }} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="" style={{ width: "100%", height: "100vh" }} />
            </SwiperSlide>
            ...
        </Swiper>

        // <div>
        //     <div className="carousel w-full lg:h-[500px] rounded-xl">
        //         <div id="slide1" className="carousel-item relative w-full">
        //             <img src={slide1} className="w-full" />
        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide4" className="btn btn-circle">❮</a>
        //                 <a href="#slide2" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //         <div id="slide2" className="carousel-item relative w-full">
        //             <img src={slide2} className="w-full" />
        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide1" className="btn btn-circle">❮</a>
        //                 <a href="#slide3" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //         <div id="slide3" className="carousel-item relative w-full">
        //             <img src={slide3} className="w-full" />
        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide2" className="btn btn-circle">❮</a>
        //                 <a href="#slide4" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //         <div id="slide4" className="carousel-item relative w-full">
        //             <img src={slide4} className="w-full" />
        //             <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //                 <a href="#slide3" className="btn btn-circle">❮</a>
        //                 <a href="#slide1" className="btn btn-circle">❯</a>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Slider;