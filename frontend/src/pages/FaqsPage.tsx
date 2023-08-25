import { FC } from 'react';
import Header from '../components/common/Header.tsx';
import Faqs from '../components/faqs/faqs.tsx';
import Footer from '../components/common/Footer.tsx';

const FaqsPage: FC = () => {
  return (
    <>
      <Header />
      <Faqs/>
      <Footer />
    </>
  );
};

export default FaqsPage;