import styled from "styled-components";
const TagContainer = styled.div`
  width: 0;
  height: 0;
  position: absolute;
  border-style: solid;
  border-width: 100px 100px 0 0;
  border-color: #00ff62 transparent transparent transparent;
`;

const TagText = styled.div`
  color: #212121;
  font-size: 12px;
  position: absolute;
  width: 140.09px;
  height: 20.02px;
  transform: rotate(315deg);
`;

function Tag() {
  return (
    <>
      <TagContainer></TagContainer>
      <TagText>TagName</TagText>
    </>
  );
}

export default Tag;
