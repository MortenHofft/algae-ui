import React from 'react';

import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';

import { Welcome } from '@storybook/react/demo';


storiesOf('Documentation|Introduction', module).add('to Storybook', () => <Welcome showApp={linkTo('components-button--with-text')} />);
