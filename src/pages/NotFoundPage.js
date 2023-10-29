import React from 'react';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import styles from '../styles/NotFound.module.css';
import Breadcrumb from '../components/Common/Breadcrumb';

export default function NotFoundPage() {
  return (
    <div>
      <Header />
      <Breadcrumb />
      <div className={styles.lottieContainer}>
        <dotlottie-player
          src="https://lottie.host/1b73f3d2-1c90-4aab-9f7c-fdb64987cbda/uvsN0EDpgk.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div>
      <Footer />
    </div>
  );
}
