import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import AuthContextProvider, { useAuth } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";

require("dotenv").config();

export default function App() {
  return (
    <AuthContextProvider>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <ProtectedRoute exact path="/Home/:Username">
              <Home />
            </ProtectedRoute>
          </Switch>
        </div>
      </Router>
    </AuthContextProvider>
  );
}

function ProtectedRoute(props) {
  const { currentUser } = useAuth();
  const { path } = props;

  return currentUser ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/",
        state: { from: path },
      }}
    />
  );
}
