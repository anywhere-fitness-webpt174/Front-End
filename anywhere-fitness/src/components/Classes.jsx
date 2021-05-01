import React from 'react'
import Class from './Class'


const Classes = (props) => {
    const {classes} = props 

    return (
        <div className = "classes">
            {classes.map((aClass) => {
            return <Class details={aClass} key={aClass.class_id}/>;
          })}
        </div>
    )
}

export default Classes;