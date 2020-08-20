import React from 'react';
import './Graph.css';
import { Bar, Doughnut } from 'react-chartjs-2';

const mumbai = {
    labels: ['pencil', 'pen', 'ink',
        'paper', 'rubber'],
    datasets: [
        {
            label: 'Revenue',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
        }
    ]
}

const mumbai1 = {
    labels: ['pencil', 'pen', 'ink',
        'paper', 'rubber'],
    datasets: [
        {
            label: 'Revenue',
            backgroundColor: 'pink',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [70, 50, 82, 86, 90]
        }
    ]
}

const delhi = {
    labels: ['pencil', 'pen', 'ink',
        'paper', 'rubber'],
    datasets: [
        {
            label: 'profit',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
        }
    ]
}

const delhi1 = {
    labels: ['pencil', 'pen', 'ink',
        'paper', 'rubber'],
    datasets: [
        {
            label: 'profit',
            backgroundColor: 'orange',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
        }
    ]
}

function Graph(props) {
    var loc;
    var loc1;
    if (props.loc == "mumbai") {
        loc = mumbai;
        loc1 = mumbai1;
    }
    if (props.loc == "delhi") {
        loc = delhi;
        loc1 = delhi1;
    }
    return (
        <div className="bar1">
            <div className="bar">
                <Bar
                    data={loc}
                    options={{
                        title: {
                            display: true,
                            text: 'Actual Revenue',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
            <div className="bar">
                <Bar
                    data={loc1}
                    options={{
                        title: {
                            display: true,
                            text: 'Targeted Revenue',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default Graph