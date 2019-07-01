import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";

const Map = ReactMapboxGl({

  accessToken:
    "pk.eyJ1IjoicHJhbmF2bWVub24iLCJhIjoiY2p4Zm9zdXhjMHlpcjN4bWoyMmx5a291cSJ9.-R70TtJitafDpDsCDid6rA"
});

const layerPaint = {
  'heatmap-weight': {
    property: 'priceIndicator',
    type:'exponential',
    stops: [[0,0],[5,2]]

  },
  'heatmap-intensity': {
    stops: [[0,0],[5,1.2]]
  },
  'heatmap-color': [
    'interpolate',
    ['linear'],
    ['heatmap-density'],
    0,
    'rgba(33,102,172,0)',
    0.25,
    'rgb(103,169,207)',
    0.5,
    'rgb(209,229,240)',
    0.8,
    'rgb(253,219,199)',
    1,
    'rgb(239,138,98)',
    2,
    'rgb(178,24,43)'
  ],
  'heatmap-radius': {
   stops: [[0, 1], [5, 50]]
 }
};
class Copy extends Component {
  render() {
    return (
      <div>
        <Map
          center={[77.5946,12.9716]}
          style="mapbox://styles/mapbox/streets-v8"
          containerStyle={{ width: "100vw", height: "100vh" }}

        >

              <Layer
                type="heatmap"
                paint={layerPaint}
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
      </div>
    );
  }
}

export default Copy;
