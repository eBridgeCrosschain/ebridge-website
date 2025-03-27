import { Button } from 'antd';
import CommonImage from '@/components/CommonImage';
import { downloadData } from '@/constants/homeData';
import { useCallback } from 'react';
import { openWithBlank } from '@/utils/router';
import styles from './styles.module.scss';

export default function IOSDownloadButton({ storeUrl }: { storeUrl: string }) {
  const IOSInfo = downloadData.ios;

  const goAppleStore = useCallback(() => {
    openWithBlank(storeUrl);
  }, [storeUrl]);

  return (
    <Button type="primary" className={styles.storeBtn} onClick={goAppleStore}>
      <CommonImage
        src={IOSInfo.iconSrc}
        className={styles.storeBtnLogo}
        style={{ width: IOSInfo.iconWidth, height: IOSInfo.iconHeight }}
        alt={IOSInfo.iconAlt}
        priority
      />
    </Button>
  );
}
