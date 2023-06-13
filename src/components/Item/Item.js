import { useDispatch, useSelector } from "react-redux";
import { ItemContainer, ItemWrapper , BtnZone} from "./Item.styled";
import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";
import { openEditModalAction } from "../../redux/actions";

export const Item = ({ record, onRemove, onEdit }) => {
  const { date, distance, time, pace, id } = record;

  const dispatch = useDispatch();

  const openEditModalHanlder = () => {
    dispatch(openEditModalAction({
      isEditOn: true,
      record: record
    }));
  }


  return (
   
    <ItemContainer>
      <ItemWrapper>
      <div className="title_date">{date}</div>
      <div className="btn_zone">
       {/* <BtnZone className="edit" onClick={() => onEdit(record)}><HiOutlinePencilAlt size={20}/></BtnZone> */}
       <BtnZone className="edit" onClick={openEditModalHanlder}><HiOutlinePencilAlt size={20}/></BtnZone>
       <BtnZone className="remove" onClick={() => onRemove(id)}><HiOutlineTrash size={20} /></BtnZone>
      
      </div>
      </ItemWrapper>
      <ItemWrapper>
      <div className="memo">
          <div>{distance}</div>
          <div>Km</div>
        </div>
        <div className="memo">
          <div>{pace}</div>
          <div>평균 페이스</div>
        </div>
        <div className="memo">
          <div>{time}</div>
          <div>총 시간</div>
        </div>
      </ItemWrapper>
      
      {/* <div className="memo">
        <div className="memo_dis">
          <div>{distance}</div>
          <div>Km</div>
        </div>
        <div className="memo_time">
          <div>{pace}</div>
          <div>평균 페이스</div>
        </div>
        <div className="memo_pace">
          <div>{time}</div>
          <div>총 시간</div>
        </div>
      </div> */}
    </ItemContainer>
    // </ItemWrapper>
  );
};
