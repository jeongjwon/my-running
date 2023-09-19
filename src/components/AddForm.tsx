import React, { useState } from "react";
import styled from "styled-components";
import { Record } from "./Board";

type AddFormTypes = {
  onInsert: (record: Record) => void;
  handleModal: () => void;
  isOpen: boolean;
};

const AddForm: React.FC<AddFormTypes> = ({ onInsert, handleModal, isOpen }) => {
  const [formData, setFormData] = useState<Record>({
    date: "",
    distance: 0,
    hour: 0,
    minute: 0,
    second: 0,
    perMin: 0,
    perSec: 0,
    id: 0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: string
  ) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: fieldName === "date" ? value : parseFloat(value),
    }));
  };

  const generateUniqueId = () => {
    return Date.now();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newRecord = {
      id: generateUniqueId(), // 고유한 ID 생성
      date: formData.date,
      distance: formData.distance,
      hour: formData.hour,
      minute: formData.minute,
      second: formData.second,
      perMin: formData.perMin,
      perSec: formData.perSec,
    };
    onInsert(newRecord);
    handleModal();
  };

  return (
    <ModalContainer>
      <ModalContent>
        <form onSubmit={handleSubmit}>
          <ItemDiv>
            <label>날짜</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) => handleInputChange(e, "date")}
              required
            />
          </ItemDiv>
          <ItemDiv>
            <label>거리 (km)</label>
            <input
              type="number"
              value={formData.distance}
              onChange={(e) => handleInputChange(e, "distance")}
              min={0}
              step={0.01}
              required
            />
          </ItemDiv>
          <ItemDiv>
            <label>평균 페이스</label>
            <div>
              <input
                type="number"
                value={formData.perMin}
                onChange={(e) => handleInputChange(e, "perMin")}
                min={0}
                required
              />
              :
              <input
                type="number"
                value={formData.perSec}
                onChange={(e) => handleInputChange(e, "perSec")}
                min={0}
                max={59}
                required
              />
            </div>
          </ItemDiv>
          <ItemDiv>
            <label>시간</label>
            <div>
              <input
                type="number"
                value={formData.hour}
                onChange={(e) => handleInputChange(e, "hour")}
                min={0}
                required
              />
              :
              <input
                type="number"
                value={formData.minute}
                onChange={(e) => handleInputChange(e, "minute")}
                min={0}
                max={59}
                required
              />
              :
              <input
                type="number"
                value={formData.second}
                onChange={(e) => handleInputChange(e, "second")}
                min={0}
                max={59}
                required
              />
            </div>
          </ItemDiv>

          <BtnDiv>
            <button onClick={handleModal}>닫기</button>
            <button type="submit">제출하기</button>
          </BtnDiv>
        </form>
      </ModalContent>
    </ModalContainer>
  );
};
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.548);
  z-index: 1000;
  overflow: auto;
`;

export const ModalContent = styled.div`
  background-color: white;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  min-width: 300px;
`;
export const ItemDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.3rem 0;
  > :first-child {
    width: 30%;
  }
  > :last-child {
    width: 70%;
    display: flex;
    justify-content: end;
  }
  input[type="number"] {
    width: 3.5rem;
  }
`;
export const BtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  > button {
    background-color: #375142; //#73a486;
    color: white;
    padding: 0.5rem 1rem;
    font-weight: 500;
    text-align: center;
    border-radius: 0.8rem;
    width: fit-content;
    border: none;
    box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
    &:hover {
      background-color: lightgray;
      color: #375142;
    }
  }
`;
export default AddForm;
