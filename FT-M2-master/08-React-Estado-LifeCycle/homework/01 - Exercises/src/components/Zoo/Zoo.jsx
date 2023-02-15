import React from "react";
// eslint-disable-next-line no-unused-vars
import Animals from "../Animals/Animals";
// eslint-disable-next-line no-unused-vars
import Species from "../Species/Species";
import "./Zoo.module.css";

export default function Zoo() {
  // zoo es nuestro estado
  const [zoo, setZoo] = React.useState({
    zooName: "",
    animals: [],
    species: [],
    allAnimals: [],
  });

  // ""ComponentDidMount""
  // React.useEffect(() => {
  //   console.log("efecto");
  // }, []);

  React.useEffect(() => {
    // como hago solicitudes? ajax / fetch / axios

    fetch("http://localhost:3001/zoo")
      .then((res) => res.json())
      .then((data) => {
        console.log("data>", data);
        setZoo({
          ...zoo,
          animals: data.animals,
          species: data.species,
          allAnimals: data.animals,
        });
      })
      .catch((error) => console.log(error));
  }, []);

  function handleInputChange(event) {
    console.log(event.target.value);
    setZoo({
      ...zoo,
      zooName: event.target.value,
    });
  }
  function handleSpecies(event) {
    // modificar el arreglo
    console.log(zoo.animals, "< estado zoo.animals");
    setZoo({
      ...zoo,
      animals: zoo.allAnimals.filter(
        (animal) => animal.specie === event.target.value
      ),
    });
  }
  function handleAllSpecies() {
    // modificar el arreglo
    setZoo({ ...zoo, animals: zoo.allAnimals });
  }

  /* Escribe acá tu código */
  return (
    <div>
      <label>Zoo Name:</label>
      <input value={zoo.zooName} onChange={handleInputChange} />
      <h1>{zoo.zooName}</h1>
      <Species
        species={zoo.species}
        handleSpecies={handleSpecies}
        handleAllSpecies={handleAllSpecies}
      />
      <Animals animals={zoo.animals} />
    </div>
  );
}

  
      
