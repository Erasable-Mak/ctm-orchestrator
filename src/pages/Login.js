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
          console.log(user.uid);
          // toast.success("Logged in Successfully", { autoClose: 5000 });
          // history.push(`Home/${user.uid}`);
          // history.push("/OtherUser");

          try {
            //from uid get document from firestore
            const docRef = doc(db, "Users", user.uid);
            const docSnap = await getDoc(docRef);
            console.log(docSnap.data());
            if (docSnap.exists() && docSnap.data().typeOfUser === "Admin") {
              //only admins allowed
              console.log("Admin");
              toast.success("Logged in Successfully", { autoClose: 5000 });
              history.push(`Home/${user.uid}`);
            } else if (
              docSnap.exists() &&
              docSnap.data().typeOfUser !== "Admin"
            ) {
              //any one other than admin comes here
              console.log("user is not an admin");
              toast.success("Logged in Successfully", { autoClose: 5000 });
              history.push(`OtherUser`);
            } else {
              console.log("Unexpected happened");
            }
          } catch (error) {
            console.log(error);
          }

          //checking for type of user here
          // if (user !== null) {
          //
          // }
        })
        .catch((error) => {
          // const errorCode = error.code;
          // const errorMessage = error.message;
          // console.log("errorCode - " + errorCode);
          // console.log("errorMessage - " + errorMessage);
          toast.error("Either email or password didnt match", {
            autoClose: 5000,
          });
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
