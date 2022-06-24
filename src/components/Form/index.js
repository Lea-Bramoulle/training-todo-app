import './form.scss';

function Form() {
  return (
    <div>
      <form className="form-container">
        <span className="form-container--span"> </span>
        <input placeholder="Create a new Todo..." className="form-container--input" />
      </form>
    </div>
  );
}

export default Form;
