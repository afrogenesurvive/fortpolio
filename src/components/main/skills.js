import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretUp,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
  faTimesCircle,
  faCompass,
  faCode,
  faCodeBranch,
  faArchive,
  faExternalLinkAlt,
  faEllipsisH,
  faServer,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';
// } from '@fortawesome/free-brands-svg-icons';
import './main.css';

const Skills = (props) => {

  const [state, setState] = useState('');
  const handleStateChange = (args) => {
    setState({item: args,transition:true});
   }

  return (
    <div className="mainTop">
    {props.mobile === false ? (
      <Grid container spacing={1}>
      <Grid item xs={2}  className="subGridCell skillGrid">
      <ul className="skillsList">
      <li className="skillsListItem">
      <FontAwesomeIcon icon={faServer} className="whtIcon" size="3x"/>
      </li>
      <li className="skillsListItem">
      <h2>Backend</h2>
      </li>
      <li className="skillsListItem">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'a')}>
        Server
      </Button>
      </li>
      <li className="skillsListItem">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'b')}>
        APIs
      </Button>
      </li>
      <li className="skillsListItem">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'c')}>
        Database
      </Button>
      </li>
      <li className="skillsListItem">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'d')}>
        DevOps
      </Button>
      </li>
      <li className="skillsListItem">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'e')}>
        Other
      </Button>
      </li>
      </ul>

      </Grid>

      <Grid item xs={8}  className="subGridCell">
      {state.item === 'a' && (
        <Slide direction="down" in={state.transition}>
        <div className="skillsCenterCell redBorderGlow">
        <p>Node.js</p>
        <p>Express</p>
        </div>
        </Slide>
      )}
      {state.item === 'b' && (
        <Slide direction="up" in={state.transition}>
        <div className="skillsCenterCell yellowBorderGlow">
        <p>GraphQL</p>
        <p>REST</p>
        </div>
        </Slide>
      )}
      {state.item === 'c' && (
        <Slide direction="down" in={state.transition}>
        <div className="skillsCenterCell greenBorderGlow">
        <p>MongoDb</p>
        <p>Mongo Atlas</p>
        <p>DynamoDb</p>
        </div>
        </Slide>
      )}
      {state.item === 'd' && (
        <Slide direction="down" in={state.transition}>
        <div className="skillsCenterCell greenBorderGlow">
        <p>AWS</p>
        <p>GCP</p>
        </div>
        </Slide>
      )}
      {state.item === 'e' && (
        <Slide direction="down" in={state.transition}>
        <div className="skillsCenterCell greenBorderGlow">
        <p>Socket.io</p>
        </div>
        </Slide>
      )}

      {state.item === 'w' && (
        <Slide direction="up" in={state.transition}>
        <div className="skillsCenterCell redBorderGlow">
        <p>HTML, CSS, JS</p>
        <p>JQuery</p>
        </div>
        </Slide>
      )}
      {state.item === 'x' && (
        <Slide direction="up" in={state.transition}>
        <div className="skillsCenterCell redBorderGlow">
        <p>ReactJS</p>
        </div>
        </Slide>
      )}
      {state.item === 'y' && (
        <Slide direction="down" in={state.transition}>
        <div className="skillsCenterCell yellowBorderGlow">
        <p>Bootstrap</p>
        <p>Material UI</p>
        <p>Figma</p>
        </div>
        </Slide>
      )}
      {state.item === 'z' && (
        <Slide direction="up" in={state.transition}>
        <div className="skillsCenterCell greenBorderGlow">
        <p>Other</p>
        </div>
        </Slide>
      )}
      </Grid>

      <Grid item xs={2}  className="subGridCell skillGrid">
      <ul className="skillsList">
      <li className="skillsListItem">
      <FontAwesomeIcon icon={faMobileAlt} className="whtIcon" size="3x"/>
      </li>
      <li className="skillsListItem">
      <h2>Frontend</h2>
      </li>
      <li className="skillsListItem">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'w')}>
        Vanilla JS
      </Button>
      </li>
      <li className="skillsListItem">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'x')}>
        React
      </Button>
      </li>
      <li className="skillsListItem">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'y')}>
        Design
      </Button>
      </li>
      <li className="skillsListItem">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'z')}>
        Other
      </Button>
      </li>
      </ul>
      </Grid>
      </Grid>
    ):(

      <Grid container spacing={1}>
      <Grid item xs={6}  className="subGridCell skillGrid">
      <ul className="skillsList">
      <li className="skillsListItem">
      <FontAwesomeIcon icon={faMobileAlt} className="whtIcon" size="3x"/>
      </li>
      <li className="skillsListItem">
      <h2>Frontend</h2>
      </li>
      <li className="skillsListItem">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'w')}>
        Vanilla JS
      </Button>
      </li>
      <li className="skillsListItem">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'x')}>
        React
      </Button>
      </li>
      <li className="skillsListItem">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'y')}>
        Design
      </Button>
      </li>
      <li className="skillsListItem">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'z')}>
        Other
      </Button>
      </li>
      </ul>
      </Grid>



      <Grid item xs={6}  className="subGridCell skillGrid">
      <ul className="skillsList">
      <li className="skillsListItem">
      <FontAwesomeIcon icon={faServer} className="whtIcon" size="3x"/>
      </li>
      <li className="skillsListItem">
      <h2>Backend</h2>
      </li>
      <li className="skillsListItem">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'a')}>
        Server
      </Button>
      </li>
      <li className="skillsListItem">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'b')}>
        APIs
      </Button>
      </li>
      <li className="skillsListItem">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'c')}>
        Database
      </Button>
      </li>
      <li className="skillsListItem">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'d')}>
        DevOps
      </Button>
      </li>
      <li className="skillsListItem">
      <Button variant="outlined" color="primary" className="skillsBtn" onMouseEnter={handleStateChange.bind(this,'e')}>
        Other
      </Button>
      </li>
      </ul>
      </Grid>

      <Grid item xs={12}  className="subGridCell">
      {state.item === 'a' && (
        <Slide direction="right" in={state.transition}>
        <div className="skillsCenterCell redBorderGlow">
        <p>NodeJs</p>

        </div>
        </Slide>
      )}
      {state.item === 'b' && (
        <Slide direction="left" in={state.transition}>
        <div className="skillsCenterCell yellowBorderGlow">
        <p>GraphQL</p>
        <p>REST</p>
        </div>
        </Slide>
      )}
      {state.item === 'c' && (
        <Slide direction="right" in={state.transition}>
        <div className="skillsCenterCell greenBorderGlow">
        <p>MongoDb</p>
        </div>
        </Slide>
      )}
      {state.item === 'd' && (
        <Slide direction="right" in={state.transition}>
        <div className="skillsCenterCell greenBorderGlow">
        <p>AWS</p>
        <p>GCP</p>
        </div>
        </Slide>
      )}
      {state.item === 'e' && (
        <Slide direction="right" in={state.transition}>
        <div className="skillsCenterCell greenBorderGlow">
        <p>Socket.io</p>
        <p>Hardware</p>
        </div>
        </Slide>
      )}

      {state.item === 'w' && (
        <Slide direction="left" in={state.transition}>
        <div className="skillsCenterCell redBorderGlow">
        <p>Vanilla JS</p>
        </div>
        </Slide>
      )}
      {state.item === 'x' && (
        <Slide direction="left" in={state.transition}>
        <div className="skillsCenterCell redBorderGlow">
        <p>React</p>
        </div>
        </Slide>
      )}
      {state.item === 'y' && (
        <Slide direction="right" in={state.transition}>
        <div className="skillsCenterCell yellowBorderGlow">
        <p>Bootstrap</p>
        <p>Material UI</p>
        <p>Figma</p>
        </div>
        </Slide>
      )}
      {state.item === 'z' && (
        <Slide direction="left" in={state.transition}>
        <div className="skillsCenterCell greenBorderGlow">
        <p>Other</p>
        </div>
        </Slide>
      )}
      </Grid>

      </Grid>
    )}

    </div>
  )
}

export default Skills;
