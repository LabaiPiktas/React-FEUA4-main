import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { MAIN_ROUTE, CONTACTS_ROUTE, PROFILE_ROUTE } from "../../routes/const";
import { showUserFullName } from "../../utils/user";
import { FaUserCircle } from "react-icons/fa";
import LogoImage from "../Logo/LogoImage";
import "./Topbar.css";

const Topbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="navigation">
      <div>
        <LogoImage />
      </div>
      <div>
        <Link to={MAIN_ROUTE}>Home</Link>
      </div>
      <div>
        <Link to={CONTACTS_ROUTE}>Contacts</Link>
      </div>
      <Link to={PROFILE_ROUTE} className="user-container">
        <FaUserCircle />
        {showUserFullName(user)}
      </Link>
    </nav>
  );
};

export default Topbar;
