import React, { Component, Fragment } from "react";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

const Map = ReactMapboxGl({

  accessToken:
    "pk.eyJ1IjoicHJhbmF2bWVub24iLCJhIjoiY2p4Zm9zdXhjMHlpcjN4bWoyMmx5a291cSJ9.-R70TtJitafDpDsCDid6rA"
});


class PointsSample extends Component {

  state = {
    open: false,
    setOpen: false
  }
  componentDidMount() {
    console.log(this.props.points);

  }

  handleOpen = () => {
  this.setState({
    setOpen: true,
  })
  }

  handleClose = () => {
  this.setState({
    setOpen: false
  })
  }

  render() {

    return (
      <Fragment>


        <Map
          center={[77.5946,12.9716]}
          style="mapbox://styles/mapbox/streets-v8"
          containerStyle={{ width: "100vw", height: "100vh" }}

        >

              <Layer
                type="symbol"
                id="marker"
                layout={{ "icon-image": "marker-15"}}
              >
              {
                this.props.points.map((location) => (
                  <Feature
                    coordinates={[location.from_long,location.from_lat]}
                  />
                ))
              }

              </Layer>


        </Map>

      </Fragment>
    );
  }
}

export default PointsSample;
