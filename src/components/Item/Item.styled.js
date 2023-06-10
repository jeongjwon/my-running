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
    /* justify-content: flex-end; */
    /* align-items: center; */
   
    font-weight: 600;
    > :nth-child(2){
      font-size: 0.8rem;
      font-weight: 400;
      color: darkgray;
    }
  }
  


`;
export const ItemContainer = styled.li`
  box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
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
  margin-left: 0.5rem;

  > svg:hover{
    color: red;
    transform: scale(1.3);   /* 이미지 확대 */
    transition: transform .5s; 
  }
`;