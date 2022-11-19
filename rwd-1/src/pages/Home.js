import styled from "styled-components";
import Box from "../components/Box";
const BackGround = styled.div`
  width: 100vw;

  background-color: #212121;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 880px;
  border: 1px solid #00ff62;
  display: flex;
  margin-top: 40px;
  margin-bottom: 40px;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const boxList = [
  {
    id: 1,
    title: "123lll26超過兩行字123lll26超過兩行字123lll26超過兩行字",
    subtitle: "bg-[#acacac]55555",
    des: "123456",
  },
  { id: 2, title: "123lll26", subtitle: "bg-[#acacac]558888888", des: "12" },
  {
    id: 3,
    title: "123lll26",
    subtitle: "bg-[#acacac]78945",
    des: "12345645686",
  },
  { id: 4, title: "123lll26", subtitle: "bg-[#acacac]5656", des: "12389789" },
  { id: 5, title: "123lll26", subtitle: "bg-[#acacac]444", des: "12389789" },
  { id: 6, title: "123lll26", subtitle: "bg-[#acacac]6", des: "123" },
];
function Home() {
  return (
    <BackGround>
      <Container>
        {boxList.map((item) => {
          return <Box item={item} />;
        })}
      </Container>
    </BackGround>
  );
}

export default Home;
