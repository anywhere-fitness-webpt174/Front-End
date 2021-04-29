import React from 'react';
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link, useHistory } from "react-router-dom";
import Nav from "./Nav"

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
    return (
        <div>
          <Nav />
            <FormWrapper>
            <h2>Sign Up</h2>
            <form>
                <TextField
                label="User Name"
                type="user"
                placeholder="Username"
                name="username"
                />
                <br />
                <TextField
                label="Email"
                type="email"
                placeholder="Email"
                name="email"
                />
                <br />
                <TextField
                label="Password"
                type="password"
                placeholder="Password"
                name="password"
                />
                <br />
                <br />
                <label htmlFor='userType'>
                    Please Choose Your Profile Type: 
                    <br />
                    <select id='userType' name='userType'>
                        <option value=''>- Choose 1 of the following -</option>
                        <option value='instructor'>Instructor</option>
                        <option value='student'>Student</option>
                    </select>
                </label>
                <br />
                <br />
                <ButtonWrapper>
                  <Button variant="contained" type="submit" onClick={SignUp}>
                    Sign Up
                  </Button>
                </ButtonWrapper>
            </form>
          </FormWrapper>
          <Back>
        <Link to='/'>
        Back
        </Link>
          </Back>
    </div>
    )
}

export default SignUp