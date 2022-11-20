import styled from "styled-components";
import Button from "../components/Button";
import Tag from "../components/Tag";
const BackGround = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #212121;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 280px;
  height: 280px;
  border: 1px solid #00ff62;
  background-color: #000000;
`;

const BoxScope = styled.div`
  margin: 68px 50px 68px 50px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  width: 100%;
  color: #ffffff;
`;
const SubTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  width: 100%;
  color: #00ff62;
  margin-top: 5px;
  margin-top: 12px;
`;
const DescribeText = styled.div`
  font-weight: 500;
  font-size: 14px;
  width: 100%;
  color: #cccccc;
  margin-top: 5px;
`;

function Home() {
  return (
    <BackGround>
      <Container>
        <Tag />
        <BoxScope>
          <Title>超過兩行字的標題要尾巴要顯示</Title>
          <SubTitle>小標文字</SubTitle>
          <DescribeText>描述文字</DescribeText>
          <Button />
        </BoxScope>
      </Container>
    </BackGround>
  );
}

export default Home;
