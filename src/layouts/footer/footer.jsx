import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import parse from 'html-react-parser';
import "./footer.scss"
import { useLocation } from 'react-router-dom';

function footer({ item }) {
    const { pathname } = useLocation();


    return (
        <div className='footerBox'>
            <Container>
                <Row>
                    <Col>
                        <div className='footer'>
                            <img src={item?.data?.[0]?.image} alt="" style={{ position: 'relative', top: pathname === '/ur' ? '3px' : '0px' }} />
                            <p><b style={{ position: 'relative', top: pathname === '/ur' ? '3px' : '0px' }}>{item?.data?.[0]?.heading && parse(item?.data?.[0]?.heading)}:</b> {item?.data?.[0]?.description && parse(item?.data?.[0]?.description)} </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default footer
