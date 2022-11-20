import styled from "styled-components";
import Input from "./Input";
import Button from "./Button";
const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 40px;
  margin-left: 100px;
  margin-right: 200px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1011px) {
    margin: 20px;
  }
`;
const InputTitle = styled.div`
  color: #e5e5e5;
  margin-bottom: 10px;
`;
const InputBlock = styled.div`
  width: 100%;
`;
const Block = styled.div`
  display: flex;
  border-bottom: 2px solid #00ff62;
  padding-bottom: 40px;
  margin-bottom: 20px;
  @media screen and (max-width: 1011px) {
    flex-direction: column;
  }
`;
const Title = styled.div`
  color: #00ff62;
  @media screen and (max-width: 1011px) {
    margin-top: 20px;
  }
`;
const Area = styled.div`
  width: 100%;
  padding-right: 30px;
`;
const Des = styled.div`
  color: #ffffff;
  margin-top: 15px;
`;
const Img = styled.div`
  border: 1px solid #00ff62;
  width: 100%;
  height: 188px;
  background-color: #cccccc;
  @media screen and (max-width: 1011px) {
    margin-top: 20px;
  }
`;
const Des2 = styled.div`
  color: #ffffff;
  margin-top: 15px;
`;
const Link = styled.a`
  color: #ffffff;
  text-decoration: underline;
`;
const Title2 = styled(Title)`
  color: #ffffff;
`;
const UL = styled.ul`
  padding-left: 25px;
`;
const Flex = styled.div`
  display: flex;
  @media screen and (max-width: 1011px) {
    display: none;
  }
`;
const Flex2 = styled.div`
  display: none;
  @media screen and (max-width: 1011px) {
    display: flex;
    flex-direction: column;
  }
`;
const SelectTitle = styled.div`
  display: none;
  @media screen and (max-width: 1011px) {
    display: block;
    color: #00ff62;
  }
`;
const Select = styled.select`
  display: none;
  @media screen and (max-width: 1011px) {
    margin-top: 10px;
    margin-bottom: 35px;
    display: block;
    width: 100%;
    height: 48px;
    border-radius: 2px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 18px;
    font-weight: 600;
  }
`;
const Option = styled.option``;

function Main() {
  const inputlist = [
    { id: 1, title: "欄位 : 一般欄位", placeholder: "    填入欄位資料" },
    {
      id: 2,
      title: "欄位 : 不可修改的欄位",
      placeholder: "    不可修改的欄位資料",
    },
    { id: 3, title: "欄位 : 一般欄位", placeholder: "    填入欄位資料" },
    { id: 4, title: "欄位 : 一般欄位", placeholder: "    填入欄位資料" },
    { id: 5, title: "欄位 : 一般欄位", placeholder: "    填入欄位資料" },
  ];
  const list = [
    { name: "選單1" },
    { name: "選單2" },
    { name: "選單3" },
    { name: "選單4" },
    { name: "選單5" },
  ];
  return (
    <>
      <MainContainer>
        <InputBlock>
          <SelectTitle>側邊選單標題</SelectTitle>
          <Select id="ddlProducts" name="ddProducts">
            {list.map((item) => {
              return <Option>{item.name}</Option>;
            })}
          </Select>
          {inputlist.map((item) => {
            return (
              <>
                {item.title === "欄位 : 一般欄位" && (
                  <>
                    <InputTitle>{item.title}</InputTitle>
                    <Input item={item} background={""} />
                  </>
                )}
                {item.title === "欄位 : 不可修改的欄位" && (
                  <>
                    <InputTitle>{item.title}</InputTitle>
                    <Input item={item} background={"#cccccc"} readOnly="true" />
                  </>
                )}
              </>
            );
          })}
        </InputBlock>
        <Block>
          <Area>
            <Title>標題</Title>
            <Des>
              其他說明文字，其他說明文字，其他說明文字，其他說明文字，其他說明文字，其他說明文字。
            </Des>
            <Des2>
              外部連結樣式 : <Link>這裡是連結樣式喔</Link>
            </Des2>
          </Area>
          <Area>
            <Img></Img>
          </Area>
          <Area>
            <Title2>補充說明標題</Title2>
            <UL>
              <li>說明文字</li>
              <li>說明文字</li>
              <li>說明文字</li>
              <li>說明文字</li>
            </UL>
          </Area>
        </Block>
        <Flex>
          <Button
            type={"重填"}
            background={""}
            color={"#666666"}
            border={"#666666"}
          />
          <Button type={"儲存"} background={"#00FF62"} color={"#000000"} />
        </Flex>
        <Flex2>
          <Button type={"儲存"} background={"#00FF62"} color={"#000000"} />
          <Button
            type={"重填"}
            background={""}
            color={"#666666"}
            border={"#666666"}
          />
        </Flex2>
      </MainContainer>
    </>
  );
}

export default Main;
