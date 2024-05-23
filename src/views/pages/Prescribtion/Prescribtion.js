import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const Prescribtion = () => {
  return (
    <>
      <div className="container-fluid">
        <Card>
          <CardBody>
            <Row>
              <Col lg="6" xl="6" md="6" xs="6">
                <div>
                  <p>Dr. Mohan Yadav Clinic</p>
                  <span>ABOVE BMW MUNICH MOTOR VIJAY NAGAR 452001 INDORE</span>
                </div>
              </Col>
              <Col lg="6" xl="6" md="6" xs="6">
                <div className="float-right">
                  <p>Dr. Mohan Yadav</p>
                  <span>BHMS</span>
                </div>
              </Col>
            </Row>
            <hr></hr>

            <div
              style={{
                border: "1px solid gray",
                borderRadius: "5px",
                padding: "5px",
              }}
            >
              <Row>
                <Col lg="8" xl="8" md="8" xs="7">
                  <div>
                    <span>
                      <strong>Name:</strong> Mr. Vivek Oberoi
                    </span>
                    <br></br>
                    <span>
                      <strong>Age/Sex:</strong> 29y / M
                    </span>
                    <br></br>
                    <span>
                      <strong>Office ID:</strong> SM1642
                    </span>
                    <br></br>
                  </div>
                </Col>
                <Col lg="4" xl="4" md="4" xs="5">
                  <div className="float-right">
                    <span>
                      <strong>Date:</strong> 22-05-2024 04:04 pm
                    </span>
                    <br></br>
                    <span>
                      <strong>Mobile:</strong>7896543210
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="mt-3">
              <Row>
                <Col lg="4" xl="4" md="4" xs="4">
                  <div>
                    <span>
                      <strong>Symptoms:</strong>
                    </span>
                    <br></br>
                    <span>Primary infertility</span>
                    <br></br>
                    <span>PME</span>
                  </div>
                  <div className="mt-2">
                    <span>
                      <strong>Notes:</strong>
                    </span>
                    <br></br>
                    <span>TELEPHONIC CONSULTATION</span>
                  </div>
                  <div className="mt-2">
                    <span>
                      <strong>Diagnosis:</strong>
                    </span>
                    <br></br>
                    <span>Primary infertility</span>
                  </div>
                </Col>
                <Col lg="8" xl="8" md="8" xs="8">
                  <div>
                    <table>
                      <thead className="text-center">
                        <tr
                          style={{
                            border: "1px solid gray",
                          }}
                        >
                          <th
                            scope="col"
                            style={{
                              width: "7%",
                              borderRight: "1px solid gray",
                              paddingTop: "35px",
                            }}
                          ></th>
                          <th
                            scope="col"
                            style={{
                              width: "33%",
                              borderRight: "1px solid gray",
                            }}
                          >
                            Medicine
                          </th>
                          <th scope="col" style={{ width: "10%" }}>
                            Qty
                          </th>
                          <th scope="col" style={{ width: "10%" }}>
                            Mor.
                          </th>
                          <th scope="col" style={{ width: "10%" }}>
                            Afte.
                          </th>
                          <th scope="col" style={{ width: "10%" }}>
                            Even.
                          </th>
                          <th scope="col" style={{ width: "10%" }}>
                            Frequency
                          </th>
                          <th scope="col" style={{ width: "10%" }}>
                            Duration
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        <tr
                          style={{
                            border: "1px solid gray",
                          }}
                        >
                          <td
                            style={{
                              borderRight: "1px solid gray",
                            }}
                          >
                            1
                          </td>
                          <td
                            style={{
                              borderRight: "1px solid gray",
                              textAlign: "left",
                            }}
                          >
                            Capsule ZOAZEST NUTRA
                          </td>
                          <td>1 capsules</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>Twice In Day</td>
                          <td>1 Month</td>
                        </tr>
                        <tr
                          style={{
                            border: "1px solid gray",
                          }}
                        >
                          <td
                            style={{
                              borderRight: "1px solid gray",
                            }}
                          >
                            2
                          </td>
                          <td
                            style={{
                              borderRight: "1px solid gray",
                              textAlign: "left",
                            }}
                          >
                            Capsule ZOAZEST NUTRA
                          </td>
                          <td>1 capsules</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>Twice In Day</td>
                          <td>1 Month</td>
                        </tr>
                        <tr
                          style={{
                            border: "1px solid gray",
                          }}
                        >
                          <td
                            style={{
                              borderRight: "1px solid gray",
                            }}
                          >
                            3
                          </td>
                          <td
                            style={{
                              borderRight: "1px solid gray",
                              textAlign: "left",
                            }}
                          >
                            Capsule ZOAZEST NUTRA
                          </td>
                          <td>1 capsules</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>Twice In Day</td>
                          <td>1 Month</td>
                        </tr>
                        <tr
                          style={{
                            border: "1px solid gray",
                          }}
                        >
                          <td
                            style={{
                              borderRight: "1px solid gray",
                            }}
                          >
                            4
                          </td>
                          <td
                            style={{
                              borderRight: "1px solid gray",
                              textAlign: "left",
                            }}
                          >
                            Capsule ZOAZEST NUTRA
                          </td>
                          <td>1 capsules</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>Twice In Day</td>
                          <td>1 Month</td>
                        </tr>
                        <tr
                          style={{
                            border: "1px solid gray",
                          }}
                        >
                          <td
                            style={{
                              borderRight: "1px solid gray",
                            }}
                          >
                            5
                          </td>
                          <td
                            style={{
                              borderRight: "1px solid gray",
                              textAlign: "left",
                            }}
                          >
                            Capsule ZOAZEST NUTRA
                          </td>
                          <td>1 capsules</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>Twice In Day</td>
                          <td>1 Month</td>
                        </tr>
                        <tr
                          style={{
                            border: "1px solid gray",
                          }}
                        >
                          <td
                            style={{
                              borderRight: "1px solid gray",
                            }}
                          >
                            6
                          </td>
                          <td
                            style={{
                              borderRight: "1px solid gray",
                              textAlign: "left",
                            }}
                          >
                            Capsule ZOAZEST NUTRA
                          </td>
                          <td>1 capsules</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>Twice In Day</td>
                          <td>1 Month</td>
                        </tr>
                        <tr
                          style={{
                            border: "1px solid gray",
                          }}
                        >
                          <td
                            style={{
                              borderRight: "1px solid gray",
                            }}
                          >
                            7
                          </td>
                          <td
                            style={{
                              borderRight: "1px solid gray",
                              textAlign: "left",
                            }}
                          >
                            Capsule ZOAZEST NUTRA
                          </td>
                          <td>1 capsules</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>Twice In Day</td>
                          <td>1 Month</td>
                        </tr>
                        <tr
                          style={{
                            border: "1px solid gray",
                          }}
                        >
                          <td
                            style={{
                              borderRight: "1px solid gray",
                            }}
                          >
                            8
                          </td>
                          <td
                            style={{
                              borderRight: "1px solid gray",
                              textAlign: "left",
                            }}
                          >
                            Capsule ZOAZEST NUTRA
                          </td>
                          <td>1 capsules</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>Twice In Day</td>
                          <td>1 Month</td>
                        </tr>
                        <tr
                          style={{
                            border: "1px solid gray",
                          }}
                        >
                          <td
                            style={{
                              borderRight: "1px solid gray",
                            }}
                          >
                            1
                          </td>
                          <td
                            style={{
                              borderRight: "1px solid gray",
                              textAlign: "left",
                            }}
                          >
                            Capsule ZOAZEST NUTRA
                          </td>
                          <td>1 capsules</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td>Twice In Day</td>
                          <td>1 Month</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="mt-2">
              <strong>Follow up:</strong> 15 Mar 2024, Friday
            </div>
            <div>
              <Row>
                <Col className="mt-2">
                  <div>
                    <span>
                      <strong>Dr. Mohan Yadav</strong>
                    </span>
                    <br></br>
                    <span>BHMS</span>
                    <span>mp-17819</span>
                  </div>
                </Col>
                <Col></Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Prescribtion;
