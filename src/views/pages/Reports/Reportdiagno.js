import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import lablogo from "../../../ImagesDiogno/doctorlogo.png";
const Reportdiagno = () => {
  return (
    <>
      <Row>
        <Col className="invoice-wrapper" sm="12">
          <Card>
            <CardBody>
              <div>
                <Row style={{ borderBottom: "1px solid black" }}>
                  <Col style={{ borderRight: "1px dotted black" }}>
                    <Row>
                      <Col lg="4" xl="4" md="4">
                        <div>
                          <img
                            src={lablogo}
                            alt="logo"
                            style={{ width: "4rem", height: "4rem" }}
                          />
                        </div>
                      </Col>
                      <Col lg="8" xl="8" md="8">
                        <div className="text-right">
                          <h1>Ayuh Diagnostic Lab</h1>
                          <span>Powered by: Ayuh Plus</span>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                  <Col>
                    <div>
                      <span>
                        <strong>Add-</strong>M-117,Yeshwant Plaza, Opposite
                        Railway Station, Indore
                      </span>
                      <br></br>
                      <span>
                        <strong>Reg. Office:</strong>Ayuh Diagnostic Lab Pvt.
                        Ltd. Shop No. 29, Vikas Tower,
                      </span>
                      <br></br>
                      <span>
                        <strong>www.ayuhplus.in or call 789-6543-210</strong>
                      </span>
                      <br></br>
                      <span>
                        <strong>CIN No.:</strong> U72548MP2024PTC067416
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
              <div
                style={{ border: "1px solid black", paddingLeft: "5px" }}
                className="mt-3 "
              >
                <Row className="mt-1">
                  <Col lg="2" xl="2" md="2" xs="3">
                    <div>
                      <span>
                        <strong>Name</strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="4" xl="4" md="" xs="4">
                    <div>
                      <span>
                        <strong>: Mr. ANKIT SHASTRI</strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="2" xl="2" md="2" xs="3">
                    <div>
                      <span>
                        <strong>Age</strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="4" xl="4" md="" xs="4">
                    <div>
                      <span>
                        <strong>: 32 Years</strong>
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="2" xl="2" md="2" xs="3">
                    <div>
                      <span>
                        <strong>Lab No.</strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="4" xl="4" md="" xs="4">
                    <div>
                      <span>
                        <strong>: 391997540</strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="2" xl="2" md="2" xs="3">
                    <div>
                      <span>
                        <strong>Gender</strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="4" xl="4" md="" xs="4">
                    <div>
                      <span>
                        <strong>: Male</strong>
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="2" xl="2" md="2" xs="3">
                    <div>
                      <span>
                        <strong>Ref By</strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="4" xl="4" md="" xs="4">
                    <div>
                      <span>
                        <strong>: SELF</strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="2" xl="2" md="2" xs="3">
                    <div>
                      <span>
                        <strong>Reported </strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="4" xl="4" md="" xs="4">
                    <div>
                      <span>
                        <strong>: 20/05/2024 01:39:23 PM</strong>
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="2" xl="2" md="2" xs="3">
                    <div>
                      <span>
                        <strong>Collected</strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="4" xl="4" md="" xs="4">
                    <div>
                      <span>
                        <strong>: 20/05/2024 10:37:00 AM</strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="2" xl="2" md="2" xs="3">
                    <div>
                      <span>
                        <strong>Report Status</strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="4" xl="4" md="" xs="4">
                    <div>
                      <span>
                        <strong>: Final</strong>
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="2" xl="2" md="2" xs="3">
                    <div>
                      <span>
                        <strong>A/c Status</strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="4" xl="4" md="" xs="4">
                    <div>
                      <span>
                        <strong>: P</strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="2" xl="2" md="2" xs="3">
                    <div>
                      <span>
                        <strong></strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="4" xl="4" md="" xs="4">
                    <div>
                      <span>
                        <strong></strong>
                      </span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg="2" xl="2" md="2" xs="3">
                    <div>
                      <span>
                        <strong>Collected At</strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="4" xl="4" md="" xs="4">
                    <div>
                      <span>
                        <strong>
                          :Indore CC, C/o Shree Parshwanath Jain Aushadhalay
                        </strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="2" xl="2" md="2" xs="3">
                    <div>
                      <span>
                        <strong>Processed At</strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="4" xl="4" md="" xs="4">
                    <div>
                      <span>
                        <strong>: CPL Omega Tower Indore</strong>
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="mt-1">
                <Row>
                  <Col lg="4" xl="4" md="4" xs="4">
                    <div>
                      <span>
                        <strong>Test Name</strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="2" xl="2" md="2" xs="2">
                    <div>
                      <span>
                        <strong>Test Report Results</strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="2" xl="2" md="2" xs="3">
                    <div>
                      <span>
                        <strong>Unit</strong>
                      </span>
                    </div>
                  </Col>
                  <Col lg="4" xl="4" md="" xs="4">
                    <div>
                      <span>
                        <strong>Bio. Ref. Interval</strong>
                      </span>
                    </div>
                  </Col>
                </Row>
              </div>
              <div style={{ border: "1px solid black" }}>
                <span>KIDNEY FUNCTION TEST</span>
                <div style={{ paddingLeft: "10px" }}>
                  <Row>
                    <Col lg="4" xl="4" md="4" xs="4">
                      <div>
                        <span>
                          <strong>CREATININE, SERUM</strong>
                        </span>
                        <span>
                          <br></br>
                          <small>(Jaffe Compensated)</small>
                        </span>
                      </div>
                    </Col>
                    <Col lg="2" xl="2" md="2" xs="2">
                      <div>
                        <span>1.08</span>
                      </div>
                    </Col>
                    <Col lg="2" xl="2" md="2" xs="3">
                      <div>
                        <span>mg/dl</span>
                      </div>
                    </Col>
                    <Col lg="4" xl="4" md="" xs="4">
                      <div>
                        <span>0.9 - 1.3</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" xl="4" md="4" xs="4">
                      <div>
                        <span>
                          <strong>Urea</strong>
                        </span>
                        <span>
                          <br></br>
                          <small>(Urease UV)</small>
                        </span>
                      </div>
                    </Col>
                    <Col lg="2" xl="2" md="2" xs="2">
                      <div>
                        <span>20.00</span>
                      </div>
                    </Col>
                    <Col lg="2" xl="2" md="2" xs="3">
                      <div>
                        <span>mg/dl</span>
                      </div>
                    </Col>
                    <Col lg="4" xl="4" md="" xs="4">
                      <div>
                        <span>19 - 44</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" xl="4" md="4" xs="4">
                      <div>
                        <span>
                          <strong>Urea Nitrogen Blood</strong>
                        </span>
                        <span>
                          <br></br>
                          <small>(Urease Colorimetric)</small>
                        </span>
                      </div>
                    </Col>
                    <Col lg="2" xl="2" md="2" xs="2">
                      <div>
                        <span>9.35</span>
                      </div>
                    </Col>
                    <Col lg="2" xl="2" md="2" xs="3">
                      <div>
                        <span>mg/dl</span>
                      </div>
                    </Col>
                    <Col lg="4" xl="4" md="" xs="4">
                      <div>
                        <span>6.00 - 20.00</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" xl="4" md="4" xs="4">
                      <div>
                        <span>
                          <strong>URIC ACID, SERUM</strong>
                        </span>
                        <span>
                          <br></br>
                          <small>(Enzymatic Colorimetric)</small>
                        </span>
                      </div>
                    </Col>
                    <Col lg="2" xl="2" md="2" xs="2">
                      <div>
                        <span>7.10</span>
                      </div>
                    </Col>
                    <Col lg="2" xl="2" md="2" xs="3">
                      <div>
                        <span>mg/dl</span>
                      </div>
                    </Col>
                    <Col lg="4" xl="4" md="" xs="4">
                      <div>
                        <span>3.4 - 7</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" xl="4" md="4" xs="4">
                      <div>
                        <span>
                          <strong>BUN/Creatinine</strong>
                        </span>
                        <span></span>
                      </div>
                    </Col>
                    <Col lg="2" xl="2" md="2" xs="2">
                      <div>
                        <span>8.66</span>
                      </div>
                    </Col>
                    <Col lg="2" xl="2" md="2" xs="3">
                      <div>
                        <span></span>
                      </div>
                    </Col>
                    <Col lg="4" xl="4" md="" xs="4">
                      <div>
                        <span></span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" xl="4" md="4" xs="4">
                      <div>
                        <span>
                          <strong>Estimated GFR</strong>
                        </span>
                        <span>
                          <br></br>
                          <small>(Calculated)</small>
                        </span>
                      </div>
                    </Col>
                    <Col lg="2" xl="2" md="2" xs="2">
                      <div>
                        <span>93.51</span>
                      </div>
                    </Col>
                    <Col lg="2" xl="2" md="2" xs="3">
                      <div>
                        <span>ml/min/1.73m</span>
                      </div>
                    </Col>
                    <Col lg="4" xl="4" md="" xs="4">
                      <div>
                        <span> 90</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" xl="4" md="4" xs="4">
                      <div>
                        <span>
                          <strong>Sodium</strong>
                        </span>
                        <span>
                          <br></br>
                          <small>(ISe)</small>
                        </span>
                      </div>
                    </Col>
                    <Col lg="2" xl="2" md="2" xs="2">
                      <div>
                        <span>139.70</span>
                      </div>
                    </Col>
                    <Col lg="2" xl="2" md="2" xs="3">
                      <div>
                        <span>mEq/L</span>
                      </div>
                    </Col>
                    <Col lg="4" xl="4" md="" xs="4">
                      <div>
                        <span>136 - 145</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" xl="4" md="4" xs="4">
                      <div>
                        <span>
                          <strong>Ptassium</strong>
                        </span>
                        <span>
                          <br></br>
                          <small>(ISE)</small>
                        </span>
                      </div>
                    </Col>
                    <Col lg="2" xl="2" md="2" xs="2">
                      <div>
                        <span>4.23</span>
                      </div>
                    </Col>
                    <Col lg="2" xl="2" md="2" xs="3">
                      <div>
                        <span>mEq/L</span>
                      </div>
                    </Col>
                    <Col lg="4" xl="4" md="" xs="4">
                      <div>
                        <span>3.5 - 5.1</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" xl="4" md="4" xs="4">
                      <div>
                        <span>
                          <strong>Chloride</strong>
                        </span>
                        <span>
                          <br></br>
                          <small>(Indirect ISE)</small>
                        </span>
                      </div>
                    </Col>
                    <Col lg="2" xl="2" md="2" xs="2">
                      <div>
                        <span>102.90</span>
                      </div>
                    </Col>
                    <Col lg="2" xl="2" md="2" xs="3">
                      <div>
                        <span>mEq/L</span>
                      </div>
                    </Col>
                    <Col lg="4" xl="4" md="" xs="4">
                      <div>
                        <span>98 - 108</span>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg="4" xl="4" md="4" xs="4">
                      <div>
                        <span>
                          <strong>Calcium, Serum</strong>
                        </span>
                        <span>
                          <br></br>
                          <small>(NM-BAPTA)</small>
                        </span>
                      </div>
                    </Col>
                    <Col lg="2" xl="2" md="2" xs="2">
                      <div>
                        <span>139.70</span>
                      </div>
                    </Col>
                    <Col lg="2" xl="2" md="2" xs="3">
                      <div>
                        <span>mEq/L</span>
                      </div>
                    </Col>
                    <Col lg="4" xl="4" md="" xs="4">
                      <div>
                        <span>136 - 145</span>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <div className="mt-5" style={{ border: "1px solid black" }}></div>
              <div className="mt-1">
                <div style={{ marginTop: "1px dotted black" }}>
                  <span>
                    <strong style={{ color: "red" }}>Disclaimer :</strong>
                    <strong className="ml-1">
                      If tests results are alarming or unexpected, the patient
                      is strongly advised to contact the laboratory immediately
                      for possible remedial action and reconfirmation
                    </strong>
                  </span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Reportdiagno;
