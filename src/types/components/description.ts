import { ImageWrapper } from './image';

export type DescriptionComponent = {
  index: number;
  text?: string;
  subText?: string;
  icon?: ImageWrapper;
  children?: Array<DescriptionComponent>;
};
