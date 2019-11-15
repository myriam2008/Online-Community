import React from "react";
import NavBar from "../../components/NavBar";
import "./Home.css";
import Slick from "./Slick";

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Slick />
      </div>
    );
  }
}

//mdbootstrap.com/img/Others/documentation/1.jpg
export default Home;
