import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

const Login: React.FC = () => {
  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Paper elevation={3} style={{ padding: "24px", width: "100%" }}>
        <Typography
          component="h1"
          variant="h5"
          align="center"
          style={{ marginBottom: "16px" }}
        >
          Login Page
        </Typography>
        <form>
          <Box mb={2}>
            <TextField
              fullWidth
              id="username"
              label="Username"
              name="username"
              variant="outlined"
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              variant="outlined"
            />
          </Box>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Login
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export { Login };
