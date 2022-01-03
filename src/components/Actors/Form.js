import { React, useState, useEffect } from "react";
import { connect } from "react-redux";
import { startGetMovies } from "../../actions/movieActions";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Button,
} from "@mui/material";
import MobileDatePicker from "@mui/lab/MobileDatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useDispatch } from "react-redux";
import { startGetActors } from "../../actions/actorsActions";
import { useParams } from "react-router-dom";

function ActorsForm(props) {
  const today = new Date();
  const dispatch = useDispatch();
  const [gender, setGender] = useState("");
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [dob, setDob] = useState(new Date());
  if (props.movies.length === 0 || props.actors.length === 0) {
    dispatch(startGetMovies());
    dispatch(startGetActors());
  }

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleBioChange = (e) => {
    setBio(e.target.value);
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const handleDateChange = (value) => {
    const date = new Date(value);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const reqdate = `${year}-${month + 1}-${day}`;
    console.log(reqdate, "date");
    setDob(reqdate);
  };

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const actor = props.actors.find((a) => {
        return a._id === id;
      });
      setName(actor.name);
      setBio(actor.bio);
      setDob(actor.dob);
      setGender(actor.gender);
    }
  }, []);

  useEffect(() => {
    console.log(dob, "useEffect");
  }, [dob]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      dob: dob,
      bio: bio,
      gender: gender,
    };
    console.log(formData);
    props.handleSubmit(formData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <FormControl
            variant="outlined"
            sx={{
              width: "45ch",
            }}
          >
            <InputLabel htmlFor="outlined-adornment-name">Name</InputLabel>
            <OutlinedInput
              type="text"
              id="outlined-adornment-name"
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
              <MobileDatePicker
                label="Date of Birth"
                inputFormat="yyyy-MM-dd"
                type="date"
                name="dob"
                maxDate={today}
                value={dob}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
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
              label="Bio"
              multiline
              name="bio"
              maxRows={4}
              value={bio}
              onChange={handleBioChange}
            />
          </FormControl>
        </div>
        <br />
        <div>
          <FormControl
            component="fieldset"
            sx={{
              width: "45ch",
            }}
          >
            <br />
            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                name="gender"
                value={gender}
                onChange={handleGenderChange}
              >
                <FormControlLabel
                  value="Male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="Female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="Others"
                  control={<Radio />}
                  label="Others"
                />
              </RadioGroup>
            </FormControl>
          </FormControl>
          <br />
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
        </div>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    actors: state.actors,
  };
};

export default connect(mapStateToProps)(ActorsForm);
