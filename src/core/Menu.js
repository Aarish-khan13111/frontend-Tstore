import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAutheticated } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#B4161B" };
  } else {
    return { color: "#758283" };
  }
};

const Menu = ({ history }) => {
  return (
    <div className="navba navbar-expand-lg navbar-light bg-light border">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link style={currentTab(history, "/")} className="nav-link" to="/">
            <img
              src="/T-store.png"
              width="30"
              height="30"
              className=" align-top mr-2"
              alt=""
            />
            T-store
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(history, "/cart")}
            className="nav-link"
            to="/cart"
          >
            Cart
          </Link>
        </li>
        {isAutheticated() && isAutheticated().user.role === 0 && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/user/dashboard")}
              className="nav-link"
              to="/user/dashboard"
            >
              U.Dashboard
            </Link>
          </li>
        )}
        {isAutheticated() && isAutheticated().user.role === 1 && (
          <li className="nav-item">
            <Link
              style={currentTab(history, "/admin/dashboard")}
              className="nav-link"
              to="/admin/dashboard"
            >
              A. Dashbord
            </Link>
          </li>
        )}
        {!isAutheticated() && (
          <Fragment>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/singup")}
                className="nav-link"
                to="/singup"
              >
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={currentTab(history, "/signin")}
                className="nav-link"
                to="/signin"
              >
                Sign In
              </Link>
            </li>
          </Fragment>
        )}
        {isAutheticated() && (
          <li className="nav-item ">
            <span
              className="nav-link text-warning"
              onClick={() => {
                signout(() => {
                  history.push("/signin");
                });
              }}
            >
              Singout
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default withRouter(Menu);
