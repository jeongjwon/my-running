// import "./App.css";
import Header from "./Header";
import Main from "./Main";
import styled from "styled-components";

export const Container = styled.div`
  background-color: rgba(0, 248, 125, 0.4);
  height: 100vh;
  width: 100vw;
  position: relative;
  padding: 5rem 8rem;
`;
function App() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

export default App;
