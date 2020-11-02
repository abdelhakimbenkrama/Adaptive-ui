import styled from "styled-components";
import "./App.css";

function App() {
  return (
    <Container>
      <SubContainer>
        <Navbar />
        <Map />
      </SubContainer>
      <Sidebar>
        <MiniNavbar />
      </Sidebar>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const SubContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media (max-width: 900px) {
    width: 100%;
    height: 70%;
  }
`;

const Navbar = styled.div`
  background-color: #9965e6;
  height: 4rem;
  width: 100%;
  padding: 0;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  flex: 1;
  background-color: #6a79d9;
`;

const Sidebar = styled.div`
  background-color: #65bae6;
  height: 100%;
  flex: 1;
  @media (max-width: 900px) {
    height: 400px;
    width: 100%;
    flex: 1;
  }
`;
const MiniNavbar = styled.div`
  background-color: #9965e6;
  height: 4rem;
  width: 100%;
  padding: 0;
  margin: 0;
`;
export default App;
