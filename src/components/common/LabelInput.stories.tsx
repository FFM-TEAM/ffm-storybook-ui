/** @jsx jsx */
import LabelInput from './LabelInput';
import { jsx, css } from '@emotion/core';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components|Input',
  component: LabelInput,
  decorators: [withKnobs],
};

export const labelInput = () => {
  const placeholder = text('placeholder', '송민석');
  const width = select('width', ['SMALL', 'NONE', 'DEFAULT'], 'DEFAULT');
  return (
    <LabelInput
      width={width}
      tabIndex={4}
      name="childrenName"
      label="아이이름"
      onChange={() => {}}
      placeholder={placeholder}
      value={''}
      required={true}
      isError={false}
    />
  );
};

labelInput.story = {
  name: '👍😀 😎 👍 💯Default',
};
