import styled from "styled-components";

const AppContainer = styled.div`
  background-color: #1f2530;
  color: #79c2bc;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid;
  border-radius: 0.5rem;
  padding: 0.5rem;
  box-shadow: 0 25px 15px rgba(0, 0, 0, 0.7);
`;

const ClearButton = styled.button`
  margin: 0.5rem;
  border-radius: 0.25rem;
`;

export { AppContainer, ClearButton };
