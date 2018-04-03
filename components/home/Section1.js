import React, { Component } from "react";
import Button from "../common/Button";
import { Row, Col, Grid } from "react-bootstrap";

class Section1 extends Component {
  render() {
    return (
      <div>
        <div className="root">
          <Grid>
            <Row className="show-grid">
              <Col sm={6} md={8}>
                <h1 className="title">BitBrackets</h1>
                <h1 className="sub-title">Russia 2018</h1>
              </Col>
              <Col sm={6} md={4}>
                <div className="section">
                  <Button
                    name="Start Pool"
                    backgroundColor="#E72459"
                    colorText="#fff"
                  />
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <style jsx>{`
          @media screen and (min-width: 768px) {
            .root {
              background: url(../../static/section1.png);
              background-repeat: no-repeat;
              background-size: auto;
              width: auto;
              padding-bottom: 350px;
              margin-top: -100px;
              flex-grow: 1;
            }
            .title {
              color: #fff;
              font-family: Roboto;
              display: flex;
              justify-content: flex-end;
              font-size: 38px;
              padding-top: 80px;
            }
            .sub-title {
              color: #fff;
              font-family: Roboto;
              display: flex;
              justify-content: flex-end;
              font-size: 26px;
              margin-top: -10px;
              margin-right: 30px;
            }
            .section {
              padding-top: 120px;
              justify-content: flex-start;
            }
          }
          @media screen and (max-width: 320px) {
            .root {
              background: url(../../static/section1.png);
              -webkit-background-size: cover;
              -moz-background-size: cover;
              -o-background-size: cover;
              background-size: cover;
              background-position: center;
              padding-bottom: 100px;
            }
            .title {
              color: #fff;
              font-family: Roboto;
              display: flex;

              justify-content: center;
              font-size: 12px;
            }
            .sub-title {
              color: #fff;
              font-family: Roboto;
              display: flex;
              justify-content: center;
              font-size: 12px;
            }
            .section {
              display: none;
            }
          }
          @media screen and (max-width: 375px) {
            .root {
              background: url(../../static/section1.png);
              -webkit-background-size: cover;
              -moz-background-size: cover;
              -o-background-size: cover;
              background-size: cover;
              background-position: center;
              padding-bottom: 100px;
            }
            .title {
              color: #fff;
              font-family: Roboto;
              display: flex;

              justify-content: center;
              font-size: 12px;
            }
            .sub-title {
              color: #fff;
              font-family: Roboto;
              display: flex;
              justify-content: center;
              font-size: 12px;
            }
            .section {
              display: none;
            }
          }
          @media screen and (max-width: 425px) {
            .root {
              background: url(../../static/section1.png);
              -webkit-background-size: cover;
              -moz-background-size: cover;
              -o-background-size: cover;
              background-size: cover;
              background-position: center;
              padding-bottom: 100px;
            }
            .title {
              color: #fff;
              font-family: Roboto;
              display: flex;

              justify-content: center;
              font-size: 12px;
            }
            .sub-title {
              color: #fff;
              font-family: Roboto;
              display: flex;
              justify-content: center;
              font-size: 12px;
            }
            .section {
              display: none;
            }
          }
          @media screen and (min-width: 1024px) {
            .root {
              background: url(../../static/section1.png);
              -webkit-background-size: cover;
              -moz-background-size: cover;
              -o-background-size: cover;
              background-size: cover;
              background-position: center;
              padding-bottom: 400px;
            }
            .title {
              color: #fff;
              font-family: Roboto;
              display: flex;

              justify-content: center;
              font-size: 38px;
            }
            .sub-title {
              color: #fff;
              font-family: Roboto;
              display: flex;
              justify-content: center;
              font-size: 30px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Section1;
