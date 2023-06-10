import styled from "styled-components";

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: baseline;
  
  > button {
    border: none;
    background: transparent;

    > svg {
      color: gray;

      &:hover {
        cursor: pointer;
        transition: 0.2s ease-in-out;
        transform: scale(1.15);
        color: #686868;
      }
    }
  }

  > .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > .text {
      font-size: 0.8rem;
      > .text.month {
        margin-left: 0.5rem;
        font-size: 1.5rem;
        font-weight: 600;
      }
    }
  }
`;
export const CalendarDays = styled.div`
  font-weight: 600;
  font-size: 1rem;
  padding: 2px;
  color: #686868;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > .col {
    height: 3rem;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const CalendarBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  > .row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .col {
      height: 3rem;
      width: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      > .not-valid {
        color: #c4c4c4;
      }
    }
    > .col.cell.valid:hover {
      cursor: pointer;
      transition: 0.2s ease-in-out;
    }
    > .col.cell.selected {
      border-radius: 50%;
      background-color: #f3c5b6;
      font-weight: 600;
    }
  }
`;
export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 3rem;
`;
