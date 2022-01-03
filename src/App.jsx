import { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import AuthContextProvider, { useAuth } from "./contexts/AuthContext";
import ChangeCircleOutlinedIcon from "@mui/icons-material/ChangeCircleOutlined";
import SBIForm from "./BankForms/sbi";

const AdminHome = lazy(() => import("./AdminPages/Home"));
const TypeWriterHome = lazy(() => import("./TypeWriterPages/Home"));
const Login = lazy(() => import("./AdminPages/Login"));
const OtherUser = lazy(() => import("./AdminPages/OtherUser"));

export default function App() {
  return (
    <Suspense fallback={<LoadingModal />}>
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
              <Route exact path="/form">
                <SBIForm />
              </Route>
            </Switch>
          </div>
        </Router>
      </AuthContextProvider>
    </Suspense>
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

const LoadingModal = () => {
  return (
    <div style={{ position: "fixed", width: "100%", height: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
        }}
      >
        <ChangeCircleOutlinedIcon className="rotate" />
        Loading!
      </div>
    </div>
  );
};
