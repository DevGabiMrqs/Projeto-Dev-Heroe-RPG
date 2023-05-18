import "./TextField.css"

const TextField = () => {
  return (
    <div className="nameField">
        <label className="labelName">Nome:</label>
        <input className="inputName" type="text" placeholder="Digite o nome do seu herói..."></input>
    </div>
  )
}

export default TextField