import React, { Component } from 'react'
import Days from './Days'
import DropDays from './DropDays'

class DayWeek extends Component {
  render() {
    let daysOfWeek = ['Monday', "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    return (

        // days of the week
      <>
        <Days arr={daysOfWeek} />

        <DropDays arr={daysOfWeek} />
      </>
    )
  }
}

export default DayWeek
