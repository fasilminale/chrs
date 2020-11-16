/* eslint-disable react/jsx-pascal-case */
/* eslint-disable default-case */
import React, { Component } from "react";
import Basic_Info from "./Basic_Info";
import Layout_And_Pricing from "./Layout_And_Pricing";
import Fasilities_And_Services from "./Fasilities_And_Services";
import Amenities from './Amenities';
import Photos from './Photos';
import Policies from './Policies';
import Confirm from "./Confirm";
import Success from "./Success";

export class Hotel_Form extends Component {
  state = {
    step: 1,
    name: "",
    star: "",
    contact_name: "",
    phone_number: "",
    street_address: "",
    address_line_2: "",
    city: "",

    room_type: "",
    room_name: "",
    smoking_policy: "",
    number_or_rooms: "",
    single_bed: "",
    number_of_beds: "",
    number_of_gusts: "",
    room_size: "",
    area: "",

    is_parking_available: "",
    category: "",
    site: "",
    price_for_parking: "",

    is_breakfast_available: "",
    price_for_breakfast: "",
    language: "",
    faciities: "",
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  render() {
    const { step } = this.state;
    const {
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
      area,

      is_parking_available,
      category,
      site,
      price_for_parking,

      is_breakfast_available,
      price_for_breakfast,
      language,
      faciities,
    } = this.state;
    
    const values = {
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
      area,

      is_parking_available,
      category,
      site,
      price_for_parking,

      is_breakfast_available,
      price_for_breakfast,
      language,
      faciities,
    };

    switch (step) {
      case 1:
        return (
          <Basic_Info
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <Layout_And_Pricing
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Fasilities_And_Services
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return (
          <Amenities
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 5:
        return (
          <Photos
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 6:
        return (
          <Policies
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );  
      case 7:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 8:
        return <Success />;
    }
  }
}

export default Hotel_Form;
