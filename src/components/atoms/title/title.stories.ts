import { Meta, StoryObj } from "@storybook/react";
import { Title } from "./title";

const meta = {
  title: "Atoms/Title",
  component: Title,
  tags: ["autodocs"],
} satisfies Meta<typeof Title>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TitleLarge: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    className: "text-lg",
  },
};

export const BigTitle: Story = {
  args: {
    children: "Spice is a powerful, portable runtime for developers.",
    className: "font-medium text-6xl",
  },
};
