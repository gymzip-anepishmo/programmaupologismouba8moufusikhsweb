function PaperForm(props) {
    return <form className="test-form">
        <h2 className="label-wrapper">
          <label htmlFor="new-paper-input" className="label__lg">
            {props.inputPrompt}
          </label>
        </h2>
        <input
          type="text"
          id="new-paper-form-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
          onChange={(e)=>{props.trackValue(e.target.value, props.paperIndex); }}
        />
      </form>;
}
export default PaperForm;