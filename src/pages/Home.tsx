import React from "react";
import Navigation from "../components/Navigation";
import BackgroundVideo from "../components/BackgroundVideo";
import styles from "../assets/css/HomePage.module.css";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <Navigation />
      <BackgroundVideo>
        <div className={styles.content}>
          <h1 className={styles.textNameCompany}>
            CÔNG TY CỔ PHẦN DỊCH VỤ DU LỊCH PHÚ THỌ
          </h1>
          <h2 className={styles.textTitle}>PHUTHOTOURIST</h2>
          <p className={styles.textDate}>Ngày thành lập 01/01/2019</p>
          <h2>Home</h2>
        </div>
      </BackgroundVideo>
      <Footer />
    </div>
  );
};

export default Home;
