import React from "react";
import "./cta.scss";
import { Col, Container, Row } from "react-bootstrap";
import ctaimage from "../../assets/images/svg/ctaimage.svg";
function cta({ item }) {
  const isUrdu =
    typeof window !== "undefined" && document.body.classList.contains("urdu");

  return isUrdu ? (
    <div className="ctaSection pb-120">
      <Container>
        <Row>
          <Col>
            <div
              className="boxCta01Urdu"
              style={{
                backgroundColor: item?.data?.[0]?.card_1_inner_color || "",
              }}
            >
              <Row className="align-items-center h-100 ">
                <Col className="textSectionUrdu" lg={9} xs={7}>
                  <h3>{item?.data?.[0]?.heading}</h3>
                  <p> {item?.data?.[0]?.description} </p>
                </Col>
                <Col lg={3} className="ctaImageUrdu">
                  <img src={item?.data?.[0]?.image} className="img-fluid"></img>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  ) : (
    <div className="ctaSection pb-120">
      <Container>
        <Row>
          <Col>
            <div
              className="boxCta01"
              style={{
                backgroundColor: item?.data?.[0]?.card_1_inner_color || "",
              }}
            >
              <Row className="align-items-center h-100 ">
                <Col lg={3} className="ctaImage">
                  <img src={item?.data?.[0]?.image} className="img-fluid"></img>
                </Col>
                <Col className="ms-auto" lg={9}>
                  <h3>{item?.data?.[0]?.heading}</h3>
                  <p> {item?.data?.[0]?.description} </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default cta;
