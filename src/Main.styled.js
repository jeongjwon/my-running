import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  
  background-color: aliceblue;
  border: 0.3rem solid #2e2e2e;
  border-radius: 0 0 2rem 2rem;
  border-top: none;
  /* overflow-y: hidden; */
  box-sizing: border-box;
`;
export const MainItem = styled.div`
  padding: 1rem;
  :nth-child(1) {
    flex-grow: 5;
  }
  :nth-child(2) {
    flex-grow: 1;
    background-color: lightgray;
    border-radius: 0 0 1.6rem 0;
    
  }
`;