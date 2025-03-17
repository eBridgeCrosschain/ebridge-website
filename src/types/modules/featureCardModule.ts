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
    paddingTop?: string;
    paddingBottom?: string;
    mobilePaddingTop?: string;
    mobilePaddingBottom?: string;
    defaultBackgroundColor?: string;
    defaultCardBackgroundColor?: string;
  };
}
