import React, { Component } from 'react';
import Clock from './widgets/Clock.jsx';
import Autocomplete from './widgets/Autocomplete.jsx';
import Weather from './widgets/Weather.jsx';
import Tabs from './widgets/Tabs.jsx';
import './App.css';

class App extends Component {

  render() {
    const names = ["Abe", "Adam", "Matt", "Melissa", "Noelle", "Adrian"];
    const panes = [
        {title: 'one', content: 'I am the first pane'},
        {title: 'two', content: 'I am the second pane'},
        {title: 'three', content: 'I am the third pane'}
      ];
    return (
      <div className="App">
        <div className="row1">
          <Clock />
          <Weather />
        </div>
        <div className="row1">
          <Autocomplete names={names}/>
          <Tabs panes={panes}/>
        </div>
      </div>
    );
  }
}

export default App;
