import React from "react";
import "./obesityRising.scss";
import { Container, Row, Col } from "react-bootstrap";
import parse from "html-react-parser";
import { isMobile } from "react-device-detect";
import Slider from "react-slick";

function obesityRising({ item }) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "15px",
        centerMode: true,
    };

    return (
        <section className="obesityRising pt-120" id="factors">
            <Container>
                <Row>
                    <Col lg={10} className="text-center headingFont mx-auto">
                        <h2>
                            {item?.heading && parse(item?.heading)}
                        </h2>
                        <p className="mt-3 pera">
                            {item?.description &&
                                parse(item?.description)}
                        </p>
                    </Col>
                    <Row className="webboxDirection">
                        {!isMobile &&
                            item?.data?.map((el, idx) => (
                                <Col lg={4} key={idx}>
                                    <div className="box01 webbox01">
                                        <img src={el?.image} className="img-fluid" alt="" />
                                        <h5>{el?.heading}</h5>
                                        <p>{el?.description}</p>
                                    </div>
                                </Col>
                            ))}
                    </Row>
                    {isMobile && (
                        <div className="wraperSlider">
                            <Slider {...settings}>
                                {item?.data?.slice(1)?.map((el, idx) => {
                                    return (
                                        <>
                                            <div className="box01">
                                                <img src={el?.image} className="img-fluid"></img>
                                                <h5>{el?.heading}</h5>
                                                <p>{el?.description}</p>
                                            </div>
                                        </>
                                    );
                                })}
                            </Slider>
                        </div>
                    )}
                </Row>
            </Container>
        </section>
    );
}

export default obesityRising;
