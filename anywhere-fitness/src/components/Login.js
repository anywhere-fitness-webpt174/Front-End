import React from "react";
import Nav from "./Nav";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import axios from "axios";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 33%;
  margin-left: 33%;
  text-align: center;
  margin-top: 20px;
  padding: 4px;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const Back = styled.div`
text-align: center;
margin-left: -15px;
margin-top: 15px
text-decoration: none;
`;

const Login = (props) => {
  const [loginData, setLoginData] = useState({
    user_username: "",
    user_password: "",
  });

  const handleChange = (e) => {
    const newLoginData = {
      ...loginData,
      [e.target.name]: e.target.value,
    };
    setLoginData(newLoginData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://protected-gorge-49043.herokuapp.com/api/auth/login",
        loginData
      )
      .then((res) => {
        console.log(res)
        localStorage.setItem("token",res.data.token)
        if(res.data.role == "Instructor") {
          props.history.push(`${res.data.user_id}`)
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <FormWrapper>
        <h1>Login</h1>
        <TextField
          label="username"
          variant="outlined"
          type="username"
          placeholder="Username"
          value={loginData.user_username}
          name="user_username"
          onChange={handleChange}
        />
        <br />
        <TextField
          label="password"
          variant="outlined"
          type="password"
          placeholder="Password"
          value={loginData.user_password}
          name="user_password"
          onChange={handleChange}
        />{" "}
        <ButtonWrapper>
          <Button variant="contained" type="submit" onClick={handleSubmit}>
            Login
          </Button>
        </ButtonWrapper>
      </FormWrapper>
      <Back>
        <Link to="/">Back</Link>
      </Back>
    </div>
  );
};

export default Login;
