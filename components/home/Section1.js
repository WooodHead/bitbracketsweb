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
              <Col xs={6} md={8}>
                <h1 className="title">BitBrackets</h1>
                <h1 className="sub-title">Russia 2018</h1>
              </Col>
              <Col xs={6} md={4}>
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
          .root {
            background: url(../../static/section1.png);
            background-repeat: no-repeat;
            background-size: auto;
            width: auto;
            padding-bottom: 350px;
            margin-top: -25px;
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
        `}</style>
      </div>
    );
  }
}

export default Section1;
