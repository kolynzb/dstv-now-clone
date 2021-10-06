import "./App.css";
import SignUpPage from "./screens/SignUpPage";
import SignInScreen from "./screens/SignInScreen";
import Home from "./screens/Home";
import SignUpWelcome from "./screens/SignUpWelcome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logOut, selectUser } from "./store/userSlice";
import { auth } from "./Firebase";
import { useEffect } from "react";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged((user) => {
      user
        ? dispatch(login({ uID: user.uid, email: user.email }))
        : dispatch(logOut);
    });
    return subscribe;
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Switch>
          {user ? (
            <Route exact path="/" render={() => <Home />} />
          ) : (
            <>
              <Route exact path="/" render={() => <SignUpWelcome />} />
              <Route path="/SignUpPage" render={() => <SignUpPage />} />
              <Route path="/SignInScreen" render={() => <SignInScreen />} />
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
