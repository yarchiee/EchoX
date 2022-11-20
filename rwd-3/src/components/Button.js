import styled from "styled-components";
const ButtonContainer = styled.div`
  width: 150px;
  height: 51px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  margin-top: auto;
  border: 1px solid ${(props) => props.border};
  border-radius: 4px;
  margin-right: 20px;
  font-size: 18px;
  font-weight: 600;
  background-color: ${(props) => props.background};
  @media screen and (max-width: 1011px) {
    margin-bottom: 20px;
    width: 100%;
  }
`;

const ButtonText = styled.div`
  margin-right: 5px;
`;

function Button({ type, background, color, border }) {
  return (
    <>
      <ButtonContainer background={background} color={color} border={border}>
        <ButtonText>{type}</ButtonText>
      </ButtonContainer>
    </>
  );
}

export default Button;
