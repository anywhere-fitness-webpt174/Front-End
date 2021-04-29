import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
    "@global": {
      body: {
        backgroundColor: theme.palette.common.white
      }
    },
    appBar: {
      borderBottom: `2px solid black`,
      backgroundRepeat: `no-repeat`,
      backgroundSize: `cover`
    },
    toolbarTitle: {
      flexGrow: 1,
      fontWeight: 900,
      color: "#333453"
    },
    link: {
      margin: theme.spacing(6, 1.5)
    }
  }));

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
  border: 2px solid black;
  padding: 5px;
  background-color: white;
  box-shadow: 3px 3px gray
`;

const Banner = styled.div`
background-image: url('https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=6000');
background-size: cover;
background-position: center;
border-bottom: 3px solid black;
border-top: 3px solid black;
height: 280px;
`;

const Login = styled.div`
text-align: center;
display: inline-flex;
text-decoration: none;
`

const NewLink = styled.div`
text-align: center;
display: inline-flex;
text-decoration: none;
`

const ButtonA = styled.button`
  background: black;
  font-size: 25px;
  border-radius: 3px;
  border: 3px solid gray;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin-top: 5%;
  font-family: Verdana
`

const ButtonB = styled.button`
  background: black;
  font-size: 25px;
  border-radius: 3px;
  border: 3px solid gray;
  color: white;
  margin: 0 1em;
  padding: 0.25em 1em;
  margin-top: 5%;
  font-family: Verdana;
  margin-bottom: 20%
`

function WelcomePage() {
    const classes = useStyles();

  return (
    <div className="welcome">
       <div className="title">
        <h1>Anywhere Fitness</h1>
        </div>
      <Banner />
      <FormWrapper>
        <ButtonWrapper>
          <h1>These days, fitness classes can be held anywhere- a park, an unfinished basement or a garage- not just at a traditional gym. Certified fitness instructors need an easy way to take the awkwardness out of attendance taking and client payment processing.  </h1>
        </ButtonWrapper>
        <Link to='/signup'>
            <ButtonA
                color="primary"
                variant="contained"
                className={classes.link}
             >
            Signup
            </ButtonA>
            </Link>
            <div>
          <Login>
        <p>Already a member?</p>
        </Login>
        </div>
        <div>
          <NewLink>
        <Link to="/login">
          <ButtonB
            color="primary"
            variant="contained"
            className={classes.link}
          >
            Login
          </ButtonB>
        </Link>
        </NewLink>
        </div>
      </FormWrapper>
    </div>
  );
};

export default WelcomePage