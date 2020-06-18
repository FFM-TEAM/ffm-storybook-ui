/** @jsx jsx */
import Button from './Button';
import { jsx, css } from '@emotion/core';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components|Button',
  component: Button,
  decorators: [withKnobs],
};

export const button = () => {
  const label = text('children', 'BUTTON');
  const size = select('size', ['SMALL', 'LARGE', 'FULL'], 'DEFAULT');

  return (
    <Button size={size} onClick={action('onClick')}>
      {label}
    </Button>
  );
};

button.story = {
  name: '👍😀 😎 👍 💯Default',
};

export const darkGrayButton = () => {
  return (
    <Button size="DEFAULT" color="darkGray">
      DarkGray
    </Button>
  );
};

export const grayButton = () => {
  return (
    <Button size="LARGE" color="gray">
      grayButton
    </Button>
  );
};

export const lightGrayButton = () => {
  return (
    <Button size="LARGE" color="lightGray">
      lightGray
    </Button>
  );
};

const buttonWrapper = css`
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-top: 2rem;
  }
`;

export const sizes = () => {
  return (
    <div css={buttonWrapper}>
      <div>
        <div className="description">Small</div>
        <Button size="SMALL">BUTTON</Button>
      </div>
      <div>
        <div className="description">DEFAULT</div>
        <Button size="DEFAULT">BUTTON</Button>
      </div>
      <div>
        <div className="description">LARGE</div>
        <Button size="LARGE">BUTTON</Button>
      </div>
      <div>
        <div className="description">FULL</div>
        <Button size="FULL">BUTTON</Button>
      </div>
      <div>
        <div className="description">Small</div>
        <Button color="teal" size="SMALL">
          BUTTON
        </Button>
      </div>
      <div>
        <div className="description">DEFAULT</div>
        <Button color="teal" size="DEFAULT">
          BUTTON
        </Button>
      </div>
      <div>
        <div className="description">LARGE</div>
        <Button color="teal" size="LARGE">
          BUTTON
        </Button>
      </div>
      <div>
        <div className="description">FULL</div>
        <Button color="teal" size="FULL">
          BUTTON
        </Button>
      </div>
      <div>
        <div className="description">Small</div>
        <Button color="gray" size="SMALL">
          BUTTON
        </Button>
      </div>
      <div>
        <div className="description">DEFAULT</div>
        <Button color="gray" size="DEFAULT">
          BUTTON
        </Button>
      </div>
      <div>
        <div className="description">LARGE</div>
        <Button color="gray" size="LARGE">
          BUTTON
        </Button>
      </div>
      <div>
        <div className="description">FULL</div>
        <Button color="gray" size="FULL">
          BUTTON
        </Button>
      </div>
      <div>
        <div className="description">Small</div>
        <Button color="lightGray" size="SMALL">
          BUTTON
        </Button>
      </div>
      <div>
        <div className="description">DEFAULT</div>
        <Button color="lightGray" size="DEFAULT">
          BUTTON
        </Button>
      </div>
      <div>
        <div className="description">LARGE</div>
        <Button color="lightGray" size="LARGE">
          BUTTON
        </Button>
      </div>
      <div>
        <div className="description">FULL</div>
        <Button color="lightGray" size="FULL">
          BUTTON
        </Button>
      </div>
    </div>
  );
};

const doubleWrapper = css`
  display: flex;

  width: 360px;
  flex: 1;
  /* .description {
    display: flex;
    margin-bottom: 0.5rem;
  } */
  /* & > div + div {
    margin-top: 2rem;
  } */
`;
export const ModifyButton = () => {
  return (
    <div css={doubleWrapper}>
      <Button inline={true} color="darkGray" size="FULL">
        수정
      </Button>
      <Button inline={true} color="orange" size="FULL">
        예약하기
      </Button>
    </div>
  );
};

// export const customSized = () => {
//   return (
//     <div css={buttonWrapper}>
//       <div>
//         <Button width="20rem">CUSTOM WIDTH</Button>
//       </div>
//       <div>
//         <Button width="100%">FULL WIDTH</Button>
//       </div>
//     </div>
//   );
// };
