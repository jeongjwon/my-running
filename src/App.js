// import "./App.css";
import styled from "styled-components";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

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
