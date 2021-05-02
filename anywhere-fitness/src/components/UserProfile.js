import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import ClientProfile1 from "./ClientProfile1";
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
        this.setState({
          userRole: res.data.user.role,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="user-profile">
        {this.state.userRole === "Instructor" ? (
          <PrivateRoute component={InstructorProfile} />
        ) : this.state.userRole === "Client" ? (
          <PrivateRoute component={ClientProfile1} />
        ) : (
          <h3>Fetching Customer Information</h3>
        )}
      </div>
    );
  }
}

export default UserProfile;
