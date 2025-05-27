import { Box, Button, Typography, Container } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "react-oauth2-code-pkce";
import { useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes
} from "react-router-dom"; // FIXED: should use react-router-dom
import { setCredentials } from "./store/authSlice";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";
import ActivityDetail from "./components/ActivityDetail";

const ActivitiesPage = () => {
  const [refresh, setRefresh] = useState(false);

  const handleActivityAdded = () => {
    setRefresh((prev) => !prev); // triggers re-render of ActivityList
  };

  return (
    <Box sx={{ mt: 3 }}>
      <ActivityForm onActivityAdded={handleActivityAdded} />
      <ActivityList key={refresh} />
    </Box>
  );
};

function App() {
  const { token, tokenData, logIn, logOut } = useContext(AuthContext);
  const dispatch = useDispatch();
  const [authReady, setAuthReady] = useState(false);

  useEffect(() => {
    if (token) {
      dispatch(setCredentials({ token, user: tokenData }));
      setAuthReady(true);
    }
  }, [token, tokenData, dispatch]);

  return (
    <Router>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "linear-gradient(to right, #e0eafc, #cfdef3)",
          px: 2,
          py: 4,
          fontFamily: `'Poppins', sans-serif`,
          background: "linear-gradient(to right, #f5f7fa, #c3dafe)",
        }}
      >
        {!token ? (
          <Container
            sx={{
              height: "90vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h3" gutterBottom>
              Welcome to FitTrack
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 4 }}>
              Track your fitness, get AI feedback, and improve every day.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={logIn}
              sx={{ px: 4, py: 1.5 }}
            >
              LOGIN
            </Button>
          </Container>
        ) : (
          <Container>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mb: 3,
              }}
            >
              <Button
                variant="outlined"
                color="error"
                onClick={logOut}
                sx={{ fontWeight: "bold" }}
              >
                Logout
              </Button>
            </Box>

            <Routes>
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/activities/:id" element={<ActivityDetail />} />
              <Route
                path="/"
                element={<Navigate to="/activities" replace />}
              />
            </Routes>
          </Container>
        )}
      </Box>
    </Router>
  );
}

export default App;
