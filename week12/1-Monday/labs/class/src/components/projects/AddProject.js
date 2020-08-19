import React, { Component } from 'react';
import {Form, Col} from 'react-bootstrap';
import {v1 as uuidv1} from 'uuid'

class AddProject extends Component {


  handleSubmit = (e) =>{
    e.preventDefault();

    let project = {
      id: uuidv1(),
      title: this.refs.title.value,
      category: this.refs.category.value
    }

    this.props.addProject(project)
  }
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Col>
                    <input ref="title" type="text" placeholder="title" />
                </Col>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <select ref="category">
                    <option>Front-End</option>
                    <option>Back-End</option>

                </select>
            </Form.Group>

            <input className="buttonStyle" value="submit" type="submit" />
        </form>
      </>
    )
  }
}

export default AddProject
