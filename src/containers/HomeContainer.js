import React, { Component } from "react";

// import { connect } from 'react-redux';
import HomeHeader from "../components/homeComponents/HomeHeader";
import HomeImg from "../components/homeComponents/HomeImg";
import HomeList from "../components/homeComponents/HomeList";

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <HomeHeader />
        <div id="flex-div">
          <div id="img-left">
            <HomeImg />
          </div>
          <div id="right-list">
            <HomeList />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
