import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import parse from 'html-react-parser';
import "./trackers.scss"

function trackers({ item }) {
console.log(item,'bmi')
    return (
        <div className='trackerSection pt-120 pb-120'>
            <Container>
                <Row>
                    {item?.data?.map((el, idx) => {
                        return (<>
                            <Col lg={6} className='mb-md-0 mb-4'>
                                <div className='boxTrack' style={{backgroundColor : el?.card_1_inner_color}} >
                                    <h4>{el?.heading}</h4>
                                    <p>{el?.description && parse(el?.description)}</p>
                                    <div className='boxBottom'>
                                        <div className='leftB'>
                                            <ul className='listTools'>
                                                <li>{el?.card_1_head == 'BMI Calculator' ? <a href="#bmiForm" className='btnp01'>{el?.card_1_head}</a> : el?.card_1_head}</li>
                                                <li> {el?.card_2_head}</li>
                                                <li>{el?.card_3_head}</li>
                                            </ul>
                                            <button className='btnExp' href={el?.redirect_url} >{el?.button_text}</button>
                                        </div>
                                        <div className='imageBox'>
                                            <img src={el?.image}  className={`img-fluid ${idx === 1 ? "second-img" : ""}`} ></img>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </>)
                    })}
                </Row>
            </Container>
        </div>
    )
}

export default trackers
