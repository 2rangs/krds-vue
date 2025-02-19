<script setup lang="ts">
interface ColorShade {
  level: string;
  value: string;
}

interface Color {
  name: string;
  info? : string,
  shades: ColorShade[];
}

const colors: Color[] = [
  {
    name: "Primary",
    info: "Primary 색상은 시스템의 상징성을 나타내며 인터페이스에서 가장 주목받는 요소로 주요 액션이나 중요한 정보를 강조하는 데 사용한다.",
    shades: [
      { level: "0", value: "var(--color-primary-0)" },
      { level: "5", value: "var(--color-primary-5)" },
      { level: "10", value: "var(--color-primary-10)" },
      { level: "20", value: "var(--color-primary-20)" },
      { level: "30", value: "var(--color-primary-30)" },
      { level: "40", value: "var(--color-primary-40)" },
      { level: "50", value: "var(--color-primary-50)" },
      { level: "60", value: "var(--color-primary-60)" },
      { level: "70", value: "var(--color-primary-70)" },
      { level: "80", value: "var(--color-primary-80)" },
      { level: "90", value: "var(--color-primary-90)" },
      { level: "100", value: "var(--color-primary-100)" },
    ],
  },  {
    name: "Secondary",
        info: "Secondary 색상은 primary 색상과 보조를 맞추며, 인터페이스에서 전체적인 보조적인 역할을 한다. 덜 중요한 액션을 표시하거나 구분을 위한 배경으로 사용한다.",
    shades: [
      { level: "0", value: "var(--color-secondary-0)" },
      { level: "5", value: "var(--color-secondary-5)" },
      { level: "10", value: "var(--color-secondary-10)" },
      { level: "20", value: "var(--color-secondary-20)" },
      { level: "30", value: "var(--color-secondary-30)" },
      { level: "40", value: "var(--color-secondary-40)" },
      { level: "50", value: "var(--color-secondary-50)" },
      { level: "60", value: "var(--color-secondary-60)" },
      { level: "70", value: "var(--color-secondary-70)" },
      { level: "80", value: "var(--color-secondary-80)" },
      { level: "90", value: "var(--color-secondary-90)" },
      { level: "100", value: "var(--color-secondary-100)" },
    ],
  },   {
    name: "Dark-Secondary",
    info: "Dark Secondary 색상은 Dark 모드에서 primary 색상과 보조를 맞추며, 인터페이스에서 전체적인 보조적인 역할을 한다. 덜 중요한 액션을 표시하거나 구분을 위한 배경으로 사용한다.",
    shades: [
      { level: "0", value: "var(--color-dark-secondary-0)" },
      { level: "5", value: "var(--color-dark-secondary-5)" },
      { level: "10", value: "var(--color-dark-secondary-10)" },
      { level: "20", value: "var(--color-dark-secondary-20)" },
      { level: "30", value: "var(--color-dark-secondary-30)" },
      { level: "40", value: "var(--color-dark-secondary-40)" },
      { level: "50", value: "var(--color-dark-secondary-50)" },
      { level: "60", value: "var(--color-dark-secondary-60)" },
      { level: "70", value: "var(--color-dark-secondary-70)" },
      { level: "80", value: "var(--color-dark-secondary-80)" },
      { level: "90", value: "var(--color-dark-secondary-90)" },
      { level: "100", value: "var(--color-dark-secondary-100)" },
    ],
  },  {
    name: "Gray",
        info: "Gray 색상은 주로 배경, 텍스트, 구분 선에 사용되며, 시각적 집중을 방해하지 않고 콘텐츠에 초점을 맞추도록 도와주는 중립적인 색상이다.\n" +
            "\n" +
            "표준형 스타일의 그레이 색상은 주요 색상과 선명한 모드에서의 조화를 고려해 블루 그레이 계열을 사용한다.",
    shades: [
      { level: "0", value: "var(--color-gray-0)" },
      { level: "5", value: "var(--color-gray-5)" },
      { level: "10", value: "var(--color-gray-10)" },
      { level: "20", value: "var(--color-gray-20)" },
      { level: "30", value: "var(--color-gray-30)" },
      { level: "40", value: "var(--color-gray-40)" },
      { level: "50", value: "var(--color-gray-50)" },
      { level: "60", value: "var(--color-gray-60)" },
      { level: "70", value: "var(--color-gray-70)" },
      { level: "80", value: "var(--color-gray-80)" },
      { level: "90", value: "var(--color-gray-90)" },
      { level: "100", value: "var(--color-gray-100)" },
    ],
  }, {
    name: "Point",
        info: "용자가 주목해야 하는 특정 상태나 이벤트 또는 알림 요소에만 강조(accent color)용으로 5% 이하 비율로 사용한다. 정보의 우선순위를 시각적으로 부각하며, 제한적인 사용으로 과부하를 방지한다.",
    shades: [
      { level: "0", value: "var(--color-point-0)" },
      { level: "5", value: "var(--color-point-5)" },
      { level: "10", value: "var(--color-point-10)" },
      { level: "20", value: "var(--color-point-20)" },
      { level: "30", value: "var(--color-point-30)" },
      { level: "40", value: "var(--color-point-40)" },
      { level: "50", value: "var(--color-point-50)" },
      { level: "60", value: "var(--color-point-60)" },
      { level: "70", value: "var(--color-point-70)" },
      { level: "80", value: "var(--color-point-80)" },
      { level: "90", value: "var(--color-point-90)" },
      { level: "100", value: "var(--color-point-100)" },
    ],
  },{
    name: "Danger",
        info: "‘Danger’ 색상은 오류나 위험을 나타내며, 빨간색 계열을 사용하여 사용자에게 즉각적인 주의를 전달한다.",
    shades: [
      { level: "0", value: "var(--color-danger-0)" },
      { level: "5", value: "var(--color-danger-5)" },
      { level: "10", value: "var(--color-danger-10)" },
      { level: "20", value: "var(--color-danger-20)" },
      { level: "30", value: "var(--color-danger-30)" },
      { level: "40", value: "var(--color-danger-40)" },
      { level: "50", value: "var(--color-danger-50)" },
      { level: "60", value: "var(--color-danger-60)" },
      { level: "70", value: "var(--color-danger-70)" },
      { level: "80", value: "var(--color-danger-80)" },
      { level: "90", value: "var(--color-danger-90)" },
      { level: "100", value: "var(--color-danger-100)" }
    ],
  },
  {
    name: "Warning",
        info: "‘Warning’ 색상은 잠재적 위험이나 주의가 필요한 상황을 나타내며, 눈에 잘 띄는 노란색 계열을 사용해 사용자에게 경고의 의미를 전달한다.",
    shades: [
      { level: "0", value: "var(--color-warning-0)" },
      { level: "5", value: "var(--color-warning-5)" },
      { level: "10", value: "var(--color-warning-10)" },
      { level: "20", value: "var(--color-warning-20)" },
      { level: "30", value: "var(--color-warning-30)" },
      { level: "40", value: "var(--color-warning-40)" },
      { level: "50", value: "var(--color-warning-50)" },
      { level: "60", value: "var(--color-warning-60)" },
      { level: "70", value: "var(--color-warning-70)" },
      { level: "80", value: "var(--color-warning-80)" },
      { level: "90", value: "var(--color-warning-90)" },
      { level: "100", value: "var(--color-warning-100)" }
    ],
  },
  {
    name: "Success",
        info: "‘Success’ 색상은 성공을 의미하며, 작업 완료 또는 긍정적 결과를 표시하는 데 사용된다. 일반적으로 녹색 계열을 사용하여 안정감과 긍정적인 피드백을 제공한다.",
    shades: [
      { level: "0", value: "var(--color-success-0)" },
      { level: "5", value: "var(--color-success-5)" },
      { level: "10", value: "var(--color-success-10)" },
      { level: "20", value: "var(--color-success-20)" },
      { level: "30", value: "var(--color-success-30)" },
      { level: "40", value: "var(--color-success-40)" },
      { level: "50", value: "var(--color-success-50)" },
      { level: "60", value: "var(--color-success-60)" },
      { level: "70", value: "var(--color-success-70)" },
      { level: "80", value: "var(--color-success-80)" },
      { level: "90", value: "var(--color-success-90)" },
      { level: "100", value: "var(--color-success-100)" }
    ],
  },
  {
    name: "Info",
        info: "‘Information’ 색상은 참고 정보나 안내 메시지를 전달할 때 사용하며, 파란색 계열로 사용자에게 추가 정보를 제공한다.",
    shades: [
      { level: "0", value: "var(--color-info-0)" },
      { level: "5", value: "var(--color-info-5)" },
      { level: "10", value: "var(--color-info-10)" },
      { level: "20", value: "var(--color-info-20)" },
      { level: "30", value: "var(--color-info-30)" },
      { level: "40", value: "var(--color-info-40)" },
      { level: "50", value: "var(--color-info-50)" },
      { level: "60", value: "var(--color-info-60)" },
      { level: "70", value: "var(--color-info-70)" },
      { level: "80", value: "var(--color-info-80)" },
      { level: "90", value: "var(--color-info-90)" },
      { level: "100", value: "var(--color-info-100)" }
    ],
  },
  {
    name: "Navy",
    shades: [
      { level: "0", value: "var(--color-navy-0)" },
      { level: "5", value: "var(--color-navy-5)" },
      { level: "10", value: "var(--color-navy-10)" },
      { level: "20", value: "var(--color-navy-20)" },
      { level: "30", value: "var(--color-navy-30)" },
      { level: "40", value: "var(--color-navy-40)" },
      { level: "50", value: "var(--color-navy-50)" },
      { level: "60", value: "var(--color-navy-60)" },
      { level: "70", value: "var(--color-navy-70)" },
      { level: "80", value: "var(--color-navy-80)" },
      { level: "90", value: "var(--color-navy-90)" },
      { level: "100", value: "var(--color-navy-100)" }
    ],
  },
  {
    name: "SkyBlue",
    shades: [
      { level: "0", value: "var(--color-skyblue-0)" },
      { level: "5", value: "var(--color-skyblue-5)" },
      { level: "10", value: "var(--color-skyblue-10)" },
      { level: "20", value: "var(--color-skyblue-20)" },
      { level: "30", value: "var(--color-skyblue-30)" },
      { level: "40", value: "var(--color-skyblue-40)" },
      { level: "50", value: "var(--color-skyblue-50)" },
      { level: "60", value: "var(--color-skyblue-60)" },
      { level: "70", value: "var(--color-skyblue-70)" },
      { level: "80", value: "var(--color-skyblue-80)" },
      { level: "90", value: "var(--color-skyblue-90)" },
      { level: "100", value: "var(--color-skyblue-100)" }
    ],
  },
  {
    name: "Aqua",
    shades: [
      { level: "0", value: "var(--color-aqua-0)" },
      { level: "5", value: "var(--color-aqua-5)" },
      { level: "10", value: "var(--color-aqua-10)" },
      { level: "20", value: "var(--color-aqua-20)" },
      { level: "30", value: "var(--color-aqua-30)" },
      { level: "40", value: "var(--color-aqua-40)" },
      { level: "50", value: "var(--color-aqua-50)" },
      { level: "60", value: "var(--color-aqua-60)" },
      { level: "70", value: "var(--color-aqua-70)" },
      { level: "80", value: "var(--color-aqua-80)" },
      { level: "90", value: "var(--color-aqua-90)" },
      { level: "100", value: "var(--color-aqua-100)" }
    ],
  },
  {
    name: "Teal",
    shades: [
      { level: "0", value: "var(--color-teal-0)" },
      { level: "5", value: "var(--color-teal-5)" },
      { level: "10", value: "var(--color-teal-10)" },
      { level: "20", value: "var(--color-teal-20)" },
      { level: "30", value: "var(--color-teal-30)" },
      { level: "40", value: "var(--color-teal-40)" },
      { level: "50", value: "var(--color-teal-50)" },
      { level: "60", value: "var(--color-teal-60)" },
      { level: "70", value: "var(--color-teal-70)" },
      { level: "80", value: "var(--color-teal-80)" },
      { level: "90", value: "var(--color-teal-90)" },
      { level: "100", value: "var(--color-teal-100)" }
    ],
  },
  {
    name: "Green",
    shades: [
      { level: "0", value: "var(--color-green-0)" },
      { level: "5", value: "var(--color-green-5)" },
      { level: "10", value: "var(--color-green-10)" },
      { level: "20", value: "var(--color-green-20)" },
      { level: "30", value: "var(--color-green-30)" },
      { level: "40", value: "var(--color-green-40)" },
      { level: "50", value: "var(--color-green-50)" },
      { level: "60", value: "var(--color-green-60)" },
      { level: "70", value: "var(--color-green-70)" },
      { level: "80", value: "var(--color-green-80)" },
      { level: "90", value: "var(--color-green-90)" },
      { level: "100", value: "var(--color-green-100)" }
    ],
  },
  {
    name: "LimeGreen",
    shades: [
      { level: "0", value: "var(--color-limegreen-0)" },
      { level: "5", value: "var(--color-limegreen-5)" },
      { level: "10", value: "var(--color-limegreen-10)" },
      { level: "20", value: "var(--color-limegreen-20)" },
      { level: "30", value: "var(--color-limegreen-30)" },
      { level: "40", value: "var(--color-limegreen-40)" },
      { level: "50", value: "var(--color-limegreen-50)" },
      { level: "60", value: "var(--color-limegreen-60)" },
      { level: "70", value: "var(--color-limegreen-70)" },
      { level: "80", value: "var(--color-limegreen-80)" },
      { level: "90", value: "var(--color-limegreen-90)" },
      { level: "100", value: "var(--color-limegreen-100)" }
    ],
  },{
    name: "Lime",
    shades: [
      { level: "0", value: "var(--color-lime-0)" },
      { level: "5", value: "var(--color-lime-5)" },
      { level: "10", value: "var(--color-lime-10)" },
      { level: "20", value: "var(--color-lime-20)" },
      { level: "30", value: "var(--color-lime-30)" },
      { level: "40", value: "var(--color-lime-40)" },
      { level: "50", value: "var(--color-lime-50)" },
      { level: "60", value: "var(--color-lime-60)" },
      { level: "70", value: "var(--color-lime-70)" },
      { level: "80", value: "var(--color-lime-80)" },
      { level: "90", value: "var(--color-lime-90)" },
      { level: "100", value: "var(--color-lime-100)" }
    ],
  },
  {
    name: "Olive",
    shades: [
      { level: "0", value: "var(--color-olive-0)" },
      { level: "5", value: "var(--color-olive-5)" },
      { level: "10", value: "var(--color-olive-10)" },
      { level: "20", value: "var(--color-olive-20)" },
      { level: "30", value: "var(--color-olive-30)" },
      { level: "40", value: "var(--color-olive-40)" },
      { level: "50", value: "var(--color-olive-50)" },
      { level: "60", value: "var(--color-olive-60)" },
      { level: "70", value: "var(--color-olive-70)" },
      { level: "80", value: "var(--color-olive-80)" },
      { level: "90", value: "var(--color-olive-90)" },
      { level: "100", value: "var(--color-olive-100)" }
    ],
  },
  {
    name: "Yellow",
    shades: [
      { level: "0", value: "var(--color-yellow-0)" },
      { level: "5", value: "var(--color-yellow-5)" },
      { level: "10", value: "var(--color-yellow-10)" },
      { level: "20", value: "var(--color-yellow-20)" },
      { level: "30", value: "var(--color-yellow-30)" },
      { level: "40", value: "var(--color-yellow-40)" },
      { level: "50", value: "var(--color-yellow-50)" },
      { level: "60", value: "var(--color-yellow-60)" },
      { level: "70", value: "var(--color-yellow-70)" },
      { level: "80", value: "var(--color-yellow-80)" },
      { level: "90", value: "var(--color-yellow-90)" },
      { level: "100", value: "var(--color-yellow-100)" }
    ],
  },
  {
    name: "Gold",
    shades: [
      { level: "0", value: "var(--color-gold-0)" },
      { level: "5", value: "var(--color-gold-5)" },
      { level: "10", value: "var(--color-gold-10)" },
      { level: "20", value: "var(--color-gold-20)" },
      { level: "30", value: "var(--color-gold-30)" },
      { level: "40", value: "var(--color-gold-40)" },
      { level: "50", value: "var(--color-gold-50)" },
      { level: "60", value: "var(--color-gold-60)" },
      { level: "70", value: "var(--color-gold-70)" },
      { level: "80", value: "var(--color-gold-80)" },
      { level: "90", value: "var(--color-gold-90)" },
      { level: "100", value: "var(--color-gold-100)" }
    ],
  },
  {
    name: "SaddleBrown",
    shades: [
      { level: "0", value: "var(--color-saddlebrown-0)" },
      { level: "5", value: "var(--color-saddlebrown-5)" },
      { level: "10", value: "var(--color-saddlebrown-10)" },
      { level: "20", value: "var(--color-saddlebrown-20)" },
      { level: "30", value: "var(--color-saddlebrown-30)" },
      { level: "40", value: "var(--color-saddlebrown-40)" },
      { level: "50", value: "var(--color-saddlebrown-50)" },
      { level: "60", value: "var(--color-saddlebrown-60)" },
      { level: "70", value: "var(--color-saddlebrown-70)" },
      { level: "80", value: "var(--color-saddlebrown-80)" },
      { level: "90", value: "var(--color-saddlebrown-90)" },
      { level: "100", value: "var(--color-saddlebrown-100)" }
    ],
  },
  {
    name: "Brown",
    shades: [
      { level: "0", value: "var(--color-brown-0)" },
      { level: "5", value: "var(--color-brown-5)" },
      { level: "10", value: "var(--color-brown-10)" },
      { level: "20", value: "var(--color-brown-20)" },
      { level: "30", value: "var(--color-brown-30)" },
      { level: "40", value: "var(--color-brown-40)" },
      { level: "50", value: "var(--color-brown-50)" },
      { level: "60", value: "var(--color-brown-60)" },
      { level: "70", value: "var(--color-brown-70)" },
      { level: "80", value: "var(--color-brown-80)" },
      { level: "90", value: "var(--color-brown-90)" },
      { level: "100", value: "var(--color-brown-100)" }
    ],
  },
  {
    name: "DarkRed",
    shades: [
      { level: "0", value: "var(--color-darkred-0)" },
      { level: "5", value: "var(--color-darkred-5)" },
      { level: "10", value: "var(--color-darkred-10)" },
      { level: "20", value: "var(--color-darkred-20)" },
      { level: "30", value: "var(--color-darkred-30)" },
      { level: "40", value: "var(--color-darkred-40)" },
      { level: "50", value: "var(--color-darkred-50)" },
      { level: "60", value: "var(--color-darkred-60)" },
      { level: "70", value: "var(--color-darkred-70)" },
      { level: "80", value: "var(--color-darkred-80)" },
      { level: "90", value: "var(--color-darkred-90)" },
      { level: "100", value: "var(--color-darkred-100)" }
    ],
  },
  {
    name: "Red",
    shades: [
      { level: "0", value: "var(--color-red-0)" },
      { level: "5", value: "var(--color-red-5)" },
      { level: "10", value: "var(--color-red-10)" },
      { level: "20", value: "var(--color-red-20)" },
      { level: "30", value: "var(--color-red-30)" },
      { level: "40", value: "var(--color-red-40)" },
      { level: "50", value: "var(--color-red-50)" },
      { level: "60", value: "var(--color-red-60)" },
      { level: "70", value: "var(--color-red-70)" },
      { level: "80", value: "var(--color-red-80)" },
      { level: "90", value: "var(--color-red-90)" },
      { level: "100", value: "var(--color-red-100)" }
    ],
  },
  {
    name: "Orange",
    shades: [
      { level: "0", value: "var(--color-orange-0)" },
      { level: "5", value: "var(--color-orange-5)" },
      { level: "10", value: "var(--color-orange-10)" },
      { level: "20", value: "var(--color-orange-20)" },
      { level: "30", value: "var(--color-orange-30)" },
      { level: "40", value: "var(--color-orange-40)" },
      { level: "50", value: "var(--color-orange-50)" },
      { level: "60", value: "var(--color-orange-60)" },
      { level: "70", value: "var(--color-orange-70)" },
      { level: "80", value: "var(--color-orange-80)" },
      { level: "90", value: "var(--color-orange-90)" },
      { level: "100", value: "var(--color-orange-100)" }
    ],
  },
  {
    name: "Coral",
    shades: [
      { level: "0", value: "var(--color-coral-0)" },
      { level: "5", value: "var(--color-coral-5)" },
      { level: "10", value: "var(--color-coral-10)" },
      { level: "20", value: "var(--color-coral-20)" },
      { level: "30", value: "var(--color-coral-30)" },
      { level: "40", value: "var(--color-coral-40)" },
      { level: "50", value: "var(--color-coral-50)" },
      { level: "60", value: "var(--color-coral-60)" },
      { level: "70", value: "var(--color-coral-70)" },
      { level: "80", value: "var(--color-coral-80)" },
      { level: "90", value: "var(--color-coral-90)" },
      { level: "100", value: "var(--color-coral-100)" }
    ],
  },
  {
    name: "Salmon",
    shades: [
      { level: "0", value: "var(--color-salmon-0)" },
      { level: "5", value: "var(--color-salmon-5)" },
      { level: "10", value: "var(--color-salmon-10)" },
      { level: "20", value: "var(--color-salmon-20)" },
      { level: "30", value: "var(--color-salmon-30)" },
      { level: "40", value: "var(--color-salmon-40)" },
      { level: "50", value: "var(--color-salmon-50)" },
      { level: "60", value: "var(--color-salmon-60)" },
      { level: "70", value: "var(--color-salmon-70)" },
      { level: "80", value: "var(--color-salmon-80)" },
      { level: "90", value: "var(--color-salmon-90)" },
      { level: "100", value: "var(--color-salmon-100)" }
    ],
  },
  {
    name: "HotPink",
    shades: [
      { level: "0", value: "var(--color-hotpink-0)" },
      { level: "5", value: "var(--color-hotpink-5)" },
      { level: "10", value: "var(--color-hotpink-10)" },
      { level: "20", value: "var(--color-hotpink-20)" },
      { level: "30", value: "var(--color-hotpink-30)" },
      { level: "40", value: "var(--color-hotpink-40)" },
      { level: "50", value: "var(--color-hotpink-50)" },
      { level: "60", value: "var(--color-hotpink-60)" },
      { level: "70", value: "var(--color-hotpink-70)" },
      { level: "80", value: "var(--color-hotpink-80)" },
      { level: "90", value: "var(--color-hotpink-90)" },
      { level: "100", value: "var(--color-hotpink-100)" },
    ],
  },
  {
    name: "Pink",
    shades: [
      { level: "0", value: "var(--color-pink-0)" },
      { level: "5", value: "var(--color-pink-5)" },
      { level: "10", value: "var(--color-pink-10)" },
      { level: "20", value: "var(--color-pink-20)" },
      { level: "30", value: "var(--color-pink-30)" },
      { level: "40", value: "var(--color-pink-40)" },
      { level: "50", value: "var(--color-pink-50)" },
      { level: "60", value: "var(--color-pink-60)" },
      { level: "70", value: "var(--color-pink-70)" },
      { level: "80", value: "var(--color-pink-80)" },
      { level: "90", value: "var(--color-pink-90)" },
      { level: "100", value: "var(--color-pink-100)" }
    ],
  },
  {
    name: "Fuchsia",
    shades: [
      { level: "0", value: "var(--color-fuchsia-0)" },
      { level: "5", value: "var(--color-fuchsia-5)" },
      { level: "10", value: "var(--color-fuchsia-10)" },
      { level: "20", value: "var(--color-fuchsia-20)" },
      { level: "30", value: "var(--color-fuchsia-30)" },
      { level: "40", value: "var(--color-fuchsia-40)" },
      { level: "50", value: "var(--color-fuchsia-50)" },
      { level: "60", value: "var(--color-fuchsia-60)" },
      { level: "70", value: "var(--color-fuchsia-70)" },
      { level: "80", value: "var(--color-fuchsia-80)" },
      { level: "90", value: "var(--color-fuchsia-90)" },
      { level: "100", value: "var(--color-fuchsia-100)" }
    ],
  },
  {
    name: "Purple",
    shades: [
      { level: "0", value: "var(--color-purple-0)" },
      { level: "5", value: "var(--color-purple-5)" },
      { level: "10", value: "var(--color-purple-10)" },
      { level: "20", value: "var(--color-purple-20)" },
      { level: "30", value: "var(--color-purple-30)" },
      { level: "40", value: "var(--color-purple-40)" },
      { level: "50", value: "var(--color-purple-50)" },
      { level: "60", value: "var(--color-purple-60)" },
      { level: "70", value: "var(--color-purple-70)" },
      { level: "80", value: "var(--color-purple-80)" },
      { level: "90", value: "var(--color-purple-90)" },
      { level: "100", value: "var(--color-purple-100)" }
    ],
  },
  {
    name: "BlueViolet",
    shades: [
      { level: "0", value: "var(--color-blueviolet-0)" },
      { level: "5", value: "var(--color-blueviolet-5)" },
      { level: "10", value: "var(--color-blueviolet-10)" },
      { level: "20", value: "var(--color-blueviolet-20)" },
      { level: "30", value: "var(--color-blueviolet-30)" },
      { level: "40", value: "var(--color-blueviolet-40)" },
      { level: "50", value: "var(--color-blueviolet-50)" },
      { level: "60", value: "var(--color-blueviolet-60)" },
      { level: "70", value: "var(--color-blueviolet-70)" },
      { level: "80", value: "var(--color-blueviolet-80)" },
      { level: "90", value: "var(--color-blueviolet-90)" },
      { level: "100", value: "var(--color-blueviolet-100)" },
    ],
  },
  // 추가 색상 정의
];

