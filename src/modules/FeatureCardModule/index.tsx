import clsx from 'clsx';
import { motion } from 'framer-motion';
import FeatureCard from '@/components/FeatureCard';
import { INITIAL, variantDownToUp, VIEWPORT, WHILE_IN_VIEW } from '@/constants/motion';
import { IFeatureCardModule } from '@/types/modules/featureCardModule';
import useGetVertical from '@/hooks/useGetVertical';
import styles from './styles.module.scss';

interface FeatureCardModuleProps {
  module: IFeatureCardModule;
}

export default function FeatureCardModule({
  module: { title, subTitle, featureList, commonStyles },
}: FeatureCardModuleProps) {
  const { getVertical } = useGetVertical();
  const { defaultBackgroundColor } = commonStyles || {};
  return (
    <motion.div initial={INITIAL} whileInView={WHILE_IN_VIEW} viewport={VIEWPORT}>
      <section
        className={clsx(['section-container', 'flex-column-center', styles.featureCardModuleWrapper])}
        style={{
          paddingTop: getVertical(commonStyles || {}).top + 'px',
          paddingBottom: getVertical(commonStyles || {}).bottom + 'px',
          backgroundColor: defaultBackgroundColor,
        }}>
        <div className={clsx(['page-container', 'flex-column-center'], styles.featureCardModuleContentWrapper)}>
          {(!!title?.text || !!subTitle?.text) && (
            <motion.div variants={variantDownToUp(0)}>
              <div className={clsx('flex-column-center', styles.sectionTitleWrapper)}>
                {!!title?.text && <div className={styles.sectionTitle}>{title.text}</div>}
                {!!subTitle?.text && <div className={styles.sectionSubTitle}>{subTitle.text}</div>}
              </div>
            </motion.div>
          )}
          {!!featureList?.length && (
            <motion.div variants={variantDownToUp(1)}>
              <div className={styles.sectionCardWrapper}>
                {featureList?.map((item, idx) => {
                  return (
                    <FeatureCard
                      key={'FeatureCard_' + idx}
                      className={styles.card}
                      style={{
                        backgroundColor: commonStyles?.defaultCardBackgroundColor,
                      }}
                      item={item}
                    />
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
