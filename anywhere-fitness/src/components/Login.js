import React from 'react';

const Login = (props) => {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <label htmlFor='userEmail'>
                        Please Enter Email
                        <input
                            type="email"
                            name="userEmail"
                            id="userEmail"
                            value='emailSomething'
                            // onChange={onChange}
                        />
                    </label>
                    <br />
                <label htmlFor='userPassword'>
                        Please Enter Your Password
                        <input
                            type="password"
                            name="userPassword"
                            id="userPassword"
                            value='xyz123'
                            // onChange={onChange}
                        />
                </label>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login;