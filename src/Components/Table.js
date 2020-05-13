import React, {Component} from 'react'

//table header simple component
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  )
}
//table body simple component 
const TableBody = props => {
  //map through character data array to form rows of table
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    )
  })
//return table rows
  return (
   <tbody>{rows}</tbody>
  )
}

class Table extends Component{
  render() {
    const {characterData, removeCharacter} = this.props

    return (
      //return table, with Name, job heads
      <table>
        <TableHeader />
        <TableBody characterData={characterData} removeCharacter={removeCharacter}/>
      </table>
    )
  }
}
export default Table