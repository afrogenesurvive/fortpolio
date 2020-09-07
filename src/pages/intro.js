import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
import Slide from '@material-ui/core/Slide';
import '../App.css';
import logo from '../logo.svg';
import agLogoAnim from '../assets/afrogeneanim.gif';
import myprofile from '../assets/myprofile.png';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const Intro = (props) => {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

    const classes = useStyles();

  return (
    <div className="App">
      <header className="App-header intropg">

        <div className="root">
          <Grid container spacing={3}>
            <Grid item xs={12}>
            <Slide direction="top" in={props.grow}>
              <img src={myprofile} className="App-logo  introLogo yellowBorder" alt="logo" />
            </Slide>
            </Grid>
            <Grid item xs={8} className="info">
            <Grow
              in={props.grow}
              style={{ transformOrigin: '0 0 0' }}
              {...(props.grow ? { timeout: 1000 } : {})}
            >
            <Paper className="paper redBorder">
            <p>Michael Grandison:</p>
            <p>Web Developer</p>
            </Paper>
            </Grow>

            </Grid>
            <Grid item xs={4}>
            </Grid>
            <Grid item xs={5}>
            </Grid>
            <Grid item xs={7} className="info">
            <Grow
              in={props.grow}
              style={{ transformOrigin: '0 0 0' }}
              {...(props.grow ? { timeout: 2000 } : {})}
            >
              <Paper className="paper greenBorder">

              <p>Portfolio Site</p>
              </Paper>
              </Grow>
            </Grid>
            <Grid item xs={5}>
            </Grid>
            <Grid item xs={3}>
              <Grow
                in={props.grow}
                style={{ transformOrigin: '0 0 0' }}
                {...(props.grow ? { timeout: 3000 } : {})}
              >
              <NavLink to="/main">
                <Button variant="contained">More</Button>
              </NavLink>
              </Grow>
            </Grid>
            <Grid item xs={5}>
            </Grid>
          </Grid>
        </div>
      </header>
    </div>
  )
}

export default Intro;
