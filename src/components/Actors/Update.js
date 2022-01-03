import { React } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { startUpdateActors } from "../../actions/actorsActions";
import ActorForm from "./Form";

function UpdateActor(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const handleSubmit = (formData) => {
    const redirect = () => {
      return navigate("/actors");
    };
    props.dispatch(startUpdateActors(formData, redirect, id));
  };

  return (
    <div>
      <h2>Update Actor</h2>
      <ActorForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default connect()(UpdateActor);
