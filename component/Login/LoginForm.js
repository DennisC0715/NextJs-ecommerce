import { useState } from "react";
import classes from "./LoginForm.module.css";
import useLogin from "./login-hook";
import { useDispatch } from "react-redux";
import { loginHandler, logoutHandler } from "../ReduxStore/slices/authSlice";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  //////////////////////for email input//////////////////////////////////////////////////
  const {
    value: enteredEmail,
    isValidInput: isValidEmailInput,
    enteredValueIsValid: enteredEmailIsValid,
    valueIsEmpty: emailIsEmpty,
    changeValueHandler: changeEmailHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useLogin(
    (value) => value.trim() === "",
    (value) => value.includes("@")
  );
  const emailErrorText = emailIsEmpty
    ? "Please Enter your email"
    : "Please Enter Valid Email";

  ////////////////////for password input/////////////////////////////////////////////////
  const {
    value: enteredPassword,
    isValidInput: isValidPasswordInput,
    enteredValueIsValid: enteredPasswordIsValid,
    valueIsEmpty: passwordIsEmpty,
    changeValueHandler: changePasswordHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useLogin(
    (value) => value.trim() === "",
    (value) => value.trim().length > 6
  );
  const passwordErrorText = passwordIsEmpty
    ? "Please enter your password"
    : "Password must be 6 digits or more";

  const submitAuthHandler = (event) => {
    event.preventDefault();

    //set isTouch to true
    emailBlurHandler();
    passwordBlurHandler();
    //valiated the Input
    if (
      !enteredPasswordIsValid ||
      passwordIsEmpty ||
      !enteredEmailIsValid ||
      emailIsEmpty
    ) {
      return;
    }
    //fetch API
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyANg5WcYJ0ngyR69pRDapAv7Q-SaWhe3L8",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          let errorMessage = "Authentication Failed!";
          throw new Error(errorMessage);
        }
      })
      .then((data) => {
        dispatch(loginHandler(data.idToken));
        localStorage.setItem("email", enteredEmail);
        //get expiresIn from data convert to unit second
        const expiresIn = new Date(
          new Date().getTime() + +data.expiresIn * 1000
        );
        //convet expiresIn to string
        const expirationTime = expiresIn.toISOString();
        // dispatch(expirationTimeSetup(3000));
        const currentTime = new Date().getTime();
        const adjExpirationTime = new Date(expirationTime).getTime();
        const remainingTime = adjExpirationTime - currentTime;

        setTimeout(() => {
          dispatch(logoutHandler());
        }, remainingTime);

        router.push("/profile");
      })
      .catch((err) => {
        alert(err.message);
      });

    //reset Inputs
    resetEmailInput();
    resetPasswordInput();
  };

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitAuthHandler}>
        {/* ///////////////////////////Email///////////////////////////// */}
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={enteredEmail}
            onChange={changeEmailHandler}
            onBlur={emailBlurHandler}
          />
          {isValidEmailInput && <p>{emailErrorText}</p>}
        </div>
        {/* ///////////////////////////password///////////////////////////// */}
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            placeholder="Enter your password"
            type="password"
            id="password"
            value={enteredPassword}
            onChange={changePasswordHandler}
            onBlur={passwordBlurHandler}
          />
          {isValidPasswordInput && <p>{passwordErrorText}</p>}
        </div>
        <div className={classes.actions}>
          <button>Login</button>
          {isLoading && <p>Loading....</p>}
        </div>
      </form>
    </section>
  );
};
export default LoginForm;

