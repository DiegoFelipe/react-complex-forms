import React, { useState } from "react";

const UseInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue(false);
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    isValid: valueIsValid,
    reset,
  };
};

export default UseInput;