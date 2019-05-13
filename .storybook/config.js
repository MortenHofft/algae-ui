import { configure, addParameters, addDecorator } from '@storybook/react';
import gbifTheme from './theme';

// Storybook Addon Dependencies
import { withKnobs } from '@storybook/addon-knobs';
// import { withPropTypes } from 'storybook-prop-types-addon';

// Setup Addons
addDecorator(withKnobs);
// addDecorator(withPropTypes);

// Setup Storybook options
addParameters({ options: { theme: gbifTheme } });

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
