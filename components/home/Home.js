import React, { Component } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <Section1 />
          <Section2 />
        </div>
        <style jsx>{``}</style>
      </div>
    );
  }
}

export default Home;
