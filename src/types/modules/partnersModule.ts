import { ModuleType } from '.';
import { ImageWrapper } from '../components/image';

export interface IPartnersModule {
  key: ModuleType.PartnersModule;
  index: number;
  title?: {
    text: string;
  };
  list?: Array<IPartnerItem>;
  commonStyles: {
    paddingTop?: string;
    paddingBottom?: string;
    mobilePaddingTop?: string;
    mobilePaddingBottom?: string;
    defaultBackgroundColor?: string;
    defaultCardBackgroundColor?: string;
  };
}

export interface IPartnerItem {
  index: number;
  logoImage: ImageWrapper;
  url?: string;
}
