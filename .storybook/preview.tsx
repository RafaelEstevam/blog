import React from "react";
import type { Preview } from "@storybook/react";
import '../src/app/globals.css';
import {ThemeProvider} from '../src/components/theme-provider';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
