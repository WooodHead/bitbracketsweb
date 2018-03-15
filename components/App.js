import React, { Component } from "react";
// import Link from "next/link";
import Button from "./common/Button";
import Link from "./common/Link";
import TextField from "./common/TextField";
import Form from "./common/Form";
import SearchInput from "./common/SearchInput";
import Icon from "./common/Icon";
import Drawer from "./common/Drawer";

class App extends Component {
  render() {
    return (
      <div>
        {/* <div className="hero">
          <h1 className="title">Welcome to Next!</h1>
          <p className="description">
            To get started, edit <code>pages/index.js</code> and save to reload.
          </p>
          <Button name="subcribe" colorName="primary" />
          <div className="row">
            <Link
              name={
                <div>
                  <a
                    className="card"
                    href="https://github.com/zeit/next.js#getting-started"
                  >
                    <h3>Examplesss &rarr;</h3>
                    <p>
                      Find other example boilerplates on the
                      <code>create-next-app</code> site
                    </p>
                  </a>
                </div>
              }
            />

            <Link
              href="https://github.com/segmentio/create-next-app"
              name={
                <div>
                  <a className="card">
                    <h3>Examples &rarr;</h3>
                    <p>
                      Find other example boilerplates on the
                      <code>create-next-app</code> site
                    </p>
                  </a>
                </div>
              }
            />
          </div>
        </div> */}
        <div>
          <p className="description">
            To get started, edit <code>pages/index.js</code> and save to reload.
          </p>
          <Button style={{ color: "#067df7" }} name="Subscribe" />
          <TextField />
          <Form
            styleInput={{ width: 200, color: "#fff", background: "purple" }}
            styleLabel={{ color: "grey" }}
            label="subcribe"
          />
          <SearchInput
            styleInput={{
              width: 200,
              color: "#fff",
              background: "purple",
              borderRadius: 25
            }}
            placeholder="Search"
          />
          <Icon
            style={{ color: "red" }}
            icon={<i className="fab fa-accessible-icon" />}
          />
          <Drawer />
        </div>
        <style jsx>{`
          .hero {
            width: 100%;
            color: #333;
          }
          .title {
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
          }
          .title,
          .description {
            text-align: center;
          }
          .description:hover {
            color: red;
          }
          .row {
            max-width: 880px;
            margin: 80px auto 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
          }
          .card {
            padding: 18px 18px 24px;
            width: 220px;
            text-align: left;
            text-decoration: none;
            color: #434343;
          }
          .card:hover {
            border-color: #067df7;
          }
          .card h3 {
            margin: 0;
            color: #067df7;
            font-size: 18px;
          }
          .card p {
            margin: 0;
            padding: 12px 0 0;
            font-size: 13px;
            color: #333;
          }
        `}</style>
      </div>
    );
  }
}

export default App;
