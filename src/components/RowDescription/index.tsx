import clsx from 'clsx';
import CommonImage from '@/components/CommonImage';
import styles from './styles.module.scss';
import { DescriptionComponent } from '@/types/components/description';

export interface RowDescriptionProps {
  iconSrc?: string;
  iconWidth?: number;
  iconHeight?: number;
  gap?: number;
  content: string;
  contentSize?: number;
  contentColor?: string;
  className?: string;
  subContentList?: Array<DescriptionComponent>;
  multiLayer?: boolean;
  isLast: boolean;
}

export default function RowDescription(props: RowDescriptionProps) {
  const {
    iconSrc = '',
    iconWidth = 24,
    iconHeight = 24,
    gap = 16,
    content = '',
    contentSize,
    contentColor,
    className,
    subContentList,
    multiLayer = false,
    isLast = false,
  } = props;

  return (
    <div
      className={clsx([styles.rowDescription, className])}
      style={{ marginBottom: isLast ? '0' : multiLayer ? '40px' : '16px' }}>
      {iconSrc && (
        <CommonImage
          src={iconSrc}
          style={{ minWidth: iconWidth, minHeight: iconHeight, marginRight: gap }}
          alt="descriptionIcon"
          width={iconWidth}
          height={iconHeight}
        />
      )}
      {Array.isArray(subContentList) && subContentList.length > 0 ? (
        <SecondaryList content={content} subContentList={subContentList} />
      ) : (
        <div className={multiLayer ? styles.title : ''} style={{ fontSize: contentSize, color: contentColor }}>
          {content}
        </div>
      )}
    </div>
  );
}

function SecondaryList({ content, subContentList }: { content: string; subContentList: Array<DescriptionComponent> }) {
  return (
    <div className={styles.secondaryList}>
      <div className={styles.title}>{content}</div>
      {subContentList.map((item, index) => {
        return <div className={styles.desc} key={index}>{`${item.text}`}</div>;
      })}
    </div>
  );
}
