import { React } from "react";
import { connect } from "react-redux";
import MoviesForm from "./Form";
import { useNavigate } from "react-router";
import { startUpdateMovies } from "../../actions/movieActions";
import { useParams } from "react-router-dom";

function UpdateMovies(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id, props.match);
  const handleSubmit = (formData) => {
    console.log("Here Update");
    const redirect = () => {
      return navigate("/movies");
    };
    props.dispatch(startUpdateMovies(formData, redirect, id));
  };
  return (
    <div>
      <h2>Update Movie</h2>
      <MoviesForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default connect()(UpdateMovies);
