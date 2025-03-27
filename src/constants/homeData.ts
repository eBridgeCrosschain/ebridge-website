import { appStoreDownload, chromeDownload, googleGetIt, otherBrowserDownload } from '@/assets/images';

export interface IFirstScreenData {
  title: string;
  desc: Array<string>;
}

export interface PriorityCardData {
  iconNormal: string;
  iconHover: string;
  title: string;
  content: string[];
}
export interface ContentsData {
  icon?: string;
  text: string;
  textColor?: string;
  iconWidth?: number;
  iconHeight?: number;
  iconMarginRight?: number; // icon and descriptive text gap
}

export interface DownloadGroupData {
  chrome: SingleDownloadData;
  notChrome: SingleDownloadData;
  android: SingleDownloadData;
  ios: SingleDownloadData;
}
export interface SingleDownloadData {
  iconSrc: string;
  iconAlt: string;
  iconWidth?: number;
  iconHeight?: number;
}

export interface DownloadQRCodeData {
  width: number;
  height: number;
  alt: string;
  iconSrc: string;
  iconAlt: string;
  iconWidth: number;
  iconHeight: number;
}

export const downloadData: DownloadGroupData = {
  chrome: {
    iconSrc: chromeDownload,
    iconAlt: 'chromeDownloadLogo',
    iconWidth: 156,
    iconHeight: 30,
  },
  notChrome: {
    iconSrc: otherBrowserDownload,
    iconAlt: 'otherBrowserDownloadLogo',
    iconWidth: 198,
    iconHeight: 30,
  },
  android: {
    iconSrc: googleGetIt,
    iconAlt: 'androidDownloadLogo',
    iconWidth: 141,
    iconHeight: 34,
  },
  ios: {
    iconSrc: appStoreDownload,
    iconAlt: 'androidDownloadLogo',
    iconWidth: 136,
    iconHeight: 32,
  },
};
