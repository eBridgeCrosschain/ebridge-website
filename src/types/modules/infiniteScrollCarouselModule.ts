import { ModuleType } from '.';
import { ImageWrapper } from '../components/image';

export interface IInfiniteScrollCarouselItem {
  index: number;
  name: string;
  logo: ImageWrapper;
}

export interface IInfiniteScrollCarouselModule {
  key: ModuleType.InfiniteScrollCarouselModule;
  index: number;
  title?: {
    text: string;
  };
  carouselList: Array<IInfiniteScrollCarouselItem>;
  commonStyles: {
    paddingTop?: string;
    paddingBottom?: string;
    mobilePaddingTop?: string;
    mobilePaddingBottom?: string;
    defaultBackgroundColor?: string;
  };
}
