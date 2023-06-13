import { useCallback, useState } from "react";
import { format } from "date-fns";
import useInput from "../../hooks/useInput";
import {
  AddBackground,
  AddForm,
  FormWrapper,
  SubmitBtn,
  CloseBtn,
  BtnZone,
} from "./AddForm.styled";
import { useSelector, useDispatch } from "react-redux";
import { closeADDModalAction } from "../../redux/actions";

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
    },
    [onInsert, date, distance, hour, minute, second, perMin, perSec]
  );

  const state = useSelector(state => state.addModalReducer);
  const dispatch = useDispatch();

  const closeAddModalHanlder = () => {
    dispatch(closeADDModalAction());
  }

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
          {/* <CloseBtn onClick={handleModal}>닫기</CloseBtn> */}
          <CloseBtn onClick={closeAddModalHanlder}>닫기</CloseBtn> 
          <SubmitBtn type="submit">제출하기</SubmitBtn>
        </BtnZone>
      </AddForm>
    </AddBackground>
  );
};

export default AddToggle;
