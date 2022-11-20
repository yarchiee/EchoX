import styled from "styled-components";
const InputItem = styled.input`
  width: 95%;
  height: 48px;
  border-radius: 4px;
  margin-bottom: 20px;
  color: #212121;
  padding-left: 15px;
  font-weight: 600;
  font-size: 16px;
  background-color: ${(props) => props.background};
`;

function Input({ item, background }) {
  return (
    <>
      <InputItem
        placeholder={item.placeholder}
        background={background}
      ></InputItem>
    </>
  );
}

export default Input;
