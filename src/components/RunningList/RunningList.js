import { Item } from "../Item/Item";
import { ListContainer } from "./RunningList.styled";

const RunningList = ({records, onRemove, onEdit}) => {
  return (
  <ListContainer>
    {records.sort((a,b) =>  new Date(b.date)- new Date(a.date))
      .map((record, index) => (
      <Item 
        key={index} 
        record={record}
        onRemove={onRemove}
        onEdit={onEdit}/>
    ))}
  </ListContainer>
  );
};

export default RunningList;
