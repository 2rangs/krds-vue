import type { Meta, StoryObj } from "@storybook/vue3";
import { watchEffect } from "vue";
import Typography from "./Typography.vue";

/** 📌 카테고리별 허용되는 사이즈 */
const categorySizeOptions: Record<string, string[]> = {
    display: ["lg", "md", "sm"],
    heading: ["lg", "md", "sm"],
    title: ["xxl", "xl", "lg", "md", "sm", "xs"],
    body: ["lg", "md", "sm"],
    detail: ["lg", "md", "sm"],
    label: ["lg", "md", "sm", "xs"],
    links: ["lg", "md", "sm"],
};

/** 📌 카테고리별 설명 */
const categoryDescriptions: Record<string, string> = {
    display: "**Display**: 마케팅 텍스트, 큰 제목에 사용",
    heading: "**Heading**: 페이지 및 섹션 타이틀",
    title: "**Title**: 콘텐츠 내 주요 타이틀",
    body: "**Body**: 본문 텍스트",
    detail: "**Detail**: 추가 설명이나 작은 텍스트",
    label: "**Label**: 버튼, 폼, UI 요소 내부 텍스트",
    links: "**Links**: 독립적인 링크 텍스트",
};

/** 📌 Font weight 옵션 */
const fontWeightOptions = ["regular", "bold"];

/** 📌 기본 `category` 설정 */
let selectedCategory: keyof typeof categorySizeOptions = "body";

/** 📌 Storybook 메타 정보 */
const meta: Meta<typeof Typography> = {
    title: "Design System/Typography",
    component: Typography,
    tags: ["autodocs"],
    args: {
        category: selectedCategory,
        size: "md",
        weight: "regular",
        text: "Typography Example",
    },
    argTypes: {
        category: {
            control: "select",
            options: Object.keys(categorySizeOptions),
            description: "Typography category",
            table: { category: "Properties" },
        },
        size: {
            control: "select",
            options: categorySizeOptions[selectedCategory], // 기본값
            description: "Typography size",
            table: { category: "Properties" },
        },
        weight: {
            control: "radio",
            options: fontWeightOptions,
            description: "Font weight (Regular or Bold)",
            table: { category: "Properties" },
        },
        text: {
            control: "text",
            description: "Typography sample text",
            table: { category: "Properties" },
        },
    },
    parameters: {
        docs: {
            description: {
                component: `
### 📌 Typography 시스템
- 텍스트 스타일을 **일관되게 관리**하여 개발 및 디자인에서 동일한 가이드를 유지
- Tailwind 기반으로 구현되며, **rem 단위를 사용**하여 반응형 지원

---

### 🏷 **Typography 카테고리별 설명**
| **Category** | **Description** | **Available Sizes** |
|-------------|---------------|------------------|
${Object.entries(categorySizeOptions)
                    .map(([key, sizes]) => `| **${key}** | ${categoryDescriptions[key] || "-"} | ${sizes.join(", ")} |`)
                    .join("\n")}

---

### 🔠 **Font weight 설명**
| **Weight**  | **Value** | **Usage** |
|------------|---------|------------|
| **Regular** | 400 | 기본 텍스트, 본문 (Body, Detail, Label) |
| **Bold** | 700 | 강조가 필요한 텍스트 (Title, Heading, Display) |
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
        category: selectedCategory,
        size: "md",
        weight: "bold",
        text: "Typography Example",
    },
    parameters: { layout: "centered" },
    decorators: [
        (story, context) => {
            watchEffect(() => {
                context.argTypes.size.options = categorySizeOptions[context.args.category];
            });
            return story();
        },
    ],
};

/** 📌 동적으로 `size` 옵션을 적용하는 스토리 생성 */
const createStory = (category: keyof typeof categorySizeOptions, size: string): Story => ({
    args: { category, size, weight: "regular", text: `${category} ${size}` },
    argTypes: {
        size: {
            control: "select",
            options: categorySizeOptions[category], // 카테고리에 맞는 사이즈 옵션만 제공
        },
    },
    parameters: { layout: "centered" },
});

/** Display */
export const DisplayLarge = createStory("display", "lg");
export const DisplayMedium = createStory("display", "md");
export const DisplaySmall = createStory("display", "sm");

/** Heading */
export const HeadingLarge = createStory("heading", "lg");
export const HeadingMedium = createStory("heading", "md");
export const HeadingSmall = createStory("heading", "sm");

/** Title */
export const TitleXXLarge = createStory("title", "xxl");
export const TitleXLarge = createStory("title", "xl");
export const TitleLarge = createStory("title", "lg");
export const TitleMedium = createStory("title", "md");
export const TitleSmall = createStory("title", "sm");
export const TitleXSmall = createStory("title", "xs");
