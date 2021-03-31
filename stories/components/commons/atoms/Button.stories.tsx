import { Button, ButtonProps } from '@/components/commons/atoms/Button';
import { Meta, Story } from '@storybook/react/types-6-0';

const meta: Meta = {
  component: Button,
  title: 'commons/atoms/Button',
};
export default meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  colorScheme: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  colorScheme: 'secondary',
};
