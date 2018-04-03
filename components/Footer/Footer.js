import React, { Component } from "react";
import Button from "../common/Button";
import { Row, Col, Grid } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="container">
        <Grid>
          <div className="root">
            <Row className="show-grid">
              <Col xs={6} md={6}>
                <Row className="show-grid">
                  <Col xs={6} md={6}>
                    <ul className="list">
                      <li>
                        <a href="myPools">My pools</a>
                      </li>
                      <li>
                        <a href="myPools">Join Pool</a>
                      </li>
                      <li>
                        <a href="faq">FAQs</a>
                      </li>
                    </ul>
                  </Col>
                  <Col xs={6} md={6}>
                    <ul className="list">
                      <li>
                        <a href="myPools">More pools</a>
                      </li>
                      <li>
                        <a href="myPools">Blog</a>
                      </li>
                      <li>
                        <a href="myPools">FaceBook</a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
              <Col xs={6} md={6}>
                <div className="term-conditions">
                  <a href="myPools">
                    <p>Terms & Conditions</p>
                  </a>
                </div>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={12} md={12}>
                <p className="description">
                  Power by <span className="bitbrackets">BitBrackets</span>
                </p>
              </Col>
            </Row>
            <style jsx>{`
              .root {
                font-family: Roboto;
                font-size: 8px;
                margin-top: 50px;
              }
              .list {
                list-style-type: none;
                color: red;
              }
              .list a {
                color: black;
              }
              .list a:hover {
                color: #067df7;
              }
              .bitbrackets {
                color: #e72459;
              }
              .term-conditions {
                display: flex;
                justify-content: flex-end;
              }
              .term-conditions p {
                color: black;
              }
              .term-conditions p:hover {
                color: #067df7;
              }
              .description {
                text-align: center;
                margin-top: 20px;
              }
            `}</style>
          </div>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
