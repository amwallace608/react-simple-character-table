import React, {Component} from 'react'

class Form extends Component {
  initialState ={
    name: '',
    job: ''
  }

  state = this.initialState

  //handle form change method
  handleChange = event => {
    const {name, value} = event.target
    //set state to reflect form change
    this.setState({
      [name]: value
    })
  }
  //submit form method
  submitForm = () => {
    //call handleSubmit method with form data
    this.props.handleSubmit(this.state)
    //revert form state to blank
    this.setState(this.initialState)
  }

  render() {
    const {name, job} = this.state
    //return table row entry form
    return (
			<form>
				<label htmlFor="name">Name</label>
				<input
					type="text"
					name="name"
					id="name"
					value={name}
					onChange={this.handleChange}
				/>
				<label htmlFor="job">Job</label>
				<input
					type="text"
					name="job"
					id="job"
					value={job}
					onChange={this.handleChange}
				/>
        <input
          type="button"
          value="Submit"
          onClick={this.submitForm} />
			</form>
		);
  }
}

export default Form