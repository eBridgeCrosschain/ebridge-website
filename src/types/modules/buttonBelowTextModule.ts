import { ModuleType } from '.';
import { ButtonComponent } from '../components/button';
import { DescriptionComponent } from '../components/description';
import { ImageWrapper } from '../components/image';

export interface IButtonBelowTextModule {
  key: ModuleType.ButtonBelowTextModule;
  index: number;
  title: {
    text: string;
  };
  descriptionList: Array<DescriptionComponent>;
  buttonList: Array<ButtonComponent>;
  commonStyles: {
    paddingTop?: string;
    paddingBottom?: string;
    mobilePaddingTop?: string;
    mobilePaddingBottom?: string;
    backgroundImage?: ImageWrapper;
    defaultBackgroundColor?: string;
    titleColor?: string;
    subTitleColor?: string;
    subTitleMaxWidth?: string;
    subTitleTextAlign?: string;
  };
}
