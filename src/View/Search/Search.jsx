import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Grid from "@material-ui/core/Grid";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  media: {
    height: 10,
    paddingTop: "56.25",
    marginTop: "30"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "6 0 auto",
    width: 500
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  },
  table: {
    minWidth: 50,
  },
}));

function createData(name, id) {
  return { name, id };
}

export default function Search() {
  const classes = useStyles();

  const rows = [
    createData('Location', 1),
    createData('Star', 2),
    createData('Price', 3),
    createData('Price', 4),
    createData('Price', 5),
  ];

  return (
    <MuiThemeProvider>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <br />
          <br />
          <Container maxWidth="sm">
            <form noValidate autoComplete="off">
              <Grid container spacing={3}>
                <Grid item xs={4} sm={4}>
                  <TextField id="standard-basic" label="Location" />
                </Grid>
                <Grid item xs={4} sm={4}>
                  <TextField
                    id="date"
                    label="Check In - Check Out"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                      shrink: true
                    }}
                  />
                </Grid>
                <Grid item xs={4} sm={4}>
                  <TextField id="standard-basic" label="Room Type" />
                </Grid>
              </Grid>
            </form>
          </Container>

          <br />
          <br />

          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Filter By:</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12} sm={9}>
              <Card className={classes.root}>
                <CardMedia
                  style={{ minWidth: 250, height: 200 }}
                  image={require("../../Images/m_ii.jpg")}
                  title="Live from space album cover"
                />
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      Hotel Name ****** Hotel Name ****** Hotel
                </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Hotel Address
                </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      Detail
                </Typography>
                  </CardContent>
                </div>
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                      Very Good
                </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      77 Reviews
                </Typography>
                    <br />

                    <Button type="submit" variant="contained" color="primary">
                      <NavLink
                        style={{ textDecoration: "none", color: "white" }}
                        activeStyle={{ color: "#0000FF" }}
                        to="/rooms"
                      >
                        Choose Room
                  </NavLink>
                      <ChevronRight />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </Grid>
            
          </Grid>
        </Container>
      </React.Fragment>
    </MuiThemeProvider>
  );
}
