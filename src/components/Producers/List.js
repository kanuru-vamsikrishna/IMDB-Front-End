import React from "react";
import { connect, useDispatch } from "react-redux";
import {
  startGetProducers,
  startDeleteProducers,
} from "../../actions/producersActions";
import { useNavigate } from "react-router-dom";
import { Card, Grid } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ProducersList(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (props.producers.length === 0) {
    dispatch(startGetProducers());
  }
  const handleClick = (id) => {
    dispatch(startDeleteProducers(id));
  };
  const handleKlick = (id) => {
    return navigate(`/producer/update/${id}`);
  };
  return (
    <div>
      <center>
        <h2>Producers List</h2>
        <p>
          <Grid container spacing={3} style={{ padding: 30 }}>
            {props.producers.map((producer) => {
              return (
                <Card
                  sx={{ width: 345 }}
                  style={{ margin: "10px" }}
                  key={producer._id}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoYiCG665gGWqtI5TV4-ah3XdWUujq3e2oAWgzKZfbs8-h19Jv"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {producer.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {producer.bio}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => {
                        handleKlick(producer._id);
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        handleClick(producer._id);
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
    producers: state.producers,
  };
};

export default connect(mapStateToProps)(ProducersList);
