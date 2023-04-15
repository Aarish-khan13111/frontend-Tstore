import React, { useEffect, useState } from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper";
// import { Link } from "react-router-dom";
import { updateCategory, getCategory } from "./helper/adminapicall";

const UpdateCategory = ({ match }) => {
  const { user, token } = isAutheticated();

  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const preload = (categoryId) => {
    getCategory(categoryId).then((data) => {
      console.log(data);
      if (data.error) {
        // setValues({ ...values, error: data.error });
        setError({ error: data.error });
      } else {
        setName(data);
      }
    });
  };

  useEffect(() => {
    preload(match.params.categoryId);
  });

  //TODO: work on it
  const onUpdate = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    //backend request
    updateCategory(match.params.categoryId, user._id, token, category).then(
      (data) => {
        if (data.error) {
          setError(true);
        } else {
          setError("");
          setSuccess(true);
          setCategory();
        }
      }
    );
  };
  const handleChange = (event) => {
    setError("");
    setName(event.target.value);
  };

  //success Message

  const successMessage = () => {
    if (success) {
      return <h4 className="text-success">Category updated successfully</h4>;
    }
  };

  const errorMessage = () => {
    if (error) {
      return <h4 className="text-warning">Faild to Update Category</h4>;
    }
  };

  const updateCategoryForm = () => (
    <form>
      <div className="form-group">
        <p className="lead text-left">Enter the category</p>
        <input
          type="text"
          className="form-control my-3"
          autoFocus
          required
          placeholder="For Ex. Summer"
          onChange={handleChange}
          value={name}
        />
        <button onClick={onUpdate} className="btn btn-outline-info">
          Updates Category
        </button>
      </div>
    </form>
  );

  return (
    <Base
      title="Create  category here"
      description="Add a new category here"
      className="container bg-dark p-4"
    >
      {successMessage()}
      {errorMessage()}
      <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">{updateCategoryForm()}</div>
      </div>
    </Base>
  );
};

export default UpdateCategory;
