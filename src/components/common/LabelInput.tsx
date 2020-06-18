import * as React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { MdLockOutline } from 'react-icons/md';
import media from '../../lib/styles/media';
import useInput from '@/lib/hooks/useInput';

const LabelInputBlock = styled.div<{ focus: boolean; width: InputSize }>`
  padding-bottom: 0.5em;
  label,
  input {
    display: block;
    line-height: 1;
    color: #ffffff;
    span {
      color: ${palette.orange9};
    }
    .comment {
      color: #707070;
    }
  }
  label {
    display: flex;
    font-weight: bold;
    font-size: 15px;
    height: 17px;
    margin-bottom: 0.5rem;
    transition: all 0.125s ease-in;
    .timezone {
      flex: 1;
      display: flex;
      font-size: 0.875rem;
      color: #ff7306;
      justify-content: flex-end;
    }
  }
  .errorText {
    ${props =>
      props.width === 'SMALL' &&
      css`
        height: 5px;
      `}
    margin-top: 0.25rem;
    /* margin-bottom: 0.25rem; */
    font-size: 0.75rem;
    line-height: 1.25;
    color: ${palette.orange9};
    font-weight: bold;
  }
  input {
    height: 17px;
    text-indent: 1rem;
    background-color: #2c313d;
    font-size: 15px;
    font-weight: 500;
    border: none;
    outline: none;
    font-family: NotoSansKR;
    ${media.xsmall} {
      font-size: 0.875rem;
    }
    width: 100%;
    transition: all 0.125s ease-in;
    ${props => props.focus && css``}
    &::placeholder {
      color: #484c54;
    }

    &:disabled {
      background: white;
      color: ${palette.gray6};
      cursor: not-allowed;
    }
  }
  ${props =>
    props.width === 'NONE' &&
    css`
      padding-bottom: 0;
      border-bottom: 1px solid #1d2029;
    `};
  .input-wrapper {
    .age {
      color: white;
    }
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    border-radius: 3px;
    background: #2c313d;
    display: flex;
    align-items: center;
    ${props =>
      props.focus &&
      css`
        border: 1px ${palette.orange8} solid;
      `}
    ${props =>
      props.width === 'SMALL' &&
      css`
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        width: 10rem;
        input {
          width: 80%;
        }
      `};
    ${props =>
      props.width === 'NONE' &&
      css`
        display: none;
      `};
    svg {
      font-size: 1.5rem;
      color: ${palette.gray6};
    }
  }
`;

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type InputSize = 'NONE' | 'SMALL' | 'DEFAULT' | undefined;
export interface LabelInputProps extends InputProps {
  label?: string;
  placeholder: string;
  required?: boolean;
  name?: string;
  value?: string | number;
  comment?: string;
  width?: InputSize;
  type?: string;
  age?: boolean;
  selectTime?: string | undefined;
  onChange?: React.ChangeEventHandler;
  errorComment?: string;
  isError?: boolean;
}
const { useEffect, useState, useCallback } = React;
const LabelInput: React.FC<LabelInputProps> = ({
  label,
  name,
  width = 'DEFAULT',
  value,
  placeholder,
  comment,
  required,
  onChange,
  selectTime,
  disabled,
  type,
  age = false,
  isError,
  errorComment,
  ...rest
}) => {
  const [focus, setFocus] = useState(false);
  const [val, onChangeValue] = useInput('');
  useEffect(() => {
    if (isError) {
      setFocus(true);
    }
  }, [isError]);
  const onFocus = useCallback(() => {
    setFocus(true);
  }, []);
  const onBlur = useCallback(() => {
    if (!isError) {
      setFocus(false);
    }
  }, [isError]);
  useEffect(() => {}, [value, placeholder]);
  return (
    <>
      <LabelInputBlock focus={focus} width={width}>
        {label && (
          <label>
            {label} {required && <span>*</span>}
            {comment && <span className="comment"> {comment}</span>}
            {selectTime && <div className="timezone">{selectTime}</div>}
          </label>
        )}

        <div className="input-wrapper">
          <input
            type={type}
            name={name}
            autoComplete="off"
            onChange={onChangeValue}
            value={val}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
            {...rest}
          />
          {age && <div className="age">세</div>}
          {disabled && <MdLockOutline />}
        </div>
      </LabelInputBlock>
    </>
  );
};

export default LabelInput;
