import { React, useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { startGetActors, startDeleteActors } from "../../actions/actorsActions";
import { Card, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

function ActorsList(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (props.actors.length === 0) {
    dispatch(startGetActors());
  }
  const handleClick = (id) => {
    dispatch(startDeleteActors(id));
  };
  const handleKlick = (id) => {
    return navigate(`/actor/update/${id}`);
  };
  return (
    <div>
      <center>
        <h2>Actors List</h2>
        <p>
          <Grid container spacing={3} style={{ padding: 30 }}>
            {props.actors.map((actor) => {
              return (
                <Card
                  sx={{ width: 345 }}
                  style={{ margin: "10px" }}
                  key={actor._id}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoYiCG665gGWqtI5TV4-ah3XdWUujq3e2oAWgzKZfbs8-h19Jv"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {actor.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {actor.bio}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => {
                        handleKlick(actor._id);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        handleClick(actor._id);
                      }}
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </Grid>
        </p>
      </center>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    actors: state.actors,
  };
};

export default connect(mapStateToProps)(ActorsList);
