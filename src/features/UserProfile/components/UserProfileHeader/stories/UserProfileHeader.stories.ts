import { Meta, StoryObj } from '@storybook/react';
import UserProfileHeader from '../UserProfileHeader';

const meta = {
    title: 'User Profile/Header',
    component: UserProfileHeader,
    tags: ['autodocs'],
} satisfies Meta<typeof UserProfileHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ProfileHeader1: Story = {
    args: {
        email: 'test@example.com',
        firstName: 'Apurba',
        lastName: 'Panja',
    }
}

export const ProfileHeader2: Story = {
    args: {
        email: 'test@example.com',
    }
}