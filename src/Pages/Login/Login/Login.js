import { Container, Typography, TextField, Button } from "@mui/material";
import React, { UseState } from "react";
import { Grid } from "@mui/material";
import login from "../../../images/login.png";
import { NavLink } from "react-router-dom";

const Login = () => {
  const handleOnchange = (e) => {
    const [loginData, setLoginData] = UseState({});
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = {...loginData};
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    alert("submit");
    e.preventDefault();
  };
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 25 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              onChange={handleOnchange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Password"
              type="password"
              name="password"
              onChange={handleOnchange}
              variant="standard"
            />

            <Button
              sx={{ width: "75%", m: 3 }}
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#19D3AE" }}
            >
              Login
            </Button>
            <NavLink style={{ textDecoration: "none" }} to="/register">
              <Button variant="text">New User? Please Register</Button>
            </NavLink>
          </form>
        </Grid>
        <Grid item sx={{ mt: 6.6 }} xs={12} md={6}>
          <img style={{ width: "100%" }} src={login} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
