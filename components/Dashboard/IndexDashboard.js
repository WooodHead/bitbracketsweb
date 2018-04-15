import React, { Component } from "react";
import TimeRemaining from "./TimeRemaining";
import PoolDetails from "./PoolDetails";

class IndexDashboard extends Component {
  render() {
    return (
      <div className="container">
        <TimeRemaining />
        <PoolDetails />
        <style jsx>{``}</style>
      </div>
    );
  }
}

export default IndexDashboard;
