import React from "react";
import { connect } from "react-redux";
import ProducersForm from "./Form";
import { useNavigate, useParams } from "react-router-dom";
import { startUpdateProducers } from "../../actions/producersActions";

function UpdateProducer(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleSubmit = (formData) => {
    const redirect = () => {
      return navigate("/producers");
    };
    props.dispatch(startUpdateProducers(formData, redirect, id));
  };
  return (
    <div>
      <h2>Update Producer</h2>
      <ProducersForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default connect()(UpdateProducer);
