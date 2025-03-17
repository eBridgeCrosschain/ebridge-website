import { IButtonBelowTextModule } from '@/types/modules/buttonBelowTextModule';
import styles from './styles.module.scss';
import clsx from 'clsx';
import CommonButton from '@/components/CommonButton';
import { openWithBlank } from '@/utils/router';
import { ButtonKey } from '@/types/components/button';
import RowDescription from '@/components/RowDescription';
import { s3Url } from '@/constants/network';
import useGetVertical from '@/hooks/useGetVertical';

export interface IButtonBelowTextProps {
  module: IButtonBelowTextModule;
}

export function ButtonBelowTextModule({ module }: IButtonBelowTextProps) {
  const { title, descriptionList, buttonList, commonStyles } = module;
  const { getVertical } = useGetVertical();
  return (
    <section
      className={clsx(['section-container', styles.sectionWrap])}
      style={{
        backgroundColor: commonStyles.defaultBackgroundColor,
        paddingTop: getVertical(commonStyles).top + 'px',
        paddingBottom: getVertical(commonStyles).bottom + 'px',
      }}>
      <section className={styles.container}>
        <h1 className={styles.title}>{title.text}</h1>
        {Array.isArray(descriptionList) && descriptionList.length > 0 && (
          <section className={styles.descriptionList}>
            {descriptionList.map((item, index) => {
              return (
                <RowDescription
                  isLast={index === descriptionList.length - 1}
                  key={'Description' + '_' + index}
                  className={styles.descriptionItem}
                  iconSrc={item.icon?.filename_disk ? s3Url + item.icon?.filename_disk : ''}
                  content={item.text || ''}
                />
              );
            })}
          </section>
        )}
        <section className={styles.buttonGroup}>
          {buttonList.map((btn, index) => {
            if (btn.key === ButtonKey.Common) {
              return (
                <CommonButton
                  key={'ButtonBelowTextModule' + '_' + index + '_' + btn.key}
                  text={btn?.text || ''}
                  fontColor={btn.commonStyles.default?.fontColor}
                  backgroundColor={btn.commonStyles.default?.backgroundColor}
                  borderColor={btn.commonStyles.default?.borderColor}
                  width={btn.commonStyles.width ? btn.commonStyles.width + 'px' : 'auto'}
                  onClick={() => openWithBlank(btn.link?.url, btn.link?.target)}
                />
              );
            }
            return null;
          })}
        </section>
      </section>
    </section>
  );
}
