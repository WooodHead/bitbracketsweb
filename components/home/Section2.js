import React, { Component } from "react";
import Button from "../common/Button";
import { Row, Col, Grid } from "react-bootstrap";

class Section2 extends Component {
  render() {
    return (
      <div className="container">
        <div className="root">
          <Grid>
            <Row className="show-grid">
              <Col sm={6} md={8}>
                <h3 className="title">
                  Be hard die fan & a Crypto geek <br /> this 2018 World Cup
                </h3>
                <p className="paragraph">
                  Create your own football pool using{" "}
                  <span className="crypto-currencie">crypto currencies</span>{" "}
                  with your friends, pets, family, people in your office or
                  crypto enthusiasts and start betting who will win each match.
                  crypto currencies are in and are growing, play geeky.{" "}
                </p>
              </Col>
              <Col sm={6} md={4}>
                <h3 className="Easy-Secure-Fun">
                  Easy <br /> Secure <br />& fun{" "}
                </h3>
                <h3 className="Easy-Secure-Fun2">Easy Secure & fun </h3>
              </Col>
            </Row>
          </Grid>
        </div>
        <style jsx>{`
          .root {
            font-family: Roboto;
            display: flex;
            justify-content: center;
          }
          .title {
            font-size: 16px;
            display: flex;
            justify-content: center;
          }
          .paragraph {
            text-align: justify;
            font-size: 14px;
          }
          .Easy-Secure-Fun {
            color: #e72459;
            text-align: justify;
            font-size: 16px;
            display: flex;
            justify-content: center;
          }
          .crypto-currencie {
            color: #e72459;
          }
          @media only screen and (max-width: 320px) {
            .Easy-Secure-Fun {
              display: none;
            }
          }
          @media only screen and (max-width: 375px) {
            .Easy-Secure-Fun {
              display: none;
            }
          }
          @media only screen and (max-width: 768px) {
            .Easy-Secure-Fun2 {
              display: none;
            }
          }
          @media only screen and (max-width: 1024px) {
            .Easy-Secure-Fun2 {
              display: none;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Section2;
