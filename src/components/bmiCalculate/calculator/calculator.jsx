/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import "./calculator.scss";
import { Container, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import calculatorImg from "../../../assets/images/png/calculatorImg.png";
import { isMobile } from "react-device-detect";
function calculator({ item }) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [activity, setActivity] = useState("");
  const [bmi, setBmi] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!height || !weight) {
      alert("Please enter height and weight");
      return;
    }
    const heightInMeters = height / 100;
    const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(
      1
    );
    setBmi(calculatedBmi);

    if (calculatedBmi < 18.5) {
      setStatus("Underweight");
    } else if (calculatedBmi >= 18.5 && calculatedBmi <= 22.9) {
      setStatus("Normal Weight");
    } else if (calculatedBmi >= 23 && calculatedBmi <= 24.9) {
      setStatus("Overweight (At Risk)");
    } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
      setStatus("Obese – Class I");
    } else {
      setStatus("Obese – Class II");
    }
  };

  const resetForm = () => {
    setHeight("");
    setWeight("");
    setAge("");
    setGender("");
    setActivity("");
    setBmi(null);
    setStatus("");
  };

  const calcAgain = () => {
    setBmi(false);
  };

  const isUrdu =
    typeof window !== "undefined" && document.body.classList.contains("urdu");

  return (
    <div
      className="calculateBmi"
      style={{ backgroundColor: item?.data?.[0]?.card_1_inner_color }}
    >
      <Row>
        <Col lg={8}>
          <div
            className={bmi ? "calculatoBox calculatoBoxBmi" : "calculatoBox"}
          >
            <div className="leftBox">
              <img src={calculatorImg} className="img-fluid" alt="Calculator" />
            </div>
            <div className="rightBox">
              <h3>
                {isUrdu ? "اپنا بی ایم آئی چیک کریں" : "Calculate Your BMI"}{" "}
              </h3>
              {!bmi ? (
                <Form onSubmit={calculateBMI}>
                  <Row>
                    <Col lg={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="number"
                          placeholder={
                            isUrdu ? "قد (سینٹی میٹر)" : "Height (cm)"
                          }
                          value={height}
                          onChange={(e) => setHeight(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="number"
                          placeholder={isUrdu ? "وزن (کلوگرام)" : "Weight (kg)"}
                          value={weight}
                          onChange={(e) => setWeight(e.target.value)}
                        />
                      </Form.Group>
                    </Col>

                    <Col lg={6}>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="number"
                          placeholder={isUrdu ? "عمر" : "Age"}
                          value={age}
                          onChange={(e) => setAge(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Select
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      >
                        <option value="" disabled>
                          {isUrdu ? "جنس" : "Gender"}
                        </option>
                        <option value="male">{isUrdu ? "مرد" : "Male"}</option>
                        <option value="female">
                          {isUrdu ? "خاتون" : "Female"}
                        </option>
                      </Form.Select>
                    </Col>
                    <Col lg={12}>
                      <div className="buttons">
                        <button type="submit" className="calculateBtn">
                          {isUrdu ? " بی ایم آئی چیک کریں" : " Calculate BMI"}
                        </button>
                        <button
                          type="button"
                          className="reset"
                          onClick={resetForm}
                        >
                          {isUrdu ? "دوبارہ ترتیب دیں" : " Reset"}
                        </button>
                      </div>
                    </Col>
                  </Row>
                </Form>
              ) : (
                <div className="mt-3 ell">
                  <h5> {bmi}</h5>
                  <p> {status}</p>
                  {bmi && (
                    <div
                      className={`chip ${
                        bmi >= 18.5 && bmi <= 22.9
                          ? "chip-success"
                          : "chip-danger"
                      }`}
                    >
                      {bmi >= 18.5 && bmi <= 22.9
                        ? "Within Healthy Range"
                        : "Outside Healthy Range"}
                    </div>
                  )}
                </div>
              )}
              {bmi && (
                <button
                  type="submit"
                  className="calculateBtn"
                  onClick={calcAgain}
                >
                  {isUrdu ? 'دوبارہ حساب لگائیں' : 'Calculate Again'}
                </button>
              )}
            </div>
          </div>
        </Col>
        {!bmi && (
          <Col lg={4} className="my-auto">
            <div className="resultBox">
              <h6>
                {" "}
                {isUrdu
                  ? " ایشین بی ایم آئی درجہ بندی"
                  : "  Asian BMI Classifications"}{" "}
              </h6>
              <p className="forUrdu">{isUrdu ? '(پاکستانی آبادی کے لیے تجویز کردہ)' : '(recommended for the Pakistani population)'}</p>
              <ul className="resultList">
                <li>
                  <h3>{isUrdu ? 'بی ایم آئی' : 'BMI'}</h3>
                </li>
                <li>
                  <h3>{isUrdu ? 'وزن کی حالت' : 'Weight Status'}</h3>
                </li>
                <li>
                  <p>{isUrdu ? '18.5 سے کم' :'Less than 18.5'}</p>
                </li>
                <li>
                  <p>{isUrdu ? ' کم وزن' : 'Underweight'}</p>
                </li>
                <li>
                  <p>18.5 – 22.9</p>
                </li>
                <li>
                  <p>{isUrdu ? 'نارمل وزن' : 'Normal Weight'}</p>
                </li>
                <li>
                  <p>23 – 24.9</p>
                </li>
                <li>
                  <p>{isUrdu ? 'زیادہ وزن (خطرہ)' : 'Overweight (At Risk)'}</p>
                </li>
                <li>
                  <p>25 – 29.9</p>
                </li>
                <li>
                  <p>{isUrdu ? 'موٹاپا – کلاس I' : 'Obese – Class I'}</p>
                </li>
                <li>
                  <p>{isUrdu ? "موٹاپا – کلاس II" : '30 or above'}</p>
                </li>
                <li>
                  <p>{isUrdu ? 'موٹاپا – کلاس II' : 'Obese – Class II'}</p>
                </li>
              </ul>
            </div>
          </Col>
        )}
      </Row>
    </div>
  );
}

export default calculator;
