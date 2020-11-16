import React, { Component } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export class Basic_Info extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }
  state = {
    selected: null,
    hasError: false
  }
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
    const { hasError } = this.state;
    // const Form_Class = this.useStyle();
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            <h2>Basic Info</h2>
            <p>
              Start by telling us your property's name, contact details and
              address
            </p>
            <form noValidate autoComplete="off"> 
              <Container
                style={{ border: "1px  solid blue", borderRadius: "20px" }}
                maxWidth="md"
              >
                <div>
                  <p>What is the name of your property </p>
                  <TextField
                    style={{ minWidth: 330 }}
                    placeholder="Enter Property Name"
                    label="Property Name"
                    onChange={handleChange("name")}
                    defaultValue={values.name}
                    margin="normal"
                  />
                  <p>
                    This name will be seen by gusts when they search for a place to stay
                  </p>
                  <br />
                  <p> Star Rating </p>
                  <FormControl style={{ minWidth: 200 }} error={hasError} required>
                    <InputLabel>N/A</InputLabel>
                    <Select
                      native
                      required
                      value={this.state.name}
                      onChange={this.handleChange}
                      inputProps={{
                        name: "star",
                        id: "star"
                      }}
                    >
                      <option value="" />
                      <option value="one">1 *</option>
                      <option value="two">2 * *</option>
                      <option value="three">3 * * *</option>
                      <option value="four">4 * * * *</option>
                      <option value="five">5 * * * * *</option>
                    </Select>
                    <br />
                  </FormControl>
                </div>
                <br />
                <br />
              </Container>
              <br />
              <Container
                style={{ border: "1px  solid blue", borderRadius: "20px" }}
                maxWidth="md"
              >
                <p>What are the contact details for this property ? </p>
                <TextField
                  placeholder="Enter Contact Name"
                  label="Contact Name"
                  onChange={handleChange("contact_name")}
                  defaultValue={values.contact_name}
                  margin="normal"
                  style={{ minWidth: 330 }}
                />
                <br />

                <p>
                  {" "}
                Contact Number (so we can assist with your registration when
                needed)
              </p>

                <TextField
                  placeholder="Enter Phone Number"
                  label="Phone Number"
                  onChange={handleChange("phone_number")}
                  defaultValue={values.phone_number}
                  margin="normal"
                  style={{ minWidth: 330 }}
                />
                <br />
                <br />
              </Container>
              <br />

              <Container
                style={{ border: "1px  solid blue", borderRadius: "20px" }}
                maxWidth="md"
              >
                <p>Where is your property located ? </p>
                <TextField
                  placeholder="Enter Street Address"
                  label="Street Address"
                  onChange={handleChange("street_address")}
                  defaultValue={values.street_address}
                  margin="normal"
                  style={{ minWidth: 330 }}
                />
                <br />

                <TextField
                  placeholder="Enter Address Line 2"
                  label="Address Line 2"
                  onChange={handleChange("address_line_2")}
                  defaultValue={values.address_line_2}
                  margin="normal"
                  style={{ minWidth: 330 }}
                />
                <br />
                <br />

                <TextField
                  placeholder="Enter City"
                  label="City"
                  onChange={handleChange("city")}
                  defaultValue={values.city}
                  margin="normal"
                  style={{ minWidth: 330 }}
                />
                <br />
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

export default Basic_Info;
