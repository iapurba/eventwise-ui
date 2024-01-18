import type { Meta, StoryObj } from '@storybook/react';

import CustomTextField from '../CustomTextField';

const meta = {
  title: 'Common/CustomTextField',
  component: CustomTextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CustomTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BorderOnly: Story = {
  args: {
    styleType: 'borderOnly',
    type: 'text',
    placeholder: 'Enter Text',
    size: 'small',
  },
};

export const BorderAndLabel: Story = {
    args: {
      styleType: 'borderAndLabel',
      type: 'text',
      label: 'Enter Text',
      size: 'small',
    },
  };

  export const BottomBorderAndLabel: Story = {
    args: {
      styleType: 'bottomBorderAndLabel',
      type: 'text',
      label: 'Enter Text',
      size: 'small',
    },
  };
