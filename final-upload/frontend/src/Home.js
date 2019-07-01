import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PointsCard from './PointsCard';
import HeatCard from './HeatCard';
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import "./home.css";

class Home extends Component {

  state = {
    selectedFile: null,
  };

  onChangeHandler = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
  };

  onClickHandler = () => {
    console.log("Clicked");
    const data = new FormData();
    console.log("Statezzz", this.state.selectedFile);
    data.append("file", this.state.selectedFile);
    console.log(data);
    axios.post("http://localhost:4000/upload", data).then(res => {
      alert("File uploaded successfully");
      console.log(res.statusText);
    });
  };



  render(){
    return(
      <div className="homeContainer">
      <div className="row">
        <div className="offset-md-3 col-md-6">
          <form method="post" action="#" id="#">
            <div className="form-group files">
              <label>Upload Your File </label>
              <input
                type="file"
                className="form-control"
                multiple=""
                onChange={this.onChangeHandler}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary btn-block"
              onClick={this.onClickHandler}
            >
              Upload
            </button>
          </form>
        </div>
      </div>
      <div className="cards">
          {/*<Drawer variant="permanent"  >
    <IconButton>
            H
      </IconButton>
    </Drawer>*/}
          <div className="card-1">
            <PointsCard />

            <Link exact to="/points">
              <Button variant="contained" color="primary">
                See it on a Map!
              </Button>
            </Link>
          </div>

          <div className="card-2">
            <HeatCard />
            <Link exact to="/heat">
              <Button variant="contained" color="primary">
              Heatmap
              </Button>
            </Link>
          </div>

          </div>
        </div>

    )
  }
}

export default Home;
