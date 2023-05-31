import Board from "./Board";
import React, { useState } from "react";
import Calendar from "./Calendar";
import Summary from "./Summary";
import useLocalStorage from "./hooks/useLocalStorage";
import {MainContainer, MainItem} from "./Main.styled";
const Main = () => {
  const [runnings, setRunnings] = useLocalStorage("records", []);

  return (
    <MainContainer>

      <MainItem>
        <Summary />
        <Calendar />
      </MainItem>

      <MainItem>
        <Board />
      </MainItem>
    </MainContainer>
  );
};

export default Main;
