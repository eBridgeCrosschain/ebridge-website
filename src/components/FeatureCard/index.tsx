import { CSSProperties, useState } from 'react';
import clsx from 'clsx';
import CommonImage from '../CommonImage';
import { IFeatureCardItem } from '@/types/modules/featureCardModule';
import { s3Url } from '@/constants/network';
import styles from './styles.module.scss';
import useResponsive from '@/hooks/useResponsive';

interface FeatureCardProps {
  className?: string;
  style?: CSSProperties;
  item: IFeatureCardItem;
}

const DEFAULT_ICON_SIZE = {
  WIDTH: 52,
  HEIGHT: 52,
};

export default function FeatureCard(props: FeatureCardProps) {
  const {
    className,
    style,
    item: { title, content, iconNormal, iconHover },
  } = props;
  const { isMobile } = useResponsive();
  const [isHover, setIsHover] = useState(false);

  function onMouseOver() {
    if (!isMobile) {
      setIsHover(true);
    }
  }
  function onMouseOut() {
    setIsHover(false);
  }
  return (
    <div
      className={clsx(styles.featureCardWrapper, isHover && styles.featureCardWrapperHover, className)}
      style={style}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}>
      <div className={styles.iconWrap}>
        {/* Two pictures are superimposed to speed up the speed of displaying pictures when hovering */}
        <CommonImage
          quality={100}
          className={styles.iconHover}
          src={iconHover.filename_disk ? s3Url + iconHover.filename_disk : ''}
          width={iconHover.width ?? DEFAULT_ICON_SIZE.WIDTH}
          height={iconHover.height ?? DEFAULT_ICON_SIZE.HEIGHT}
          alt="featureIcon"
        />
        <CommonImage
          quality={100}
          className={styles.iconNormal}
          src={iconNormal.filename_disk ? s3Url + iconNormal.filename_disk : ''}
          width={iconNormal.width ?? DEFAULT_ICON_SIZE.WIDTH}
          height={iconNormal.height ?? DEFAULT_ICON_SIZE.HEIGHT}
          style={{
            display: isHover ? 'none' : 'block',
          }}
          alt="featureIcon"
        />
      </div>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardContent}>
        {content?.map((rowText, index) => {
          return (
            <div className={styles.cardContentRow} key={'FeatureCardContent_' + index}>
              {rowText}
            </div>
          );
        })}
      </div>
    </div>
  );
}
