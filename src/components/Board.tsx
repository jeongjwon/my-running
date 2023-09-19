import AddForm from "./AddForm";
import RunningList from "./RunningList";
import { useState } from "react";
// import { BoardContainer, AddBtn } from "./Board.styled";
import useLocalStorage from "../hooks/useLocalStorage";
import EditForm from "./EditForm";
import styled from "styled-components";

// import { useDispatch, useSelector } from "react-redux";
// import { openAddModalAction, openEditModalAction } from "../../redux/actions";

function Board({ records, setRecords }) {
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
      prevState.map((e) => (e.id === record.id ? { ...e, ...record } : e))
    );
  };

  const onEdit = (record) => {
    setIsEditing(!isEditing);
    setEditedTask(record);
  };

  // const dispatch = useDispatch();
  // const stateEdit = useSelector((state) => state.editModalReducer);

  // const openAddModalHandler = () => {
  //   dispatch(openAddModalAction({ isAddOn: true }));
  // };

  // const stateAdd = useSelector((state) => state.addModalReducer);

  return (
    <BoardContainer>
      <AddBtn onClick={handleModal}>추가하기</AddBtn>
      {/* <AddBtn onClick={openAddModalHandler}>추가하기</AddBtn>
      <RunningList records={records} onRemove={onRemove} onEdit={onEdit} /> */}
      {/* {isOpen && <AddForm onInsert={onInsert} handleModal={handleModal} />} */}
      {/* {stateAdd.isAddOn && (
        <AddForm onInsert={onInsert} handleModal={handleModal} />
      )} */}
      {isEditing && <EditForm editedTask={editedTask} onUpdate={onUpdate} />}
      {/* {stateEdit.isEditOn && (
        <EditForm editedTask={stateEdit.record} onUpdate={onUpdate} />
      )} */}
    </BoardContainer>
  );
}
const BoardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const AddBtn = styled.button`
  background-color: #375142; //#73a486;
  color: white;
  padding: 0.5rem 1rem;
  font-weight: 500;
  text-align: center;
  border-radius: 0.8rem;
  width: fit-content;
  border: none;
  box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
`;
export default Board;
