import React from "react";


export default class Tabs extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selected: 0
    }

    this.renderHeader = this.renderHeader.bind(this);
    this.selectTab = this.selectTab.bind(this);
    this.selectedStyle = this.selectedStyle.bind(this);
  }

  selectTab(tab){
    this.setState({selected: tab})
  }

  selectedStyle(idx){
    return this.state.selected === idx ? "selected-tab" : "header-tab";
  }


  renderHeader(){
    const panes = this.props.panes

    return (
      <ul className="header">
        {panes.map((pane, idx) => (
          <li
            className={this.selectedStyle(idx)}
            onClick={() => (this.selectTab(idx))}
            key={idx}>
            {pane.title}
          </li>
        ))}
      </ul>
    )
  }


  render(){
    const pane = this.props.panes[this.state.selected];
    return (
      <div className="tabs">
        {this.renderHeader()}
        <div className="pane">
          {pane.content}
        </div>
      </div>
    )
  }

}
