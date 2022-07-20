import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: emailReset,
  } = useInput((value) => value.includes("@"));

  let isFormValid = false;

  if (nameIsValid && lastNameIsValid && emailIsValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!isFormValid) {
      return;
    }
    console.log("finished");
    nameReset();
    lastNameReset();
    emailReset();
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            onChange={nameChangeHandler}
            onBlur={nameInputBlurHandler}
            value={nameValue}
            id="name"
          />
          {nameHasError && <p className="error-text">Name is invalid</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Last Name</label>
          <input
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameInputBlurHandler}
            type="text"
            id="name"
          />
          {lastNameHasError && (
            <p className="error-text">Last Name is invalid</p>
          )}
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          id="name"
        />
        {emailHasError && <p className="error-text">email is invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
