import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import clsx from 'clsx';
import CommonImage from '@/components/CommonImage';
import { IInfiniteScrollCarouselItem } from '@/types/modules/infiniteScrollCarouselModule';
import { s3Url } from '@/constants/network';
import styles from './styles.module.scss';

interface IInfiniteScrollCarouselProps {
  carouselList: IInfiniteScrollCarouselItem[];
}

const SCROLL_CONTENT_GAP = 60;
const DEFAULT_LOGO_SIZE = {
  WIDTH: 40,
  HEIGHT: 40,
};

export default function InfiniteScrollCarousel({ carouselList }: IInfiniteScrollCarouselProps) {
  const controls = useAnimation();
  const contentRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [isScrollNeeded, setIsScrollNeeded] = useState(false);

  const adjustAnimation = useCallback(() => {
    if (!contentRef.current || !wrapperRef.current) return;

    const wrapperWidth = wrapperRef.current.offsetWidth;
    const contentWidth = contentRef.current.scrollWidth;

    setIsScrollNeeded((preIsScrollNeeded) => {
      const newIsScrollNeeded = contentWidth > wrapperWidth;
      if (!preIsScrollNeeded && newIsScrollNeeded) {
        const width = contentWidth + SCROLL_CONTENT_GAP;
        controls.start({
          x: [0, -width],
          transition: {
            repeat: Infinity,
            duration: width / 60,
            ease: 'linear',
          },
        });
      } else if (preIsScrollNeeded && !newIsScrollNeeded) {
        controls.set({ x: 0 });
        controls.stop();
      }
      return newIsScrollNeeded;
    });
  }, [controls]);

  useEffect(() => {
    adjustAnimation();
    if (typeof window === 'object') {
      window.addEventListener('resize', adjustAnimation);
      return () => window.removeEventListener('resize', adjustAnimation);
    }
  }, [adjustAnimation]);

  const renderCarouselItems = useCallback(() => {
    return carouselList.map((item) => (
      <div className={clsx('flex-row-center', styles.itemWrapper)} key={item.index}>
        {!!item.logo.filename_disk && (
          <CommonImage
            src={s3Url + item.logo.filename_disk}
            className={styles.logo}
            width={item.logo.width ?? DEFAULT_LOGO_SIZE.WIDTH}
            height={item.logo.height ?? DEFAULT_LOGO_SIZE.HEIGHT}
            alt="logo"
            priority
          />
        )}
        <span className={styles.name}>{item.name}</span>
      </div>
    ));
  }, [carouselList]);

  return (
    <div ref={wrapperRef} className={styles.infiniteScrollCarouselWrapper}>
      <motion.div
        className={clsx('flex-row-center', styles.scrollContent, { ['flex-center']: !isScrollNeeded })}
        animate={controls}>
        <div ref={contentRef} className={clsx('flex-row-center', 'flex-none', styles.carouselItemsWrapper)}>
          {renderCarouselItems()}
        </div>
        <div
          className={clsx('flex-row-center', 'flex-none', styles.carouselItemsWrapper, {
            [styles.displayNone]: !isScrollNeeded,
          })}>
          {renderCarouselItems()}
        </div>
      </motion.div>
      <div className={clsx(styles.infiniteScrollCarouselMask, styles.infiniteScrollCarouselMaskBefore)} />
      <div className={clsx(styles.infiniteScrollCarouselMask, styles.infiniteScrollCarouselMaskAfter)} />
    </div>
  );
}
