import React from 'react'
import "./bmiCalculate.scss"
import { Container, Row, Col } from 'react-bootstrap'
import Calculator from "./calculator/calculator"
import parse from 'html-react-parser';

function bmiCalculate({item}) {
    return (
        <div className='bmiCalculateSection  pb-120' id="bmiForm">
            <Container>
                <Row>
                    <Col lg={8} className='mx-auto text-center'>
                        <h2> {item?.heading} </h2>
                        <p className='mb-70'>{item?.description && parse(item?.description)} </p>
                    </Col>
                    <Col lg={12}>
                        <Calculator item={item} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default bmiCalculate
