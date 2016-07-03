import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ChartsComponent from './chart'

export class MainComponent extends Component {

  constructor(props) {
    console.debug('MainComponent constructor');
    super(props);
    this.state = {data: []};
  }

  render() {
    console.debug('MainComponent render');
    const style = {
      content : {
        padding: '10px 40px',
        color: '#ffffff',
        backgroundColor: '#1e50a2'
      }
    }
    return (
      <div className="temperatureList" style={style.content}>
        <h1>Main Component</h1>
        <ChartsComponent data={this.state.data} />
      </div>
    )
  }
}
 
ReactDOM.render(
  <MainComponent />,
  document.getElementById('content')
);
