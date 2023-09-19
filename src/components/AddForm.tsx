import { useCallback, useState } from "react";
import { format } from "date-fns";
import useInput from "../hooks/useInput";
import styled from "styled-components";
// import {
//   AddBackground,
//   AddForm,
//   FormWrapper,
//   SubmitBtn,
//   CloseBtn,
//   BtnZone,
// } from "./AddForm.styled";
// import { useSelector, useDispatch } from "react-redux";
// import { closeAddModalAction } from "../../redux/actions";

const AddToggle = ({ onInsert, handleModal }) => {
  const [date, dateBind] = useInput("");
  const [distance, distanceBind] = useInput("0.00");
  const [hour, hourBind] = useInput("0");
  const [minute, minuteBind] = useInput("00");
  const [second, secondBind] = useInput("00");
  const [perMin, perMinBind] = useInput("0");
  const [perSec, perSecBind] = useInput("00");

  const handleSumbit = useCallback(
    (e) => {
      e.preventDefault();
      const newRecord = {
        id: Date.now(),
        date,
        distance,
        time: `${hour}:${minute.length === 1 ? "0" + minute : minute}:${
          second.length === 1 ? "0" + second : second
        }`,
        pace: `${perMin}:${perSec.length === 1 ? "0" + perSec : perSec}`,
      };
      onInsert(newRecord);
      handleModal();
      // closeAddModalHanlder();
    },
    [onInsert, date, distance, hour, minute, second, perMin, perSec]
  );

  // const state = useSelector((state) => state.addModalReducer);
  // const dispatch = useDispatch();

  // const closeAddModalHanlder = () => {
  //   dispatch(closeAddModalAction());
  // };

  return (
    <AddBackground>
      <AddForm onSubmit={handleSumbit}>
        <FormWrapper>
          <div className="item">
            <span>날짜</span>
            <span>
              <input type="date" {...dateBind} required></input>
            </span>
          </div>
          <div className="item">
            <span>거리</span>
            <span>
              <input
                type="number"
                {...distanceBind}
                min={0}
                step="0.01"
                required
              />
            </span>
          </div>
          <div className="item">
            <span>시간</span>
            <span>
              <input type="number" {...hourBind} min={0} />:
              <input
                type="number"
                {...minuteBind}
                min={0}
                max={59}
                required
              />{" "}
              :
              <input type="number" {...secondBind} min={0} max={59} required />
            </span>
          </div>
          <div className="item">
            <span>평균 페이스</span>
            <span>
              <input type="number" {...perMinBind} min={0} required /> :
              <input type="number" {...perSecBind} min={0} max={59} required />
            </span>
          </div>
        </FormWrapper>
        <BtnZone>
          <CloseBtn onClick={handleModal}>닫기</CloseBtn>
          {/* <CloseBtn onClick={closeAddModalHanlder}>닫기</CloseBtn> */}
          <SubmitBtn type="submit">제출하기</SubmitBtn>
        </BtnZone>
      </AddForm>
    </AddBackground>
  );
};
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
  /* align-items: center; */
  flex-direction: column;
  padding: 1rem;

  > .item {
    display: flex;
    justify-content: space-between;
    padding: 0.3rem 0;

    > span {
      margin-right: 0.5rem;
    }
    > input {
    }
    /* > input[type="number"] {
      width: 3rem;
    } */
    /* > :first-child {
    
    }
    > :last-child {
      width: 60%;
    } */
  }
`;
export const FormWrapper = styled.div`
  padding: 0.5rem;
  > .item {
    display: flex;
    justify-content: space-between;
    margin: 0.5rem 0;
    > span {
      > input[type="number"] {
        width: 3rem;
        text-align: center;
      }
    }
  }
`;
export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  background-color: #375142; //#73a486;
  padding: 0.5rem 1rem;
  font-weight: 500;
  text-align: center;
  border-radius: 0.8rem;
  width: 5rem;
  border: none;
  color: white;
`;
export const CloseBtn = styled.button`
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
  background-color: #375142; //#73a486;
  padding: 0.5rem 1rem;
  font-weight: 500;
  text-align: center;
  border-radius: 0.8rem;
  width: 5rem;
  border: none;
  color: white;
`;

export const BtnZone = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default AddToggle;
