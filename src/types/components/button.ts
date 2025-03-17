export type ButtonComponent = CommonButtonComponent | DownloadAppButtonComponent;

export type ButtonBase = {
  key: ButtonKey;
  index: number;
};

export type CommonButtonComponent = ButtonBase & {
  key: ButtonKey.Common;
  type: CommonButtonType;
  link: ButtonLink;
  text?: string;
  commonStyles: {
    width?: string;
    // The color takes effect when the type is "Default"
    default: {
      backgroundColor?: string;
      fontColor?: string;
      borderColor?: string;
    };
  };
};

export type DownloadAppButtonComponent = ButtonBase & {
  key: ButtonKey.DownloadApp;
  type: DownloadAppButtonType;
  androidUrl?: string;
  iOSUrl?: string;
  extensionUrl?: string;
  otherUrl?: string;
};

export enum ButtonKey {
  Common = 'Common',
  DownloadApp = 'DownloadApp',
}

export enum CommonButtonType {
  Text = 'Text', // default
}

export enum DownloadAppButtonType {
  Auto = 'Auto',
  IOS = 'IOS',
  Android = 'Android',
  Extension = 'Extension',
  Other = 'Other',
}

export type ButtonLink = {
  url: string;
  target: ButtonLinkTarget;
};

export enum ButtonLinkTarget {
  Self = 'Self',
  Blank = 'Blank', // default
}
