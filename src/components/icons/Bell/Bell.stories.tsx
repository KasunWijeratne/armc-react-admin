import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Bell from ".";

export default {
  title: "Example/Bell",
  component: Bell,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Bell>;

const Template: ComponentStory<typeof Bell> = (args) => <Bell />;

export const Primary = Template.bind({});
