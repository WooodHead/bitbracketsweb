import React, { Component } from "react";
import Button from "../common/Button";
import { Row, Col, Grid } from "react-bootstrap";

class Section1 extends Component {
  render() {
    return (
      <div>
        <div className="root">
          <h2 className="title">How does it work?</h2>
          <Grid>
            <Row className="show-grid">
              <Col xs={6} md={8}>
                <img src="../../static/group3.png" width="200" height="80" />
                <p className="create-group">Create a group & Invite Friends</p>
                <Row>
                  <Col xs={6} md={6}>
                    <div className="paragraph">
                      Name the pool and determine the crypto price to enter the
                      pool. If you don´t have a crypto wallet learn here.
                    </div>
                  </Col>
                  <Col xs={6} md={6}>
                    <p className="paragraph">
                      The more participants, the bigger the prize. All the
                      crypto money will be secured by a Smart Contract.
                    </p>
                  </Col>
                </Row>
              </Col>
              <Col xs={6} md={6}>
                <img src="../../static/group22.png" width="120" height="80" />
                <p className="create-group">Enter picks</p>
                <p className="Enter-picks">
                  Will Costa Rica win against Brazil 4 to 2? This guesses will
                  be saved in the Blockchain. You must enter picks before the
                  cup starts.
                </p>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col xs={6} md={4}>
                <img src="../../static/group25.png" width="120" height="80" />
                <p className="create-group">Are you winning?</p>
                <p className="Are-you-winning">
                  If you are winning, and there’s no chance someone can beat
                  you, open the smart contract! The smart contract will validate
                  you are winning, if it is true the pool might be yours The
                  more participants, the bigger the prize. All the crypto money
                  will be secured by a Smart Contract.
                </p>
              </Col>
              <Col xs={6} md={8}>
                <img src="../../static/group29.png" width="250" height="80" />
                <p className="create-group">
                  Fake it until you... somebody can say the other way!
                </p>
                <p className="Enter-picks">
                  If a day goes by after you open the smart contract and nobody
                  denies it, then you are the winner! The smart contract will
                  allow you to take the prize
                </p>
              </Col>
            </Row>
          </Grid>
        </div>
        <style jsx>{`
          .root {
            background-color: #374785;
            color: #fff;
            text-align: center;
          }
          .title {
            padding-top: 50px;
          }
          .create-group {
            margin-top: 20px;
          }
          .paragraph {
            font-size: 8px;
            display: flex;
            text-align: justify;
          }
          .crypto-wallet {
            color: yellow;
          }

          .Enter-picks {
            padding-left: 90px;
            padding-right: 90px;
            font-size: 8px;
            text-align: justify;
          }
          .Are-you-winning {
            padding-left: 50px;
            padding-right: 50px;
            font-size: 8px;
            text-align: justify;
          }
        `}</style>
      </div>
    );
  }
}

export default Section1;
