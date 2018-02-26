import React, { Component } from 'react';
import { CreatePlanWrapper, StyledForm } from './CreatePlanStyles';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker'
import FlatButton from 'material-ui/FlatButton';

export default class CreatePlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
    };
  }

  handleChange = (event) => {
    if (event.target.name === "title") {
      this.setState({
        title: event.target.value
      })
    } else if (event.target.name === "description") {
      this.setState({
        description: event.target.value
      })
    }
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.title);
    console.log(this.state.description);
  }
  
  
  render() {
    return (
      <div className="create-plan">
        <CreatePlanWrapper>
          <StyledForm onSubmit={this.handleSubmit}>
            <TextField
              hintText="Type Title"
              floatingLabelText="Title"
              fullWidth={true}
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            /> <br />
            <TextField
              hintText="Type Description"
              floatingLabelText="Description"
              fullWidth={true}
              multiLine={true}
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            /> <br />
            <DatePicker hintText="Landscape Dialog" mode="landscape" />
            <input type="submit" value="Create" />
          </StyledForm>
        </CreatePlanWrapper>
      </div>
    )
  }
}
