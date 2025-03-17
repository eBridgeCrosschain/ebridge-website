import { ModuleType } from '.';
import { DescriptionComponent } from '../components/description';

export interface ICardListModule {
  key: ModuleType.CardListModule;
  index: number;
  title?: {
    text: string;
  };
  subTitle?: {
    text: string;
  };
  dataArray?: Array<DescriptionComponent>;
  commonStyles: {
    paddingTop?: string;
    paddingBottom?: string;
    mobilePaddingTop?: string;
    mobilePaddingBottom?: string;
    defaultBackgroundColor?: string;
    defaultCardBackgroundColor?: string;
    defaultImgContainerBackgroundColor?: string;
  };
}
