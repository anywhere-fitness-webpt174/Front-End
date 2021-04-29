import React from 'react'
import InstructorProfileClassList from './InstructorProfileClassList';

const InstructorProfile = (props) => {
    return (
        <div>
            <h1>INSTRUCTOR PROFILE COMPONENT</h1>
            <img src='https://i.pravatar.cc/300' />
            <h3>Name: Test Profile </h3>
            <button>Add Class</button>
            <InstructorProfileClassList />
        </div>
    )
}

export default InstructorProfile;