import React, { Component } from "react";
import TimeRemaining from "./TimeRemaining";
import PoolDetails from "./PoolDetails";
import ParticipantList from "./ParticipantList";
import ResponsiveListTableParticipant from "./ResponsiveListTableParticipant";

class IndexDashboard extends Component {
  render() {
    return (
      <div className="container">
        <TimeRemaining />
        <PoolDetails />
        <ParticipantList />
        {/* <ResponsiveListTableParticipant /> */}

        <style jsx>{``}</style>
      </div>
    );
  }
}

export default IndexDashboard;
