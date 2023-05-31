import { Item } from "./Item";
import { ListContainer } from "./RunningList.styled";

const RunningList = ({records, onRemove}) => {
  return (
  <ListContainer>
    {records.sort((a,b) =>  new Date(b.date)- new Date(a.date))
      .map((record, index) => (
      <Item 
        key={index} 
        record={record}
        onRemove={onRemove}/>
    ))}
  </ListContainer>
  );
};

export default RunningList;
