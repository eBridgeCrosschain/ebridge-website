import { MetaType, ThemeColor, FunctionalColor, NeutralColor } from './color';

export enum GlobalModuleType {
  Header = 'Header',
  Footer = 'Footer',
}

export type GlobalConfig = {
  meta: MetaType;
  themeColor: ThemeColor;
  functionalColor: FunctionalColor;
  neutralColor: NeutralColor;
};
