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

// Load Stories
const reqGeneral = require.context('../stories/general', true, /\.stories\.js$/);
const reqComponents = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  reqGeneral.keys().forEach(filename => reqGeneral(filename));
  reqComponents.keys().forEach(filename => reqComponents(filename));
}

configure(loadStories, module);
