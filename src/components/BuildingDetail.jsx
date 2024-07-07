import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import { fetchBuilding } from "../api";

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

const Info = styled.p`
  font-size: 1em;
  margin: ${(props) => props.theme.spacing.small} 0;
`;

const Loading = styled.div`
  font-size: 1.5em;
  text-align: center;
  margin-top: 20px;
`;

const Error = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => props.theme.colors.danger};
  margin-top: 20px;
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

const BuildingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [building, setBuilding] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const getBuilding = async () => {
      try {
        const response = await fetchBuilding(id);
        setBuilding(response.data);
      } catch (err) {
        setError("Error fetching building details");
      } finally {
        setLoading(false);
      }
    };
    getBuilding();
  }, [id]);

  const handleUserSearch = (e) => {
    e.preventDefault();
    navigate(`/user/${id}/${userId}`);
  };

  if (loading) return <Loading>Loading...</Loading>;
  if (error) return <Error>{error}</Error>;

  return (
    <Container>
      <Title>Building Details</Title>
      <Info>
        <strong>Address:</strong> {building.address1}
      </Info>
      <Info>
        <strong>Zipcode:</strong> {building.zipcode}
      </Info>
      <Info>
        <strong>Region:</strong> {building.region}
      </Info>
      <Info>
        <strong>Country:</strong> {building.country}
      </Info>
      <Info>
        <strong>City:</strong> {building.city}
      </Info>
      <Info>
        <strong>Contact Email:</strong> {building.contactEmail}
      </Info>
      <Info>
        <strong>Contact Phone:</strong> {building.contactPhone}
      </Info>
      <Info>
        <strong>Number of Floors:</strong> {building.numberFloors}
      </Info>
      <Info>
        <strong>Number of Units:</strong> {building.numberUnits}
      </Info>
      <Form onSubmit={handleUserSearch}>
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

export default BuildingDetail;
