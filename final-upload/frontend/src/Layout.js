import React, { Component, Fragment } from "react";
import { BrowserRouter, withRouter } from "react-router-dom";
import Route from "react-router-dom/Route";
import Home from "./Home";
import PointsSample from './PointsSample';
import HeatMap from './HeatMap';
import axios from 'axios';

class Layout extends Component {

  state = {
    points: []
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axios.get("http://localhost:4000/getData").then(res => {

      console.log(res.data);
      this.setState({
        points: res.data,
        loadPoints: true,

      });
    });
  };

  render() {
    return(
      <Fragment>




        <BrowserRouter>
          <Route exact path="/" component={
            () => (
              <Home />
            )
          } />

          <Route exact path="/points" component={
            () => (
              <PointsSample points={this.state.points} />
            )
          } />

          <Route exact path="/heat" component={
            () => (
              <HeatMap points={this.state.points}/>
            )
          } />


        </BrowserRouter>
      </Fragment>
    )
  }
}

export default Layout;
