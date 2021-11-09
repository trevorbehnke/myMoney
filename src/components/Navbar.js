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
        <li className="">myMoneyApp</li>
        {!user && (
          <div className="flex items-center">
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </div>
        )}
        {user && (
          <div className="flex items-center">
            <li className="">hello, {user.displayName}</li>
            <li>
              <button className="" onClick={logout}>
                Logout
              </button>
            </li>
          </div>
        )}
      </ul>
    </nav>
  );
}
