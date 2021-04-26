import { css } from '@emotion/react';
import Title from './Title';
import Waves from '../Waves';
import Description from './Description';
import CheckButton from './CheckButton';
import Milk from '../Milk';

function Main() {
  return (
    <div css={MainStyle}>
      <Waves />
      <Milk />
      <div id="main__content_provider">
        <Title />
        <Description />
        <div id="main__check_button">
          <CheckButton />
        </div>
      </div>
    </div>
  );
}

const MainStyle = css`
  display: flex;
  flex-direction: column;
  & > #main__content_provider {
    padding-top: 16rem;
    display: flex;
    flex-direction: column;
    width: 65rem;
    margin: 0 auto;
    h1 {
      margin: 0;
      padding: 0;
      font-size: 3.75rem;
      font-weight: 900;
      span {
        color: #ecd06c;
        text-decoration: underline;
        text-decoration-thickness: 3px;
      }
    }
    & > #main__check_button {
      display: flex;
      width: 100%;
      flex-direction: row-reverse;
    }
  }
`;

export default Main;
