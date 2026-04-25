import React from 'react'
import "./imageScetion.scss"
import { Col, Container, Row } from 'react-bootstrap'
import { isMobile } from 'react-device-detect';
import Slider from 'react-slick';

function imageScetion({ item }) {
      var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='imageSection pb-120'>
            {!isMobile && <Row>
                {item?.data?.map((el, idx) => {
                    return (<>
                        <Col lg={4} className='mb-lg-0 mb-3'>
                            <img src={el?.image} className='img-fluid imges'></img>
                        </Col>
                    </>)
                })}
            </Row>}
            {isMobile &&
                <div className="wraperSlider">
                    <Slider {...settings}>
                        {item?.data?.map((el, idx) => {
                            return (<>
                                <div className='wrapimgg'>
                                    <img src={el?.image} className='img-fluid'></img>
                                </div>
                            </>)
                        })}
                    </Slider>
                </div>
            }
        </div>
    )
}

export default imageScetion;
