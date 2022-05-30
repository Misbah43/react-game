import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { css } from 'styled-components'

export const Home = () => {
  const navigate = useNavigate();
  const goto = (t) => {
    navigate(t);
  };
  
  const Button = styled.button`
  background-color: purple;
  width:1000px;
 height:50px;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;
  return (
    <div className="buttons">
    <h1>Select the level which you want to play</h1>
      <Button onClick={(e) => goto("/easy")}>Easy</Button>
      <Button onClick={(e) => goto("/medium")}>Medium</Button>
      <Button onClick={(e) => goto("/hard")}>Hard</Button>
    </div>
  );
};
