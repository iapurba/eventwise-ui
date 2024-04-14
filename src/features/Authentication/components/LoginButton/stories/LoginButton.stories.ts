import type { Meta, StoryObj } from '@storybook/react';
import LoginButton from '../LoginButton';

const meta = {
  title: 'Authentication/Login Button',
  component: LoginButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LoginButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const EmailLoginBtn: Story = {
  args: {
    method: 'email',
    variant: 'contained',
    label: 'Enter your email address',
  },
};

export const GoogleLoginBtn: Story = {
  args: {
    method: 'google',
    variant: 'outlined',
    label: 'Sign in With Google',
  },
};

export const AppleLoginBtn: Story = {
  args: {
    method: 'apple',
    variant: 'outlined',
    label: 'Sign in With Apple',
  },
};
