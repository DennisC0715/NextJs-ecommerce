import UserNav from "../User/UserNav";
import LogoutModal from "../Modal/LogoutModal";
import { Fragment, useDebugValue } from "react";
import { useSelector } from "react-redux";

const ProfilePageLayout = (props) => {
  const { userFirstName } = props;

  return (
    <Fragment>
      <UserNav userFirstName={userFirstName} />

      <div>{props.children}</div>
    </Fragment>
  );
};

export default ProfilePageLayout;
