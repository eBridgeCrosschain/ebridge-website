import { DappPage } from '.';
import { Footer } from '../global/footer';
import { Header } from '../global/header';

export interface IHomePageProps {
  headerData: Header;
  footerData: Footer;
  pageData?: DappPage;
}
