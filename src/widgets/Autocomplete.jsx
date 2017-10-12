import React from 'react';


class Autocomplete extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      inputVal: "",
      names: this.props.names
    }
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e){
    console.log(e.target.value)
    this.setState({inputVal: e.target.value});
  }

  matches(){
    const matches = [];

    if(this.state.inputVal.length === 0){
      return this.props.names;
    }

    this.props.names.map((name) => {
      let sub = name.slice(0, this.state.inputVal.length);
      if(sub.toLowerCase() === this.state.inputVal.toLowerCase()){
        matches.push(name);
      }
    })

    if(matches.length === 0){
      return ["no matches"];
    }

    return matches;
  }

  render(){
    const names = this.state.names;

    return (
      <div className="autocomplete">
        <input
          className="input"
          type="text"
          value={this.state.inputVal}
          onChange={this.handleInput}
          placeholder="Search..."
        />
      <ul className="list-style">
        {this.matches().map((name, idx) => (
          <li key={idx}>{name}</li>
        ))}
      </ul>


      </div>
    )
  }



}



export default Autocomplete
