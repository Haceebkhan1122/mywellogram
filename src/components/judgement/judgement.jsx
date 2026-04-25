
import { Container, Row, Col } from 'react-bootstrap'
import judgementimg from "../../assets/images/svg/judgement.svg"
import "./judgement1.scss"
import { isMobile } from 'react-device-detect'
function judgement({item}) {
    return (
        <section className='judgement' id="stigma">
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className='boxjudg'>
                            <Row>
                                <Col lg={6} className="secondCol my-auto">
                                    <h2>{item?.data?.[0]?.heading}</h2>
                                    <p className='mt-3 pera'>   {item?.data?.[0]?.description}</p>
                                    {!isMobile && (<><h6> {item?.data?.[0]?.sub_head} </h6>
                                        <ul className='commonHeartRiskList '>
                                            {item?.data?.slice(1)?.map((el, idx) => {
                                                return (<>
                                                    <li className="riskWeb" key={idx}>
                                                        <img src={el?.image} className='img-fluid'></img>
                                                        <p> {el?.heading} </p>
                                                    </li>
                                                </>)
                                            })}
                                    </ul></>)}

                                </Col>
                                <Col lg={6} className="text-center">
                                    <img src={item?.data?.[0]?.image} className='img-fluid imgVV'></img>
                                    {isMobile && (<><h6> {item?.data?.[0]?.sub_head} </h6>
                                        <ul className='commonHeartRiskList '>
                                            {item?.data?.slice(1)?.map((el, idx) => {
                                                return (<>
                                                    <li className='riskMobile' key={idx}>
                                                        <img src={el?.image} className='img-fluid'></img>
                                                        <p> {el?.heading} </p>
                                                    </li>
                                                </>)
                                            })}
                                        </ul></>)}
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default judgement
