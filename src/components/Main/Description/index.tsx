import React from 'react';
import { css } from '@emotion/react';

function Description() {
  return (
    <div css={DescriptionStyle}>
      <p>유통기한이 지나도 어느정도는 더 먹을 수 있어요</p>
      <p>한 번 확인해 보세요</p>
    </div>
  );
}

const DescriptionStyle = css`
  color: #fff;
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 28px;
  margin-top: 5rem;
  p {
    margin: 0;
    padding: 0;
  }
`;

export default Description;
