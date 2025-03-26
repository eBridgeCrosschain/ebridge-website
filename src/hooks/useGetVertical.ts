import { useCallback } from 'react';
import useResponsive from './useResponsive';

interface IGetVertical {
  paddingTop?: string;
  paddingBottom?: string;
  mobilePaddingTop?: string;
  mobilePaddingBottom?: string;
  defaultPaddingTop?: number;
  defaultPaddingBottom?: number;
}

export default function useGetVertical() {
  const { isMobile } = useResponsive();

  const getVertical = useCallback(
    ({
      paddingTop,
      paddingBottom,
      mobilePaddingTop,
      mobilePaddingBottom,
      defaultPaddingTop = 120,
      defaultPaddingBottom = 120,
    }: IGetVertical) => {
      return isMobile
        ? {
            top: mobilePaddingTop ?? Number(paddingTop || defaultPaddingTop) / 2,
            bottom: mobilePaddingBottom ?? Number(paddingBottom || defaultPaddingBottom) / 2,
          }
        : {
            top: paddingTop ?? defaultPaddingTop,
            bottom: paddingBottom ?? defaultPaddingBottom,
          };
    },
    [isMobile],
  );

  return {
    getVertical,
  };
}
