import type { Meta, StoryObj } from "@storybook/vue3";
import SpacingSystem from "./SpacingSystem.vue";

/** 📌 Gap & Padding 옵션 정의 */
const gapPaddingOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

/** 📌 설명용 표 자동 생성 */
const descriptionTable = `
| **Size** | **Gap Class** | **Padding Class** | **Value (px)** |
|---------|-------------|----------------|------------|
${gapPaddingOptions
    .map((size) => {
        const numericSize = Number(size); // 🛠 문자열 → 숫자로 변환
        return `| ${size} | \`gap-${size}\` | \`padding-${size}\` | ${2 ** (numericSize - 1)}px |`;
    })
    .join("\n")}
`;

const meta: Meta<typeof SpacingSystem> = {
    title: "Design System/Spacing",
    component: SpacingSystem,
    tags: ["autodocs"],
    args: {
        type: "gap",
        size: "4",
    },
    argTypes: {
        type: {
            control: "select",
            options: ["gap", "padding"],
            description: "Spacing type (gap or padding)",
            table: { category: "Properties" },
        },
        size: {
            control: "select",
            options: gapPaddingOptions,
            description: "Size level",
            table: { category: "Properties" },
        },
    },
    parameters: {
        docs: {
            description: {
                component: `
### 📌 Spacing System (Gap & Padding)
- Tailwind 클래스를 활용한 **간격 (gap) 및 패딩 (padding)** 확장

---

### 🔢 **Size 기준표**
${descriptionTable}
                `,
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof meta>;

/** 기본 Story */
export const Default: Story = {
    args: {
        type: "gap",
        size: "4",
    },
    parameters: { layout: "centered" },
};

/** Gap */
export const GapSmall = { args: { type: "gap", size: "2" } };
export const GapMedium = { args: { type: "gap", size: "6" } };
export const GapLarge = { args: { type: "gap", size: "10" } };

/** Padding */
export const PaddingSmall = { args: { type: "padding", size: "2" } };
export const PaddingMedium = { args: { type: "padding", size: "6" } };
export const PaddingLarge = { args: { type: "padding", size: "10" } };
