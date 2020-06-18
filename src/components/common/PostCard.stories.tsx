/** @jsx jsx */
import PostCard from './PostCard';
import { jsx, css } from '@emotion/core';
import { withKnobs } from '@storybook/addon-knobs';
import FlatCard from './FlatCard';
export default {
  title: 'components|카드',
  component: PostCard,
  decorators: [withKnobs],
};
export const card = () => {
  return <PostCard />;
};
const cardWrapper = css`
  display: flex;
  .description {
    margin-bottom: 0.5rem;
  }
  & > div + div {
    margin-left: 2rem;
  }
`;
export const CardUI = () => {
  return (
    <div css={cardWrapper}>
      <div>
        <div className="description">Default</div>
        <PostCard />
      </div>
      <div>
        <div className="description">점수만 있을때 </div>
        <PostCard />
      </div>
      <div>
        <div className="description">점수와 description 없을시</div>
        <PostCard />
      </div>
      <div>
        <div className="description">FlatCard</div>
        <FlatCard />
      </div>
    </div>
  );
};

card.story = {
  name: 'Card 기본 ',
};
CardUI.story = {
  name: '카드 컴포넌트 상태값 종류 별 ',
};
