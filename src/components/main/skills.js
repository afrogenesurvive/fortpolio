import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import './main.css';

const Skills = (props) => {

  const [state, setState] = useState('');
  const handleStateChange = (args) => {
    setState({item: args,transition:true});
   }

  return (
    <div className="mainTop">
    <Grid container spacing={1}>
    <Grid item xs={2}  className="subGridCell skillGrid">
    <ul className="skillsList">
    <li className="skillsListItem">
    <p>Frontend</p>
    </li>
    <li className="skillsListItem">
    <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'a')}>
      Vanilla JS
    </Button>
    </li>
    <li className="skillsListItem">
    <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'b')}>
      Choclate JS
    </Button>
    </li>
    <li className="skillsListItem">
    <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'c')}>
      Caramel JS
    </Button>
    </li>
    </ul>
    </Grid>

    <Grid item xs={8}  className="subGridCell">
    {state.item === 'a' && (
      <Slide direction="down" in={state.transition}>
      <div className="skillsCenterCell">
      <p>Vanilla</p>
      </div>
      </Slide>
    )}
    {state.item === 'b' && (
      <Slide direction="up" in={state.transition}>
      <div className="skillsCenterCell">
      <p>Choclate</p>
      </div>
      </Slide>
    )}
    {state.item === 'c' && (
      <Slide direction="down" in={state.transition}>
      <div className="skillsCenterCell">
      <p>Caramel</p>
      </div>
      </Slide>
    )}
    {state.item === 'x' && (
      <Slide direction="up" in={state.transition}>
      <div className="skillsCenterCell">
      <p>Node</p>
      </div>
      </Slide>
    )}
    {state.item === 'y' && (
      <Slide direction="down" in={state.transition}>
      <div className="skillsCenterCell">
      <p>Mongo</p>
      </div>
      </Slide>
    )}
    {state.item === 'z' && (
      <Slide direction="up" in={state.transition}>
      <div className="skillsCenterCell">
      <p>GQL</p>
      </div>
      </Slide>
    )}
    </Grid>

    <Grid item xs={2}  className="subGridCell skillGrid">
    <ul className="skillsList">
    <li className="skillsListItem">
    <p>Backend</p>
    </li>
    <li className="skillsListItem">
    <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'x')}>
      NodeJS
    </Button>
    </li>
    <li className="skillsListItem">
    <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'y')}>
      MongoDb
    </Button>
    </li>
    <li className="skillsListItem">
    <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'z')}>
      GrapQL
    </Button>
    </li>
    </ul>
    </Grid>
    </Grid>
    </div>
  )
}

export default Skills;
