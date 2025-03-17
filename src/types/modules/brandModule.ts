import { ModuleType } from '.';
import { ButtonComponent } from '../components/button';
import { DescriptionComponent } from '../components/description';
import { ImageWrapper } from '../components/image';

export interface IBrandModule {
  key: ModuleType.BrandModule;
  index: number;
  title: {
    text: string;
  };
  image: ImageWrapper;
  backgroundImage?: ImageWrapper;
  type: BrandModuleType; // default value is "WhiteColor"
  descriptionList: Array<DescriptionComponent>;
  buttonList: Array<ButtonComponent>;
  commonStyles: {
    paddingTop?: string;
    paddingBottom?: string;
    mobilePaddingTop?: string;
    mobilePaddingBottom?: string;
    defaultBackgroundColor?: string;
  };
}

export enum BrandModuleType {
  Brand = 'BrandColor',
  White = 'WhiteColor',
}
