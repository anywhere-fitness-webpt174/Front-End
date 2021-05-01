import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import InstructorProfile from "./InstructorProfileComponents/InstructorProfile";
import { PrivateRoute } from "./PrivateRoute";

class UserProfile extends React.Component {
  state = {
    userRole: "",
  };

  componentDidMount() {
    axiosWithAuth()
      .get(`/users/${this.props.computedMatch.params.user}`)
      .then((res) => {
        //console.log(res)
        setTimeout(() => {
        this.setState({
          userRole: res.data.user.role,
        });
        }, 1000)
        
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="user-profile">
        {this.state.userRole === "Instructor" ? (
          <PrivateRoute component={InstructorProfile} />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default UserProfile;
