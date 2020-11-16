import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import { Row, col } from "reactstrap";

export class Policies extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  state = {
    selected: null,
    hasError: false
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    const { classes } = this.props;
    const { selected, hasError } = this.state;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <Container maxWidth="md">
            <CssBaseline />
            <Container maxWidth="lg">
              <h2>Policies</h2>
              <Container
                style={{ border: "1px  solid blue", borderRadius: "20px" }}
                maxWidth="md"
              >
                <br />
                <p> Please Select </p>
                <FormControl
                  noValidate
                  style={{ minWidth: 200 }}
                  error={hasError}
                  required
                >
                  <InputLabel>Room Type</InputLabel>
                  <Select
                    native
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                    inputProps={{
                      name: "room_type",
                      id: "room_type"
                    }}
                  >
                    <option value="" />
                    <option value="normal">Normal </option>
                    <option value="vip">Vip</option>
                  </Select>
                </FormControl>

                <br />

                <br />

                <FormControl
                  noValidate
                  style={{ minWidth: 200 }}
                  error={hasError}
                  required
                >
                  <InputLabel>Smoking Policy</InputLabel>
                  <Select
                    native
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                    inputProps={{
                      name: "smoking_policy",
                      id: "smoking_policy"
                    }}
                  >
                    <option value="" />
                    <option value="no_smoking">No Smoking </option>
                    <option value="smoking"> Smoking </option>
                  </Select>
                </FormControl>
                <br />
                <br />
              </Container>
              <br />

              <br />
              <Button
                fullWidth
                color="default"
                variant="contained"
                borderRadius="20px"
                onClick={this.back}
              >
                <ChevronLeft />
                Back
              </Button>
              <br />
              <br />
              <Button
                fullWidth
                color="primary"
                variant="contained"
                borderRadius="20px"
                onClick={this.continue}
              >
                Continue
              </Button>
            </Container>
          </Container>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Policies;
