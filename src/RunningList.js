import { Item } from "./Item";
import { ListContainer } from "./RunningList.styled";

const RunningList = ({records}) => {
  return (
  <ListContainer>
    {records.sort((a,b) => a.id - b.id)
    .map((record, index) => (
      <Item 
        key={index} 
        record={record}/>
    ))}
  </ListContainer>
  );
};

export default RunningList;
