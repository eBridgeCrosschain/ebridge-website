import { IPartnersModule } from '@/types/modules/partnersModule';
import clsx from 'clsx';
import styles from './style.module.scss';
import CommonImage from '@/components/CommonImage';
import { s3Url } from '@/constants/network';
import useGetVertical from '@/hooks/useGetVertical';
import { useCallback, useState } from 'react';
import useResponsive from '@/hooks/useResponsive';

interface IPartnersModuleProps {
  module: IPartnersModule;
}

export default function PartnersModule({ module }: IPartnersModuleProps) {
  const { title, list, commonStyles } = module;
  const { getVertical } = useGetVertical();

  const { isMobile } = useResponsive();
  const [isHover, setIsHover] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<null | number>(null);

  const onMouseOver = useCallback(
    (index: number) => {
      if (!isMobile) {
        setIsHover(true);
        setHoverIndex(index);
      }
    },
    [isMobile],
  );
  const onMouseOut = useCallback(() => {
    setIsHover(false);
    setHoverIndex(null);
  }, []);

  return (
    <section
      className={clsx(['section-container', styles.partnersModuleWrap])}
      style={{
        paddingTop: getVertical(commonStyles).top + 'px',
        paddingBottom: getVertical(commonStyles).bottom + 'px',
      }}>
      <section className={styles.content}>
        <h1 className={styles.sectionTitle}>{title?.text}</h1>
        <div className={styles.partnersList}>
          {list?.map((item, index) => {
            return (
              <div
                key={index}
                className={styles.partnerItem}
                style={{ backgroundColor: commonStyles.defaultCardBackgroundColor, borderColor: item.borderColor }}
                onClick={() => {
                  item.url && window.open(item.url);
                }}
                onMouseOver={() => onMouseOver(index)}
                onMouseOut={onMouseOut}>
                <CommonImage
                  quality={100}
                  width={200}
                  height={50}
                  src={item.hoverLogoImage ? s3Url + item.hoverLogoImage : ''}
                  className={styles.hoverCardImg}
                  alt="hoverPartnerImage"
                  priority
                  style={{
                    display: isHover && hoverIndex === index ? 'block' : 'none',
                  }}
                />
                <CommonImage
                  quality={100}
                  width={200}
                  height={50}
                  src={item.logoImage?.filename_disk ? s3Url + item.logoImage?.filename_disk : ''}
                  className={styles.cardImg}
                  alt="partnerImage"
                  priority
                  style={{
                    display: isHover && hoverIndex === index ? 'none' : 'block',
                  }}
                />
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
