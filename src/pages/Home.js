import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.container}>
        <div className={styles.welcome}>
          <div className={styles.welcomeText}>
            <h1 className={styles.greenText}>Apasionados</h1>
            <h2>por los datos y la tecnologia</h2>
          </div>
          <span className={styles.textDescription}>
            Encargados de desarrollar, implementar, crear y ejecutar soluciones tecnológicas para mejorar el manejo y la eficiencia de las
            actividades en los distintos sectores de las organizaciones.
          </span>
          <Link to={'/tramos'} className={styles.button}>
            Empezar
          </Link>
        </div>
        <div className={styles.lottieContainer}>
          <dotlottie-player
            src="https://lottie.host/d06c2bd1-6c21-4a41-b0a9-7ee05bfd7f7d/3Mf6dPsNgd.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </main>
      <Footer />
    </div>
  );
}
