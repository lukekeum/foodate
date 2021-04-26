import { Milk as MilkSVG } from '../../assets';
import { css } from '@emotion/react';

function Milk() {
  return (
    <div css={MilkStyle}>
      <MilkSVG />
    </div>
  );
}

const MilkStyle = css`
  position: fixed;
  top: 0px;
  right: 0px;
`;

export default Milk;
