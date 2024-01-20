import type { Meta, StoryObj } from '@storybook/react';
import HeaderButton from '../HeaderButton';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';

const meta = {
  title: 'Common/Button/Header Button',
  component: HeaderButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const StartIconAndText: Story = {
  args: {
    startIcon: SearchIcon,
    label: 'Search',
  },
  parameters: {
    backgrounds: {
      default: 'secondary',
    },
  },
};

export const IconOnly: Story = {
  args: {
    startIcon: SearchIcon,
  },
  parameters: {
    backgrounds: {
      default: 'secondary',
    },
  },
};

export const StartEndIconAndText: Story = {
  args: {
    startIcon: PlaceOutlinedIcon,
    label: 'City',
    endIcon: KeyboardArrowDownRoundedIcon,
  },
  parameters: {
    backgrounds: {
      default: 'secondary',
    },
  },
};
