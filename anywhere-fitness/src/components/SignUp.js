import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import Nav from "./Nav";
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

// SignUp component without state, routing, or functionality
const SignUp = (props) => {
  const [registerData, setRegisterData] = useState({
    user_name: "",
    user_username: "",
    user_email: "",
    user_password: "",
    role: "",
  });

  const handleChange = (e) => {
    const newRegisterData = {
      ...registerData,
      [e.target.name]: e.target.value,
    };

    setRegisterData(newRegisterData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://protected-gorge-49043.herokuapp.com/api/auth/register",
        registerData
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        props.history.push(`${res.data.user_id}`);
      })
      .catch((err) => {
        console.error(err.message);
      });

    setRegisterData({
      user_name: "",
      user_username: "",
      user_email: "",
      user_password: "",
      role: "",
    });
  };

  return (
    <div>
      <FormWrapper>
        <h2>Sign Up</h2>
        <TextField
          label="Name"
          type="text"
          placeholder="Enter your full name"
          name="user_name"
          value={registerData.user_name}
          onChange={handleChange}
        />
        <br />
        <TextField
          label="User Name"
          type="text"
          placeholder="Username"
          name="user_username"
          value={registerData.user_username}
          onChange={handleChange}
        />
        <br />
        <TextField
          label="Email"
          type="email"
          placeholder="Email"
          name="user_email"
          value={registerData.user_email}
          onChange={handleChange}
        />
        <br />
        <TextField
          label="Password"
          type="password"
          placeholder="Password"
          name="user_password"
          value={registerData.user_password}
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="userType">
          Please Choose Your Profile Type:
          <br />
          <select
            id="role"
            name="role"
            value={registerData.user_role}
            onChange={handleChange}
          >
            <option value="">- Choose 1 of the following -</option>
            <option value="Instructor">Instructor</option>
            <option value="Client">Customer</option>
          </select>
        </label>
        <br />
        <br />
        <ButtonWrapper>
          <Button variant="contained" type="submit" onClick={handleSubmit}>
            Sign Up
          </Button>
        </ButtonWrapper>
      </FormWrapper>
      <Back>
        <Link to="/">Back</Link>
      </Back>
    </div>
  );
};

export default SignUp;
