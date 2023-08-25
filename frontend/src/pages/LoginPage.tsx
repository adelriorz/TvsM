import { FC } from 'react';
import Header from '../components/common/Header.tsx';
import Login from '../components/login/Login.tsx';
import Footer from '../components/common/Footer.tsx';

const LoginPage: FC = () => {
  return (
    <>
      <Header />
      <Login/>
      <Footer />
    </>
  );
};

export default LoginPage;