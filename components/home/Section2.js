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
              <Col xs={6} md={6}>
                <h3>
                  Be hard die fan & a Crypto geek <br /> this 2018 World Cup
                </h3>
                <p>
                  Create your own football pool using crypto currencies with
                  your friends, pets, family, people in your office or crypto
                  enthusiasts and start betting who will win each match. crypto
                  currencies are in and are growing, play geeky.{" "}
                </p>
              </Col>
              <Col xs={6} md={6}>
                <h3>
                  Easy <br /> Secure <br />& fun{" "}
                </h3>
              </Col>
            </Row>
          </Grid>
        </div>
        <style jsx>{`
          .root {
           
          
        `}</style>
      </div>
    );
  }
}

export default Section2;
