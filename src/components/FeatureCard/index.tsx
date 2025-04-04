import { CSSProperties, useCallback, useState } from 'react';
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
  isShowHoverEffect?: boolean;
  iconWidth?: string;
  iconHeight?: string;
}

const DEFAULT_ICON_SIZE = {
  WIDTH: 52,
  HEIGHT: 52,
};

export default function FeatureCard(props: FeatureCardProps) {
  const {
    className,
    style,
    isShowHoverEffect = true,
    iconWidth = DEFAULT_ICON_SIZE.WIDTH,
    iconHeight = DEFAULT_ICON_SIZE.HEIGHT,
    item: { title, content, iconNormal, iconHover },
  } = props;
  const { isMobile } = useResponsive();
  const [isHover, setIsHover] = useState(false);

  const onMouseOver = useCallback(() => {
    if (!isMobile) {
      setIsHover(true);
    }
  }, [isMobile]);
  const onMouseOut = useCallback(() => {
    setIsHover(false);
  }, []);

  return (
    <div
      className={clsx(
        styles.featureCardWrapper,
        isShowHoverEffect && isHover && styles.featureCardWrapperHover,
        className,
      )}
      style={style}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}>
      <div
        className={styles.iconWrap}
        style={{
          width: iconNormal.width ?? Number(iconWidth),
          height: iconNormal.height ?? Number(iconHeight),
        }}>
        {/* Two pictures are superimposed to speed up the speed of displaying pictures when hovering */}
        <CommonImage
          quality={100}
          className={styles.iconHover}
          src={iconHover.filename_disk ? s3Url + iconHover.filename_disk : ''}
          width={iconHover.width ?? Number(iconWidth)}
          height={iconHover.height ?? Number(iconHeight)}
          alt="featureIcon"
        />
        <CommonImage
          quality={100}
          className={styles.iconNormal}
          src={iconNormal.filename_disk ? s3Url + iconNormal.filename_disk : ''}
          width={iconNormal.width ?? Number(iconWidth)}
          height={iconNormal.height ?? Number(iconHeight)}
          style={{
            display: isShowHoverEffect && isHover ? 'none' : 'block',
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
