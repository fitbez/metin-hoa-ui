import React, { useState } from "react";
import styled from "styled-components";
import { createBuilding } from "../api";

const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: ${(props) => props.theme.borderRadius};
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 2em;
  margin-bottom: 20px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  margin-bottom: ${(props) => props.theme.spacing.medium};
  padding: ${(props) => props.theme.spacing.small};
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: ${(props) => props.theme.borderRadius};
`;

const Button = styled.button`
  padding: ${(props) => props.theme.spacing.medium};
  font-size: 1em;
  color: #fff;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme.colors.dark};
  }
`;

const BuildingForm = () => {
  const [formData, setFormData] = useState({
    address1: "",
    zipcode: "",
    region: "",
    country: "",
    city: "",
    contactEmail: "",
    contactPhone: "",
    numberFloors: "",
    numberUnits: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createBuilding(formData);
      alert("Building created successfully");
    } catch (error) {
      alert("Error creating building");
    }
  };

  return (
    <Container>
      <Title>Create a New Building</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="address1"
          placeholder="Address 1"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="zipcode"
          placeholder="Zipcode"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="region"
          placeholder="Region"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="country"
          placeholder="Country"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
        />
        <Input
          type="email"
          name="contactEmail"
          placeholder="Contact Email"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="contactPhone"
          placeholder="Contact Phone"
          onChange={handleChange}
        />
        <Input
          type="number"
          name="numberFloors"
          placeholder="Number of Floors"
          onChange={handleChange}
        />
        <Input
          type="number"
          name="numberUnits"
          placeholder="Number of Units"
          onChange={handleChange}
        />
        <Button type="submit">Create Building</Button>
      </Form>
    </Container>
  );
};

export default BuildingForm;
