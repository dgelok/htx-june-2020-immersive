import React, { Component } from 'react'
import { Line, Doughnut } from 'react-chartjs-2';
 


class MyChart extends Component {

    constructor(props) {
        super(props);
        this.chartReference = React.createRef();
    }

    componentDidMount() {
        console.log(this.chartReference); // returns a Chart.js instance reference
    }

    render() {

        const data = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
              },
              {
                label: "Second dataset",
                data: [33, 25, 35, 51, 54, 76],
                fill: false,
                borderColor: "#742774"
              }
            ]
          };
        return (
            <div className="App">
            <Line data={data} height={50} />
          </div>
        )
    }
}

class MyComponent extends React.Component {
    
   
    
   
    
  }

export default MyChart
