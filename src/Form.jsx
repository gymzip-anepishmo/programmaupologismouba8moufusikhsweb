function Form(props) {
    return <form className="form">
        <h2 className="label-wrapper">
          <label htmlFor="new-input" className="label__lg">
            {props.inputPrompt}
          </label>
        </h2>
        <input
          type="text"
          id="new-form-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          onChange={(e)=>props.trackValue(e.target.value)}
        />
      </form>;
}
export default Form;