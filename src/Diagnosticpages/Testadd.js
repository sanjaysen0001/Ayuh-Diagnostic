import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  CustomInput,
} from "reactstrap";
import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import axiosConfig from "../axiosConfig";
import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../assets/scss/plugins/extensions/editor.scss";


import { data } from "jquery";
import Swal from "sweetalert2";
export class Testlistadd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: '',
      testName: '',
      price: '',
      discountPrice: '',
      categories: [], // Assuming categories are passed as a prop or fetched from an API
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axiosConfig
      .get("/category/view-category")
      .then((response) => {
        this.setState({ categories: response.data.Category });
        console.log(response.data.Category);
      })
      .catch((error) => {
        console.error("There was an error fetching the categories!", error);
      });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit(event) {
    event.preventDefault();
    const { category, testName, price, discountPrice } = this.state;
    const postData = {
      category,
      testName,
      price,  
      discountPrice,
    };


    // Post data to API
    debugger
    axiosConfig.post('/test/save-test', postData)
    .then(response => {
      console.log('Form submitted successfully:', response.data);
      Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Text Add successfully.",
        confirmButtonColor: "#3085d6",
        confirmButtonText: "OK",
      })
      window.location.reload();
      
    })
    .catch(error => {
      console.error('There was an error submitting the form!', error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again later.",
      });
    });
}

  render() {
    const { category, testName, price, discountPrice, categories } = this.state;
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Test
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
          <form onSubmit={this.handleSubmit}>
<Row>
          <Col lg="6" md="6" sm="6" className="mb-2">
            <label htmlFor="categorySelect">Select Category</label>
            <br />
            <select
              className="form-select w-100"
              style={{
                height: '37px',
                border: '1px solid #d9d9d9',
                borderRadius: '5px',
              }}
              aria-label="Default select example"
              id="categorySelect"
              name="category"
              value={category}
              onChange={this.handleChange}
            >
              <option value="" disabled>
                --Select--
              </option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.categoryName}
                </option>
              ))}
            </select>
          </Col>
  
          <Col lg="6" md="6" sm="6" className="mb-2">
            <Label>Test Name</Label>
            <Input
              required
              type="text"
              name="testName"
              placeholder="Test Name"
              value={testName}
              onChange={this.handleChange}
            />
          </Col>
  
          <Col lg="6" md="6" sm="6" className="mb-2">
            <Label>Price</Label>
            <Input
              required
              type="text"
              name="price"
              placeholder="Price"
              value={price}
              onChange={this.handleChange}
            />
          </Col>
  
          <Col lg="6" md="6" sm="6" className="mb-2">
            <Label>Discount Price</Label>
            <Input
              required
              type="text"
              name="discountPrice"
              placeholder="Discount Price"
              value={discountPrice}
              onChange={this.handleChange}
            />
          </Col>
  
          <Col lg="6" md="6" sm="6" className="mb-2">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </Col>
          </Row>
        </form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default Testlistadd;
