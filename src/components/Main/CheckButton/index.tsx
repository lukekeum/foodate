import { css } from '@emotion/react';

function CheckButton() {
  return (
    <div css={CheckButtonStyle}>
      <button>확인해보기</button>
    </div>
  );
}

const CheckButtonStyle = css`
  margin-right: 1.25rem;
  & > button {
    display: block;
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    margin-top: 10rem;
    font-weight: 900;
    font-size: 2rem;
    cursor: pointer;
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      background: white;
      width: 0%;
      height: 5px;
      opacity: 0;
      transition: all 0.2s ease-in-out;
      transition-duration: 0.75s;
    }
    &:hover,
    &:after {
      width: 100%;
      opacity: 1;
    }
  }
`;

export default CheckButton;
