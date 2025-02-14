import type { Meta, StoryObj } from "@storybook/vue3";
import ColorPalette from "./ColorPalette.vue";

const meta: Meta<typeof ColorPalette> = {
    title: "Design System/ColorPalette",
    component: ColorPalette,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
