import React from 'react'
import "./startSection.scss"
import { Container, Row, Col } from 'react-bootstrap'
import Icon21 from "../../assets/images/svg/Icon21.svg"
import Icon22 from "../../assets/images/svg/Icon22.svg"
import Icon23 from "../../assets/images/svg/Icon23.svg"
import dite from "../../assets/images/png/dite.png"
import parse from 'html-react-parser';

function StartSection({ item }) {
    return (
        <section className='startSection pt-120 pb-120'>
            <Container>
                <Row>
                    <Col lg={5} className='orrr'>
                        <img src={dite} className='img-fluid'></img>
                    </Col>
                    <Col lg={6} className='ms-auto otherpart my-auto'>
                        <h2 className='mb-4'>{item?.data?.[0]?.heading && parse(item?.data?.[0]?.heading)}</h2>
                        <p className='pera' >  {item?.data?.[0]?.description && parse(item?.data?.[0]?.description)} </p>
                        <ul className='ps-0 pt-5'>
                            {item?.data?.slice(1)?.map((el, idx) => {
                                return (<>
                                    <li key={idx} className='hk_li_style'>
                                        <img src={el?.image} className='img-fluid'></img>
                                        <p> {el?.heading} </p>
                                    </li>
                                </>)
                            })}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}

export default StartSection;
