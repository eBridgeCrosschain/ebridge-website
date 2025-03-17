import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import styles from './styles.module.scss';

export default function CommonImage({ className, style, alt = 'img', ...props }: ImageProps) {
  return (
    <div className={clsx(styles['common-img'], className)} style={style}>
      <Image {...props} alt={alt} />
    </div>
  );
}
