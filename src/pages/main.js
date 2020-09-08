import React, { Component } from 'react';
import '../App.css';
import logo from '../logo.svg';
import agLogoAnim from '../assets/afrogeneanim.gif';
import skillwheel from '../assets/skillwheel2.png';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import Zoom from '@material-ui/core/Zoom';
import Button from '@material-ui/core/Button';

import Skills from '../components/main/skills';
import Experience from '../components/main/experience';
import Works from '../components/main/works';
import Links from '../components/main/links';

class Main extends Component {

  state = {
    menuSelect: '',
    transition: false,
    showMenu: false,
  };

  constructor(props) {
    super(props);
    this.works = props.works;
  }

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
  toggleMenu = () => {
    if (this.state.showMenu === true ) {
    this.setState({showMenu: false})
    } else {
    this.setState({showMenu: true})
    }
  }

  render() {
    return (
      <div className="App">

      {this.props.mobile === true ? (
        <Grid container spacing={1} className="mainGridContainer mobile ">
        {this.state.showMenu === false ? (
          <ul className="mainMenuListMobile">
            <li className="mainMenuListItemMobile">
            <Button className="redButton mainBtn" onClick={this.toggleMenu}>
              Menu
            </Button>
            </li>
          </ul>
        ):(
          <ul className="mainMenuListMobile">
            <li className="mainMenuListItemMobile">
            <Button className="redButton mainBtn" onClick={this.toggleMenu}>
              X
            </Button>
            </li>
            <li className="mainMenuListItemMobile">
            <Button className="redButton mainBtn" onMouseEnter={this.menuSelect.bind(this,'a')}>
              Skills
            </Button>
            </li>
            <li className="mainMenuListItemMobile">
            <Button className="yellowButton mainBtn" onMouseEnter={this.menuSelect.bind(this,'b')}>
              Experience
            </Button>
            </li>
            <li className="mainMenuListItemMobile">
            <Button className="greenButton mainBtn" onMouseEnter={this.menuSelect.bind(this,'c')}>
              Works
            </Button>
            </li>
            <li className="mainMenuListItemMobile">
            <Button className="redButton mainBtn" onMouseEnter={this.menuSelect.bind(this,'d')}>
              Links
            </Button>
            </li>
            <li className="mainMenuListItemMobile">
            <Button className="yellowButton mainBtn" onMouseEnter={this.menuSelect.bind(this,'')}>
              Intro
            </Button>
            </li>
          </ul>
        )}


          <Grid item xs={12} className="mainGridCell">
          {this.props.sequencing === false &&
            this.state.menuSelect === '' && (
            <Zoom
            in={this.state.transition}
            style={{ transitionDelay: this.state.transition ? '100ms' : '0ms' }}
            >
            <div className="mainPaper ">
              <div className="introDiv greenBorderGlow ">
              <img src={agLogoAnim} className="intro2Logo" alt="logo" />
              <h3 className="bioHeader">
              About Me:
              </h3>
              <p className="bioText">
              After graduating from General Assembly's web-dev intensive 3yrs ago, I've been coding non-stop. Since GA, I've done frontend(mostly JS) and basic DevOps in a startup environ for 2 years. As well as MERN stack apps w/ graphql (+ some other stuff) for freelance and personal projects up till now. I'd like to (need to) get back into a more structured place than rogue coder in the wild, wild net.
              I'm my current study goals are mobile (react-native), automation (puppeteer, selenium) material design (been using bootstrap till now). I'd also like to temper my current skills in said structured environment.
              </p>
              </div>
              <div className="over">
              <img src={skillwheel} className="skillwheel" alt="logo" />
              </div>
            </div>
            </Zoom>
          )}
          {this.state.menuSelect === 'a' && (
            <Grow
            in={this.state.transition}
            style={{ transformOrigin: '0 0 0' }}
            {...(this.state.transition ? { timeout: 500 } : {})}
            >
            <div className="mainPaper">
            <Skills
              mobile={this.props.mobile}
            />
            </div>
            </Grow>
          )}
          {this.state.menuSelect === 'b' && (
            <Grow
            in={this.state.transition}
            style={{ transformOrigin: '0 0 0' }}
            {...(this.state.transition ? { timeout: 500 } : {})}
            >
            <div className="mainPaper">
            <Experience
              mobile={this.props.mobile}
            />
            </div>
            </Grow>
          )}
          {this.state.menuSelect === 'c' && (
            <Grow
            in={this.state.transition}
            style={{ transformOrigin: '0 0 0' }}
            {...(this.state.transition ? { timeout: 500 } : {})}
            >
            <div className="mainPaper">
            <Works
              works={this.props.works}
              mobile={this.props.mobile}
            />
            </div>
            </Grow>
          )}
          {this.state.menuSelect === 'd' && (
            <Grow
            in={this.state.transition}
            style={{ transformOrigin: '0 0 0' }}
            {...(this.state.transition ? { timeout: 500 } : {})}
            >
            <div className="mainPaper">
            <Links/>
            </div>
            </Grow>
          )}
          </Grid>
        </Grid>
      ):(
        <Grid container spacing={1} className="mainGridContainer desktop">
          <Grid item xs={2}  className="mainGridCell">
          <ul className="mainMenuList">
            <li className="mainMenuListItem">
            <Button variant="outlined" className="redButton" onMouseEnter={this.menuSelect.bind(this,'a')}>
              Skills
            </Button>
            </li>
            <li className="mainMenuListItem">
            <Button variant="outlined" className="yellowButton" onMouseEnter={this.menuSelect.bind(this,'b')}>
              Experience
            </Button>
            </li>
            <li className="mainMenuListItem">
            <Button variant="outlined" className="greenButton" onMouseEnter={this.menuSelect.bind(this,'c')}>
              Works
            </Button>
            </li>
            <li className="mainMenuListItem">
            <Button variant="outlined" className="redButton" onMouseEnter={this.menuSelect.bind(this,'d')}>
              Links
            </Button>
            </li>
            <li className="mainMenuListItem">
            <Button variant="outlined" className="yellowButton" onMouseEnter={this.menuSelect.bind(this,'')}>
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
            <div className="mainPaper ">
              <div className="introDiv greenBorderGlow ">
              <img src={agLogoAnim} className="intro2Logo" alt="logo" />
              <h3 className="bioHeader">
              About Me:
              </h3>
              <p className="bioText">
              After graduating from General Assembly's web-dev intensive 3yrs ago, I've been coding non-stop. Since GA, I've done frontend(mostly JS) and basic DevOps in a startup environ for 2 years. As well as MERN stack apps w/ graphql (+ some other stuff) for freelance and personal projects up till now. I'd like to (need to) get back into a more structured place than rogue coder in the wild, wild net.
              I'm my current study goals are mobile (react-native), automation (puppeteer, selenium) material design (been using bootstrap till now). I'd also like to temper my current skills in said structured environment.
              </p>
              </div>
              <div className="over">
              <img src={skillwheel} className="skillwheel" alt="logo" />
              </div>
            </div>
            </Zoom>
          )}
          {this.state.menuSelect === 'a' && (
            <Grow
            in={this.state.transition}
            style={{ transformOrigin: '0 0 0' }}
            {...(this.state.transition ? { timeout: 500 } : {})}
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
            {...(this.state.transition ? { timeout: 500 } : {})}
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
            {...(this.state.transition ? { timeout: 500 } : {})}
            >
            <div className="mainPaper">
            <Works
              works={this.props.works}
              mobile={this.state.mobile}
            />
            </div>
            </Grow>
          )}
          {this.state.menuSelect === 'd' && (
            <Grow
            in={this.state.transition}
            style={{ transformOrigin: '0 0 0' }}
            {...(this.state.transition ? { timeout: 500 } : {})}
            >
            <div className="mainPaper">
            <Links/>
            </div>
            </Grow>
          )}
          </Grid>
        </Grid>
      )}



      </div>
    )
  }
}

export default Main;
