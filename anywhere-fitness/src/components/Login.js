import React from 'react';
import Nav from "./Nav";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

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
    return (
        <div>
          <Nav />
          <FormWrapper>
            <h1>Login</h1>
            <TextField
              label="username"
              variant="outlined"
              type="username"
              placeholder="Username"
              name="username"
            />
            <br />
            <TextField
              label="password"
              variant="outlined"
              type="password"
              placeholder="Password"
              name="password"
            />{" "}
            <ButtonWrapper>
              <Button variant="contained" type="submit">
                Login
              </Button>
            </ButtonWrapper>
          </FormWrapper>
        <Back>
          <Link to='/'>
            Back
          </Link>
          </Back>
        </div>
      );
}

export default Login;