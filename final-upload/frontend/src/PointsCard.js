import {Fragment} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { BrowserRouter  } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import PointsSample from './PointsSample';

const PointsCard = () => {


  return(

    <Fragment >
      <BrowserRouter>
        <Route  path="/points" exact component={PointsSample} />

        <Card>
          <CardMedia style={{height:0}, {paddingTop:'56.25%'}} title="See the points on a map" image={require("./images/images.jpg" )} />
          <CardContent>
            <Typography>
              Click below to see the points on a map
            </Typography>

          </CardContent>

        </Card>

      </BrowserRouter>
  </Fragment>

  )
}

export default PointsCard;
