import styled from "styled-components";
export const ItemWrapper = styled.li``;
export const ItemContainer = styled.li`
  border-radius: 1rem;
  background-color: white;
  padding: 1rem;
  margin: 1rem 0;
  > .title_date{
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  > .memo {
    display: flex;
    justify-content: space-between;
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;