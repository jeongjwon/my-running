import AddToggle from "./AddToggle";
import RunningList from "./RunningList";
import { useState } from "react";
import { BoardContainer, AddBtn } from "./Board.styled";
import useLocalStorage from "./hooks/useLocalStorage";


function Board() {
  const [isOpen, setIsOpen] = useState(false);
  const [records, setRecords] = useLocalStorage('records', []);

  const onInsert = (record) => {
    setRecords((prevState) => [...prevState, record]);
  }
  const handleOpenModal = () => {
    setIsOpen(!isOpen);
  }
  console.log(records);
  return (
    <BoardContainer>
      <AddBtn onClick={handleOpenModal}>추가하기</AddBtn>
      <RunningList 
      records={records} />
      {isOpen && <AddToggle onInsert={onInsert} handleOpenModal={handleOpenModal}/>}

    </BoardContainer>
  );
}

export default Board;
