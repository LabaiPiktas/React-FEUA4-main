import PropTypes from "prop-types";
import "../App.css";

const User = ({ name, last_name, avatar }) => {
  if (!name || !last_name || !avatar) {
    return null;
  }

  return (
    <div className="post">
      <h2>{name}</h2>
      <p>{last_name}</p>
      <p>{avatar}</p>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default User;
