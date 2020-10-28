import React from 'react'
import { Bar } from 'react-chartjs-2'

const data = {
  labels: [ '', '1', ' ', '2', ' ', '3', ' ', '4', ' ', '5'],
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3, 4, 6, 33, 22, 4],
      label: '',
      backgroundColor: '#ffdd63' ,
      barThickness: 35,
      borderWidth: 1,
    },
  ],
}

const options = {
  scales: {
    gridLines: {
    },
    yAxes: [
      {
        ticks: {

          beginAtZero: true,
        },
      },
    ],
  },
}

const VerticalBar = () => (
  <>
    <div className='header'>
      <div className='links'>
      </div>
    </div>
    <Bar 
    data={data} 
    options={options}
     />
  </>
)

export default VerticalBar