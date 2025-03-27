import { ROUTER } from '@/constants/enum';
import router from 'next/router';

interface IUseGoPageOrRefreshParams {
  pathnameList: string[];
  go: string;
  callback?: () => void;
}

export function useGoPageOrRefresh(props: IUseGoPageOrRefreshParams): void {
  // on th same page, refresh. Or jump to this page.
  if (props.pathnameList.includes(router.pathname)) {
    props?.callback?.();
    router.reload();
  } else {
    router.push(props.go);
  }
}

export function useGoHome(): void {
  useGoPageOrRefresh({ pathnameList: [ROUTER.DEFAULT], go: ROUTER.DEFAULT });
}
