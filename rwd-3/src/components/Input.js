import styled from "styled-components";
const InputItem = styled.input`
  width: 100%;
  height: 48px;
  margin-right: auto;
  border: 0;
  padding: 0;
  background-color: ${(props) => props.background};
  border-radius: 2px;
  font-weight: 600;
`;
const InputContainer = styled.div`
  width: 100%;
  height: 48px;
  margin-bottom: 20px;
  color: #212121;
  font-size: 16px;
  border: 0;
  padding: 0;
`;

function Input({ item, background, readOnly }) {
  return (
    <>
      <InputContainer>
        <InputItem
          placeholder={item.placeholder}
          background={background}
          readOnly={readOnly}
        />
      </InputContainer>
    </>
  );
}

export default Input;
