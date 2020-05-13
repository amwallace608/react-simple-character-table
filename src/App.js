import React, {Component} from 'react';
import Table from './Components/Table'
import Form from './Components/Form'


class App extends Component {
	state = {
		//table data array, simulate data from JSON based API
		characters: [
			{
				name: "Prapor",
				job: "Armorer and Insurance",
			},
			{
				name: "Mechanic",
				job: "Weapons and Technology",
			},
			{
				name: "Peacekeeper",
				job: "Western Imports",
			},
			{
				name: "Skier",
				job: "Covert Investigations",
			},
			{
				name: "Fence",
				job: "Black Market Sales",
			},
		],
	};
	//remove character method
	removeCharacter = (index) => {
		//get characters from state
		const { characters } = this.state;
		//use filter to create new array with characters not including character at passed index
		this.setState({
			characters: characters.filter((character, i) => {
				return i !== index;
			}),
		});
  };
  //handle submit form method
  handleSubmit = character => {
    //set state to reflect added character from form input
    this.setState({
      characters: [...this.state.characters, character]
    })
  }
  
  //render table and form
	render() {
    const { characters } = this.state
		return (
			<div className="container">
				<Table
					characterData={characters}
					removeCharacter={this.removeCharacter}
				/>
        <Form handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}

export default App;
