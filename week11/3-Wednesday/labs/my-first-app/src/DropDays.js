import React, { Component } from 'react'

class DropDays extends Component {
  render() {

    let days = this.props.arr.map(day =>{

        return <option>{day}</option>

        })
    return (
      <>
        <select>

            {days}
        </select>
      </>
    )
  }
}

export default DropDays
