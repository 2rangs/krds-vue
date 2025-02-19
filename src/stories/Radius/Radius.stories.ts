import type { Meta, StoryObj } from "@storybook/vue3";
import Radius from "./Radius.vue";

/** 📌 정의된 Tailwind `radius-*` 값 */
const radiusOptions = ["xs", "sm", "md", "lg", "xl", "2xl", "full"];

/** 📌 Radius 설명 표 */
const radiusDescriptionTable = `
| **Size** | **Tailwind Class** | **Radius Value** |
|---------|------------------|-----------------|
| **XSmall** | \`radius-xs\` | 2px |
| **Small** | \`radius-sm\` | 4px |
| **Medium** | \`radius-md\` | 6px |
| **Large** | \`radius-lg\` | 8px |
| **XLarge** | \`radius-xl\` | 12px |
| **XXLarge** | \`radius-2xl\` | 16px |
| **Full** | \`radius-full\` | 9999px (circle) |
`;

const meta: Meta<typeof Radius> = {
    title: "Design System/Radius",
    component: Radius,
    tags: ["autodocs"],
    args: {
        size: "md",
    },
    argTypes: {
        size: {
            control: "select",
            options: radiusOptions,
            description: "Radius size",
            table: { category: "Properties" },
        },
    },
    parameters: {
        docs: {
            description: {
                component: `
### 📌 Border Radius System
- Tailwind의 \`rounded-*\` 값을 기반으로 사용.
- 추가적으로 \`radius-2xl (16px)\` 도입.

---

### 🔘 **Radius Sizes**
${radiusDescriptionTable}
                `,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** 기본 Story */
export const Default: Story = {
    args: { size: "md" },
    parameters: { layout: "centered" },
};

/** 📌 각 `radius` 값을 개별 Story로 제공 */
const createStory = (size: string): Story => ({
    args: { size },
    parameters: { layout: "centered" },
});

export const XSmall = createStory("xs");
export const Small = createStory("sm");
export const Medium = createStory("md");
export const Large = createStory("lg");
export const XLarge = createStory("xl");
export const XXLarge = createStory("2xl");
export const Full = createStory("full");
