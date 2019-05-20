import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '@storybook/react/demo';

import Example from './Button';

import { text } from '@storybook/addon-knobs';
import notes from './Button.md';

storiesOf('Components|Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>{text('Text', 'Embed entry')}</Button>, { notes })
  .add('with other', () => <Example>ignored text</Example>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
