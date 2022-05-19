import LogoutModal from "./LogoutModal";
import { useSelector } from "react-redux";

const LogoutWrapper = (props) => {
  const showLogoutModal = useSelector((state) => state.modal.showLogoutModal);
  return (
    <div>
      {showLogoutModal && <LogoutModal />}
      {props.children}
    </div>
  );
};

export default LogoutWrapper;
