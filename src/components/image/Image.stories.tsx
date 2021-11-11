import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Image from ".";
import Cup from "../../assets/images/coffee-cup.svg";

export default {
  title: "Example/Image",
  component: Image,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => (
  <Image {...args} src={Cup} alt="Image" />
);

export const Primary = Template.bind({});
