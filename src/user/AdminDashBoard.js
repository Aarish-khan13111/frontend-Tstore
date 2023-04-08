import React from "react";
import Base from "../core/Base";
import { isAutheticated } from "../auth/helper";

const AdminDashboard = () => {
  const {
    user: { name, email, role },
  } = isAutheticated;

  const adminLeftSide = () => {
    //
  };

  const adminRightSide = () => {
    //
  };

  return (
    <Base
      title="welcom to admin panel"
      description="manage all your product & order hear"
    >
      <h1>This is profile page</h1>
    </Base>
  );
};

export default AdminDashboard;
