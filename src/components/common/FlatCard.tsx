import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import media, { mediaQuery } from '../../lib/styles/media';
import RatioImage from '../shared/RatioImage';
import PrivatePostLabel from '../shared/PrivatePostLabel';
import { formatDate } from '@/lib/utils';
interface PostCardProps {
  hideUser?: boolean;
}
const PostCardBlock = styled.div`
  width: 20rem;
  padding: 1rem;
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
  .user-info {
    display: flex;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
      display: block;
      margin-right: 1rem;
      background: ${palette.gray0};
      object-fit: cover;
      border-radius: 1.5rem;
      box-shadow: 0px 0 8px rgba(0, 0, 0, 0.1);
      ${media.small} {
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
      }
    }
    .username {
      font-size: 0.875rem;
      color: ${palette.gray9};
      font-weight: bold;
      a {
        color: inherit;
        text-decoration: none;
        &:hover {
          color: ${palette.gray8};
        }
      }
    }
    margin-bottom: 1.5rem;
    ${media.small} {
      margin-bottom: 0.75rem;
    }
  }
  .post-thumbnail {
    margin-bottom: 1rem;
    ${media.small} {
    }
  }
  line-height: 1.5;
  h2 {
    font-size: 1.5rem;
    margin: 0;
    color: ${palette.gray9};
    word-break: keep-all;
    ${media.small} {
      font-size: 1rem;
    }
  }
  p {
    margin-bottom: 2rem;
    margin-top: 0.5rem;
    font-size: 1rem;
    color: ${palette.gray7};
    word-break: keep-all;
    overflow-wrap: break-word;
    ${media.small} {
      font-size: 0.875rem;
      margin-bottom: 1.5rem;
    }
  }
  .subinfo {
    display: flex;
    align-items: center;
    margin-top: 1rem;
    color: ${palette.gray6};
    font-size: 0.875rem;
    ${media.small} {
      font-size: 0.75rem;
    }
    span {
    }
    .separator {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
  }
  .tags-wrapper {
    margin-bottom: -0.875rem;
    ${media.small} {
      margin-bottom: -0.5rem;
    }
  }

  & + & {
    border-top: 1px solid ${palette.gray2};
  }
`;
const FlatCard = (props: PostCardProps) => {
  return (
    <PostCardBlock>
      {true && (
        <div className="user-info">
          <img
            src={
              'https://faint1122.s3.ap-northeast-2.amazonaws.com/Image+from+iOS+(1).jpg'
            }
            alt="thumbnail"
          />
          <div className="username">
            <span>s.ong.c</span>
          </div>
        </div>
      )}
      {true && (
        <RatioImage
          src={
            'https://images.songc.io/images/songc/post/84487421-0bfd-43f6-ad4b-e7c89d6bbab1/image.png'
          }
          alt="post-thumbnail"
          widthRatio={1.91}
          heightRatio={1}
          className="post-thumbnail"
        />
      )}
      <h2>🖥 웹 개발자 포트폴리오를 위한 10가지 팁</h2>
      <p>안녕하세요</p>
      <div className="tags-wrapper"></div>
      <div className="subinfo">
        <span>{formatDate('2019-12-19 10:36:07.719371')}</span>
        <div className="separator">·</div>
        <span>20개의 댓글</span>
        {/* 비공개라면 */}
        {true && (
          <>
            <div className="separator">·</div>
            <span>
              <PrivatePostLabel />
            </span>
          </>
        )}
      </div>
    </PostCardBlock>
  );
};
export default FlatCard;
