import {Fragment} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter  } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import HeatMap from './HeatMap';

const HeatCard = () => {


  return(

    <Fragment >
      <BrowserRouter>
        <Route  path="/heat" exact component={HeatMap} />

        <Card>
          <CardMedia style={{height:0}, {paddingTop:'56.25%'}} title="See heatmap" image={require("./images/download.jpg")} />
          <CardContent>
            <Typography>
            Heatmap
            </Typography>

          </CardContent>

        </Card>

      </BrowserRouter>
  </Fragment>

  )
}

export default HeatCard;
