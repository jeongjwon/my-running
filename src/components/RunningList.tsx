import Item from "./Item";
import styled from "styled-components";
const RunningList = ({ records, onRemove, onEdit, openEditModalHanlder }) => {
  console.log(records);
  return (
    <ListContainer>
      {records
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map((record, index) => (
          <Item
            key={index}
            record={record}
            onRemove={onRemove}
            // openEditModalHanlder={openEditModalHanlder}
            onEdit={onEdit}
          />
        ))}
    </ListContainer>
  );
};

const ListContainer = styled.ul`
  padding: 0;
  list-style: none;
  min-height: 300x;
  max-height: 500px;
  overflow-y: auto;
  margin-top: 0;
`;
export default RunningList;
