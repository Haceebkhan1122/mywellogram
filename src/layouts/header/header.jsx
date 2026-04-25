import { Row, Col, Container } from "react-bootstrap"
import React, { useState, useEffect, useRef } from 'react'
import Logo from "../../assets/images/svg/logo.svg"
import LogoWell from "../../assets/images/png/logoWell.png"
import "./header.scss"
import { useNavigate ,useLocation } from 'react-router-dom';

function header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);          // ← add
    const [scrollDir, setScrollDir] = useState("up");             // ← optional: up/down class
    const lastY = useRef(0);
    const ticking = useRef(false);
    const [isUrdu, setIsUrdu] = useState(false);
    const navigate = useNavigate();
    const {pathname} = useLocation();

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
        return () => { document.body.style.overflow = "auto"; };
    }, [menuOpen]);

    useEffect(() => {
      if(pathname.startsWith("/ur")){
        setIsUrdu(true)
      }
      else {
        setIsUrdu(false)
      }
    }, [pathname])

    useEffect(() => {
        if (isUrdu) {
            document.body.classList.add("urdu");
        } else {
            document.body.classList.remove("urdu");
        }
    }, [isUrdu]);

    const handleChange = (e) => {
    const checked = e.target.checked;
    setIsUrdu(checked);
    if (checked) {
      if (!pathname.startsWith("/ur")) {
        navigate(`/ur${pathname === "/" ? "" : pathname}`);
      }
    } else {
      if (pathname.startsWith("/ur")) {
        navigate(pathname.replace(/^\/ur/, "") || "/");
      }
    }
  };

    // add class on scroll
    useEffect(() => {
        const onScroll = () => {
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    const y = window.scrollY || window.pageYOffset;
                    setIsScrolled(y > 10);                   
                    setScrollDir(y > lastY.current ? "down" : "up");
                    lastY.current = y;
                    ticking.current = false;
                });
                ticking.current = true;
            }
        };
        onScroll(); 
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

 function whatsappHandler() {
    let t = {
      welcomeMessage: "Hello",
      whatsAppNumber: '021111455455'
    }
    window.open(`https://wa.me/${t.whatsAppNumber}?text=` + encodeURIComponent(t?.welcomeMessage || "hello"), "_blank");
  }

    return (
        <>
            <div className="topBar">
                <Container fluid>
                    <Row className="align-items-center">
                        <Col lg={3} xs={7}>
                            <div className="phoneNum">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M16.625 17.5C14.8889 17.5 13.1736 17.1215 11.4792 16.3646C9.78472 15.6076 8.24306 14.5347 6.85417 13.1458C5.46528 11.7569 4.39236 10.2153 3.63542 8.52083C2.87847 6.82639 2.5 5.11111 2.5 3.375C2.5 3.125 2.58333 2.91667 2.75 2.75C2.91667 2.58333 3.125 2.5 3.375 2.5H6.75C6.94444 2.5 7.11806 2.56597 7.27083 2.69792C7.42361 2.82986 7.51389 2.98611 7.54167 3.16667L8.08333 6.08333C8.11111 6.30556 8.10417 6.49306 8.0625 6.64583C8.02083 6.79861 7.94444 6.93056 7.83333 7.04167L5.8125 9.08333C6.09028 9.59722 6.42014 10.0938 6.80208 10.5729C7.18403 11.0521 7.60417 11.5139 8.0625 11.9583C8.49306 12.3889 8.94444 12.7882 9.41667 13.1562C9.88889 13.5243 10.3889 13.8611 10.9167 14.1667L12.875 12.2083C13 12.0833 13.1632 11.9896 13.3646 11.9271C13.566 11.8646 13.7639 11.8472 13.9583 11.875L16.8333 12.4583C17.0278 12.5139 17.1875 12.6146 17.3125 12.7604C17.4375 12.9062 17.5 13.0694 17.5 13.25V16.625C17.5 16.875 17.4167 17.0833 17.25 17.25C17.0833 17.4167 16.875 17.5 16.625 17.5ZM5.02083 7.5L6.39583 6.125L6.04167 4.16667H4.1875C4.25694 4.73611 4.35417 5.29861 4.47917 5.85417C4.60417 6.40972 4.78472 6.95833 5.02083 7.5ZM12.4792 14.9583C13.0208 15.1944 13.5729 15.3819 14.1354 15.5208C14.6979 15.6597 15.2639 15.75 15.8333 15.7917V13.9583L13.875 13.5625L12.4792 14.9583Z" fill="white" />
                                </svg>
                                    <p style={{cursor: 'pointer'}} onClick={whatsappHandler} >021-111-455-455</p>                                
                            </div>
                        </Col>
                        <Col lg={3} className="ms-auto" xs={5}>
                            <div className="form-check form-switch">
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                                    Eng
                                </label>

                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="flexSwitchCheckDefault"
                                    checked={isUrdu}
                                    onChange={handleChange}
                                />

                                <label className="form-check-label1" htmlFor="flexSwitchCheckDefault">
                                    اردو
                                </label>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <header className={`wellogramHeader ${isScrolled ? "is-scrolled" : ""}`}>
                <Container fluid>
                    <Row className="align-items-center">
                        <Col xs={1} className="d-lg-none text-end">
                            <span className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>  </span>
                        </Col>
                        <Col xs={11} lg={2} style={{ textAlign: "center" }}>
                            <img src={Logo} className="img-fluid imgLogo"></img>
                        </Col>
                        <Col lg={8} className="d-none d-lg-flex justify-content-center">
                            <nav>
                                <a
                                    href="#obesity"
                                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                >
                                    {isUrdu ? 'موٹاپا کیا ہے؟' : 'What is obesity?'}
                                </a>

                                <a
                                    href="#factors"
                                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                >
                                    {isUrdu ? 'خطرے کے عوامل' : 'Risk Factors'}
                                </a>

                                <a
                                    href="#stigma"
                                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                >

                                    {isUrdu ? 'تاثر یا بدنامی بمقابلہ سائنس' : 'Stigma vs. Science'}

                                </a>
                                <a
                                    href="#bmiForm"
                                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                >

                                    {isUrdu ? 'بی ایم آئی کیلکولیٹ' : 'BMI Calculator'}

                                </a>
                                <a
                                    href="#resources"
                                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                                >
                                    {isUrdu ? 'آگاہی کے ذرائع' : 'Resources'}

                                </a>
                                <a
                                    href="#started"
                                    className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} >

                                    {isUrdu ? 'شروعات کریں' : 'Get Started'}

                                </a>
                            </nav>
                        </Col>
                        <Col lg={2} className="text-end mt-md-0 mt-3">
                            {isUrdu ? (
                                <a className="checkBmi" href="#bmiForm">بی ایم آئی چیک کریں</a>
                            ) :
                                <a className="checkBmi" href="#bmiForm">Check BMI</a>
                            }
                        </Col>
                    </Row>
                </Container>
                {menuOpen && (
                    <div className="mobile-nav-overlay" onClick={() => setMenuOpen(false)}></div>
                )}
                <div className={`mobile-nav-drawer ${menuOpen ? 'open' : ''}`}>
                    <div className="wrapeLogo">
                        <img src={LogoWell} alt="" className="logoWell" />
                        <span className="crosss" onClick={() => setMenuOpen(false)} >  </span>
                    </div>
                    <a href="#obesity" className="nav-link" onClick={() => setMenuOpen(false)}>
                        What is obesity?
                        <span className="rightArrow"> </span>
                    </a>
                    <a href="#factors" className="nav-link" onClick={() => setMenuOpen(false)}>Risk Factors <span className="rightArrow"> </span></a>
                    <a href="#stigma" className="nav-link" onClick={() => setMenuOpen(false)}>Stigma vs. Science <span className="rightArrow"> </span> </a>
                    <a href="#bmiForm" className="nav-link" onClick={() => setMenuOpen(false)}>BMI Calculator <span className="rightArrow"> </span> </a>
                    <a href="#resources" className="nav-link" onClick={() => setMenuOpen(false)}>Resources <span className="rightArrow"> </span> </a>
                    <a href="#started" className="nav-link" onClick={() => setMenuOpen(false)}>Get Started <span className="rightArrow"> </span> </a>
                </div>
            </header>
        </>
    )
}

export default header
