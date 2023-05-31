import styled from "styled-components";
export const AddBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.548);
`;
export const AddForm = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  width: 300px;
  border-radius: 1rem;
  background-color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;

  > .item {
    flex-grow: 1;
    padding: 0.3rem 0;
    > span {
      margin-right: 0.5rem;
    }
    > input {
    }
    > input[type="number"] {
      width: 3rem;
    }
    /* > :first-child {
    
    }
    > :last-child {
      width: 60%;
    } */
  }
`;
export const FormWrapper = styled.div`
`
export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  background-color: #73a486;
  padding: 0.5rem 1rem;
  font-weight: 500;
  text-align: center;
  border-radius: 0.8rem;
  width: 5rem;
  border: none;
`;
export const CloseBtn = styled.button`
   display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  background-color: #73a486;
  padding: 0.5rem 1rem;
  font-weight: 500;
  text-align: center;
  border-radius: 0.8rem;
  width: 5rem;
  border: none;
`

export const BtnZone = styled.div`
  display: flex;
  justify-content: space-between;

`