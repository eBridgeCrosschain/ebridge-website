import { ModuleType } from '.';
import { CommonButtonComponent } from '../components/button';
import { DescriptionComponent } from '../components/description';
import { ImageWrapper } from '../components/image';

export interface IGraphicTextModule {
  key: ModuleType.GraphicTextModule;
  index: number;
  image: ImageWrapper;
  title?: {
    text: string;
    subText?: string;
  };
  subTitle?: {
    text: string;
  };
  descriptionList: Array<DescriptionComponent>;
  buttonList: Array<CommonButtonComponent>;
  type: GraphicTextModuleType; // default value is "LeftPicture_RightText"
  commonStyles: {
    paddingTop?: string;
    paddingBottom?: string;
    mobilePaddingTop?: string;
    mobilePaddingBottom?: string;
    defaultBackgroundColor?: string;
    fontColor?: string;
  };
}

export enum GraphicTextModuleType {
  LeftPicture_RightText = 'LeftPicture',
  LeftText_RightPicture = 'RightPicture',
  TopPicture_BottomText = 'TopPicture',
}
