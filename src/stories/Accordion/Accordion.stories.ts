import Accordion from "../../components/Accordion.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof Accordion> = {
    title: "Components/Accordion",
    component: Accordion,
    tags: ['autodocs'],
    argTypes: {
        items: {
            control: "object",
            description: "Accordion items with title and content",
        },
        onOnToggle: {
            action: "toggled", // Storybook에서 발생하는 이벤트를 Actions 패널에서 볼 수 있음
        },
    },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
    args: {
        items: [
            { title: "Accordion Item 1", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
            { title: "Accordion Item 2", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
            { title: "Accordion Item 3", content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)." },
        ],
    },
};
