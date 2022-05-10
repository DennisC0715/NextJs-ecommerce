import LoginForm from "../../component/Login/LoginForm";
import SignupForm from "../../component/Login/SignupForm";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={classes.container}>
      <div>
        <LoginForm />
      </div>
      <div className={classes["vertical-row"]} />
      <div>
        <SignupForm />
      </div>
    </div>
  );
};
export default LoginPage;
