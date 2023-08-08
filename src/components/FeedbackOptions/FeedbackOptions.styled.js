import styled from 'styled-components';

export const StyledItemButtons = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  text-transform: capitalize;
`;

export const StyledIButtons = styled.button`
  border: solid red 2px;
  text-transform: capitalize;
  font-size: 16px;
  margin-bottom: 20px;
  cursor: pointer;
  background-color: green;
  transition: all 0.5s ease-out;
  font-weight: 700;
  &:hover {
    background-color: lightgreen;
    color: white;
  }
`;
