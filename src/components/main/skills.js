import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import './main.css';

const Skills = (props) => {
  
  const [state, setState] = useState('');
  const handleStateChange = (args) => {
    setState(args);
   }

  return (
    <div className="mainTop">
    <Grid container spacing={1}>
    <Grid item xs={4}  className="subGridCell">
    <ul className="skillsList">
    <li className="skillsListItem">
    <p>Frontend</p>
    </li>
    <li className="skillsListItem">
    <button type="button" onClick={handleStateChange('a')}>Vanilla JS</button>
    </li>
    <li className="skillsListItem">
    <button type="button" onClick={handleStateChange('b')}>Choclate JS</button>
    </li>
    <li className="skillsListItem">
    <button type="button" onClick={handleStateChange('c')}>Caramel JS</button>
    </li>
    </ul>
    </Grid>
    <Grid item xs={4}  className="subGridCell">
    {state === 'a' && (

      <p>Vanilla</p>

    )}
    {state === 'b' && (
      <p>Choclate</p>
    )}
    {state === 'c' && (
      <p>Caramel</p>
    )}
    {state === 'd' && (
      <p>Node</p>
    )}
    {state === 'e' && (
      <p>Mongo</p>
    )}
    {state === 'f' && (
      <p>GQL</p>
    )}
    </Grid>
    <Grid item xs={4}  className="subGridCell">
    <ul className="skillsList">
    <li className="skillsListItem">
    <p>Backend</p>
    </li>
    <li className="skillsListItem">
    <button type="button" onClick={handleStateChange('x')}>NodeJS</button>
    </li>
    <li className="skillsListItem">
    <button type="button" onClick={handleStateChange('y')}>MongoDb</button>
    </li>
    <li className="skillsListItem">
    <button type="button" onClick={handleStateChange('z')}>GrapQL</button>
    </li>
    </ul>
    </Grid>
    </Grid>
    </div>
  )
}

export default Skills;
