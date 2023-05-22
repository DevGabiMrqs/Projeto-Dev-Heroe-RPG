import { useState } from "react";
import "./List.css"
import barbaro  from '../assets/barbaro.png';
import bardo  from '../assets/bardo.png';
import elfo  from '../assets/elfo.png';
import mago  from '../assets/mago.png';
import princesa  from '../assets/princesa.png';

interface OptionL {
  classe: string;
  image: any;
  caracteristica: string;
}

const optionList: OptionL[] = [

  {
    classe: 'Bárbaro',
    image: barbaro,
    caracteristica: 'Muita força e pouco cérebro'
  },
  {
    classe: 'Bardo',
    image: bardo,
    caracteristica: 'Acordes afinados e dedos ágeis'
  },
  {
    classe: 'Elfo',
    image: elfo,
    caracteristica: 'Flechas brilhantes e cabelos sedosos'
  },
  {
    classe: 'Mago',
    image: mago,
    caracteristica: 'Habilidade de sumir após dicas confusas'
  },
  {
    classe: 'Princesa',
    image: princesa,
    caracteristica: 'Conquista até o inimigo'
  },
]


const List = () => {
  
  const [ selectedClass, setSelectedClass ] = useState<string>("");
  const [ selectedImage, setSelectedImage ] = useState<any>(null);
  const [ selectedCaractere, setSelectedCaractere ] = useState<string>("");
  const [ showForm, setShowForm ] = useState<boolean>(true);
  
    const classHeroeSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedClass(event.target.value)
    };

    const caractereHeroeSelected = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedCaractere(event.target.value)
    };

    const handleHeroeCreateCard = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const selectedOption = optionList.find(
          (option) =>
          option.classe === selectedClass && option.caracteristica === selectedCaractere 
        );

        if(selectedOption) {
          setSelectedImage(selectedOption.image)
          setShowForm(false)
      }

  };

  return (
    <div>
      {showForm && !selectedImage && (
      <form onSubmit={handleHeroeCreateCard}>
      <div className="containerClassHeroe">
        <label>Classes:</label>
        <select 
        className="classHeroe"
        value={selectedClass}
        onChange={classHeroeSelected}
        >
          {optionList.map((option, index) => (
            <option key={index} value={option.classe}>{option.classe}</option>
          ))}

        </select>
      </div>


      <div className="containerCaractereHeroe">
        <label>Características:</label>
        <select 
        className="caractereHeroe"
        value={selectedCaractere}
        onChange={caractereHeroeSelected}
        >
          {optionList.map((option, index) => (
            <option key={index} value={option.caracteristica}>{option.caracteristica}</option>
          ))}
        </select>
        </div>

        <button className="btnCreateHeroe" type="submit">Criar Herói</button>
      </form>
      )}
      {selectedImage && (
        <div className="selectedImage">
          <img src={selectedImage}/>
        </div>
      )}
    </div>
  )
}

export default List