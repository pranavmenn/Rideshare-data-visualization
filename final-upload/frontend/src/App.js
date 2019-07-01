import React, { Component, Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import PointsSample from './PointsSample';
import Layout from './Layout';

class App extends Component {



  render() {


      return (
        <Fragment>
          <Layout />
        </Fragment>
      );
    }
}



export default App;
