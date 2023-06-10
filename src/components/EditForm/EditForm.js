import {
  AddBackground,
  AddForm,
  FormWrapper,
  BtnZone,
  CloseBtn,
  SubmitBtn,
} from "../AddForm/AddForm.styled";
import { useCallback } from "react";
import useInput from "../../hooks/useInput";

const EditForm = ({ editedTask, onUpdate, handleModal }) => {
  const { id, date, distance, pace, time } = editedTask;

  const [updatedDate, dateBind] = useInput(date);
  const [updatedDistance, distanceBind] = useInput(distance);

  const [updatedHour, hourBind] = useInput(time.split(":")[0]);
  const [updatedMinute, minuteBind] = useInput(time.split(":")[1]);
  const [updatedSecond, secondBind] = useInput(time.split(":")[2]);

  const [updatedPerMin, perMinBind] = useInput(pace.split(":")[0]);
  const [updatedPerSec, perSecBind] = useInput(pace.split(":")[1]);

  const handleSumbit = useCallback(
    (e) => {
      e.preventDefault();
      const newRecord = {
        id,
        date,
        distance: updatedDistance,
        time: `${updatedHour}:${updatedMinute}:${updatedSecond}`,
        pace: `${updatedPerMin}:${updatedPerSec}`,
      };
      console.log(newRecord);
      onUpdate({ ...editedTask, ...newRecord });
    }
    // [onInsert, date, distance, hour, minute, second, perMin, perSec]
  );
  return (
    <AddBackground>
      <AddForm onSubmit={handleSumbit}>
        <FormWrapper>
          <div className="item">
            <span>날짜</span>
            <span>
              <input type="date" {...dateBind} disabled></input>
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
          <CloseBtn onClick={handleModal}>취소</CloseBtn>
          <SubmitBtn type="submit">제출하기</SubmitBtn>
        </BtnZone>
      </AddForm>
    </AddBackground>
  );
};

export default EditForm;
