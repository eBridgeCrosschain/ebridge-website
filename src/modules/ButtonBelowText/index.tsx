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
        backgroundImage: commonStyles.backgroundImage?.filename_disk
          ? `url(${s3Url + commonStyles.backgroundImage?.filename_disk})`
          : 'none',
        paddingTop: getVertical(commonStyles).top + 'px',
        paddingBottom: getVertical(commonStyles).bottom + 'px',
      }}>
      <section className={styles.container}>
        <h1 className={styles.title} style={{ color: commonStyles.titleColor }}>
          {title.text}
        </h1>
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
                  contentColor={commonStyles.subTitleColor}
                  style={{
                    maxWidth: commonStyles.subTitleMaxWidth ? commonStyles.subTitleMaxWidth + 'px' : 'auto',
                    textAlign: (commonStyles?.subTitleTextAlign as any) || 'start',
                  }}
                />
              );
            })}
          </section>
        )}
        <section className={styles.buttonGroup}>
          {buttonList.map((btn, index) => {
            if (btn.key === ButtonKey.Common) {
              const _fontSizeData = btn.commonStyles.fontSize;
              const _fontSize = _fontSizeData ? _fontSizeData + 'px' : '16px';
              const _borderRadiusData = btn.commonStyles.borderRadius;
              const _borderRadius = _borderRadiusData ? _borderRadiusData + 'px' : '6px';
              const _paddingHorizontalData = btn.commonStyles.paddingHorizontal;
              const _paddingHorizontal = _paddingHorizontalData ? _paddingHorizontalData + 'px' : '4px';
              const _paddingVerticalData = btn.commonStyles.paddingVertical;
              const _paddingVertical = _paddingVerticalData ? _paddingVerticalData + 'px' : '15px';
              return (
                <CommonButton
                  key={'ButtonBelowTextModule' + '_' + index + '_' + btn.key}
                  text={btn?.text || ''}
                  fontColor={btn.commonStyles.default?.fontColor}
                  backgroundColor={btn.commonStyles.default?.backgroundColor}
                  borderColor={btn.commonStyles.default?.borderColor}
                  width={btn.commonStyles.width ? btn.commonStyles.width + 'px' : 'auto'}
                  height={btn.commonStyles.height ? btn.commonStyles.height + 'px' : 'auto'}
                  style={{
                    fontSize: _fontSize,
                    borderRadius: _borderRadius,
                    paddingTop: _paddingVertical,
                    paddingBottom: _paddingVertical,
                    paddingLeft: _paddingHorizontal,
                    paddingRight: _paddingHorizontal,
                  }}
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
