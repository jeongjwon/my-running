import styled from "styled-components";
export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  :first-child{
    margin-bottom: 0.3rem;

  }
  
  
  > .memo {
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
  }
  


`;
export const ItemContainer = styled.li`
  border-radius: 1rem;
  background-color: white;
  padding: 1rem 0.8rem;
  margin: 1rem 0;
  
  /* > .memo {
    display: flex;
    justify-content: space-between;
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  } */
`;
export const  BtnZone = styled.button`
  border: none;
  background: transparent;
  margin-left: 0.5rem
`;