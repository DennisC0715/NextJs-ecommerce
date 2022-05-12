import LoginForm from "../../component/Login/LoginForm";
import SignupForm from "../../component/Login/SignupForm";
import classes from "./LoginPage.module.css";
import { useState } from "react";

const LoginPage = () => {
  const [showSignupForm, setShowSignupForm] = useState(false);

  const toggleForms = () => {
    setShowSignupForm((showSignupForm) => !showSignupForm);
  };

  const forms = showSignupForm ? (
    <SignupForm showSignin={toggleForms} />
  ) : (
    <LoginForm showSignup={toggleForms} />
  );

  return (
    <div className={classes.container}>
      <button onClick={toggleForms}>showSignup</button>
      <div>
        {forms}
        {/* {!showSignupForm && <LoginForm showSignup={toggleForms} />}
        {showSignupForm && <SignupForm showSignup={toggleForms} />} */}
      </div>
    </div>
  );
};
export default LoginPage;
