import { FC } from 'react';
import Header from '../components/common/Header.tsx';
import Register from '../components/register/Register.tsx';
import Footer from '../components/common/Footer.tsx';

const RegisterPage: FC = () => {
  return (
    <>
      <Header />
      <Register/>
      <Footer />
    </>
  );
};

export default RegisterPage;