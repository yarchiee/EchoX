import styled from "styled-components";
import Button from "./Button";
const BoxContainer = styled.div`
  width: 280px;
  height: 449px;
  margin-bottom: 20px;
  border: 1px solid #00ff62;
  border-radius: 4px;
  @media (max-width: 843px) {
    width: 165px;
    height: 318px;
  }
`;
const BoxScope = styled.div`
  margin: 30px 26px 30px 30px;
  height: 390px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (max-width: 843px) {
    margin: 10px 10px 10px 10px;
    height: 298px;
  }
`;
const MainImg = styled.img`
  background-color: #666666;
  width: 100%;
  height: 224px;
  &:hover {
    background-color: #00ff62;
  }
  @media (max-width: 843px) {
    width: 147px;
    height: 147px;
  }
`;
const Title = styled.div`
  font-weight: 700;
  font-size: 16px;
  width: 100%;
  color: #ffffff;
  margin-top: 12px;
  @media (max-width: 843px) {
    font-size: 14px;
  }
`;
const SubTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  width: 100%;
  color: #00ff62;
  margin-top: 5px;
  margin-top: 12px;
  @media (max-width: 843px) {
    font-size: 13px;
    margin-top: 5px;
  }
`;
const DescribeText = styled.div`
  font-weight: 500;
  font-size: 14px;
  width: 100%;
  color: #cccccc;
  margin-top: 5px;
  @media (max-width: 843px) {
    font-size: 13px;
    margin-top: 5px;
  }
`;

function Box({ item }) {
  return (
    <>
      <BoxContainer>
        <BoxScope>
          <MainImg />
          <Title>{item.title}</Title>
          <SubTitle>{item.subtitle}</SubTitle>
          <DescribeText>{item.des}</DescribeText>
          <Button />
        </BoxScope>
      </BoxContainer>
    </>
  );
}

export default Box;
