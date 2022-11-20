import styled from "styled-components";
const SideBarContainer = styled.div`
  width: 340px;
  height: 100%;
  border-right: 1px solid #666666;
  color: white;
  @media screen and (max-width: 1011px) {
    display: none;
  }
`;

const TextContainer = styled.div`
  margin-left: 140px;
  margin-right: 100px;
  padding-right: 20px;
  width: 40%;
  height: 210px;
  border-bottom: 1px solid #666666; ;
`;
const Title = styled.div`
  font-size: 18px;
  color: #00ff62; ;
`;
const Select = styled.div`
  color: #666666;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 30px;
  justify-content: space-evenly;
`;
function SideBar() {
  const list = [
    { name: "選單1" },
    { name: "選單2" },
    { name: "選單3" },
    { name: "選單4" },
    { name: "選單5" },
  ];
  return (
    <>
      <SideBarContainer>
        <TextContainer>
          <Title>側邊選單標題</Title>
          {list.map((item) => {
            return <Select>{item.name}</Select>;
          })}
        </TextContainer>
      </SideBarContainer>
    </>
  );
}

export default SideBar;
