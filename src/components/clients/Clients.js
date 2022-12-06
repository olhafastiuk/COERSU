import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';

import './clients.css';
import { useEffect, useState } from 'react';

export default function Clients() {
    const [slidesPerView, setSlidesPerView] = useState(5);

    const checkDevice = () => {
        if (window.innerWidth >= 1200) {
            setSlidesPerView(5);
        } else if (window.innerWidth <= 1200 && window.innerWidth >= 600) {
            setSlidesPerView(3.5);
        } else if (window.innerWidth <= 600) {
            setSlidesPerView(2.5);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', checkDevice);
        return () => {
            window.removeEventListener('resize', checkDevice);
        };
    });
    return (
        <div id="clients">
            <h1>who we worked with</h1>
            <div className="mainBlock">
                <Swiper
                    spaceBetween={20}
                    slidesPerView={slidesPerView}
                    navigation={{
                        prevEl: '.arrow-prev',
                        nextEl: '.arrow-next',
                    }}
                    freeMode={true}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Navigation, FreeMode, Pagination]}
                    className="mySwiper">
                    <SwiperSlide>
                        <div>
                            <img
                                src={require('../images/clients/Rectangle.jpg')}
                            />
                            <span>Google</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img
                                src={require('../images/clients/Rectangle-1.jpg')}
                            />
                            <span>tesla</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img
                                src={require('../images/clients/Rectangle-2.jpg')}
                            />
                            <span>red bull</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img
                                src={require('../images/clients/Rectangle-3.jpg')}
                            />
                            <span>la coste</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img
                                src={require('../images/clients/Rectangle-4.jpg')}
                            />
                            <span>airbnb</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img
                                src={require('../images/clients/Rectangle.jpg')}
                            />
                            <span>Google</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img
                                src={require('../images/clients/Rectangle-1.jpg')}
                            />
                            <span>tesla</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <img
                                src={require('../images/clients/Rectangle-2.jpg')}
                            />
                            <span>red bull</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="arrows">
                    <svg
                        className="arrow-prev"
                        viewBox="0 0 265 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0.292893 6.79289C-0.0976311 7.18342 -0.0976311 7.81658 0.292893 8.20711L6.65685 14.5711C7.04738 14.9616 7.68054 14.9616 8.07107 14.5711C8.46159 14.1805 8.46159 13.5474 8.07107 13.1569L2.41421 7.5L8.07107 1.84315C8.46159 1.45262 8.46159 0.819456 8.07107 0.428932C7.68054 0.0384079 7.04738 0.0384079 6.65685 0.428932L0.292893 6.79289ZM265 6.5L1 6.5V8.5L265 8.5V6.5Z"
                            fill="#F8F8F8"
                        />
                    </svg>
                    <svg
                        className="arrow-next"
                        viewBox="0 0 265 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M264.707 8.20711C265.098 7.81658 265.098 7.18342 264.707 6.79289L258.343 0.428932C257.953 0.0384078 257.319 0.0384078 256.929 0.428932C256.538 0.819457 256.538 1.45262 256.929 1.84315L262.586 7.5L256.929 13.1569C256.538 13.5474 256.538 14.1805 256.929 14.5711C257.319 14.9616 257.953 14.9616 258.343 14.5711L264.707 8.20711ZM0 8.5H264V6.5H0L0 8.5Z"
                            fill="#F8F8F8"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
