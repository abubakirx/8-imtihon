import React from "react";
import { Link } from "react-router-dom";

function SmartCook() {
  return (
    <section>
      <div className="container smartcook">
        <h2 className="smartcook__title">Ready to cook smarter?</h2>
        <p className="smartcook__desc">
          Hit the button, pick a recipe, and get dinner on the table—fast.
        </p>
        <Link className="btn smartcook__btn" to="/recipes">
          Browse recipes
        </Link>
      </div>
    </section>
  );
}

export default SmartCook;
