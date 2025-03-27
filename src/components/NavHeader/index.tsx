import clsx from 'clsx';
import { Popover } from 'antd';
import CommonImage from '@/components/CommonImage';
import { NavigationType, ROUTER } from '@/constants/enum';
import { CSSProperties, useEffect, useMemo, useState } from 'react';
import styles from './styles.module.scss';
import NavHeaderMobileMenu from '@/components/NavHeaderMobileMenu';
import { jumpOrScrollToTop, openWithBlank, switchPage } from '@/utils/router';
import MenuArrowSVG from '@/components/SVGComponents/MenuArrowSVG';
import NavSelectedSVG from '../SVGComponents/NavSelectedSVG';
import { Header, SecondMenu, TopMenu } from '@/types/global/header';
import { s3Url } from '@/constants/network';
import MenuGraySVG from '../SVGComponents/MenuGraySVG';

export interface INavHeaderProps {
  className?: string;
  style?: CSSProperties;
  path?: ROUTER;
  data: Header;
}

export default function NavHeader({ className, style, path = ROUTER.DEFAULT, data }: INavHeaderProps) {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const onOpenMenu = () => {
    setIsOpenMenu(true);
  };
  const onCloseMenu = () => {
    setIsOpenMenu(false);
  };

  const [menuData, setMenuData] = useState<TopMenu[]>(data.menuList || []);
  const showSecondMenus = (parentIndex: number, isOpen: boolean) => {
    if (!Array.isArray(data.menuList)) return;
    const dataTrans = data.menuList.map((item, index) => {
      return {
        ...item,
        isShowSecondMenus: index === parentIndex ? isOpen : undefined,
      };
    });
    if (Array.isArray(dataTrans) && dataTrans?.length > 0) {
      setMenuData(dataTrans);
    }
  };

  const secondMenuList = (list: SecondMenu[]) => {
    return (
      <div className={styles.secondMenuList}>
        {list?.map((item, index) => {
          return (
            <div
              key={`HeaderSecondMenu-${item.title}-${index}`}
              onClick={() => switchPage(item.type, item.path)}
              className={styles.secondMenuItem}>
              {item.title}
            </div>
          );
        })}
      </div>
    );
  };

  useEffect(() => {
    if (!data?.commonStyles) {
      return;
    }
    if (typeof document !== 'undefined') {
      const { firstMenuDefaultFontColor, firstMenuFontHoverColor } = data?.commonStyles || {};
      if (firstMenuDefaultFontColor) {
        document?.body.style.setProperty('--firstMenuDefaultFontColor', firstMenuDefaultFontColor);
      }
      if (firstMenuFontHoverColor) {
        document?.body.style.setProperty('--firstMenuFontHoverColor', firstMenuFontHoverColor);
      }
    }
  }, [data]);

  const logoWidth = useMemo(() => {
    if (data.logo?.width && data.logo?.height) {
      return (Number(data.logo.width) / Number(data.logo.height)) * 32;
    }
    return 200;
  }, [data.logo?.height, data.logo?.width]);

  const _height = useMemo(() => {
    const _heightData = data.actionButton?.commonStyles.height;
    return _heightData ? _heightData + 'px' : 'auto';
  }, [data.actionButton?.commonStyles.height]);

  const _fontSize = useMemo(() => {
    const _fontSizeData = data.actionButton?.commonStyles.fontSize;
    return _fontSizeData ? _fontSizeData + 'px' : '16px';
  }, [data.actionButton?.commonStyles.fontSize]);

  const _borderRadius = useMemo(() => {
    const _borderRadiusData = data.actionButton?.commonStyles.borderRadius;
    return _borderRadiusData ? _borderRadiusData + 'px' : '6px';
  }, [data.actionButton?.commonStyles.borderRadius]);

  const _paddingHorizontal = useMemo(() => {
    const _paddingHorizontalData = data.actionButton?.commonStyles.paddingHorizontal;
    return _paddingHorizontalData ? _paddingHorizontalData + 'px' : '4px';
  }, [data.actionButton?.commonStyles.paddingHorizontal]);

  const _paddingVertical = useMemo(() => {
    const _paddingVerticalData = data.actionButton?.commonStyles.paddingVertical;
    return _paddingVerticalData ? _paddingVerticalData + 'px' : '15px';
  }, [data.actionButton?.commonStyles.paddingVertical]);

  return (
    <header
      id="website-header"
      className={clsx([
        'flex-row-content-center',
        // 'section-container',
        styles.navHeaderWrapper,
        styles.navSticky,
        styles.navBlackHeader,
        className,
      ])}
      style={{ backgroundColor: data.commonStyles?.defaultBackgroundColor, ...style }}>
      <div className={clsx([styles.navHeader])}>
        <CommonImage
          quality={100}
          src={data.logo?.filename_disk ? s3Url + data.logo.filename_disk : ''}
          style={{ width: logoWidth, height: 32, cursor: 'pointer' }}
          fill
          alt="websiteLogo"
          onClick={() => jumpOrScrollToTop(ROUTER.DEFAULT)}
          priority
        />

        <NavHeaderMobileMenu isOpen={isOpenMenu} data={data} callback={onCloseMenu} />

        <div>
          <div className={styles.menuIcon} style={{ cursor: 'pointer' }} onClick={onOpenMenu}>
            <MenuGraySVG />
          </div>
          <div className={styles.menus}>
            {Array.isArray(menuData) &&
              menuData.map((item, idx) => {
                return (
                  <div key={`HeaderFirstMenu-${item.title}-${idx}`}>
                    {item.type === NavigationType.NOT_JUMP && item?.children?.length > 0 ? (
                      <Popover
                        content={secondMenuList(item.children)}
                        trigger={['hover', 'click']}
                        placement="bottom"
                        overlayClassName={styles.secondMenus}
                        onOpenChange={(open) => showSecondMenus(idx, open)}>
                        <div
                          className={clsx([
                            'header-nav-btn',
                            item.path === path ? 'header-nav-btn-select' : '',
                            'flex-center',
                            styles.firstMenuWithChild,
                            item?.isShowSecondMenus ? styles.rotateSvg : null,
                          ])}>
                          {item.title}
                          <MenuArrowSVG />
                        </div>
                      </Popover>
                    ) : (
                      <div className={styles.linkBtnWrap} onClick={() => switchPage(item.type, item.path)}>
                        <div className={clsx(['header-nav-btn', item.path === path ? 'header-nav-btn-select' : ''])}>
                          {item.title}
                        </div>
                        {item.path === path && (
                          <div className={styles.btnUnderline}>
                            <NavSelectedSVG />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            {data.actionButton?.text && (
              <div
                className={styles.linkBtnWrap}
                onClick={() =>
                  openWithBlank(data.actionButton?.link.url || '', data.actionButton?.link.target || '_blank')
                }>
                <div
                  className={styles.actionButton}
                  style={{
                    backgroundColor: data.actionButton.commonStyles.default.backgroundColor,
                    borderColor: data.actionButton.commonStyles.default.borderColor,
                    color: data.actionButton.commonStyles.default.fontColor,
                    width: data.actionButton.commonStyles.width ? data.actionButton.commonStyles.width + 'px' : 'auto',
                    height: _height,
                    fontSize: _fontSize,
                    borderRadius: _borderRadius,
                    paddingTop: _paddingVertical,
                    paddingBottom: _paddingVertical,
                    paddingLeft: _paddingHorizontal,
                    paddingRight: _paddingHorizontal,
                  }}>
                  {data.actionButton.text}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
