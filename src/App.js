import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { connect } from "react-redux";
import Register from "./components/Register";
import Login from "./components/login";
import { Grid } from "@mui/material";
import Account from "./components/Account";
import MoviesList from "./components/Movies/List";
import MoviesForm from "./components/Movies/Form";
import UpdateMovies from "./components/Movies/Update";
import ActorsList from "./components/Actors/List";
import UpdateActor from "./components/Actors/Update";
import CreateActors from "./components/Actors/Create";
import ProducersList from "./components/Producers/List";
import ProducersForm from "./components/Producers/Form";
import UpdateProducer from "./components/Producers/Update";

function App(props) {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "lightyellow", height: "100%" }}>
        <h2>IMDB</h2>
        {Object.keys(props.user).length === 0 ? (
          <div>
            <Grid container spacing={3} style={{ padding: 30 }}>
              <Link to="/user/register">Register</Link>
              <Link to="/user/login">Login</Link>
            </Grid>
          </div>
        ) : (
          <div>
            <Grid container spacing={1} style={{ padding: 30 }}>
              <div style={{ marginRight: 30 }}>
                <Link to="/user/account">Account</Link>
              </div>
              <div style={{ marginRight: 30 }}>
                <Link to="/movies">Movies List</Link>
              </div>
              <div style={{ marginRight: 30 }}>
                <Link to="/actors">Actors List</Link>
              </div>
              <div style={{ marginRight: 30 }}>
                <Link to="/producers">Producers List</Link>
              </div>
              <div style={{ marginRight: 30 }}>
                <Link to="/movie/create">Create Movies</Link>
              </div>
              <div style={{ marginRight: 30 }}>
                <Link to="/actor/create">Create Actor</Link>
              </div>
              <div style={{ marginRight: 30 }}>
                <Link to="/producer/create">Create Producer</Link>
              </div>
            </Grid>
          </div>
        )}

        <Routes>
          <Route path="/user/register" element={<Register />} />
          <Route path="/user/login" element={<Login />} />
          <Route path="/user/account" element={<Account />} />
          <Route path="/movies" element={<MoviesList />} />
          <Route path="/movie/update/:id" element={<UpdateMovies />} />
          <Route path="/actors" element={<ActorsList />} />
          <Route path="/actor/update/:id" element={<UpdateActor />} />
          <Route path="/actor/create" element={<CreateActors />} />
          <Route path="/producers" element={<ProducersList />} />
          <Route path="/movie/create" element={<MoviesForm />} />
          <Route path="/producer/create" element={<ProducersForm />} />
          <Route path="/producer/update/:id" element={<UpdateProducer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Drawer from "@mui/material/Drawer";
// import CssBaseline from "@mui/material/CssBaseline";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import Icon from "@material-ui/core/Icon";

// const drawerWidth = 200;

// const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
//   ({ theme, open }) => ({
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create("margin", {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: `-${drawerWidth}px`,
//     ...(open && {
//       transition: theme.transitions.create("margin", {
//         easing: theme.transitions.easing.easeOut,
//         duration: theme.transitions.duration.enteringScreen,
//       }),
//       marginLeft: 0,
//     }),
//   })
// );

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   transition: theme.transitions.create(["margin", "width"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: `${drawerWidth}px`,
//     transition: theme.transitions.create(["margin", "width"], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const DrawerHeader = styled("div")(({ theme }) => ({
//   display: "flex",
//   alignItems: "center",
//   padding: theme.spacing(0, 1),
//   // necessary for content to be below app bar
//   ...theme.mixins.toolbar,
//   justifyContent: "flex-end",
// }));

// function getRoutes() {
//   return (
//     <div>
//       <Routes>
//         <Route path="/user/register" element={<Register />} />
//         <Route path="/user/login" element={<Login />} />
//         <Route path="/user/account" element={<Account />} />
//       </Routes>
//     </div>
//   );
// }
// function App(props) {
//   const navItems = [
//     { title: "Movies", icon: "", path: "/movies" },
//     { title: "Actors", icon: "", path: "/actors" },
//     { title: "Producers", icon: "", path: "/producers" },
//     { title: "Account", icon: "", path: "/user/account" },
//   ];
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   const ListItemComponent = (item) => {
//     return <Link to={item.path}>{item.title}</Link>;
//   };

//   return (
//     <div>
//       {Object.keys(props.user).length == 0 ? (
//         <div>
//           <BrowserRouter>
//             <Link to="/user/register">Register</Link>
//             <Link to="/user/login">Login</Link>
//             {getRoutes()}
//           </BrowserRouter>
//         </div>
//       ) : (
//         <Box sx={{ display: "flex" }}>
//           <CssBaseline />
//           <AppBar position="fixed" open={open}>
//             <Toolbar>
//               <IconButton
//                 color="inherit"
//                 aria-label="open drawer"
//                 onClick={handleDrawerOpen}
//                 edge="start"
//                 sx={{ mr: 2, ...(open && { display: "none" }) }}
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Typography variant="h6" noWrap component="div">
//                 IMDB
//               </Typography>
//             </Toolbar>
//           </AppBar>
//           <Drawer
//             sx={{
//               width: drawerWidth,
//               flexShrink: 0,
//               "& .MuiDrawer-paper": {
//                 width: drawerWidth,
//                 boxSizing: "border-box",
//               },
//             }}
//             variant="persistent"
//             anchor="left"
//             open={open}
//           >
//             <DrawerHeader>
//               <IconButton onClick={handleDrawerClose}>
//                 {theme.direction === "ltr" ? (
//                   <ChevronLeftIcon />
//                 ) : (
//                   <ChevronRightIcon />
//                 )}
//               </IconButton>
//             </DrawerHeader>
//             <Divider />
//             <List>
//               {navItems.map((item, index) => (
//                 <ListItem button key={index} to={item.path}>
//                   <ListItemIcon>
//                     <Icon>star</Icon>;
//                   </ListItemIcon>
//                   <ListItemText primary={item.title} />
//                 </ListItem>
//               ))}
//             </List>
//           </Drawer>
//           <Main open={open}>
//             <DrawerHeader />
//             <BrowserRouter>{getRoutes()}</BrowserRouter>
//           </Main>
//         </Box>
//       )}
//     </div>
//   );
// }

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(App);
