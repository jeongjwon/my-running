import AddForm from "../AddForm/AddForm";
import RunningList from "../RunningList/RunningList";
import { useState } from "react";
import { BoardContainer, AddBtn } from "./Board.styled";
import useLocalStorage from "../../hooks/useLocalStorage";
import EditForm  from "../EditForm/EditForm";


import {useDispatch, useSelector} from "react-redux";
import { openAddModalAction , openEditModalAction} from "../../redux/actions";

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


  const dispatch = useDispatch();

  const stateEdit = useSelector(state => state.editModalReducer);
 

  
  const openAddModalHandler = () => {
    dispatch(openAddModalAction({isAddOn: true}));
  }

  const stateAdd = useSelector(state => state.addModalReducer);


  return (
    <BoardContainer>
      {/* <AddBtn onClick={handleModal}>추가하기</AddBtn> */}
      <AddBtn onClick={openAddModalHandler}>추가하기</AddBtn>
      <RunningList records={records} onRemove={onRemove} onEdit={onEdit}/>
      {/* {isOpen && <AddForm onInsert={onInsert} handleModal={handleModal} />} */}
      {stateAdd.isAddOn &&  <AddForm onInsert={onInsert} handleModal={handleModal} />}
      {/* {isEditing && <EditForm editedTask={editedTask} onUpdate={onUpdate} />} */}
      {stateEdit.isEditOn && <EditForm editedTask={stateEdit.record} onUpdate={onUpdate} />}
    </BoardContainer>
  );
}

export default Board;
