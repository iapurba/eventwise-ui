import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'primary',
      values: [
        {
          name: 'primary',
          value: '#ffffff',
        },
        {
          name: 'secondary',
          value: '#0C172F',
        },
      ],
    },
  },
};

export default preview;
