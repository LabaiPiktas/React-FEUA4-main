import { Link } from "react-router-dom";
import { MAIN_ROUTE, CONTACTS_ROUTE, USERS_ROUTE } from "../../routes/const";
import "./Topbar.css";

const Topbar = () => {
  return (
    <nav className="navigation">
      <div>Logo</div>
      <div className="topbar">
        <Link to={MAIN_ROUTE}>Home</Link>
      </div>
      <div className="topbar">
        <Link to={CONTACTS_ROUTE}>Contacts</Link>
      </div>
      <div className="topbar">
        <Link to={USERS_ROUTE}>Users</Link>
      </div>
    </nav>
  );
};

export default Topbar;
