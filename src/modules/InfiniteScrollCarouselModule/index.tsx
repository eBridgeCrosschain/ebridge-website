import clsx from 'clsx';
import InfiniteScrollCarousel from '@/components/InfiniteScrollCarousel';
import { IInfiniteScrollCarouselModule } from '@/types/modules/infiniteScrollCarouselModule';
import useGetVertical from '@/hooks/useGetVertical';
import styles from './styles.module.scss';

interface IInfiniteScrollCarouselModuleProps {
  module: IInfiniteScrollCarouselModule;
}

export default function InfiniteScrollCarouselModule({
  module: { commonStyles, title, carouselList },
}: IInfiniteScrollCarouselModuleProps) {
  const { getVertical } = useGetVertical();
  const { defaultBackgroundColor } = commonStyles;
  return (
    <section
      className={clsx(styles.infiniteScrollCarouselModuleWrapper)}
      style={{
        paddingTop: getVertical(commonStyles).top + 'px',
        paddingBottom: getVertical(commonStyles).bottom + 'px',
        backgroundColor: defaultBackgroundColor,
      }}>
      {!!title?.text && <div className={clsx('section-container', styles.title)}>{title.text}</div>}
      <InfiniteScrollCarousel carouselList={carouselList} />
    </section>
  );
}
