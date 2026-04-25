import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BannerImage from "../../assets/images/svg/bannerImage.svg"
import parse from 'html-react-parser';
import "./banner.scss"

function banner({item}) {
console.log(item,'faizan')
    return (
        <section className='bannerMain'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h1> {item?.heading && parse(item?.heading) } </h1>
                        <p> {item?.description && parse(item?.description) }</p>
                    </Col>
                </Row>
            </Container>
            <div className='bannerImage'>
                <img src={item?.data?.image} className='img-fluid'></img>
            </div>
        </section>
    )
}

export default banner;