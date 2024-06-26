import React, { Component } from "react";
import Swal from "sweetalert2";
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

import axiosConfig from "../axiosConfig";

import "react-toastify/dist/ReactToastify.css";
import { Route } from "react-router-dom";

import draftToHtml from "draftjs-to-html";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../assets/scss/plugins/extensions/editor.scss";
import { data } from "jquery";
export class Testview extends Component {
  constructor(props) {
    super(props);
    this.state = {
        category: "",
        discountPrice:"",
        price:"",
        testName:"",

      errorMessage: "", // For error handling
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitHandler = (e) => {
    const payload = {
      categoryName: this.state.CategoryName,
    };
    e.preventDefault();
    let { id } = this.props.match.params;
    axiosConfig
      .put(`/category/update-category/${id}`, payload)
      .then((response) => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Category Edit successfully.",
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
  componentDidMount() {
    let { id } = this.props.match.params;

    axiosConfig.get(`/test/view-test-by-id/${id}`)
      .then((response) => {
        const datas = response?.data?.Test;
        this.setState(datas);
        console.log(datas);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                View Test
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
                    type="text"
                    name="category"
                    value={this.state.category}
                    onChange={this.handleChange}
                    disabled
                    required
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Test Name</Label>
                  <Input
                    type="text"
                    name="testName"
                    value={this.state.testName}
                    onChange={this.handleChange}
                    disabled
                    required
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Price</Label>
                  <Input
                    type="text"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleChange}
                    disabled
                    required
                  ></Input>
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Discount Price</Label>
                  <Input
                    type="text"
                    name="discountPrice"
                    value={this.state.discountPrice}
                    onChange={this.handleChange}
                    disabled
                    required
                  ></Input>
                </Col>

                {/* <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Image</Label>
                  <Input
                    type="file"
                    name="image"
                    value={this.state.Image}
                    onChange={this.handleChange}
                  ></Input>
                </Col> */}
                {/* 
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Product Category</Label>
                  <CustomInput
                    type="select"
                    name="category"
                    value={this.state.category}
                    onChange={this.changeHandler}
                  >
                    <option>Select Product Category</option>
                    {this.state.categoryP?.map((allCategory) => (
                      <option value={allCategory?._id} key={allCategory?._id}>
                        {allCategory?.name}
                      </option>
                    ))}
                  </CustomInput>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Price(MRP)</Label>
                  <Input
                    required
                    type="number"
                    name="price"
                    placeholder="Enter price"
                    value={this.state.price}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>limit</Label>
                  <Input
                    required
                    type="number"
                    name="limit"
                    placeholder="Enter limit"
                    value={this.state.limit}
                    onChange={this.changeHandler}
                  ></Input>
                </Col>
                <Col lg="4" md="4" sm="4" className="mb-2">
                  <Label>Thumnail Image</Label>

                  <Label>Image</Label>
                  <CustomInput
                    type="file"
                    // multiple
                    onChange={this.onChangeHandler}
                  />
                </Col>
                <Col lg="12" md="12" sm="12" className="mb-2">
                  <Label>Description</Label>

                  <br />

                  <Editor
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                      inline: { inDropdown: true },
                      list: { inDropdown: true },
                      textAlign: { inDropdown: true },
                      link: { inDropdown: true },
                      history: { inDropdown: true },
                      image: {
                        uploadCallback: this.uploadImageCallBack,
                        previewImage: true,
                        alt: { present: true, mandatory: true },
                      },
                    }}
                  />
                </Col>
                */}
              </Row>
              {/*
              <Col lg="6" md="6" sm="6" className="mb-2">
                <Label className="mb-1">Status</Label>
                <div
                  className="form-label-group"
                  onChange={(e) => this.changeHandler1(e)}
                >
                  <input
                    style={{ marginRight: "3px" }}
                    type="radio"
                    name="status"
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
              </Col>
 */}
             
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default Testview;
