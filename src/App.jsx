import React, { Component } from 'react';
import Clock from './widgets/Clock.jsx';
import Autocomplete from './widgets/Autocomplete.jsx';
import Weather from './widgets/Weather.jsx';
import Tabs from './widgets/Tabs.jsx';
import './App.css';

class App extends Component {

  render() {
    const names = ["Matt", "Aron", "Jason", "Eddie", "Jair"];
    const panes = [
        {title: 'one', content: 'I am the first'},
        {title: 'two', content: 'Second pane here'},
        {title: 'three', content: 'Third pane here'}
      ];
    return (
      <div className="App">
        <Clock />
        <Autocomplete names={names}/>
        <Tabs panes={panes}/>
        <Weather />
      </div>
    );
  }
}

export default App;
