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

export class Layout_And_Pricing extends Component {
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
              <h2>Layout And Pricing</h2>
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

                <TextField
                  placeholder="Enter Room Name"
                  label="Room Name"
                  onChange={handleChange("room_name")}
                  defaultValue={values.room_name}
                  margin="normal"
                  style={{ minWidth: 200 }}
                />

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
                      name: "is_smoking_allowed",
                      id: "is_smoking_allowed"
                    }}
                  >
                    <option value="" />
                    <option value="no">No Smoking </option>
                    <option value="yes"> Available Smoking Area</option>
                  </Select>
                </FormControl>
                <br />
                <br />
              </Container>
              <br />
              <Container
                style={{ border: "1px  solid blue", borderRadius: "20px" }}
                maxWidth="md"
              >
                <h3> Bed Options </h3>
                <p>
                  {" "}
                  Tell us only about the existing beds in a room, Do not include
                  extra beds.
                </p>
                <br />
                <p> What kind of beds are available in this room ? </p>
                <FormControl
                  noValidate
                  style={{ minWidth: 200 }}
                  error={hasError}
                  required
                >
                  <InputLabel>Single Bed </InputLabel>
                  <Select
                    native
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                    inputProps={{
                      name: "single_bed",
                      id: "single_bed"
                    }}
                  >
                    <option value="" />
                    <option value="yes">Yes </option>
                    <option value="no">No</option>
                  </Select>
                </FormControl>

                <br />

                <FormControl
                  noValidate
                  style={{ minWidth: 200 }}
                  error={hasError}
                  required
                >
                  <InputLabel>Number of beds </InputLabel>
                  <Select
                    native
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                    inputProps={{
                      name: "number_of_beds",
                      id: "number_of_beds"
                    }}
                  >
                    <option value="" />
                    <option value="one"> 1 </option>
                    <option value="two"> 2 </option>
                    <option value="three"> 3 </option>
                    <option value="four"> 4 </option>
                  </Select>
                  <br />
                </FormControl>
                <br />
                <p>How many gust can can stay in this room ?</p>
                <TextField
                  placeholder="1"
                  label="number of gusts"
                  onChange={handleChange("number_of_gusts")}
                  defaultValue={values.number_of_gusts}
                  margin="normal"
                  style={{ minWidth: 200 }}
                />
                <br />
                <FormControl
                  noValidate
                  style={{ minWidth: 200 }}
                  error={hasError}
                  required
                >
                  <InputLabel>Number of beds </InputLabel>
                  <Select
                    native
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                    inputProps={{
                      name: "number_of_beds",
                      id: "number_of_beds"
                    }}
                  >
                    <option value="" />
                    <option value="one"> 1 </option>
                    <option value="two"> 2 </option>
                    <option value="three"> 3 </option>
                    <option value="four"> 4 </option>
                  </Select>
                  <br />
                </FormControl>
                <br />
              </Container>
              <br />

              <Container
                style={{ border: "1px  solid blue", borderRadius: "20px" }}
                maxWidth="md"
              >
                <h3> Room Size (Optional)</h3>
                <TextField
                  placeholder="1"
                  onChange={handleChange("room_size")}
                  defaultValue={values.room_size}
                  margin="normal"
                  style={{ minWidth: 200 }}
                />
                <br />
                <FormControl
                  noValidate
                  style={{ minWidth: 200 }}
                  error={hasError}
                  required
                >
                  <InputLabel>Area</InputLabel>
                  <Select
                    native
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                    inputProps={{
                      name: "area",
                      id: "area"
                    }}
                  >
                    <option value="" />
                    <option value="square_meter">Square Meter </option>
                    <option value="square_foot">Square Foot</option>
                    <option value="square_inch">Square Inch</option>
                  </Select>
                </FormControl>
                <br />
                <br />
              </Container>

              <br />

              <Container
                style={{ border: "1px  solid blue", borderRadius: "20px" }}
                maxWidth="md"
              >
                <h2> Base Price Per Night </h2>
                <p> 
                  This is the lowest price that we automatically apply to this room for all dates. 
                  Before your property goes live,
                  You can set seasonal pricing in your property dashboard.
                     
                </p>
                <TextField
                  placeholder="1"
                  onChange={handleChange("room_size")}
                  defaultValue={values.room_size}
                  margin="normal"
                  style={{ minWidth: 200 }}
                />
                <br />
                <br />
              </Container>

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

export default Layout_And_Pricing;
