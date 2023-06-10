import styled from "styled-components";

export const SummaryDiv = styled.div`
  /* background: lightgray; */
  background: white;
  box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
  padding: 0.5rem 1rem;
  /* border: 0.1rem solid #2e2e2e; */
  margin: 1rem 1rem 0 1rem;
  border-radius: 0.8rem;
  display: flex;
  justify-content: space-evenly;

 > .memo{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0.5rem 0;
    > :first-child{
      font-size: 1.2rem;
      font-weight: 500;
    }
    > :nth-child(2){
      font-size: 0.8rem;
      font-weight: 400;
      color: darkgray;
    }
 }
`;