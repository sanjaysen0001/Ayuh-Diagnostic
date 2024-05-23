import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Media,
  Table,
  InputGroup,
  Input,
  InputGroupAddon,
  Button,
} from "reactstrap";
import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import logo from "../../../ImagesDiogno/doctorlogo.png";
import { Mail, Phone, FileText, Download } from "react-feather";

import "../../../assets/scss/pages/invoice.scss";

class Invoice extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col className="invoice-wrapper" sm="12">
            <Card>
              <CardBody>
                <Row>
                  <Col
                    md="9"
                    sm="9"
                    lg="9"
                    xl="9"
                    xs="8"
                    className="text-left mt-3"
                  >
                    <div>
                      <h1>
                        <span className="cssforinvoiceheading">INVOICE </span>
                      </h1>
                    </div>
                  </Col>
                  <Col md="3" sm="3" lg="3" xl="3" xs="4">
                    <Media className="pt-1">
                      <img src={logo} alt="logo" className="cssfordoctorlogo" />
                    </Media>
                  </Col>
                </Row>
                <Row>
                  <Col md="3" sm="3" xl="3" lg="3" xs="6">
                    <span>Invoice Number</span>
                  </Col>
                  <Col md="3" sm="3" xl="3" lg="3" xs="6">
                    <span>Date Of Issue</span>
                  </Col>
                </Row>
                <Row>
                  <Col md="3" sm="3" xl="3" lg="3" xs="6">
                    <span>00001</span>
                  </Col>
                  <Col md="3" sm="3" xl="3" lg="3" xs="6">
                    <span>mm/dd/yyyy</span>
                  </Col>
                </Row>
                <div className="recipient-info my-2">
                  <Row>
                    <Col md="3" sm="3" xl="3" lg="3" xs="6">
                      <span>Billed To</span>
                    </Col>
                    <Col md="3" sm="3" xl="3" lg="3" xs="6">
                      <span>Ayuh Plus Diagnostic</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="3" sm="3" xl="3" lg="3" xs="6">
                      <span>Patient Name</span>
                    </Col>
                    <Col md="3" sm="3" xl="3" lg="3" xs="6">
                      <span>Sanjay Sen</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="3" sm="3" xl="3" lg="3" xs="6">
                      <span>Street Address</span>
                    </Col>
                    <Col md="3" sm="3" xl="3" lg="3" xs="6">
                      <span>Indore</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="3" sm="3" xl="3" lg="3" xs="6">
                      <span>City,State,Country</span>
                    </Col>
                    <Col md="3" sm="3" xl="3" lg="3" xs="6">
                      <span>M.P.</span>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="3" sm="3" xl="3" lg="3" xs="6">
                      <span>ZIP Code</span>
                    </Col>
                    <Col md="3" sm="3" xl="3" lg="3" xs="6">
                      <span>453331</span>
                    </Col>
                  </Row>
                </div>

                <div className="invoice-items-table pt-1">
                  <Row>
                    <Col sm="12">
                      <hr></hr>
                      <Table responsive>
                        <thead className="tablebootstrapborder">
                          <tr>
                            <th>DESCRIPTION</th>
                            <th>Unit Cost</th>
                            <th>Qty/Hr Rate</th>
                            <th>AMOUNT</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Item Name </td>
                            <td>10</td>
                            <td>1500</td>
                            <td>15000</td>
                          </tr>
                          <tr>
                            <td>Item Name </td>
                            <td>10</td>
                            <td>1500</td>
                            <td>15000</td>
                          </tr>
                          <tr>
                            <td>Item Name </td>
                            <td>10</td>
                            <td>1500</td>
                            <td>15000</td>
                          </tr>
                          <tr>
                            <td>Item Name </td>
                            <td>10</td>
                            <td>1500</td>
                            <td>15000</td>
                          </tr>
                          <tr>
                            <td>Item Name </td>
                            <td>10</td>
                            <td>1500</td>
                            <td>15000</td>
                          </tr>
                          <tr>
                            <td>Item Name </td>
                            <td>10</td>
                            <td>1500</td>
                            <td>15000</td>
                          </tr>
                        </tbody>
                      </Table>
                      <hr></hr>
                    </Col>
                  </Row>
                </div>
                <div className="invoice-total-table">
                  <Row>
                    <Col></Col>
                    <Col xl="4" md="4" lg="4" xs="6">
                      <div className="justify-content-between d-flex">
                        <p>Subtotal</p>
                        <p>90000</p>
                      </div>
                      <div className="justify-content-between d-flex">
                        <p>Discount(10%)</p>
                        <p>{(90000 * 10) / 100}</p>
                      </div>
                      <div className="justify-content-between d-flex">
                        <p>Total</p>
                        <p>81000</p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}

export default Invoice;
