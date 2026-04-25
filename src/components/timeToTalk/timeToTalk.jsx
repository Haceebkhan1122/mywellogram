import React from 'react'
import "./timeToTalk.scss"
import { Container, Row, Col } from 'react-bootstrap'
import parse from 'html-react-parser';

export default function timeToTalk({item}) {

    console.log(item,'hjasgskhjl')
    return (
        <section className='timeToTalk' id="started">
            <Container>
                <Row>
                    <Col  lg={1}></Col>
                    <Col lg={10} className={`${item?.card_type == 'widget-2' ? 'abovefirstSection' : 'belowSecond'} mainhead text-center`}>
                        <h2> {item?.heading && parse(item?.heading) } </h2>
                    </Col>
                    <Col  lg={1}></Col>
                </Row>
                <Row>
                <p className={`mt-3 ${item?.card_type == 'widget-2' ? 'secondForUrduFont' : 'forUrduFont'}`}>{item?.description && parse(item?.description) }</p>
                </Row>
                <Row>
                     <ul className='listBox '>
                            {item?.data?.slice(1)?.map((el, idx) => {
                                return (<>
                                    <li key={idx}>
                                        <img src={el?.image} className='img-fluid'></img>
                                        <p> {el?.heading} </p>
                                    </li>
                                </>)
                            })}
                        </ul>
                        <a href="#bmiForm" className='btn01'>
                            {item?.data?.[0]?.button_text}
                        </a>
                </Row>
            </Container>
        </section>
    )
}
