import List from "../List/List"
import TextField from "../TextField/TextField"
import "./Form.css"

const Form = () => {
  return (
    <div className="form">
      <div className="formContent">
        <div>
            <TextField/>
        </div>
        <div className="listField">
            <List />
        </div>
      </div>
    </div>
  )
}

export default Form