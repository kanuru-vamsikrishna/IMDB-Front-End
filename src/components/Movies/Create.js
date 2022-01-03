import { React } from "react";
import { connect } from "react-redux";
import MoviesForm from "./Form";
import { useNavigate } from "react-router";
import { startAddMovies } from "../../actions/movieActions";

function UpdateMovies(props) {
  const navigate = useNavigate();
  const handleSubmit = (formData) => {
    console.log("Here");
    const redirect = () => {
      return navigate("/movies");
    };
    props.dispatch(startAddMovies(formData, redirect));
  };
  return (
    <div>
      <h2>Update Movie</h2>
      <MoviesForm handleSubmit={handleSubmit} />
    </div>
  );
}

export default connect()(UpdateMovies);
