import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startGetActors } from "../../actions/actorsActions";
import { startGetProducers } from "../../actions/producersActions";
import { FormControl, InputLabel, OutlinedInput, Button } from "@mui/material";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useParams } from "react-router-dom";
import { startGetMovies } from "../../actions/movieActions";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function MoviesForm(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (props.actors.length == 0 || props.producers.length == 0) {
    dispatch(startGetMovies());
    dispatch(startGetActors());
    dispatch(startGetProducers());
  }
  const { id } = useParams();

  const [year, setYear] = useState("2022");
  const [actors, setActors] = useState([]);
  const [producers, setProducers] = useState("");
  const [name, setName] = useState("");
  const [plot, setPlot] = useState("");

  useEffect(() => {
    dispatch(startGetMovies());
    if (id) {
      const movie = props.movies.find((m) => {
        return m._id == id;
      });
      setName(movie.name);
      setPlot(movie.plot);
      setYear(movie.year);
      const actors = movie.actors.map((act) => {
        return act._id;
      });
      console.log(actors);
      setActors([...actors]);
      setProducers(movie.producer._id);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(actors, "fn");
  }, [actors]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePlotChange = (e) => {
    setPlot(e.target.value);
  };

  const handleActorChange = (e) => {
    const actors = e.target.value;
    setActors(actors);
  };
  const handleProducerChange = (e) => {
    const producers = e.target.value;
    setProducers(producers);
  };
  const handleYearChange = (e) => {
    setYear(e);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const yearOfrelease = new Date(year);
    const formData = {
      name: name,
      year: yearOfrelease.getFullYear(),
      plot: plot,
      actors: actors,
      producer: producers,
    };
    console.log(formData);
    props.handleSubmit(formData);
  };
  const handleClick = (e) => {
    return navigate("/actor/create");
  };
  const handleKlick = (e) => {
    return navigate("/producer/create");
  };
  return (
    <div>
      <h2>Create Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <FormControl
            variant="outlined"
            sx={{
              width: "55ch",
            }}
          >
            <InputLabel htmlFor="outlined-adornment-title">Name</InputLabel>
            <OutlinedInput
              type="text"
              id="outlined-adornment-title"
              label="Name"
              size="small"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </FormControl>
        </div>
        <br />
        <div>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack
              spacing={1}
              sx={{
                width: "45ch",
              }}
            >
              <DatePicker
                views={["year"]}
                label="Year"
                value={year}
                onChange={handleYearChange}
                renderInput={(params) => (
                  <TextField {...params} helperText={null} />
                )}
              />
            </Stack>
          </LocalizationProvider>
        </div>
        <br />
        <div>
          <FormControl
            variant="outlined"
            sx={{
              width: "55ch",
            }}
          >
            <TextField
              id="outlined-multiline-static"
              label="Plot"
              multiline
              name="plot"
              maxRows={4}
              value={plot}
              onChange={handlePlotChange}
            />
          </FormControl>
        </div>
        <br />
        <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-name-label">Actors</InputLabel>
            <Select
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              multiple
              value={actors}
              onChange={handleActorChange}
              input={<OutlinedInput label="Name" />}
              MenuProps={MenuProps}
            >
              {props.actors.map((actor, i) => (
                <MenuItem key={i} value={actor._id}>
                  {actor.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <Button
            onClick={() => {
              handleClick();
            }}
          >
            Add Actor
          </Button>
        </div>
        <br />
        <div>
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Producer
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={producers}
              onChange={handleProducerChange}
              label="Producer"
            >
              {props.producers.map((producer, i) => (
                <MenuItem key={i} value={producer._id}>
                  {producer.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div>
          <Button
            onClick={() => {
              handleKlick();
            }}
          >
            Add Producer
          </Button>
        </div>
        <span>
          <Button
            type="submit"
            variant="contained"
            color="success"
            sx={{
              width: "45ch",
              m: 2,
            }}
          >
            Submit
          </Button>
        </span>
      </form>
    </div>
  );
}

const mapStateToProps = (state, props) => {
  console.log(state);
  return {
    actors: state.actors,
    producers: state.producers,
    movies: state.movies,
  };
};

export default connect(mapStateToProps)(MoviesForm);
