import { TopMenu } from './header';
import { ImageWrapper } from '../components/image';
import { GlobalModuleType } from './index';

export type Footer = {
  key: GlobalModuleType.Footer;
  logo: ImageWrapper;
  description?: string;
  menuList: Array<TopMenu>;
  socialMediaList: SocialMedia[];
  powerName: {
    text: string;
  };
  commonStyles?: FooterCommonStyles;
};

export type FooterCommonStyles = {
  defaultBackgroundColor?: string;
  dividingLineColor?: string;
  secondMenuDefaultFontColor?: string;
  secondMenuFontHoverColor?: string;
};

export type SocialMedia = {
  name: string;
  link: string; // jump url
  svg: ImageWrapper; // svg icon url
  activeSvg?: ImageWrapper;
  isActive?: boolean; // for ui, not in cms
};
