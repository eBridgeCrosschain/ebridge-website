import { Button } from 'antd';
import CommonImage from '@/components/CommonImage';
import { downloadData } from '@/constants/homeData';
import { useCallback } from 'react';
import { openWithBlank } from '@/utils/router';
import styles from './styles.module.scss';

export default function WebChromeDownloadButton({ storeUrl }: { storeUrl: string }) {
  const chromeInfo = downloadData.chrome;

  const goChromeStore = useCallback(() => {
    openWithBlank(storeUrl);
  }, [storeUrl]);

  return (
    <Button type="primary" className={styles.storeBtn} onClick={goChromeStore}>
      <CommonImage
        src={chromeInfo.iconSrc}
        className={styles.storeBtnLogo}
        style={{ width: chromeInfo.iconWidth, height: chromeInfo.iconHeight }}
        alt={chromeInfo.iconAlt}
        priority
      />
    </Button>
  );
}
