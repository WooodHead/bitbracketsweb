import React, { Component } from "react";
import Button from "../common/Button";
import { Row, Col, Grid } from "react-bootstrap";

class Section4 extends Component {
  render() {
    return (
      <div className="container">
        <div className="root">
          <Grid>
            <Row className="show-grid">
              <Col xs={8} md={8}>
                <img src="../../static/img4.png" width="200" height="180" />
              </Col>
              <Col xs={4} md={4}>
                <h3 className="Easy-Secure-Fun">Claim the prize </h3>
                <p>
                  95% of the pool goes to the winner. Also, if you are the pool
                  creator you will win 5% of the pool.
                </p>
              </Col>
            </Row>
          </Grid>
        </div>
        <style jsx>{`
          .root {
            font-family: robot;
          }
          .title {
            font-size: 32px;
          }
          .Easy-Secure-Fun {
            color: #e72459;
          }
          .crypto-currencie {
            color: #e72459;
          }
        `}</style>
      </div>
    );
  }
}

export default Section4;
