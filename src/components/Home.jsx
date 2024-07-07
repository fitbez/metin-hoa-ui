import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  padding: 0 20px;

  @media (max-width: 768px) {
    height: auto;
    padding-top: 50px;
  }
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2em;
  }

  @media (max-width: 480px) {
    font-size: 1.5em;
  }
`;

const Nav = styled.nav`
  a {
    display: block;
    margin: 10px 0;
    font-size: 1.2em;
    color: ${(props) => props.theme.colors.primary};

    @media (max-width: 768px) {
      font-size: 1em;
    }

    @media (max-width: 480px) {
      font-size: 0.9em;
    }

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Form = styled.form`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 400px;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Input = styled.input`
  margin-bottom: ${(props) =>
    props.theme.spacing.small}; /* Add spacing between input fields */
  padding: ${(props) => props.theme.spacing.small};
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: ${(props) => props.theme.borderRadius};
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
    margin-bottom: ${(props) =>
      props.theme.spacing
        .medium}; /* Ensure margin is applied on small devices */
  }
`;

const Button = styled.button`
  margin-top: ${(props) =>
    props.theme.spacing.small}; /* Ensure margin is applied on small devices */
  padding: ${(props) => props.theme.spacing.small};
  font-size: 1em;
  color: #fff;
  background-color: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    font-size: 0.9em;
  }

  @media (max-width: 480px) {
    font-size: 0.8em;
    margin-top: ${(props) =>
      props.theme.spacing
        .medium}; /* Ensure margin is applied on small devices */
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.dark};
  }
`;

const Home = () => {
  const [buildingId, setBuildingId] = useState("");
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleBuildingSearch = (e) => {
    e.preventDefault();
    navigate(`/building/${buildingId}`);
  };

  const handleUserSearch = (e) => {
    e.preventDefault();
    navigate(`/user/${buildingId}/${userId}`);
  };

  return (
    <Container>
      <Title>Welcome to Building Management System</Title>
      <Nav>
        <Link to="/building/new">Create a New Building</Link>
      </Nav>
      <Form onSubmit={handleBuildingSearch}>
        <Input
          type="text"
          placeholder="Enter Building ID"
          value={buildingId}
          onChange={(e) => setBuildingId(e.target.value)}
        />
        <Button type="submit">View Building</Button>
      </Form>
      <Form onSubmit={handleUserSearch}>
        <Input
          type="text"
          placeholder="Enter Building ID"
          value={buildingId}
          onChange={(e) => setBuildingId(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Button type="submit">View User</Button>
      </Form>
    </Container>
  );
};

export default Home;
