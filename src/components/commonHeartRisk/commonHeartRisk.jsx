import React from 'react'
import "./commonHeartRisk.scss"
import { Container, Row, Col } from 'react-bootstrap'
import image01 from "../../assets/images/svg/image01.svg"
import parse from 'html-react-parser';
import { isMobile } from 'react-device-detect';

export default function commonHeartRisk({ item }) {
    return (
        <section className='commonHeartRisk' id="obesity">
            <Container>
                <Row>
                    <Col lg={5} className="order22">
                        <img src={item?.data?.[0]?.image} className='img-fluid'></img>
                        {isMobile && <h6>{item?.data?.[0]?.sub_head} </h6>}
                        {isMobile && <ul className='commonHeartRiskList da'>
                            {item?.data?.slice(1)?.map((el, idx) => {
                                return (<>
                                    <li key={idx}>
                                        <img src={el?.image} alt="" />
                                        <p>{el?.heading}</p>
                                    </li>
                                </>)
                            })}
                        </ul>}
                    </Col>

                    <Col lg={6} className="ms-auto colTwo my-auto">
                        <h2> {item?.data?.[0]?.heading && parse(item?.data?.[0]?.heading)} </h2>
                        <p className='mt-3'> {item?.data?.[0]?.description && parse(item?.data?.[0]?.description)} </p>
                        {!isMobile && <h6>{item?.data?.[0]?.sub_head}</h6>}
                        {!isMobile && <ul className='commonHeartRiskList dd'>
                            {item?.data?.slice(1)?.map((el, idx) => {
                                return (<>
                                    <li key={idx}>
                                        <img src={el?.image} alt="" />
                                        <p>{el?.heading}</p>
                                    </li>
                                </>)
                            })}
                        </ul>}
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
