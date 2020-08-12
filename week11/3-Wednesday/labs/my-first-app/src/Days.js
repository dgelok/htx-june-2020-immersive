import React, { Component } from 'react'

class Days extends Component {
  render() {

    let days = this.props.arr.map(day =>{

        return <li>{day}</li>

        })
    return (
      <>
        <ul>

            {days}
        </ul>
      </>
    )
  }
}

export default Days
