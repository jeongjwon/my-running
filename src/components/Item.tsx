import { useDispatch, useSelector } from "react-redux";
// import { ItemContainer, ItemWrapper, BtnZone } from "./Item.styled";
import { HiOutlineTrash, HiOutlinePencilAlt } from "react-icons/hi";
import { openEditModalAction } from "../redux/actions";

import styled from "styled-components";

const Item = ({ record, onRemove, onEdit }) => {
  const { date, distance, time, pace, id } = record;

  const dispatch = useDispatch();

  const openEditModalHanlder = () => {
    dispatch(
      openEditModalAction({
        isEditOn: true,
        record: record,
      })
    );
  };

  return (
    <ItemContainer>
      <ItemWrapper>
        <div className="title_date">{date}</div>
        <div className="btn_zone">
          {/* <BtnZone className="edit" onClick={() => onEdit(record)}><HiOutlinePencilAlt size={20}/></BtnZone> */}
          <BtnZone className="edit" onClick={openEditModalHanlder}>
            <HiOutlinePencilAlt size={20} />
          </BtnZone>
          <BtnZone className="remove" onClick={() => onRemove(id)}>
            <HiOutlineTrash size={20} />
          </BtnZone>
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
const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  :first-child {
    margin-bottom: 0.3rem;
  }

  > .memo {
    display: flex;
    flex-direction: column;
    /* justify-content: flex-end; */
    /* align-items: center; */

    font-weight: 600;
    > :nth-child(2) {
      font-size: 0.8rem;
      font-weight: 400;
      color: darkgray;
    }
  }
`;
const ItemContainer = styled.li`
  box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
  border-radius: 1rem;
  background-color: white;
  padding: 1rem 0.8rem;
  margin: 1rem 0;

  /* > .memo {
    display: flex;
    justify-content: space-between;
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  } */
`;
const BtnZone = styled.button`
  border: none;
  background: transparent;
  margin-left: 0.5rem;

  > svg:hover {
    color: red;
    transform: scale(1.3); /* 이미지 확대 */
    transition: transform 0.5s;
  }
`;

export default Item;
