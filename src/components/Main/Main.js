import Board from "../Board/Board";
import React, { useState } from "react";
import Calendar from "../Calendar/Calendar";

import useLocalStorage from "../../hooks/useLocalStorage";
import {MainContainer, MainItem} from "./Main.styled";

const Main = () => {
  const [records, setRecords] = useLocalStorage("records", []);

  return (
    <MainContainer>

      <MainItem>

        <Calendar records={records}/>
      </MainItem>

      <MainItem>
        <Board records={records} setRecords={setRecords}/>
      </MainItem>
    </MainContainer>
  );
};

export default Main;
