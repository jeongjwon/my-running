import AddForm from "../AddForm/AddForm";
import RunningList from "../RunningList/RunningList";
import { useState } from "react";
import { BoardContainer, AddBtn } from "./Board.styled";
import useLocalStorage from "../../hooks/useLocalStorage";
import EditForm  from "../EditForm/EditForm";

function Board({records, setRecords}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState("");
 
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

  return (
    <BoardContainer>
      <AddBtn onClick={handleModal}>추가하기</AddBtn>
      <RunningList records={records} onRemove={onRemove} onEdit={onEdit} />
      {isOpen && <AddForm onInsert={onInsert} handleModal={handleModal} />}
      {isEditing && <EditForm editedTask={editedTask} onUpdate={onUpdate} />}
    </BoardContainer>
  );
}

export default Board;