import { FooterCommonStyles } from '../global/footer';
import { HeaderCommonStyles } from '../global/header';
import { Module } from '../modules';

export type DappPage = {
  key: string; // match router path
  header?: {
    isExist?: boolean; // default:true
    commonStyles?: HeaderCommonStyles;
  };
  footer?: {
    isExist?: boolean; // default:true
    commonStyles?: FooterCommonStyles;
  };
  moduleList: Array<Module>;
};
