// import styles from "./Login.module.css";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form className="flex h-screen" onSubmit={handleSubmit}>
      <div className="m-auto">
        <div className="flex flex-col w-96">
          <h2>Login</h2>
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
          {!isPending && <button className="">Login</button>}
          {isPending && (
            <button className="" disabled>
              Loading...
            </button>
          )}
          {error && <p>{error}</p>}
        </div>
      </div>
    </form>
  );
}
