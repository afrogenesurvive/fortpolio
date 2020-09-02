import React from 'react';
import Grid from '@material-ui/core/Grid';
import './main.css';

const works = (props) => {

  return (
    <div className="mainTop">
    <Grid container spacing={1} className="mainGridContainer">
      <Grid item xs={5}  className="workGridCellEmpty">

      </Grid>
      <Grid item xs={7}  className="workGridCell edgeCell">
      <p>
      works Content
      </p>
      <p>
      works Content
      </p>
      </Grid>
      <Grid item xs={12}  className="workGridCell workMidCell">
      <p>
      works Content
      </p>
      </Grid>
      <Grid item xs={7}  className="workGridCell edgeCell">
      <p>
      works Content
      </p>
      <p>
      works Content
      </p>
      </Grid>
      <Grid item xs={5}  className="workGridCellEmpty">

      </Grid>
    </Grid>

    </div>
  )
}

export default works;
