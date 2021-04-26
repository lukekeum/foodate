import { css } from '@emotion/react';
import { Wave } from '../../assets';

function Waves() {
  return (
    <nav css={Layout}>
      <Wave />
    </nav>
  );
}

const Layout = css`
  display: flex;
  position: fixed;
`;

export default Waves;
