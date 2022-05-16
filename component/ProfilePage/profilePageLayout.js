import UserNav from "../User/UserNav";
import LogoutModal from "../Modal/LogoutModal";
import { Fragment, useDebugValue } from "react";
import { useSelector } from "react-redux";

const ProfilePageLayout = (props) => {
  const showModalState = useSelector((state) => state.modal.showModal);
  const { userfirstName } = props;

  return (
    <Fragment>
      <UserNav userfirstName={userfirstName} />
      {showModalState && <LogoutModal />}
      <div>{props.children}</div>
    </Fragment>
  );
};

export default ProfilePageLayout;
