import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { startAddActors } from "../../actions/actorsActions";
import ActorForm from "./Form";

function CreateActors(props) {
  const navigate = useNavigate();
  const handleSubmit = (formData) => {
    const redirect = () => {
      return navigate("/actors");
    };
    props.dispatch(startAddActors(formData, redirect));
  };
  return (
    <div>
      <h2>Create Actor</h2>
      <ActorForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default connect()(CreateActors);
