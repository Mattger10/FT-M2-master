import React from 'react'

export default class Animals extends React.Component {
  constructor (props) {
    super()
  }

  render () {
    const animals = this.props.animals;
    return(
      <div>
        {animals.map((objAnimal) => (
          <div key={objAnimal.name} >
            <h5>{objAnimal.name}</h5>
            <img src={objAnimal.image} alt={objAnimal.name} width="300px" />
            <span>{objAnimal.specie}</span>
          </div>
        ))}
      </div>
    );
  }
}
