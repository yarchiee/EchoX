import styled from "styled-components";
const ButtonContainer = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #00ff62;
  margin-top: auto;
  border: 1px solid #00ff62;
  border-radius: 4px;
`;

const ButtonText = styled.div`
  color: #00ff62;
  margin-right: 5px;
`;

function Button() {
  return (
    <>
      <ButtonContainer>
        <ButtonText>置底按鈕</ButtonText>{" "}
        <svg
          width="20"
          height="15"
          viewBox="0 0 20 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.2729 0.417967C14.7626 0.117581 15.4052 0.267687 15.7082 0.753238L19.5273 6.87427C19.6647 7.05539 19.7375 7.27612 19.7368 7.50003C19.7375 7.72393 19.6647 7.94466 19.5273 8.12579L15.7082 14.2468C15.4052 14.7324 14.7626 14.8825 14.2729 14.5821C13.7832 14.2817 13.6319 13.6446 13.9348 13.159L16.823 8.53001H1.04268C0.466846 8.53001 4.04177e-05 8.06716 4.04177e-05 7.4962C4.04177e-05 6.92525 0.466846 6.46239 1.04268 6.46239H16.8182L13.9348 1.84103C13.6319 1.35548 13.7832 0.718354 14.2729 0.417967Z"
            fill="#00FF62"
          />
        </svg>
      </ButtonContainer>
    </>
  );
}

export default Button;
