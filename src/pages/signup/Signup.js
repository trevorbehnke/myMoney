import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

// styles
// import styles from "./Signup.module.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
  };

  return (
    <form className="flex h-screen" onSubmit={handleSubmit}>
      <div className="m-auto">
        <div className="flex flex-col w-96">
          <h2 className="flex justify-center">Sign Up</h2>
          <label>
            <span>Email:</span>
            <input
              className="min-w-full"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </label>
          <label>
            <span>Password:</span>
            <input
              className="min-w-full"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </label>
          <label>
            <span>Display Name:</span>
            <input
              className="min-w-full"
              type="text"
              onChange={(e) => setDisplayName(e.target.value)}
              value={displayName}
            />
          </label>
          {!isPending && <button className="border">Sign Up</button>}
          {isPending && (
            <button className="border" disabled>
              Loading...
            </button>
          )}
          {error && <p>{error}</p>}
        </div>
      </div>
    </form>
  );
}
