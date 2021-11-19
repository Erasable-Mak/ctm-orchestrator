import LoadingButton from "@mui/lab/LoadingButton";
import {
  Box,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase-config";
import { doc, getDoc } from "firebase/firestore";

toast.configure();

function Login() {
  const [loading, setLoading] = React.useState(false);
  const history = useHistory();

  const { login } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
    if (email === "" || password === "") {
      toast.error("Enter all the fields", {
        autoClose: 5000,
      });
      setLoading(false);
      return;
    } else {
      // console.log(email, password);
      login(email, password)
        .then(async (userCredential) => {
          // Signed in
          const user = userCredential.user;

          try {
            //from uid get document from firestore
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists() && docSnap.data().typeOfUser === "Admin") {
              //only admins allowed
              toast.success("Logged in Successfully", { autoClose: 5000 });
              history.push(`AdminHome/${user.uid}`);
            } else if (
              docSnap.exists() &&
              docSnap.data().typeOfUser === "TypeWriter"
            ) {
              //only typewriters allowed
              toast.success("Logged in Successfully", { autoClose: 5000 });
              history.push(`TypeWriterHome/${user.uid}`);
            } else if (
              docSnap.exists() &&
              docSnap.data().typeOfUser !== "Admin"
            ) {
              //any one other than admin comes here
              console.log("user is not an admin");
              toast.success("Logged in Successfully", { autoClose: 5000 });
              history.push(`OtherUser`);
            } else {
              //ideally this case shouls never happen but may happen if user have no internet connection
              throw new Error("User not found");
            }
          } catch (error) {
            toast.error(
              "Either email or password didnt match OR you have poor internet connection",
              {
                autoClose: 5000,
              }
            );
            setLoading(false);
          }
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // console.log("errorCode - " + errorCode);
          // console.log("errorMessage - " + errorMessage);
          toast.error(
            "Either email or password didnt match or you have poor internet connection",
            {
              autoClose: 5000,
            }
          );
          setLoading(false);
        });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="email"
            name="email"
            autoComplete="off"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="off"
          />
          <LoadingButton
            type="submit"
            fullWidth
            loading={loading}
            loadingIndicator="Loading..."
            variant="contained"
          >
            Sign In
          </LoadingButton>
        </Box>
      </Box>
    </Container>
  );
}

export default Login;
