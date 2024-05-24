import React, { Component } from "react";
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
} from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";
// import Breadcrumbs from "../../../components/@vuexy/breadCrumbs/BreadCrumb";
import swal from "sweetalert";
import Swal from "sweetalert2";
export class Edittestlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      testName: "",
      price: "",
      discountPrice: "",
      id: "", // Assuming you have the id stored in the state or passed as a prop
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }
  submitHandler(event) {
    event.preventDefault();
    this.updateTest();
  }

  updateTest() {
    const { category, testName, price, discountPrice, id } = this.state;
    axiosConfig
      .put(`/test/update-test/${id}`, {
        category,
        testName,
        price,
        discountPrice,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error updating the test!", error);
      });
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  };

  selectOption = (option) => {
    this.setState({
      selectedOption: option,
    });
  };
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  componentDidMount() {
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/test/view-test-by-id/${id}`)
      .then((response) => {
        const datas = response.data.Test;
        console.log(datas);
        this.setState({
          category: datas?.category,
          discountPrice: datas?.discountPrice,
          price: datas?.price,
          testName: datas?.testName,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    const payload = {
      category: this.state.category,
      testName: this.state.testName,
      price: this.state.price,
      discountPrice: this.state.discountPrice,
    };
    let { id } = this.props.match.params;
    axiosConfig
      .put(`/test/update-test/${id}`, payload)
      .then((response) => {
        console.log(response?.data?.message);
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: `${response?.data?.message}`,
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            this.props.history.push(`/Category`);
          }
        });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  render() {
    const { category, testName, price, discountPrice } = this.state;
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Edit Test List
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/Test")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Category Name</Label>
                  <Input
                    required
                    type="text"
                    name="category"
                    placeholder="Enter First Name"
                    value={this.state.category}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Test Name</Label>
                  <Input
                    required
                    type="text"
                    name="testName"
                    placeholder="Enter Last Name"
                    value={this.state.testName}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Price</Label>
                  <Input
                    required
                    type="number"
                    name="price"
                    placeholder="Date"
                    value={this.state.price}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Discount Price</Label>
                  <Input
                    required
                    type="number"
                    name="discountPrice"
                    placeholder="Amount"
                    value={this.state.discountPrice}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>

                {/*
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>User Image</Label>
                  <Input
                    className="form-control"
                    type="file"
                    name="userimg"
                    onChange={this.onChangeHandler}
                  />
                </Col>
                 */}
                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Date Of Register</Label>
                    <Input
                      required
                      type="date"
                      name="sortorder"
                      placeholder="Enter Confirm  Password"
                      value={this.state.sortorder}
                      onChange={this.changeHandler}>
                    </Input>
                </Col> */}
                {/* </Row>
              <Row>
              <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Password </Label>
                    <Input
                      required
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      value={this.state.password}
                      onChange={this.changeHandler}>
                    </Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Confirm Password </Label>
                    <Input
                      required
                      type="password"
                      name="cnfmPassword"
                      placeholder="Enter Confirm  Password"
                      value={this.state.cnfmPassword}
                      onChange={this.changeHandler}>
                    </Input>
                </Col> */}
              </Row>
              {/* <Col lg="6" md="6" sm="6" className="mb-2">
                <Label className="mb-1">Status</Label>
                <div
                  className="form-label-group"
                  onChange={(e) => this.changeHandler1(e)}
                >
                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="approvedstatus"
                    value="Active"
                  />
                  <span style={{ marginRight: "20px" }}>Active</span>

                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
                    value="Inactive"
                  />
                  <span style={{ marginRight: "3px" }}>Inactive</span>
                </div>
              </Col> */}
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Update Test
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default Edittestlist;
