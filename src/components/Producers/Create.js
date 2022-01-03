import React from "react";
import { connect } from "react-redux";
import ProducersForm from "./Form";
import { useNavigate } from "react-router-dom";
import { startAddProducers } from "../../actions/producersActions";

function CreateProducer(props) {
  const navigate = useNavigate();
  const handleSubmit = (formData) => {
    const redirect = () => {
      return navigate("/producers");
    };
    props.dispatch(startAddProducers(formData, redirect));
  };
  return (
    <div>
      <h2>Create Producer</h2>
      <ProducersForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default connect()(CreateProducer);
