import 'styled-components';

import theme from '../app/styles/theme';

declare module 'styled-components' {
  type ThemeType = typeof theme;

  export interface DefaultTheme extends ThemeType {}
}
