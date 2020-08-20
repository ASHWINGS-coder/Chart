import React from 'react';
import './Graph.css';
import {Bar , Doughnut} from 'react-chartjs-2';

const mumbai = {
  labels: ['pencil', 'pen', 'ink',
           'paper', 'rubber'],
  datasets: [
    {
      label: 'Profit',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

const delhi = {
    labels: ['pencil', 'pen', 'ink',
             'paper', 'rubber'],
    datasets: [
      {
        label: 'Profit',
        backgroundColor: [
          '#B21F00',
          '#C9DE00',
          '#2FDE00',
          '#00A6B4',
          '#6800B4'
        ],
        hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [40, 30, 89, 83, 56]
      }
    ]
  }

function Graph(props){
    var loc;
    if(props.loc == "mumbai"){
        loc = mumbai;
    }
    if(props.loc == "delhi"){
        loc = delhi
    }
    return(
    <div>
        <h1>{props.loc}</h1>
        <div className="dnut">
        <Doughnut
          data={loc}
          options={{
            title:{
              display:true,
              text:'Profit Share',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
    </div>
    )
}

export default Graph