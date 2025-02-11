import PropTypes from "prop-types"
import { useState } from "react"

export const AddCategory = ({ onNewValue }) => {
  const [inputValue, setInputValue] = useState('')

  const onInputChange= ({target}) => {
        setInputValue(target.value)
  }

  const onSubmit = (event) =>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewValue(inputValue.trim());
        setInputValue('');
        
  }

  return (
    <form onSubmit={ onSubmit } aria-label="form">
        <input id="txtCategory" name="txtCategory" type="text" placeholder="buscar gifs" value={inputValue} onChange={onInputChange}/>
    </form>
  )
}


AddCategory.propTypes = {
  onNewValue: PropTypes.func.isRequired
}