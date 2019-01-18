import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
class App extends Component {
  render() {

  return (
      <div className="App">

        <header className="App-header">

    <img src={logo} className="App-logo" alt="logo" />
          <p>
          <div className="d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">

                 <span className={`h1 mb-4 w-100 text-center text-${themeClass}`}>{ theme || 'Default' }</span>

                 <div className="btn-group">

                   <button type="button" className={`btn btn-${themeClass} btn-lg`}>{ theme || 'Choose' } Theme</button>

                   <button type="button" className={`btn btn-${themeClass} btn-lg dropdown-toggle dropdown-toggle-split`} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     <span className="sr-only">Toggle Theme Dropdown</span>
                   </button>

                   <div className="dropdown-menu">

                     <a className="dropdown-item" href="#" onClick={e => this.chooseTheme('Primary', e)}>Primary Theme</a>
                     <a className="dropdown-item" href="#" onClick={e => this.chooseTheme('Danger', e)}>Danger Theme</a>
                     <a class="dropdown-item" href="#" onClick={e => this.chooseTheme('Success', e)}>Success Theme</a>

                     <div className="dropdown-divider"></div>

                     <a className="dropdown-item" href="#" onClick={this.resetTheme}>Default Theme</a>
                   </div>
  Edit <code>src/App.js</code> and save to definetly reload.
          </p>
          <a

    className="App-link"
            href="https://reactjs.org"
            target="_blank"

         rel="noopener noreferrer"
          >
            Learn React
          </a>

   </header>
      </div>
    );
  }
}

export default App;
