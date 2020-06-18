import * as React from 'react';
import styled, { css } from 'styled-components';
import { mediaQuery } from '../../lib/styles/media';
import palette from '../../lib/styles/palette';
import { LikeIcon } from '../../static/svg';
import RatioImage from '../shared/RatioImage';
import { ellipsis } from '../../lib/styles/utils';
import { formatDate } from '@/lib/utils';

export interface PostCardProps {}

const PostCard: React.FC<PostCardProps> = props => {
  return (
    <Block>
      {true && (
        <StyledLink>
          <RatioImage
            widthRatio={1.916}
            heightRatio={1}
            src={
              'https://images.songc.io/images/songc/post/84487421-0bfd-43f6-ad4b-e7c89d6bbab1/image.png'
            }
          />
        </StyledLink>
      )}
      <Content clamp={true}>
        <StyledLink>
          <h4>안녕하세요</h4>
          <div className="description-wrapper">
            <p>
              {/* {post.short_description.replace(/&#x3A;/g, ':')}
              {post.short_description.length === 150 && '...'} */}
            </p>
          </div>
        </StyledLink>
        <div className="sub-info">
          <span>{formatDate('123123')}</span>
          <span className="separator">·</span>
          <span>20개의 댓글</span>
        </div>
      </Content>
      <Footer>
        <div className="userinfo">
          <img
            src={
              'https://faint1122.s3.ap-northeast-2.amazonaws.com/Image+from+iOS+(1).jpg'
            }
            alt={`user thumbnail of s.ong.c`}
          />
          <span>
            by <b>s.ong.c</b>
          </span>
        </div>
        <div className="likes">
          <LikeIcon />
          10
        </div>
      </Footer>
    </Block>
  );
};
const StyledLink = styled.div`
  display: block;
  color: inherit;
  text-decoration: none;
`;

const Block = styled.div`
  width: 20rem;
  background: white;
  border-radius: 4px;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  transition: 0.25s box-shadow ease-in, 0.25s transform ease-in;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px 0 rgba(0, 0, 0, 0.08);
    ${mediaQuery(1024)} {
      transform: none;
    }
  }
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  ${mediaQuery(944)} {
    width: calc(50% - 2rem);
  }
  ${mediaQuery(767)} {
    margin: 0;
    width: 100%;
    & + & {
      margin-top: 1rem;
    }
  }
`;

const Content = styled.div<{ clamp: boolean }>`
  padding: 1rem;
  display: flex;
  flex: 1;
  flex-direction: column;
  h4 {
    font-size: 1rem;
    margin: 0;
    margin-bottom: 0.25rem;
    line-height: 1.5;
    ${ellipsis}
    color: ${palette.gray9};
    ${mediaQuery(767)} {
      white-space: initial;
    }
  }
  .description-wrapper {
    flex: 1;
  }
  p {
    margin: 0;
    word-break: break-word;
    overflow-wrap: break-word;
    font-size: 0.875rem;
    line-height: 1.5;
    ${props =>
      props.clamp &&
      css`
        height: 3.9375rem;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      `}
  
    color: ${palette.gray7};
    margin-bottom: 1.5rem;
  }
  .sub-info {
    font-size: 0.75rem;
    line-height: 1.5;
    color: ${palette.gray6};
    .separator {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
  }
`;

const Footer = styled.div`
  padding: 0.625rem 1rem;
  border-top: 1px solid ${palette.gray0};
  display: flex;
  font-size: 0.75rem;
  line-height: 1.5;
  justify-content: space-between;
  .userinfo {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    img {
      object-fit: cover;
      border-radius: 50%;
      width: 1.5rem;
      height: 1.5rem;
      display: block;
      margin-right: 0.5rem;
    }
    span {
      color: ${palette.gray6};
      b {
        color: ${palette.gray8};
      }
    }
  }
  .likes {
    display: flex;
    align-items: center;
    svg {
      width: 0.75rem;
      height: 0.75rem;
      margin-right: 0.5rem;
    }
  }
`;
export default PostCard;
