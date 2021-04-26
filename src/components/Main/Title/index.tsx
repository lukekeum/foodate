import { css } from '@emotion/react';

function Title() {
  return (
    <div css={TitleStyle}>
      <h1>
        <span>유통기한</span> 지난거 왜 먹냐?
      </h1>
      <h1>그냥 갖다 버리지</h1>
    </div>
  );
}

const TitleStyle = css`
  color: white;
  font-size: 1rem;
  & > span {
    color: #ecd06c;
    font-style: underline;
  }
`;

export default Title;
