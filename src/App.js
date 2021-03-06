
import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
// import { createBrowserHistory } from 'history';


import Overlay from './components/overlay/overlay';

import Intro from './pages/intro';
import Main from './pages/main';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    location: window.location.pathname,
    mobile: false,
    overlay: {
      show: true,
      data: 'loading'
    },
    grow: false,
    sequencing: true,
    works: [
      {
        category: 'a',
        works: ['urla','urlb','urlc','urlx','urla1',]
      },
      {
        category: 'b',
        works: ['urld','urle','urlf','urla1','urlgh','pop','ussr']
      },
      {
        category: 'c',
        works: ['urlg','urlh','urli','urlax','1','2','3']
      },
    ],
  };

  constructor(props) {
    super(props);
    this.location = window.location.pathname;
  }

  componentDidUpdate() {
  }

  componentDidMount() {
      setTimeout(()=>{
        this.setState({
          overlay:{
            show: false,
            data: null
          },
          grow: true,
          sequencing: false
      })
    }, 1600);

    if (window.outerWidth <= 420) {
      this.setState({mobile: true})
    }

  }

  componentWillUnmount() {
  }

  toggleOverlay = () => {
    if (this.state.overlay.show === true ) {
      this.setState({overlay: {
        show:false,
        data: this.state.overlay.data
      }})
    } else {
      this.setState({overlay: {
        show:true,
        data: this.state.overlay.data
      }})
    }
  }

  render() {
    return (
      <BrowserRouter>
          <React.Fragment>
            <main className="main-content">
              {this.state.overlay.show === true && (
                <Overlay
                  toggleOverlay={this.toggleOverlay}
                  data={this.state.overlay.data}
                />
              )}
              <Switch>
              <Route path="/intro" render={(props) => <Intro {...props}
                toggleOverlay={this.toggleOverlay}
                grow={this.state.grow}
              />}/>
              <Route path="/main" render={(props) => <Main {...props}
                sequencing={this.state.sequencing}
                works={this.state.works}
                mobile={this.state.mobile}
              />}/>
              <Redirect from="/" to="/intro" exact />
              <Redirect from="*" to="/intro" exact />
              </Switch>
            </main>
          </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
