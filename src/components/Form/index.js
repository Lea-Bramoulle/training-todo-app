import './form.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputValue, createTask } from './../../store/action';

function Form() {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.inputValue);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() !== '') {
      dispatch(createTask());
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form-container">
        <span className="form-container--span"> </span>
        <input 
          required
          placeholder="Create a new Todo..." 
          className="form-container--input" 
          value={inputValue}
          onChange={(event) => dispatch(changeInputValue(event.target.value))}
        />
        <p>{inputValue}</p>
      </form>
    </div>
  );
}

export default Form;
