import styled from "styled-components";

const ListItem = styled.li`
  border-radius: 5px;
  background-color: #896a33;
  color: black;
  margin: 0.5rem;
  padding: 1rem;
  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.7);
  cursor: pointer;
  :hover {
    padding: 0.9rem;
    border: 0.1rem solid #79c2bc;
  }
`;

const TextInput = styled.input`
  border-radius: 0.25rem;
`;

export { ListItem, TextInput };
