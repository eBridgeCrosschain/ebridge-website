import { Button } from 'antd';
import CommonImage from '@/components/CommonImage';
import { downloadData } from '@/constants/homeData';
import { useCallback } from 'react';
import { openWithBlank } from '@/utils/router';
import styles from './styles.module.scss';

export default function AndroidDownloadButton({ storeUrl }: { storeUrl: string }) {
  const androidInfo = downloadData.android;

  const goGooglePlay = useCallback(() => {
    return openWithBlank(storeUrl);
  }, [storeUrl]);

  return (
    <Button type="primary" className={styles.storeBtn} onClick={goGooglePlay}>
      <CommonImage
        src={androidInfo.iconSrc}
        className={styles.storeBtnLogo}
        style={{ width: androidInfo.iconWidth, height: androidInfo.iconHeight }}
        alt={androidInfo.iconAlt}
        priority
      />
    </Button>
  );
}
