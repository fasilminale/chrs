import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
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
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export class Fasilities_And_Services extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    selected: null,
    hasError: false
  };
  handleChange1(value) {
    this.setState({ selected: value });
  }

  handleClick() {
    this.setState(state => ({ hasError: !state.selected }));
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  // useStyle = makeStyles(theme => ({
  //   rot: {
  //     '& .MuiTextField-root':{
  //       margin: theme.spacing(1),
  //       width: 200,
  //     }
  //   },
  // }));

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    const { classes } = this.props;
    const { selected, hasError } = this.state;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            <h2>Fasilities And Services</h2>
            <p>
              Now, Tell us some general details about your property, such as
              fasilities available, inernet, parking and the language you speak.
            </p>
            <form noValidate autoComplete="off">
              <Container
                style={{ border: "1px  solid blue", borderRadius: "20px" }}
                maxWidth="md"
              >
                <h3> Parking </h3>
                <p> Is parking available to gusts ? </p>
                <FormControl
                  noValidate
                  style={{ minWidth: 200 }}
                  error={hasError}
                  required
                >
                  <InputLabel> Is Parking Available ? </InputLabel>
                  <Select
                    native
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                    inputProps={{
                      name: "is_parking_available",
                      id: "is_parking_available"
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
                  <InputLabel> Category </InputLabel>
                  <Select
                    native
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                    inputProps={{
                      name: "category",
                      id: "category"
                    }}
                  >
                    <option value="" />
                    <option value="public"> Public </option>
                    <option value="private"> Private </option>
                  </Select>
                  <br />
                </FormControl>

                <br />
                <FormControl
                  noValidate
                  style={{ minWidth: 200 }}
                  error={hasError}
                  required
                >
                  <InputLabel>Site </InputLabel>
                  <Select
                    native
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                    inputProps={{
                      name: "site",
                      id: "site"
                    }}
                  >
                    <option value="" />
                    <option value="one_site"> One Site</option>
                    <option value="two_site"> Two Site </option>
                    <option value="three_site"> Three Site </option>
                    <option value="four_site"> Four Site </option>
                  </Select>
                  <br />
                </FormControl>
                <br />
                <p>Price for parking (per hour) </p>
                <TextField
                  style={{ minWidth: 330 }}
                  placeholder="Enter Price for parking"
                  label="Price for parking"
                  onChange={()=>this.handleChange("price_for_parking")}
                  defaultValue={values.price_for_parking}
                  margin="normal"
                />
                <br />
                <br />
              </Container>

              <br />

              <Container
                style={{ border: "1px  solid blue", borderRadius: "20px" }}
                maxWidth="md"
              >
                <h3> Breakfast </h3>
                <p> Is breakfast available to gusts ? </p>
                <FormControl
                  noValidate
                  style={{ minWidth: 200 }}
                  error={hasError}
                  required
                >
                  <InputLabel> Is Breakfast Available ? </InputLabel>
                  <Select
                    native
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                    inputProps={{
                      name: "is_breakfast_available",
                      id: "is_breakfast_available"
                    }}
                  >
                    <option value="" />
                    <option value="yes">Yes It's Optional </option>
                    <option value="no">No</option>
                  </Select>
                  <br />
                </FormControl>

                <br />

                <p>
                  Price for breakfast (per person including all fees and taxes){" "}
                </p>
                <TextField
                  style={{ minWidth: 330 }}
                  placeholder="Enter Price for breakfast"
                  label="Price for breakfast"
                  onChange={()=>this.handleChange("price_for_breakfast")}
                  defaultValue={values.price_for_breakfast}
                  margin="normal"
                />
                <br />
                <br />
              </Container>

              <br />

              <Container
                style={{ border: "1px  solid blue", borderRadius: "20px" }}
                maxWidth="md"
              >
                <h3> Languages Spoken </h3>
                <p> what languages do you or your staff speak ? </p>
                <FormControl
                  noValidate
                  style={{ minWidth: 200 }}
                  error={hasError}
                  required
                >
                  <InputLabel> languages </InputLabel>
                  <Select
                    native
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                    inputProps={{
                      name: "language",
                      id: "language"
                    }}
                  >
                    <option value="" />
                    <option value="amharic">Amharic </option>
                    <option value="english">English</option>
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
                <h3> Fasilities that are popular with guests </h3>
                <p>
                  {" "}
                  Guests look for fasilities the most when ther are searching
                  for properties{" "}
                </p>

                <FormControlLabel
                  control={
                    <Checkbox
                      // checked =
                      // onChange =
                      value="checked_box"
                      color="primary"
                    />
                  }
                  label="Fasilities name"
                />

                <br />
              </Container>

              <br />
              <Button
                fullWidth
                color="primary"
                variant="contained"
                onClick={this.continue}
                borderRadius="20px"
              >
                Continue
              </Button>
            </form>
          </Container>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Fasilities_And_Services;
