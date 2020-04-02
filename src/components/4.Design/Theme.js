//반응형 스타일 구성 small = mobile, medium = 태블릿, large = 데스크탑
export const LARGE_AND_ABOVE = 'largeAndAbove';
const BREAKPOINT_NAMES = {
  LARGE: 'large',
  MEDIUM: 'medium',
  SMALL: 'small',
};

const breakpoints = {
  [BREAKPOINT_NAMES.LARGE]: 1128,
  [BREAKPOINT_NAMES.MEDIUM]: 744,
  [BREAKPOINT_NAMES.SMALL]: 327,
};

const responsive = {
  [LARGE_AND_ABOVE]: `@media (min-width: ${breakpoints[BREAKPOINT_NAMES.LARGE]}px)`,
  [BREAKPOINT_NAMES.SMALL]: `@media(max-width:${breakpoints[BREAKPOINT_NAMES.MEDIUM] - 1}px)`,
  print: '@media print',
};

// responsive :
// {largeAndAbove: "@media (min-width: 1128px)",
//  small: "@media(max-width:743px)",
//   print: "@media print"}

//style 컴포넌트 생성, 테마파일로 만들기

export default {
  color: {
    primary: '#03a9f4', // Main Color
    secondary: '#795548', //Sub Color
    white: '#FFFFFF',
    gray: ' #CCCCCC',
    default: '#999999', //기본 문자 색상
  },
  //글꼴 SIze
  size: {
    xg: 24,
    lg: 18,
    md: 14,
    sm: 12,
    xs: 10,
  },
  lineHeight: {
    xg: '60px',
    lg: '54px',
    md: '36px',
    sm: '24px',
    xs: '18px',
  },
  unit: 4, //길이, 단위

  //반응형 미디어 속성 적용
  responsive, //withStyles() 함수의 인자로 전달 될 예정;
};
