// import dynamic from 'next/dynamic';
// export default dynamic(() => import('@/pageComponents/Home'));
import { getFooter, getHeader, getPage } from '@/api/utils';
import HomeMain from '@/pageComponents/Home/HomeMain';

export default async function Home() {
  const headerData = await getHeader();
  const footerData = await getFooter();
  const pageData = await getPage('home'); // get key from api

  return <HomeMain headerData={headerData} footerData={footerData} pageData={pageData} />;
}
