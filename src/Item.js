import { ItemContainer } from "./Item.styled";

export const Item = ({ record }) => {
  console.log(record);
  const { date, distance, time, pace } = record;
  return (
    // <ItemWrapper>
    <ItemContainer>
      <div className="title_date">{date}</div>
      <div className="memo">
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
      </div>
    </ItemContainer>
    // </ItemWrapper>
  );
};
