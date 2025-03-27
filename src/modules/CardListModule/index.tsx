import { ICardListModule } from '@/types/modules/cardListModule';
import styles from './style.module.scss';
import CommonImage from '@/components/CommonImage';
import { s3Url } from '@/constants/network';
import clsx from 'clsx';
import useGetVertical from '@/hooks/useGetVertical';

export interface ICardListModuleProps {
  moduleData: ICardListModule;
}

export default function CardListModule({ moduleData }: ICardListModuleProps) {
  const { title, subTitle, dataArray, commonStyles } = moduleData;
  const { getVertical } = useGetVertical();

  const cardList = (
    <section className={styles.cardList}>
      {dataArray?.map((item, index) => {
        return (
          <section
            key={index}
            className={styles.cardItem}
            style={{
              backgroundColor: commonStyles.defaultCardBackgroundColor,
            }}>
            <section className={styles.cardDesc}>
              <h2 className={styles.cardItemTitle}>{item.text}</h2>
              <h3 className={styles.cardItemSubTitle}>{item.subText}</h3>
            </section>
            <section
              key={index}
              style={{ backgroundColor: commonStyles.defaultImgContainerBackgroundColor }}
              className={styles.cardImgContainer}>
              <CommonImage
                quality={100}
                width={520}
                height={242}
                src={item.icon?.filename_disk ? s3Url + item?.icon.filename_disk : ''}
                className={styles.cardImg}
                alt="cardImage"
                layout="intrinsic"
                priority
              />
            </section>
          </section>
        );
      })}
    </section>
  );
  return (
    <section
      className={clsx(['section-container', styles.cardListModuleWrap])}
      style={{
        backgroundColor: commonStyles.defaultBackgroundColor,
        paddingTop: getVertical(commonStyles).top + 'px',
        paddingBottom: getVertical(commonStyles).bottom + 'px',
      }}>
      <section className={styles.cardListModule}>
        <h1 className={styles.title}>{title?.text}</h1>
        <h3 className={styles.subTitle}>{subTitle?.text}</h3>
        {cardList}
      </section>
    </section>
  );
}
