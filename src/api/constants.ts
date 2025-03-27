import { NEXT_PUBLIC_NETWORK_ENV, NEXT_PUBLIC_WEBSITE_NAME } from '../constants/misc';
import { BackEndNetWorkMap } from '../constants/network';

export const BASE_CMS_URL =
  NEXT_PUBLIC_WEBSITE_NAME && NEXT_PUBLIC_NETWORK_ENV
    ? BackEndNetWorkMap[NEXT_PUBLIC_WEBSITE_NAME][NEXT_PUBLIC_NETWORK_ENV]?.cmsUrl
    : '';

export const BASE_DOWNLOAD_URL = BASE_CMS_URL + 'assets/';

export const API = {
  GET: {
    GLOBAL_CONFIG: 'items/globalConfig?fields[]=*&fields[]=metaFavicon.*',
    HEADER:
      'items/header?fields[]=*&fields[]=defaultLogo.*&fields[]=menuList.topMenu_id.*&fields[]=menuList.topMenu_id.type.value&fields[]=menuList.topMenu_id.children.*&fields[]=actionButton.*&fields[]=menuList.topMenu_id.children.type.value&deep[menuList][_filter][topMenu_id][status]=published&deep[menuList][topMenu_id][children][_filter][status]=published&deep[menuList][_sort]=topMenu_id.index&deep[menuList][topMenu_id][children][_sort]=index',
    FOOTER:
      'items/footer?fields[]=*&fields[]=defaultLogo.*&fields[]=menuList.bottomMenu_id.*&fields[]=menuList.bottomMenu_id.children.*&deep[menuList][_filter][bottomMenu_id][status]=published&deep[menuList][bottomMenu_id][children][_filter][status]=published&deep[menuList][_sort]=bottomMenu_id.index&deep[menuList][bottomMenu_id][children][_sort]=index&fields[]=socialMediaList.socialMedia_id.*.*&deep[socialMediaList][_sort]=socialMedia_id.index&deep[socialMediaList][_filter][socialMedia_id][status]=published',
    PAGE: 'items/page?filter[status]=published&fields[]=*&fields[]=moduleList.item.*&fields[]=moduleList.item.image.*&fields[]=moduleList.item.backgroundImage.*&fields[]=moduleList.item.buttonList.item.*&fields[]=moduleList.item.buttonList.button_id.*&fields[]=moduleList.item.descriptionList.description_id.*&fields[]=moduleList.item.descriptionList.description_id.icon.*&fields[]=moduleList.item.descriptionList.description_id.children.*&fields[]=moduleList.item.descriptionList.description_id.children.icon.*&fields[]=moduleList.item.dataArray.description_id.*&fields[]=moduleList.item.dataArray.description_id.icon.*&fields[]=moduleList.item.list.partner_id.*&fields[]=moduleList.item.list.partner_id.logoImage.*&fields[]=moduleList.item.featureList.*&fields[]=moduleList.item.featureList.iconNormal.*&fields[]=moduleList.item.featureList.iconHover.*&fields[]=moduleList.item.carouselList.*&fields[]=moduleList.item.carouselList.logo.*',
  },
};
