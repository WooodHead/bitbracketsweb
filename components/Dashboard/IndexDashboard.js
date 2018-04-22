import React, { Component } from "react";
import TimeRemaining from "./TimeRemaining";
import PoolDetails from "./PoolDetails";
import ParticipantList from "./ParticipantList";
import ResponsiveListTableParticipant from "./ResponsiveListTableParticipant";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class IndexDashboard extends Component {
  render() {
    return (
      <div className="container">
        <TimeRemaining />
        <PoolDetails list={this.props.list} />
        <ParticipantList list={this.props.list} />

        <style jsx>{``}</style>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    list: state.list
  };
}
export default connect(mapStateToProps)(IndexDashboard);
