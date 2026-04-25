import React from 'react'
import "./educationalResource.scss"
import { Container, Row, Col } from 'react-bootstrap'
import Slider from 'react-slick';
import ed1 from "../../assets/images/svg/ed1.svg"
import ed2 from "../../assets/images/svg/ed2.svg"
import ed3 from "../../assets/images/svg/ed3.svg"
import arrow from "../../assets/images/svg/arrow.svg"
import parse from 'html-react-parser';
// import Swiper from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";
import 'swiper/css';


function educationalResource({ item }) {
    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     arrows: true,
    //     autoplay: true,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //             }
    //         },
    //         {
    //             breakpoint: 600,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             }
    //         },
    //         {
    //             breakpoint: 480,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1
    //             }
    //         }
    //     ]
    // };
    return (

        <div className='educationalResourceSec pt-120 pb-120' id="resources">
            <Container>
                <Row>
                    <Col lg={10} className="text-center infoDes mx-auto">
                        <h2>
                            {item?.heading}
                        </h2>
                        <p className="pb-70">{item?.description && parse(item?.description)} </p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        {/* <Slider {...settings}>
                            {item?.data?.map((el, idx) => {
                                return (<>
                                    <div className='p-2'>
                                        <div className='boxSlide'>
                                            <div className='boxSlideImg'>
                                                <img src={el?.image} className='img-fluid imageB'></img>
                                                <img src={arrow} className='img-fluid icon01'></img>
                                            </div>
                                            <h6 className='cat'>{el?.sub_head}</h6>
                                            <h5>{el?.heading}</h5>
                                        </div>
                                    </div>
                                </>)
                            })}
                        </Slider> */}
                        <div className="sliderWrap">
                            <button className="btnPrev" aria-label="Previous">
                            </button>
                            <button className="btnNext" aria-label="Next">
                            </button>
                            <Swiper
                                modules={[Navigation, Autoplay]}
                                slidesPerView={3}
                                spaceBetween={10}
                                loop
                                navigation={{ prevEl: ".btnPrev", nextEl: ".btnNext" }}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                className="mySwiper"
                                breakpoints={{
                                    0: { slidesPerView: 1 },
                                    576: { slidesPerView: 1 },
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                            >
                                {item?.data?.map((el, idx) => {
                                    return (<>
                                        <SwiperSlide className='p-2'>
                                             <a style={{textDecoration: 'none'}} href='#' target="_blank" rel="noopener noreferrer">
                                            <div className='boxSlide'>
                                                <div className='boxSlideImg'>
                                                    <img src={el?.image} className='img-fluid imageB'></img>
                                                    <img src={arrow} className='img-fluid icon01'></img>
                                                </div>
                                                <h6 className='cat'>{el?.sub_head}</h6>
                                                <h5>{el?.heading}</h5>
                                            </div>
                                            </a>
                                        </SwiperSlide>
                                    </>)
                                })}
                            </Swiper>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default educationalResource
