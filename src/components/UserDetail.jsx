import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { fetchUser } from "../api";

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

const UserDetail = () => {
  const { building, id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        const response = await fetchUser(building, id);
        setUser(response.data);
      } catch (err) {
        setError("Error fetching user details");
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [building, id]);

  if (loading) return <Loading>Loading...</Loading>;
  if (error) return <Error>{error}</Error>;

  return (
    <Container>
      <Title>User Details</Title>
      <Info>
        <strong>First Name:</strong> {user.firstName}
      </Info>
      <Info>
        <strong>Last Name:</strong> {user.lastName}
      </Info>
      <Info>
        <strong>Email:</strong> {user.email}
      </Info>
      <Info>
        <strong>Phone:</strong> {user.phone}
      </Info>
      <Info>
        <strong>Type:</strong> {user.type}
      </Info>
      <Info>
        <strong>Unit:</strong> {user.unit}
      </Info>
      <Info>
        <strong>Building:</strong> {user.building}
      </Info>
      <Info>
        <strong>Date Started:</strong> {user.dateStarted}
      </Info>
      {user.dateEnded && (
        <Info>
          <strong>Date Ended:</strong> {user.dateEnded}
        </Info>
      )}
      <Info>
        <strong>Communication Preferences:</strong>
      </Info>
      <ul>
        {user.communicationPreferences.map((preference, index) => (
          <li key={index}>
            {preference.type}: {preference.isActive}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default UserDetail;
