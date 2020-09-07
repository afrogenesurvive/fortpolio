import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import './main.css';

const Links = (props) => {

  const [state, setState] = useState('');
  const handleStateChange = (args) => {
    setState(args);
   }

  return (
    <div className="mainTop">
    <Grid container spacing={1} className="linkGridContainer">
      <Grid item xs={4}  className="linksGridCell">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,{item:'a',transition: true})}>
        x
      </Button>
      </Grid>
      <Grid item xs={4}  className="linksGridCell">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,{item:'b',transition: true})}>
        x
      </Button>
      </Grid>
      <Grid item xs={4}  className="linksGridCell">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,{item:'c',transition: true})}>
        x
      </Button>
      </Grid>
    </Grid>
      {state.item === 'a' && (
        <Grid container spacing={1} className="linkGridContainer">
        <Grow
        in={state.transition}
        style={{ transformOrigin: '0 0 0' }}
        {...(state.transition ? { timeout: 700 } : {})}
        >
        <Grid item xs={12}  className="linksGridCell linkCenterCell">
        <div className="selectedLink redBorderGlow">
        <p>stuff</p>
        <p>stuff</p>
        <p>stuff</p>
        </div>
        </Grid>
        </Grow>
        </Grid>
      )}
      {state.item === 'b' && (
        <Grid container spacing={1} className="linkGridContainer">
        <Grow
        in={state.transition}
        style={{ transformOrigin: '0 0 0' }}
        {...(state.transition ? { timeout: 700 } : {})}
        >
        <Grid item xs={12}  className="linksGridCell linkCenterCell">
        <div className="selectedLink yellowBorderGlow">
        <p>stuff</p>
        <p>stuff</p>
        <p>stuff</p>
        </div>
        </Grid>
        </Grow>
        </Grid>
      )}
      {state.item === 'c' && (

        <Grid container spacing={1} className="linkGridContainer">
        <Grow
        in={state.transition}
        style={{ transformOrigin: '0 0 0' }}
        {...(state.transition ? { timeout: 700 } : {})}
        >
        <Grid item xs={12}  className="linksGridCell linkCenterCell">
        <div className="selectedLink greenBorderGlow">
        <p>stuff</p>
        <p>stuff</p>
        <p>stuff</p>
        </div>
        </Grid>
        </Grow>
        </Grid>
      )}
      {state.item === 'd' && (
        <Grid container spacing={1} className="linkGridContainer">
        <Grow
        in={state.transition}
        style={{ transformOrigin: '0 0 0' }}
        {...(state.transition ? { timeout: 700 } : {})}
        >
        <Grid item xs={12}  className="linksGridCell linkCenterCell">
        <div className="selectedLink redBorderGlow">
        <p>stuff</p>
        <p>stuff</p>
        <p>stuff</p>
        </div>
        </Grid>
        </Grow>
        </Grid>
      )}
      {state.item === 'e' && (
        <Grid container spacing={1} className="linkGridContainer">
        <Grow
        in={state.transition}
        style={{ transformOrigin: '0 0 0' }}
        {...(state.transition ? { timeout: 700 } : {})}
        >
        <Grid item xs={12}  className="linksGridCell linkCenterCell">
        <div className="selectedLink yellowBorderGlow">
        <p>stuff</p>
        <p>stuff</p>
        <p>stuff</p>
        </div>
        </Grid>
        </Grow>
        </Grid>
      )}
      {state.item === 'f' && (
        <Grid container spacing={1} className="linkGridContainer">
        <Grow
        in={state.transition}
        style={{ transformOrigin: '0 0 0' }}
        {...(state.transition ? { timeout: 700 } : {})}
        >
        <Grid item xs={12}  className="linksGridCell linkCenterCell">
        <div className="selectedLink greenBorderGlow">
        <p>stuff</p>
        <p>stuff</p>
        <p>stuff</p>
        </div>
        </Grid>
        </Grow>
        </Grid>
      )}

    <Grid container spacing={1} className="linkGridContainer">
      <Grid item xs={4}  className="linksGridCell">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,{item:'d',transition: true})}>
        x
      </Button>
      </Grid>
      <Grid item xs={4}  className="linksGridCell">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,{item:'e',transition: true})}>
        x
      </Button>
      </Grid>
      <Grid item xs={4}  className="linksGridCell">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,{item:'f',transition: true})}>
        x
      </Button>
      </Grid>
    </Grid>

    </div>
  )
}

export default Links;
