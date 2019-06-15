export interface TextColors {
  textColorHeading: string;
  textColorBody: string;
  textColorPlaceholder: string;
}

export interface ThemeColors {
  primary: string;
  background: string;
  card: string;
  currentColor(alpha: number): string;
}

export interface ITheme {
  gutters: {
    base: number;
  };
  radius: {
    input: number;
    base: number;
    card: number;
    modal: number;
    button: number;
  };
  colors: ThemeColors & TextColors;
}

export interface IThemedElement {
  theme: ITheme;
  backgroundVariant?: string;
}

export const textColorGeneratorByAlpha = (alpha: number = 1): string => {
  return `rgba(255, 255, 255, ${alpha})`;
};

export const textColors: TextColors = {
  textColorHeading: textColorGeneratorByAlpha(0.87),
  textColorBody: textColorGeneratorByAlpha(0.75),
  textColorPlaceholder: textColorGeneratorByAlpha(0.35)
};

export const colors: ThemeColors = {
  primary: '#4989FD',
  background: '#0A0E2B',
  card: '#2B2B3E',
  currentColor: textColorGeneratorByAlpha
};

export const theme: ITheme = {
  gutters: {
    base: 8
  },
  radius: {
    input: 2,
    base: 4,
    card: 8,
    modal: 8,
    button: 24
  },
  colors: {
    ...colors,
    ...textColors
  }
};

interface IGetArrayOfGuttersAsString extends IThemedElement {
  gutters?: number[];
}

export const mapVariantsFromArrayAsStringsToPx = (
  theme: any,
  gutters: number[],
  path: string[]
) => {
  let multiplier: any = theme;
  let pathItems = [...path];
  while (pathItems.length) {
    const [current, ...rest] = pathItems;
    multiplier = theme[current];
    pathItems = [...rest];
  }

  return gutters.map(el => `${el * multiplier}px`).join(' ');
};

export const getArrayOfGuttersAsString = ({
  theme,
  gutters = [0.75]
}: IGetArrayOfGuttersAsString): string => {
  return gutters.map(el => `${el * theme.gutters.base}px`).join(' ');
};

export default theme;
