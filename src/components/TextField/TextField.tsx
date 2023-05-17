import "./TextField.css"

const TextField = () => {
  return (
    <div>
        <label className="labelName">Nome:</label>
        <input className="inputName" type="text" placeholder="Infome seu nome de herói"></input>
    </div>
  )
}

export default TextField