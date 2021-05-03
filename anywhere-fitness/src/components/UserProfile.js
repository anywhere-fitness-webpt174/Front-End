import React from "react";
import { connect } from "react-redux";
import { fetchClasses, fetchUser } from "../actions";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import ClientProfile1 from "./ClientProfile1";
import InstructorProfile from "./InstructorProfileComponents/InstructorProfile";
import { PrivateRoute } from "./PrivateRoute";


class UserProfile extends React.Component {
  state = {
    userRole: ""
  }

  
  componentWillMount() {
    console.log(this.props.user.role)
    console.log(this.props.user.user_email)
    this.props.fetchUser(this.props.computedMatch.params.user);
    this.props.fetchClasses();
    this.setState({
      userRole: this.props.user.role,
    })
  }

  render() {
    return (
      <div className="user-profile">
        {this.props.user.role === "Instructor" ? (
          <PrivateRoute
            component={InstructorProfile}
            user={this.props.user}
            error={this.props.error}
            isFetching={this.props.isFetching}
            classes = {this.props.classes}
          />
        ) : this.props.user.role=== "Client" ? (
          <PrivateRoute component={ClientProfile1} />
        ) : (
          <h3>Fetching Customer Information</h3>
        )}
      </div>
    );
  }
}

const mapStateProps = (state) => {
  return {
    user: state.user,
    classes: state.classes,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateProps, { fetchUser, fetchClasses})(UserProfile);
