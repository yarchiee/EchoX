import styled from "styled-components";
import SideBar from "../components/SideBar";
import Main from "../components/Main";
const BackGround = styled.div`
  /* width: 100vw; */
  /* height: 100vh; */
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
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
