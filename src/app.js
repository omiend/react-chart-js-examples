import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Line as LineChart} from 'react-chartjs';
// var LineChart = require("react-chartjs").Line;

function chartData() {
  return {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [65, 59, 80, 81, 56, 55, 40],
      },
      {
        label: 'My Second dataset',
        fillColor: 'rgba(151,187,205,0.2)',
        strokeColor: 'rgba(151,187,205,1)',
        pointColor: 'rgba(151,187,205,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(151,187,205,1)',
        data: [28, 48, 40, 19, 86, 27, 90],
      },
    ]
  }
}

const chartOptions = {
  scaleShowGridLines: true,
  scaleGridLineColor: 'rgba(0,0,0,.05)',
  scaleGridLineWidth: 1,
  scaleShowHorizontalLines: true,
  scaleShowVerticalLines: true,
  bezierCurve: true,
  bezierCurveTension: 0.4,
  pointDot: true,
  pointDotRadius: 4,
  pointDotStrokeWidth: 1,
  pointHitDetectionRadius: 20,
  datasetStroke: true,
  datasetStrokeWidth: 2,
  datasetFill: true,
  legendTemplate: '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].strokeColor%>\"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>',
};

export class ChartsComponent extends Component {
  
  constructor(props) {
    console.debug(' - ChartsComponent constructor');
    super(props);
    // this.state = {data: []};
    this.readTemperatureData();
    this.state = {
      data: chartData()
    }
  }

  readTemperatureData() {
    console.debug(' - ChartsComponent readTemperatureData');
    $.ajax({
      url: "/api/temperature",
      type: 'GET',
      dataType: 'json',
      cache: false,
      success: (response) => {
        this.setState({data: response.map((res) => [res.date, res.max, res.min, res.avg])});
      },
      error: (xhr, status, err) => {
        console.error("/api/temperature", status, err.toString());
      }
    });
  }

  // componentDidMount() {
  //   this.readTemperatureData();
  // }

  render() {
    
    const chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          fillColor: 'rgba(220,220,220,0.2)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          fillColor: 'rgba(151,187,205,0.2)',
          strokeColor: 'rgba(151,187,205,1)',
          pointColor: 'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ]
    };

    console.debug(' - ChartsComponent render');
    console.debug(this.state);

    // https://gist.github.com/rowinf/583fcbafe28d24eae323
    return (
      <div className={"my-pretty-chart-container"}>
        <h2>Temperature</h2>
        <LineChart data={this.state.data} options={chartOptions} />
      </div>
    )
  }
}

export class TemperaturesComponent extends Component {

  constructor(props) {
    console.debug('TemperaturesComponent constructor');
    super(props);
    this.state = {data: []};
  }

  render() {
    console.debug('TemperaturesComponent render');
    return (
      <div className="temperatureList">
        <h1>TemperaturesComponent</h1>
        <ChartsComponent data={this.state.data} />
      </div>
    )
  }
}
 
ReactDOM.render(
  <TemperaturesComponent />,
  document.getElementById('content')
);
