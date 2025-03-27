import { Button } from 'antd';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { useCallback } from 'react';
import { openWithBlank } from '@/utils/router';

export type GoDownloadPageButtonProps = {
  downloadPageBtnClassName?: string;
  url: string;
};

export default function GoDownloadPageButton({ downloadPageBtnClassName, url }: GoDownloadPageButtonProps) {
  const goDownloadPageUrl = useCallback(() => {
    return openWithBlank(url);
  }, [url]);

  return (
    <Button
      type="dashed"
      className={clsx([styles.goDownloadPageBtn, downloadPageBtnClassName])}
      onClick={goDownloadPageUrl}>
      Download for Others
    </Button>
  );
}
