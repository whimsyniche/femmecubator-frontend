import { NavLink } from "react-router-dom";
import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/accountActions";
import { getCurrentUser } from "../thunks/accountThunks";
import { withRouter } from "react-router-dom";

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.logoutHandler = this.logoutHandler.bind(this);
  }
  componentDidMount() {
    //this.props.getCurrentUser();
  }

  render() {
    return (
      <div className="ui inverted segment" id="navbar">
        <div className="ui inverted secondary pointing menu" id="innerNavBar">
          <div className="header item">
            <NavLink to="/">Femmecubator</NavLink>
          </div>
          <div className="right menu">
            <NavLink
              to="/coupons"
              className="item"
              activeClassName="item active"
            >
              Access Pass
            </NavLink>
            <NavLink
              to="/events"
              className="item"
              activeClassName="item active"
            >
              Events
            </NavLink>
            {localStorage.getItem("token") !== null ? (
              <NavLink
                to="/logout"
                className="item"
                isActive={this.logoutHandler}
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                to="/login"
                className="item"
                activeClassName="item active"
              >
                Login
              </NavLink>
            )}
          </div>
        </div>
      </div>
    );
  }

  logoutHandler() {
    if (this.props.location.pathname === "/logout") {
      this.props.logout();
      this.props.history.push("/");
    }
  }
}

const mapStateToProps = state => {
  return { accountInfo: state.accountInfo };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logoutUser()),
    getCurrentUser: () => dispatch(getCurrentUser())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)
);
