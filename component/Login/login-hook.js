// import { useState } from "react";

// const useLogin = (emptyValidateValue, validateValue) => {
//   const [enteredvalue, setEnteredValue] = useState("");
//   const [isTouched, setIsTouched] = useState(false);

//   const valueIsEmpty = emptyValidateValue(enteredvalue);
//   const enteredValueIsValid = validateValue(enteredvalue);
//   const isValidInput = (!enteredValueIsValid || valueIsEmpty) && isTouched;

//   const changeValueHandler = (event) => {
//     setEnteredValue(event.target.value);
//   };
//   const inputBlurHandler = () => {
//     setIsTouched(true);
//   };
//   const reset = () => {
//     setEnteredValue("");
//     setIsTouched(false);
//   };

//   return {
//     value: enteredvalue,
//     isValidInput: isValidInput,
//     enteredValueIsValid: enteredValueIsValid,
//     valueIsEmpty: valueIsEmpty,
//     changeValueHandler: changeValueHandler,
//     inputBlurHandler: inputBlurHandler,
//     reset: reset,
//   };
// };

// export default useLogin;

////////////////////////////////////////useReducer////////////////////////////////////

import { useReducer } from "react";

const initialState = { value: "", isTouched: false };

const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }
  return initialState;
};

const useLogin = (emptyValidateValue, validateValue) => {
  const [inputState, dispatch] = useReducer(inputReducer, initialState);

  const valueIsEmpty = emptyValidateValue(inputState.value);
  const enteredValueIsValid = validateValue(inputState.value);
  const isValidInput =
    (!enteredValueIsValid || valueIsEmpty) && inputState.isTouched;

  const changeValueHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };
  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValidInput: isValidInput,
    enteredValueIsValid: enteredValueIsValid,
    valueIsEmpty: valueIsEmpty,
    changeValueHandler: changeValueHandler,
    inputBlurHandler: inputBlurHandler,
    reset: reset,
  };
};

export default useLogin;
