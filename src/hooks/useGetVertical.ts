import { useCallback } from 'react';
import useResponsive from './useResponsive';

export default function useGetVertical() {
  const { isMobile } = useResponsive();

  const getVertical = useCallback(
    ({ paddingTop, paddingBottom, mobilePaddingTop, mobilePaddingBottom }: Record<string, any>) => {
      return isMobile
        ? {
            top: mobilePaddingTop ?? Number(paddingTop || 120) / 2,
            bottom: mobilePaddingBottom ?? Number(paddingBottom || 120) / 2,
          }
        : {
            top: paddingTop ?? 120,
            bottom: paddingBottom ?? 120,
          };
    },
    [isMobile],
  );

  return {
    getVertical,
  };
}
