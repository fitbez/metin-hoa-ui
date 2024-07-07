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
`;

const Title = styled.h1`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Nav = styled.nav`
  a {
    display: block;
    margin: 10px 0;
    font-size: 1.2em;
    color: ${(props) => props.theme.colors.primary};
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Form = styled.form`
  margin: 20px 0;
`;

const Input = styled.input`
  margin-right: ${(props) => props.theme.spacing.small};
  padding: ${(props) => props.theme.spacing.small};
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: ${(props) => props.theme.borderRadius};
`;

const Button = styled.button`
  padding: ${(props) => props.theme.spacing.small};
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
