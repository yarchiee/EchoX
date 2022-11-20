import styled from "styled-components";
import SideBar from "../components/SideBar";
import Main from "../components/Main";
const BackGround = styled.div`
  display: flex;
  background-color: #212121;
`;

const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  width: 100vw;
  display: flex;
`;

function Home() {
  return (
    <BackGround>
      <Container>
        <SideBar />
        <Main />
      </Container>
    </BackGround>
  );
}

export default Home;
