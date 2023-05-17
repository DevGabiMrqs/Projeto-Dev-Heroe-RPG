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

  // const [selectedOption, selectedOption] = useState<string>("");


  return (
    <div>
      <form>
      <label>Classes:</label>
      <select id="classHeroe">
        {optionList.map((option, index) => (
          <option key={index} value={option.classe}>{option.classe}</option>
        ))}
      </select>

      <label>Características:</label>
      <select id="caractereHeroe">
        {/* {optionList.map((option, index) => (

        ))} */}
      </select>
      </form>
    </div>
  )
}

export default List