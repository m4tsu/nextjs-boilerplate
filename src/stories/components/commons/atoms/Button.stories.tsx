import { Button, ButtonProps } from '@/components/commons/atoms/Button';
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'components/commons/atoms/Button',
  component: Button,
  decorators: [withKnobs, withDesign],
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button
    {...args}
    colorScheme={select(
      'Button Color',
      ['primary', 'secondary', 'normal'],
      'normal'
    )}
    variant={select('Button variant', ['contained', 'outlined'], 'contained')}
    size={select('Button size', ['sm', 'md', 'lg'], 'md')}
    fullWidth={boolean('FullWidth?', false)}
  >
    {text('Button Text', 'Button')}
  </Button>
);

export const Secondary = Template.bind({});
Secondary.args = {
  onClick: action('clicked'),
};

Secondary.parameters = {
  design: [
    {
      type: 'figma',
      url: 'figma url',
      // accessToken: "******-******-******-******-******-******",
    },
  ],
};
