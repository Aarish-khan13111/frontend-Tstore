import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";

const Signup = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: "",
  });

  const { name, email, password, error, success } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false });
    signup({ name, email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, error: data.error, success: false });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true,
          });
        }
      })
      .catch(console.log("Error in singup"));
  };

  const successMessage = () => (
    <div className="row">
      <div className="col-md-6 offset-sm-3 text-left">
        <div
          className="alert alert-success"
          style={{ display: success ? "" : "none" }}
        >
          New Account Created Successfully. Please{" "}
          <Link to="/">Login hear</Link>
        </div>
      </div>
    </div>
  );

  const errorMessage = () => (
    <div className="row">
      <div className="col-md-6 offset-sm-3 text-left">
        <div
          className="alert alert-danger"
          style={{ display: error ? "" : "none" }}
        >
          {error}
        </div>
      </div>
    </div>
  );

  const singUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form action="">
            <div className="form-group">
              <lable className="text-dark">Name</lable>
              <input
                className="form-control"
                type="text"
                onChange={handleChange("name")}
                value={name}
              />
            </div>
            <div className="form-group">
              <lable className="text-dark">Email</lable>
              <input
                className="form-control"
                type="email"
                onChange={handleChange("email")}
                value={email}
              />
            </div>
            <div className="form-group">
              <lable className="text-dark">password</lable>
              <input
                className="form-control"
                type="password"
                onChange={handleChange("password")}
                value={password}
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  return (
    <Base title="Sing up page" description="A Page For User to sing up">
      {successMessage()}
      {errorMessage()}
      {singUpForm()}
      <p className="text-black text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signup;
