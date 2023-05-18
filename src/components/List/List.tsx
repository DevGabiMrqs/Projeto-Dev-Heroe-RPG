// import { useState } from "react";
import "./List.css"

const optionList = [

  {
    classe: 'Bárbaro',
    caracteristica: 'Muita força e pouco cérebro'
  },
  {
    classe: 'Bardo',
    caracteristica: 'Acordes afinados e dedos ágeis'
  },
  {
    classe: 'Elfo',
    caracteristica: 'Flechas brilhantes e cabelos sedosos'
  },
  {
    classe: 'Mago',
    caracteristica: 'Habilidade de sumir após dicas confusas'
  },
  {
    classe: 'Princesa',
    caracteristica: 'Conquista até o inimigo'
  },
]


const List = () => {

  // const [selectedOptionHeroe, setSelectedOptionHeroe] = useState<string>("");

  // function handleHeroeCard() {

  // } antes de criar a função que irá aparecer o carrd iremos fazer os cards em si para chamálos

  return (
    <div>
      <form>
      <div className="containerClassHeroe">
        <label>Classes:</label>
        <select className="classHeroe">
          {optionList.map((option, index) => (
            <option key={index} value={option.classe}>{option.classe}</option>
          ))}
        </select>
      </div>

      <div className="containerCaractereHeroe">
        <label>Características:</label>
        <select className="caractereHeroe">
          {optionList.map((option, index) => (
            <option key={index} value={option.caracteristica}>{option.caracteristica}</option>
          ))}
        </select>
        </div>
        <button className="btnCreateHeroe" >Criar Herói</button>
      </form>
    </div>
  )
}

export default List