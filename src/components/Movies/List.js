import React from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import {
  startDeleteMovies,
  startGetMovies,
  startUpdateMovies,
} from "../../actions/movieActions";
import { Card, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function MoviesList(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (props.movies.length === 0) {
    dispatch(startGetMovies());
  }
  const handleClick = (id) => {
    props.dispatch(startDeleteMovies(id));
  };
  const handleKlick = (id) => {
    return navigate(`/movie/update/${id}`);
  };
  console.log(props.movies);
  return (
    <div>
      <center>
        <h2>List of Movies</h2>
      </center>
      <Grid container spacing={3} style={{ padding: 30 }}>
        {props.movies.map((movie) => {
          return (
            <Card
              sx={{ width: 345 }}
              style={{ margin: "10px" }}
              key={movie._id}
            >
              <CardMedia
                component="img"
                height="200"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoYiCG665gGWqtI5TV4-ah3XdWUujq3e2oAWgzKZfbs8-h19Jv"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {movie.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Plot: {movie.plot}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  onClick={() => {
                    handleKlick(movie._id);
                  }}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  onClick={() => {
                    handleClick(movie._id);
                  }}
                >
                  Delete
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(MoviesList);
