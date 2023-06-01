import AddToggle from "./AddToggle";
import RunningList from "./RunningList";
import { useState } from "react";
import { BoardContainer, AddBtn } from "./Board.styled";
import useLocalStorage from "./hooks/useLocalStorage";
import { EditForm } from "./EditForm";

function Board() {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState("");
  const [records, setRecords] = useLocalStorage("records", []);

  const onInsert = (record) => {
    setRecords((prevState) => [...prevState, record]);
  };
  const handleModal = () => {
    setIsOpen(!isOpen);
  };
  const onRemove = (id) => {
    setRecords((records) => records.filter((e) => e.id !== id));
  };

  const onUpdate = (record) => {
    setIsEditing(!isEditing);
    setRecords((prevState) =>
        prevState.map((e) => 
          e.id === record.id ? { ...e, ...record} : e));
  };

  const onEdit = (record) => {
    setIsEditing(!isEditing);
    setEditedTask(record);
  };
  console.log(records);
  return (
    <BoardContainer>
      <AddBtn onClick={handleModal}>추가하기</AddBtn>
      <RunningList records={records} onRemove={onRemove} onEdit={onEdit} />
      {isOpen && <AddToggle onInsert={onInsert} handleModal={handleModal} />}
      {isEditing && <EditForm editedTask={editedTask} onUpdate={onUpdate} />}
    </BoardContainer>
  );
}

export default Board;
