import React from 'react'
import "./videoSection.scss"
import { Col, Container, Row } from 'react-bootstrap'

function videoSection({ item }) {

    return (
        <div className=' '>
            <Container >
                <Row>
                    <Col lg={12} className=''>
                        <hr className='hr1 pb-120'></hr>
                        <div className="videoBox">
                            <iframe
                                src={
                                    item?.data?.[0]?.redirect_url
                                        ?.replace("https://youtu.be/", "https://www.youtube.com/embed/")
                                        ?.split("?")[0] // remove any extra params
                                }
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default videoSection;
