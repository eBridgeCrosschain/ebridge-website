import { Button } from 'antd';
import clsx from 'clsx';
import CommonImage from '@/components/CommonImage';
import { downloadData } from '@/constants/homeData';
import styles from './styles.module.scss';
import { openWithBlank } from '@/utils/router';
import { useCallback } from 'react';

export type OtherDownloadButtonProps = {
  url: string;
};

export default function OtherDownloadButton({ url }: OtherDownloadButtonProps) {
  const notChromeInfo = downloadData.notChrome;

  const goOtherDownloadUrl = useCallback(() => {
    return openWithBlank(url);
  }, [url]);

  return (
    <Button type="primary" className={clsx([styles.otherStoreBtn, styles.storeBtn])} onClick={goOtherDownloadUrl}>
      <CommonImage
        src={notChromeInfo.iconSrc}
        className={styles.storeBtnLogo}
        style={{ width: notChromeInfo.iconWidth, height: notChromeInfo.iconHeight }}
        alt={notChromeInfo.iconAlt}
        priority
      />
    </Button>
  );
}
