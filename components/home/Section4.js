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
              <Col xs={6} md={6}>
                <div className="image">
                  <img src="../../static/img4.png" width="150" height="120" />
                </div>
              </Col>
              <Col xs={6} md={6}>
                <div className="prize">
                  <h3 className="Claim-the-prize">Claim the prize </h3>
                  <p className="description">
                    <span className="percentage">95%</span> of the pool goes to
                    the winner.<br /> Also, if you are the pool creator you will
                    win <span className="percentage">5%</span>
                    of the pool.
                  </p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <style jsx>{`
          .root {
            font-family: Roboto;
            margin-top: 50px;
          }
          .image {
            display: flex;
            justify-content: flex-end;
          }

          .Claim-the-prize {
            color: #3d3d3d;
            font-size: 18px;
            font-weight: bold;
          }
          .description {
            font-size: 10px;
          }

          .percentage {
            color: #e72459;
            font-size: 20px;
            font-weight: bold;
          }
        `}</style>
      </div>
    );
  }
}

export default Section4;