/**
 * CSS 변수 값을 가져와서 HEX 값으로 변환
 * @param cssVar
 * @returns {string}
 */
const getComputedStyleValue = (cssVar: string): string => {
  const computedStyle = getComputedStyle(document.documentElement);
  return computedStyle.getPropertyValue(cssVar.trim()).trim();
}

/**
 * 배경색(hex)을 기반으로 텍스트 색상을 결정 (검은색 또는 흰색)
 * @param hex
 * @returns 'black' or 'white'
 */
const getContrastColor = (hex: string): string => {
  // HEX 값을 RGB로 변환
  const rgb = hex
      .replace("#", "")
      .match(/.{1,2}/g)
      ?.map((value) => parseInt(value, 16));

  if (!rgb) return "black"; // 기본값
  const [r, g, b] = rgb;

  // W3C 권장 명도 계산 공식
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // 명도 값이 0.5보다 크면 어두운 텍스트를 사용, 작으면 밝은 텍스트를 사용
  return luminance > 0.6 ? "black" : "white";
}

/**
 * 값을 전달받아서 사용자의 클립보드에 덮어쓰기
 * @param value
 * @returns void
 */
const copyColorCode = (value : string): void => {
  navigator.clipboard.writeText(value)
}


</script>

<template>
  <div class="flex justify-center ">
    <div class="max-w-4xl w-full space-y-8 p-4">
      <p class="text-3xl font-bold">
        Color Palette
      </p>
      <div v-for="color in colors" :key="color.name" class="space-y-3 p-4">
        <!-- 색상 이름 섹션 -->
        <div class="flex items-center space-x-3 ">
          <div
              class="w-5 h-5 rounded-full"
              :style="{ backgroundColor: `var(--color-${color.name.toLowerCase()}-50)` }"
          ></div>
          <p class="text-xl font-bold dark:text-white">{{ color.name }}</p>
        </div>
        <p v-if="color.info" class="text-sm dark:text-white">{{ color.info }}</p>

        <!-- 색상 팔레트 -->
        <div class="flex flex-wrap gap-2">
          <div
              v-for="shade in color.shades"
              :key="shade.level"
              class="h-14 w-14 flex flex-col items-center justify-center rounded-md text-center shadow-sm border border-gray-20 cursor-pointer transition-transform transform hover:scale-110 relative"
              :style="{
              backgroundColor: `var(--color-${color.name.toLowerCase()}-${shade.level})`,
              color: getContrastColor(getComputedStyleValue(`--color-${color.name.toLowerCase()}-${shade.level}`))
            }"
              :title="`${color.name}-${shade.level}: ${getComputedStyleValue(`--color-${color.name.toLowerCase()}-${shade.level}`)}`"
              @click="copyColorCode(getComputedStyleValue(`--color-${color.name.toLowerCase()}-${shade.level}`))"
          >
            <!-- 색상 단계 -->
            <p class="text-xs font-semibold">{{ shade.level }}</p>
            <!-- 색상 코드 -->
            <p class="text-[10px] mt-1">
              {{ getComputedStyleValue(`--color-${color.name.toLowerCase()}-${shade.level}`) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
