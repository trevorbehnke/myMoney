import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";

import { createCheckoutSession } from "./stripe/createCheckoutSession";
import usePremiumStatus from "./stripe/usePremiumStatus";

function App() {
  const { authIsReady, user } = useAuthContext();
  const userIsPremium = usePremiumStatus(user);

  return (
    <div className="container mx-auto min-h-screen p-4">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {!user && <Redirect to="/login" />}
              {/* {user && <Home />} */}
              {user && (
                <div>
                  <h1>Hello, {user.displayName}</h1>
                  {!userIsPremium ? (
                    <button onClick={() => createCheckoutSession(user.uid)}>
                      Upgrade to premium!
                    </button>
                  ) : (
                    <Home />
                  )}
                </div>
              )}
            </Route>
            <Route path="/login">
              {user && <Redirect to="/" />}
              {!user && <Login />}
            </Route>
            <Route path="/signup">
              {!user && <Signup />}
              {user && <Redirect to="/" />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
