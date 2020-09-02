import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';

import Skills from '../components/main/skills';
import Experience from '../components/main/experience';
import Works from '../components/main/works';

class Main extends Component {

  state = {
    menuSelect: '',
    transition: false,
  };

  // constructor(props) {
  //   super(props);
  // }

  componentDidUpdate() {
  }

  componentDidMount() {
    this.setState({transition: true})
  }

  componentWillUnmount() {
  }
  menuSelect = (args) => {
    this.setState({
      menuSelect: args,
      transition: true
    })
  }

  render() {
    return (
      <div className="App">
        <Grid container spacing={1} className="mainGridContainer">
          <Grid item xs={2}  className="mainGridCell">
          <ul className="mainMenuList">
            <li className="mainMenuListItem">
            <Button variant="outlined" color="primary" onMouseEnter={this.menuSelect.bind(this,'a')}>
              Skills
            </Button>
            </li>
            <li className="mainMenuListItem">
            <Button variant="outlined" color="primary" onMouseEnter={this.menuSelect.bind(this,'b')}>
              Experience
            </Button>
            </li>
            <li className="mainMenuListItem">
            <Button variant="outlined" color="primary" onMouseEnter={this.menuSelect.bind(this,'c')}>
              Works
            </Button>
            </li>
            <li className="mainMenuListItem">
            <Button variant="outlined" color="primary" onMouseEnter={this.menuSelect.bind(this,'d')}>
              Links
            </Button>
            </li>
            <li className="mainMenuListItem">
            <Button variant="outlined" color="primary" onMouseEnter={this.menuSelect.bind(this,'')}>
              Intro
            </Button>
            </li>
          </ul>
          </Grid>

          <Grid item xs={10} className="mainGridCell">
          {this.props.sequencing === false &&
            this.state.menuSelect === '' && (
            <Zoom
            in={this.state.transition}
            style={{ transitionDelay: this.state.transition ? '100ms' : '0ms' }}
            >
            <div className="mainPaper">
            intro video/gif/carousel
            </div>
            </Zoom>
          )}
          {this.state.menuSelect === 'a' && (
            <Grow
            in={this.state.transition}
            style={{ transformOrigin: '0 0 0' }}
            {...(this.state.transition ? { timeout: 1500 } : {})}
            >
            <div className="mainPaper">
            <Skills/>
            </div>
            </Grow>
          )}
          {this.state.menuSelect === 'b' && (
            <Grow
            in={this.state.transition}
            style={{ transformOrigin: '0 0 0' }}
            {...(this.state.transition ? { timeout: 1500 } : {})}
            >
            <div className="mainPaper">
            <Experience/>
            </div>
            </Grow>
          )}
          {this.state.menuSelect === 'c' && (
            <Grow
            in={this.state.transition}
            style={{ transformOrigin: '0 0 0' }}
            {...(this.state.transition ? { timeout: 1500 } : {})}
            >
            <div className="mainPaper">
            <Works/>
            </div>
            </Grow>
          )}
          {this.state.menuSelect === 'd' && (
            <Grow
            in={this.state.transition}
            style={{ transformOrigin: '0 0 0' }}
            {...(this.state.transition ? { timeout: 1500 } : {})}
            >
            <div className="mainPaper">
            Links
            </div>
            </Grow>
          )}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Main;
