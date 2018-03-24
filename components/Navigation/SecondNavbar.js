import React, { Component } from "react";

import Navbar from "../common/Navbar";
import Icon from "../common/Icon";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar
          style={{
            background: "#282840",
            margin: 0,
            borderColor: "#282840",
            borderRadius: 0
          }}
          styleNav={{ marginLeft: "40%" }}
          linkName1={
            <div>
              <Icon
                icon={
                  <i className="fas fa-trophy" style={{ color: "#3ffeca" }} />
                }
              />&nbsp; &nbsp;Contest
            </div>
          }
          link1="/contest"
          linkName2={
            <div>
              <Icon
                icon={
                  <i className="fas fa-table" style={{ color: "#3ffeca" }} />
                }
              />&nbsp; &nbsp;Results
            </div>
          }
          link2="/results"
          className="description"
        />

        <style jsx>{``}</style>
      </div>
    );
  }
}

export default Navigation;
