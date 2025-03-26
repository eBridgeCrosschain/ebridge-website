import { ModuleType } from '.';
import { ImageWrapper } from '../components/image';
export interface IFeatureCardItem {
  index: number;
  iconNormal: ImageWrapper;
  iconHover: ImageWrapper;
  title: string;
  content: string[];
}

export interface IFeatureCardModule {
  key: ModuleType.FeatureCardModule;
  index: number;
  title?: {
    text: string;
  };
  subTitle?: {
    text: string;
  };
  featureList: IFeatureCardItem[];
  commonStyles?: {
    hoverEffect: boolean;
    paddingTop?: string;
    paddingBottom?: string;
    mobilePaddingTop?: string;
    mobilePaddingBottom?: string;
    cardPaddingTop?: string;
    cardPaddingBottom?: string;
    mobileCardPaddingTop?: string;
    mobileCardPaddingBottom?: string;
    defaultBackgroundColor?: string;
    defaultCardBackgroundColor?: string;
  };
}
