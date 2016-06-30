import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Line as LineChart} from 'react-chartjs';

export class ChartsComponent extends Component {
  
  constructor(props) {
    console.debug(' - ChartsComponent constructor');
    super(props);
    this.state = {
      data: {
        labels: ["2016/05/29","2016/05/30","2016/05/31","2016/06/01","2016/06/02","2016/06/03","2016/06/04","2016/06/05","2016/06/06","2016/06/07","2016/06/08","2016/06/09","2016/06/10","2016/06/11","2016/06/12","2016/06/13","2016/06/14","2016/06/15","2016/06/16","2016/06/17","2016/06/18","2016/06/19","2016/06/20","2016/06/21","2016/06/22","2016/06/23","2016/06/24","2016/06/25","2016/06/26","2016/06/27","2016/06/28"],
        datasets: [
          {
            label: '2015 Dayly max temperatures',
            fillColor: 'rgba(128,0,0,0.2)',
            strokeColor: 'rgba(128,0,0,1)',
            pointColor: 'rgba(128,0,0,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(128,0,0,1)',
            data: ["26","21.2","24.4","24.9","26.9","23.2","25.1","22.1","26.2","23.8","27.1","24.9","30","27.3","27.8","25.3","27","26.1","24.2","29.5","31.8","26.6","27.5","27.3","25.8","28","27.6","33.6","28.4","30","22.3"]
          },
          {
            label: '2015 Dayly min temperatures',
            fillColor: 'rgba(0,0,128,0.2)',
            strokeColor: 'rgba(0,0,128,1)',
            pointColor: 'rgba(0,0,128,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(0,0,128,1)',
            data: ["16.3","15.7","17.9","17.4","17.1","15.2","15.3","16.1","15.2","18.6","17.7","20.5","21.2","19.8","19","19.8","20.1","20.7","20.2","20.2","21.8","19.8","19.9","20.1","22.1","21.9","20.8","20.8","20.2","19.7","17.9"]
          },
          {
            label: '2015 Dayly avg temperatures',
            fillColor: 'rgba(220,220,220,0.2)',
            strokeColor: 'rgba(220,220,220,1)',
            pointColor: 'rgba(220,220,220,1)',
            pointStrokeColor: '#fff',
            pointHighlightFill: '#fff',
            pointHighlightStroke: 'rgba(220,220,220,1)',
            data: ["21.3","18.7","20.3","21.3","20.9","19.3","20.8","18.2","21.1","21","22.2","22.1","24.6","23","23.1","22.1","22.5","22.6","21.9","24.1","25.9","22.9","23.7","23","23.2","24.4","23.8","26.9","24","24.1","19.8"]
          }
        ]
      },
      option: {
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
      }
    };
  };

  readTemperatureData() {
    console.debug(' - ChartsComponent readTemperatureData');
    $.ajax({
      url: "/api/temperature",
      type: 'GET',
      dataType: 'json',
      cache: false,
      success: (response) => {
      },
      error: (xhr, status, err) => {
        console.error("/api/temperature", status, err.toString());
      }
    });
  }

  render() {
    console.debug(' - ChartsComponent render');
    console.debug(this.state);
    return (
      <LineChart data={this.state.data} options={this.state.option} width="900" height="450" />
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
