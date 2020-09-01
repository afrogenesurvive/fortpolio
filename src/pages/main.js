import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';

import Skills from '../components/main/skills';
import Experience from '../components/main/experience';
import Works from '../components/main/works';

class Main extends Component {

  state = {
    menuSelect: null,
    transition: false,
  };

  // constructor(props) {
  //   super(props);
  // }

  componentDidUpdate() {
  }

  componentDidMount() {

  }

  componentWillUnmount() {
  }
  menuSelect = (args) => {
    this.setState({
      menuSelect: args,
      transition: true
    })
    // this.transition()
  }
  transition = () => {
    this.setState({
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
              <button type="button" onMouseEnter={this.menuSelect.bind(this,'a')}>Skills</button>
            </li>
            <li className="mainMenuListItem">
              <button type="button" onMouseEnter={this.menuSelect.bind(this,'b')}>Experience</button>
            </li>
            <li className="mainMenuListItem">
              <button type="button" onMouseEnter={this.menuSelect.bind(this,'c')}>Works</button>
            </li>
          </ul>
          </Grid>
          <Grid item xs={10} className="mainGridCell">
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
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Main;
