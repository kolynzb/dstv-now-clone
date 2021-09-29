import "./App.css";
import SignUpPage from "./screens/SignUpPage";
import SignInScreen from "./screens/SignInScreen";
import Home from "./screens/Home";
import SignUpWelcome from "./screens/SignUpWelcome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "./store/userSlice";
function App() {
  const user = useSelector(selectUser);
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
