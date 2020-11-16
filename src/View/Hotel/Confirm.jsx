import React, { Component } from "react";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: {
        name,
        star,
        contact_name,
        phone_number,
        street_address,
        address_line_2,
        city,
        room_type,
        room_name,
        smoking_policy,
        number_or_rooms,
        single_bed,
        number_of_beds,
        number_of_gusts,
        room_size,
        square_meter
      }
    } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="md">
            <br />
            <h2> Check and Complete registration </h2>
            <Container
              style={{ border: "1px  solid blue", borderRadius: "20px" }}
              maxWidth="md"
            >
              <List>
                <ListItem>
                  <ListItemText primary="name" secondary={name} />
                </ListItem>
                <ListItem>
                  <ListItemText primary="star" secondary={star} />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="contact_name"
                    secondary={contact_name}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="phone_number"
                    secondary={phone_number}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="street_address"
                    secondary={street_address}
                  />
                </ListItem>
                <ListItem>
                  <ListItemText primary="city" secondary={city} />
                </ListItem>
              </List>
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
              Complete registration and open or booking
            </Button>
          </Container>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
