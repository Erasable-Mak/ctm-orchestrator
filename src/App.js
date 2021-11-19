import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import AuthContextProvider, { useAuth } from "./contexts/AuthContext";
import AdminHome from "./AdminPages/Home";
import TypeWriterHome from "./TypeWriterPages/Home";
import Login from "./AdminPages/Login";
import OtherUser from "./AdminPages/OtherUser";

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
            <Route exact path="/OtherUser">
              <OtherUser />
            </Route>
            <ProtectedRoute exact path="/AdminHome/:Username">
              <AdminHome />
            </ProtectedRoute>
            <ProtectedRoute exact path="/TypeWriterHome/:Username">
              <TypeWriterHome />
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
