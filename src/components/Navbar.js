import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

// styles
// import styles from "./Navbar.module.css";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  return (
    <nav className="">
      <ul className="flex justify-between items-center">
        <li className="">My Web App</li>
        {!user && (
          <div className="flex items-center w-32 justify-between">
            <li>
              <Link to="/login">Log In</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </div>
        )}
        {user && (
          <div className="flex items-center w-40 justify-between">
            <li className="">Hi, {user.displayName}!</li>
            <li>
              <button className="" onClick={logout}>
                Log Out
              </button>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}
