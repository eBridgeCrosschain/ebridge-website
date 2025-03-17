import { ModuleType } from '.';
import { ButtonComponent } from '../components/button';
import { DescriptionComponent } from '../components/description';

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
    defaultBackgroundColor?: string;
  };
}
