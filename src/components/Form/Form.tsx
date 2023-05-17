import List from "../List/List"
import TextField from "../TextField/TextField"
import "./Form.css"

const Form = () => {
  return (
    <div className="form">
        <div>
            <TextField/>
            <List />
        </div>
    </div>
  )
}

export default Form