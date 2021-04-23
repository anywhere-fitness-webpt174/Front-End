import React from 'react'


const SignUp = (props) => {
    return (
        <div>
            <form>
                <label htmlFor='userName'>
                    Please Enter Your First and Last Name
                    <input
                        type="text"
                        name="userName"
                        id="userName"
                        value='jade'
                        // onChange={onChange}
                    />
                </label>
                <br />
                <label htmlFor='userEmail'>
                    Please Enter Your Email
                    <input
                        type="email"
                        name="userEmail"
                        id="userEmail"
                        value='example@abc123.com'
                        // onChange={onChange}
                    />
                </label>
                <br />
                <label htmlFor='userPassword'>
                    Please Enter a Password
                    <input
                        type="password"
                        name="userPassword"
                        id="userPassword"
                        value='xyz123'
                        // onChange={onChange}
                    />
                </label>
                <br />
                <label htmlFor='userType'>
                    Please Choose Your Profile Type:
                    <select id='userType' name='userType'>
                        <option value=''>- Choose 1 of the following -</option>
                        <option value='instructor'>Instructor</option>
                        <option value='student'>Student</option>
                    </select>
                </label>
                <submit />
            </form>
        </div>
    )
}

export default SignUp